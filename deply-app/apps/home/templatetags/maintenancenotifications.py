from django import template
from apps.notifications.models import MaintenanceNotification

register = template.Library() 

# Create a templatetag to return all the GeneralNotification
@register.simple_tag(name='maintenancenotifications')
def maintenancenotifications():
    toreturn = {
        'notifications': MaintenanceNotification.objects.all(),
        'count': MaintenanceNotification.objects.all().count(),
        'enabled': MaintenanceNotification.objects.filter(disabled=False).count(),
        'notificationsenabled': MaintenanceNotification.objects.filter(disabled=False)
    }
    return toreturn