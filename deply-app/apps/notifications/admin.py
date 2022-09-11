from django.contrib import admin
from apps.notifications.models import GeneralNotification, MaintenanceNotification

# Register your models here.

admin.site.register(GeneralNotification)
admin.site.register(MaintenanceNotification)