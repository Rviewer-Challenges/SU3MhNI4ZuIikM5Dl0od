# Generated by Django 3.2.11 on 2022-08-19 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_usuariosxcorreduria_bbdd_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuariosxcorreduria',
            name='uuid',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
