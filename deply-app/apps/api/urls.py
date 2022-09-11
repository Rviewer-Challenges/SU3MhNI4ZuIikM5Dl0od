from django.urls import path, re_path
from apps.api import views

urlpatterns = [
    path('', views.defaultroute, name='defaultroute'),
    path('auth/login-anon', views.anon_auth, name='anon_auth'),
    path('file/<str:delete_id>', views.get_file_info, name='get_file_info'),
]
