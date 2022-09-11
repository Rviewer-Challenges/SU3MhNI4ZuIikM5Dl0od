# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.db import models
from django.contrib.auth.models import User, Group
from django.utils import timezone
import datetime

# Create your models here.

def random_code():
    import random
    return random.randint(100000, 999999)

def expiryDate():
    import datetime
    return datetime.datetime.now() + datetime.timedelta(minutes=15)

class codigoDeSoporte(models.Model):
    codigoDeSoporte = models.CharField(max_length=200, default=random_code)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    expiryDate = models.DateField(auto_now=False, auto_now_add=False, default=expiryDate)
    def is_expired(self):
        return self.expiryDate < datetime.datetime.now()
    
    def is_active(self):
        return self.is_expired() == False
    
    class Meta:
        verbose_name = 'Codigo de Soporte'
        verbose_name_plural = 'Codigos de Soporte'

    def __str__(self):
        return self.codigoDeSoporte + ' - ' + self.user.username + ' - ' + self.expiryDate.strftime('%d-%m-%Y %H:%M:%S')