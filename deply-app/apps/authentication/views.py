# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

# Create your views here.
from genericpath import exists
from multiprocessing import context
from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import LoginForm, SignUpForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User, Group
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django import template
from django.core.mail import EmailMultiAlternatives
from django.contrib.auth.decorators import login_required
from .forms import UpdateUserForm, manage_add_user_form, manage_delete_user_form, manage_edit_user_form, admin_connect_as_user_form
from django.contrib import messages
from eventlog.events import EventGroup

e = EventGroup()

def login_view(request):
    form = LoginForm(request.POST or None)

    msg = None

    if request.method == "POST":

        if form.is_valid():
            nexturi = request.GET.get('next')
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None and user.last_login == None:
                login(request, user)
                e.info('User first log in', initiator=username)
                e.info('User first log in', initiator=username)
                return redirect("/onboarding/")
            elif user is not None:
                login(request, user)
                e.info('User login', initiator=username)
                e.info('User login', initiator=username)
                return redirect(nexturi)
            else:
                msg = '¡Credenciales incorrectas!'
        else:
            msg = '¿Qué ha pasado? ¡Vuelve a intentarlo!'

    return render(request, "accounts/login.html", {"form": form, "msg": msg})


def register_user(request):
    msg = None
    success = False

    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            email = form.cleaned_data.get("email")
            raw_password = form.cleaned_data.get("password1")
            raw_password2 = form.cleaned_data.get("password2")

            if raw_password != raw_password2:
                msg = '¡Las contraseñas no coinciden!'
                return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})
            
            if User.objects.filter(username=username).exists() or User.objects.filter(email=email).exists():
                msg = '¡El usuario o el email ya existe!'
                return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})

            if len(raw_password) < 8 or not any(char.isdigit() for char in raw_password) or not any(char.isupper() for char in raw_password):
                msg = '¡La contraseña debe tener al menos 8 caracteres, una mayúscula y un número!'
                return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})

            # Create user
            User.objects.create_user(username, email, raw_password)
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            e.info('User register', initiator=username)

            # Send email
            subject = "Deply - Bienvenido a Deply"
            c = {
                "email": email,
                "username": username,
            }
            plaintext = template.loader.get_template('accounts/welcome_email.txt')
            htmltemp = template.loader.get_template('accounts/welcome_email.html')
            text_content = plaintext.render(c)
            html_content = htmltemp.render(c)
            try:
                msg = EmailMultiAlternatives(subject, text_content, 'Deply <hola@deply.dev>', [user.email], bcc = ['hola@deply.dev'], headers = {'Reply-To': 'hola@deply.dev'})
                msg.attach_alternative(html_content, "text/html")
                msg.send()
            except BadHeaderError:
                print('Invalid header found.')

            return redirect("/onboarding/")

        else:
            msg = 'El formulario no es válido'
    else:
        form = SignUpForm()

    return render(request, "accounts/register.html", {"form": form, "msg": msg, "success": success})


def password_reset_request(request):
    if request.method == "POST":
        password_reset_form = PasswordResetForm(request.POST)
        if password_reset_form.is_valid():
            data = password_reset_form.cleaned_data['email']
            associated_users = User.objects.filter(Q(email=data)|Q(username=data))
            if associated_users.exists():
                for user in associated_users:
                    subject = "Deply - Restablece tu contraseña"
                    plaintext = template.loader.get_template('accounts/password_reset_email.txt')
                    htmltemp = template.loader.get_template('accounts/password_reset_email.html')
                    c = { 
                    "email":user.email,
                    'domain':'app.deply.dev',
                    'site_name': 'Deply',
                    "uid": urlsafe_base64_encode(force_bytes(user.pk)),
                    "user": user,
                    'token': default_token_generator.make_token(user),
                    'protocol': 'https',
                    }
                    text_content = plaintext.render(c)
                    html_content = htmltemp.render(c)
                    try:
                        msg = EmailMultiAlternatives(subject, text_content, 'Deply <hola@deply.dev>', [user.email], bcc = ['hola@deply.dev'], headers = {'Reply-To': 'hola@deply.dev'})
                        msg.attach_alternative(html_content, "text/html")
                        e.info('Password reset email sent', initiator=user.username)
                        msg.send()
                    except BadHeaderError:
                        return HttpResponse('Invalid header found.')
                    return redirect ("/account/password_reset/done/")
    password_reset_form = PasswordResetForm()
    return render(request=request, template_name="accounts/password_reset.html", context={"password_reset_form":password_reset_form})

@login_required
def profile(request):
    form = UpdateUserForm(request.POST or None, instance=request.user)
    msg = None
    msg_error = None

    if request.method == "POST":

        if form.is_valid():
            first_name = form.cleaned_data.get("first_name_profile")
            email = form.cleaned_data.get("email_profile")

            request.user.first_name = first_name
            request.user.email = email
            request.user.save()
            e.info('Profile update form submitted by ' + request.user.username, initiator=request.user.username)
            msg = 'Se ha actualizado correctamente tu perfil.'
        else:
            msg_error = 'Error en la validación del formulario'
    
    if request.method == "GET":
        e.info('Visit - ' + request.user.username + ' visited /perfil', initiator=request.user.username)

    return render(request, "accounts/perfil.html", {"form": form, "msg": msg, "msg_error": msg_error})

@login_required
def onboarding(request):
    form = UpdateUserForm(request.POST or None, instance=request.user)
    msg = None
    msg_error = None

    if request.method == "POST":

        if form.is_valid():
            first_name = form.cleaned_data.get("first_name_profile")
            email = form.cleaned_data.get("email_profile")

            request.user.first_name = first_name
            request.user.email = email
            request.user.save()
            msg = 'Tu perfil se ha completado correctamente y está listo para ser usado.'
            return redirect('/')
        else:
            msg_error = 'Se ha producido un error en la validación del formulario, por favor <a href="/perfil/">ingresa a tu perfil</a> y inténtalo de nuevo.'
            return redirect('/', {"msg": msg_error})

    return render(request, "accounts/onboarding.html", {"form": form, "msg": msg, "msg_error": msg_error})