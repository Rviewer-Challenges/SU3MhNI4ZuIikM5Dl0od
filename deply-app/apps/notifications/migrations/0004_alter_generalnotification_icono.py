# Generated by Django 3.2.11 on 2022-07-08 15:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0003_alter_generalnotification_icono'),
    ]

    operations = [
        migrations.AlterField(
            model_name='generalnotification',
            name='icono',
            field=models.CharField(help_text='Ejemplo: lnil-save o lnil-list. <a target="_blank" href="https://huro.cssninja.io/elements-icons-lnil.html">Todos los ejemplos</a>', max_length=50),
        ),
    ]
