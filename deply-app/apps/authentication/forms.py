from hashlib import new
import re
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))


class SignUpForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={
                "placeholder": "Email",
                "class": "form-control"
            }
        ))
    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password check",
                "class": "form-control"
            }
        ))

    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')



class UpdateUserForm(forms.ModelForm):
    first_name_profile = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': "form-control"}))
    email_profile = forms.EmailField(required=False, widget=forms.TextInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ('first_name_profile', 'email_profile')

class manage_add_user_form(forms.ModelForm):
    username = forms.CharField(required=True, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'luis-perez'}))
    email = forms.EmailField(required=False, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'luisperez@email.com'}))
    password = forms.CharField(required=True, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'Contraseña'}))
    send_email = forms.BooleanField(required=False, widget=forms.CheckboxInput(attrs={'class': 'form-control'}))
    bbdd_total = forms.BooleanField(required=False, widget=forms.CheckboxInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'send_email')

class manage_delete_user_form(forms.ModelForm):
    username_delete = forms.CharField(required=True, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'Nombre de usuario...', 'id': 'removeuserinput'}))

    class Meta:
        model = User
        fields = ('username_delete',)

class manage_edit_user_form(forms.ModelForm):
    username_edit = forms.CharField(required=True, widget=forms.TextInput(attrs={'class': 'form-control input is-primary', 'placeholder': 'Nombre de usuario', 'id': 'editusernameinput', 'readonly': 'readonly'}))
    new_username = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'Nuevo nombre de usuario'}))
    email_edit = forms.EmailField(required=False, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'Email', 'id': 'editemailinput'}))
    password_edit = forms.CharField(required=False, widget=forms.TextInput(attrs={'class': 'form-control input', 'placeholder': 'Nueva contraseña'}))
    bbdd_total_edit = forms.BooleanField(required=False, widget=forms.CheckboxInput(attrs={'class': 'form-control', 'id': 'editbbdttotalinput'}))

    class Meta:
        model = User
        fields = ('username_edit', 'email_edit', 'password_edit')

class admin_connect_as_user_form(forms.ModelForm):
    username_connect = forms.CharField(required=True)

    class Meta:
        model = User
        fields = ('username_connect',)