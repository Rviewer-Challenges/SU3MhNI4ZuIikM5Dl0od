# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.contrib import admin
from .models import codigoDeSoporte, fileAnon, fileRegistered

# Register your models here.

admin.site.register(codigoDeSoporte)
admin.site.register(fileAnon)
admin.site.register(fileRegistered)