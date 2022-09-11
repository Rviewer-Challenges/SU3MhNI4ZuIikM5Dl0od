import requests
import airtable
import json
from decouple import config
from django import template
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from django.contrib.auth.models import Group
import pymysql.cursors
import datetime

# Create your views here.

