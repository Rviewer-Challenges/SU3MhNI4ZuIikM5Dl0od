from django import template
from apps.notifications.models import GeneralNotification
import datetime

register = template.Library() 

# Create a templatetag to return all the GeneralNotification
@register.simple_tag(name='generalnotifications')
def generalnotifications():
    toreturn = {
        'notifications': GeneralNotification.objects.all(),
        'count': GeneralNotification.objects.all().count(),
        'enabled': GeneralNotification.objects.filter(disabled=False).count(),
        'notificationsenabled': GeneralNotification.objects.filter(disabled=False),
        'now': datetime.datetime.now() + datetime.timedelta(hours=2)
    }
    return toreturn