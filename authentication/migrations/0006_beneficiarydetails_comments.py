# Generated by Django 4.1 on 2022-08-26 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_agencydetails_district_agencydetails_phone_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='beneficiarydetails',
            name='comments',
            field=models.TextField(blank=True, null=True),
        ),
    ]