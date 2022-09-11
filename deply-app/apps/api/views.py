import email
from telnetlib import STATUS
import requests
import airtable
import json
import pytz
from decouple import config
from django import template
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.utils.http import urlsafe_base64_encode
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import EmailMultiAlternatives
from django.core.mail import send_mail, BadHeaderError
from django.template import loader
from django.urls import reverse
from django.contrib.auth.models import Group, User
from apps.home.models import codigoDeSoporte, fileAnon, fileRegistered
import pymysql.cursors
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
from eventlog.events import EventGroup

e = EventGroup()

# Create your views here.

def defaultroute(request):
    response_json = {
        'status': 404,
        'message': 'What are you looking for?'
    }
    return HttpResponse(json.dumps(response_json), content_type='application/json', status=404)

def anon_auth(request):
    if request.method == 'POST':

        user = User.objects.get(username='anonimo')
        login(request, user)
        return redirect('/')
        
    else:
        return HttpResponse('Not allowed', status=405)


@login_required(login_url="/login/")
def get_file_info(request, delete_id):

    if request.method == 'GET':

        if request.user.username == 'anonimo':
            file = fileAnon.objects.get(delete_id=delete_id)
        else:
            file = fileRegistered.objects.get(delete_id=delete_id)

        url = 'https://files.deply.dev/files/' + file.id

        created = file.created.astimezone(pytz.timezone('Europe/Madrid'))
        created = created.strftime("%d/%m/%Y %H:%M:%S")
        expiryDate = file.expiryDate.astimezone(pytz.timezone('Europe/Madrid'))
        expiryDate = expiryDate.strftime("%d/%m/%Y %H:%M:%S")


        response_json = {
            'id': file.id,
            'delete_id': delete_id,
            'url': url,
            'created_at': created,
            'expiry_at': expiryDate
        }
        return HttpResponse(json.dumps(response_json), content_type='application/json', status=200)
    
    if request.method == 'DELETE':

        if request.user.username == 'anonimo':
            file = fileAnon.objects.get(delete_id=delete_id)
        else:
            file = fileRegistered.objects.get(delete_id=delete_id)

        file_id = file.id
        file.delete()

        headers = {
            'Content-Type': 'multipart/form-data',
            'apikey': 'd538df53-8444-43c2-8c7b-90f1da12f6a8'
        }
        params = {
            'id': file_id
        }
        response = requests.get('https://files.deply.dev/delete', headers=headers, params=params)
        response_json = {
            'status': 200,
            'message': 'File deleted'
        }
        return HttpResponse(json.dumps(response_json), content_type='application/json', status=200)

    