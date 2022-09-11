# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.contrib import admin
from django.urls import path, include  # add this
from apps.api import views

urlpatterns = [
    path('admin/', admin.site.urls),          # Django admin route
    path("", include("apps.authentication.urls")), # Auth routes - login / register
    path("api/v1", views.defaultroute ), # API routes
    path("api/v1/", include("apps.api.urls")), # API routes
    path("", include("apps.home.urls")) # UI Kits Html files
]

admin.site.site_header = 'Deply Admin'    # default: "Django Administration"
admin.site.index_title = 'Inicio'                   # default: "Site administration"
admin.site.site_title = 'Deply Admin'     # default: "Django site admin"