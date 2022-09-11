from tokenize import group
from django.db import models
from django_prometheus.models import ExportModelOperationsMixin
from django.contrib.auth.models import User, Group
from django.utils.safestring import mark_safe


# Create your models here.

class GeneralNotification(ExportModelOperationsMixin('GeneralNotification'), models.Model):
    nombre = models.CharField(max_length=100)
    icono = models.CharField(max_length=50, help_text=mark_safe('Ejemplo: lnil-save o lnil-list. <a target="_blank" href="https://huro.cssninja.io/elements-icons-lnil.html">Todos los ejemplos</a>'))
    mensaje = models.CharField(max_length=200, null=True)
    fecha = models.DateTimeField(auto_now_add=False)
    disabled = models.BooleanField(default=False)


    def __str__(self):
        return str(self.nombre)

class MaintenanceNotification(ExportModelOperationsMixin('MaintenanceNotification'), models.Model):
    nombre = models.CharField(max_length=100)
    mensaje = models.CharField(max_length=200, null=True, help_text='Mantenimiento programado para el día 27 de junio de 16:00 a 16:30 hrs.')
    mas_informacion_url = models.CharField(max_length=300, help_text='https://status.deply.dev/')
    disabled = models.BooleanField(default=False)

    def __str__(self):
        return str(self.nombre)