# Generated by Django 3.2.11 on 2022-08-19 15:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0010_alter_usuariosxcorreduria_uuid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuariosxcorreduria',
            name='uuid',
        ),
    ]
