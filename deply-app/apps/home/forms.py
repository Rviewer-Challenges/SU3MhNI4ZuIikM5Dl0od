from hashlib import new
import re
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class uploadFileAnon(forms.Form):
    fileAnon = forms.FileField(required=False, widget=forms.ClearableFileInput(attrs={'multiple': False, 'class': 'file-input', 'type': 'file', 'id': 'file-input', 'name': 'fileAnon', 'accept': '.js, .css, .html, .php, .json, .xml, .yml, .yaml, .png, .jpg, .jpeg, .svg, .gif, .ico, .txt, .pdf'}))

    class Meta:
        model = User
        fields = ('fileAnon',)

class uploadFileRegistered(forms.Form):
    fileRegistered = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': False, 'class': 'file-input', 'type': 'file', 'id': 'file-input', 'name': 'fileRegistered'}))

    class Meta:
        model = User
        fields = ('fileRegistered',)
    
class deleteFileForm(forms.Form):
    delete_id = forms.CharField(widget=forms.TextInput(attrs={'class': 'delete-id', 'type': 'text', 'id': 'delete-id', 'name': 'delete_id'}))

    class Meta:
        model = User
        fields = ('delete_id',)