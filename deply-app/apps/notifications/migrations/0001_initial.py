# Generated by Django 3.2.11 on 2022-07-08 14:03

from django.db import migrations, models
import django_prometheus.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GeneralNotification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('icono', models.CharField(help_text='Ejemplo: lnil-save o lnil-list', max_length=50)),
                ('mensaje', models.CharField(max_length=200, null=True)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('disabled', models.BooleanField(default=False)),
            ],
            bases=(django_prometheus.models.ExportModelOperationsMixin('GeneralNotification'), models.Model),
        ),
    ]