from django.contrib import admin
from django.contrib import messages
from .models import BeneficiaryDetails, AgencyDetails, SchemeTypes, Schemes

class BeneficiaryDetailsAdmin(admin.ModelAdmin):
    list_filter = ('category', 'imparement', 'address')
    list_display = ('get_name', 'udid', 'category', 'address', 'verification_status')
  
    def active(self, obj):
        return obj.is_active == 1
  
    active.boolean = True

    def change_status_to_pending(modeladmin, request, queryset):
        queryset.update(verification_status = '1')
        messages.success(request, "Selected Record(s) Marked as Pending Successfully !!")
  
    admin.site.add_action(change_status_to_pending, "Make Pending")
  

admin.site.register(BeneficiaryDetails, BeneficiaryDetailsAdmin)
admin.site.register(AgencyDetails)
admin.site.register(SchemeTypes)
admin.site.register(Schemes)