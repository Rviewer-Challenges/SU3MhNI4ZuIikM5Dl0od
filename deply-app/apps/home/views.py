# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from distutils.command.config import config
from django import template
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from django.contrib.auth.models import Group
from apps.notifications.models import MaintenanceNotification
from eventlog.events import EventGroup
from .forms import uploadFileAnon, uploadFileRegistered, deleteFileForm
import requests
from .models import fileAnon, fileRegistered

e = EventGroup()

@login_required(login_url="/login/")
def index(request):

    form1 = uploadFileAnon(request.POST, request.FILES)
    form2 = uploadFileRegistered(request.POST, request.FILES)

    if request.method == 'GET':

        maintenancenotifications = MaintenanceNotification.objects.all()

        context = {
            'form1': form1,
            'form2': form2,
            'segment': 'index',
            'maintenancenotifications': {
                'notifications': maintenancenotifications,
                'count': maintenancenotifications.count(),
                'enabled': maintenancenotifications.filter(disabled=False).count(),
                'notificationsenabled': maintenancenotifications.filter(disabled=False)
            },
            }

        html_template = loader.get_template('home/index.html')
        e.info('Visit - ' + request.user.username + ' visited /', initiator=request.user.username)
        return HttpResponse(html_template.render(context, request))

    context = {
        'form1': form1,
        'form2': form2,
        'segment': 'index',
    }
    
    if request.method == "POST" and 'formAnon' in request.POST:

        print('POST')

        if form1.is_valid():
                print('Valid')
                file = request.FILES['fileAnon']
                files = {
                    'file': (file.name, file, file.content_type),
                }
                headers = {
                    'apikey': 'd538df53-8444-43c2-8c7b-90f1da12f6a8',
                }
                response = requests.post('https://files.deply.dev/upload', files=files, headers=headers)

                url = response.json()['url']
                delete_id = response.json()['delete_id']

                fileAnon.objects.create(id=response.json()['id'], delete_id=delete_id)

                context = {
                    'form1': form1,
                    'form2': form2,
                    'segment': 'index',
                    'url': url,
                    'delete_id': delete_id,
                }

                html_template = loader.get_template('home/index.html')
                return HttpResponse(html_template.render(context, request))
        else:
            print('Invalid')
            print(form1.errors)
            html_template = loader.get_template('home/index.html')
            return HttpResponse(html_template.render(context, request))

    if request.method == "POST" and 'fileRegistered' in request.POST:
            print('POST')
            if form2.is_valid():
                print('Valid')
                file = request.FILES['fileRegistered']
                files = {
                    'file': (file.name, file, file.content_type),
                }
                headers = {
                    'apikey': 'd538df53-8444-43c2-8c7b-90f1da12f6a8',
                }
                response = requests.post('https://files.deply.dev/upload', files=files, headers=headers)

                url = response.json()['url']
                delete_id = response.json()['delete_id']

                fileRegistered.objects.create(id=response.json()['id'], delete_id=delete_id, owner=request.user)

                context = {
                    'form1': form1,
                    'form2': form2,
                    'segment': 'index',
                    'url': url,
                    'delete_id': delete_id,
                }

                html_template = loader.get_template('home/index.html')
                return HttpResponse(html_template.render(context, request))
            else:
                print('Invalid')
                print(form2.errors)
                html_template = loader.get_template('home/index.html')
                return HttpResponse(html_template.render(context, request))


@login_required(login_url="/login/")
def pages(request):

    context = {
        'segment': 'pages',
    }
    # All resource paths end in .html.
    # Pick out the html file name from the url. And load that template.
    try:

        load_template = request.path.split('/')[-1]

        if load_template == 'admin':
            return HttpResponseRedirect(reverse('admin:index'))
        context['segment'] = load_template

        html_template = loader.get_template('home/' + load_template + '.html')
        e.info('Visit - ' + request.user.username + ' visited /' + load_template, initiator=request.user.username)
        return HttpResponse(html_template.render(context, request))

    except template.TemplateDoesNotExist:

        html_template = loader.get_template('home/page-404.html')
        return HttpResponse(html_template.render(context, request))

    except:
        html_template = loader.get_template('home/page-500.html')
        return HttpResponse(html_template.render(context, request))
