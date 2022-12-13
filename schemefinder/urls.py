"""schemefinder URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings  
from django.conf.urls.static import static  
from schemefinder.views import (home, registration, agency_registration, index, agency_index, schemes, 
    equipment, feedback, reg_status, dis_info, national_institutes, checklist, downloads, beneficiary_index,
    get_beneficiary_json, change_status, apply_filter
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
    path('registration/', registration),
    path('agency-registration/', agency_registration),
    path('dashboard/', index),
    path('beneficiary-dashboard/', beneficiary_index),
    path('agency-dashboard/', agency_index, name="agency_index"),
    path('get_beneficiary_json/', get_beneficiary_json),
    path('change-status/', change_status),
    path('schemes/', schemes),
    path('equipment/', equipment),
    path('feedback/', feedback),
    path('registration-status/', reg_status),
    path('disability-info/', dis_info),
    path('national_institutes/', national_institutes),
    path('checklist/', checklist),
    path('downloads/', downloads),
    path('apply_filter/', apply_filter)
]


if settings.DEBUG:  
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)  