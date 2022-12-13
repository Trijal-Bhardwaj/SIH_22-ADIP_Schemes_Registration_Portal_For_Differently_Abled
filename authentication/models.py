from django.db import models


class BeneficiaryDetails(models.Model):
    STATUS = (('1', 'Pending'),('2', 'Accepted'), ('3', 'Rejected'))

    # user = models.ForeignKey('auth.user')
    agency = models.ForeignKey('AgencyDetails', on_delete=models.CASCADE, null=True, blank=True)
    password = models.CharField(max_length=100, null=True, blank=True)
    udid = models.CharField(max_length=18, null=True, blank=True)
    aadhaar = models.CharField(max_length=12, null=True, blank=True)
    mobile = models.CharField(max_length=15, null=True, blank=True)
    salutation = models.CharField(max_length=10, null=True, blank=True)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    father_name = models.CharField(max_length=100, null=True, blank=True)
    mother_name = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(max_length=100, null=True, blank=True)
    dob = models.DateField(auto_now=False, null=True, blank=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    category = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=256, null=True, blank=True)
    district = models.CharField(max_length=128, null=True, blank=True)
    state = models.CharField(max_length=64, null=True, blank=True)
    pincode = models.CharField(max_length=20, null=True, blank=True)
    occupation = models.CharField(max_length=256, null=True, blank=True)
    income = models.BigIntegerField(null=True, blank=True)
    imparement = models.TextField(null=True, blank=True)
    imparement_per = models.TextField(null=True, blank=True)
    assistive_device = models.TextField(null=True, blank=True)
    imparement_certificate = models.FileField(upload_to='beneficiary/imparement_certificates', null=True, blank=True)
    income_certificate = models.FileField(upload_to='beneficiary/income_certificates', null=True, blank=True)
    category_certificate = models.FileField(upload_to='beneficiary/category_certificates', null=True, blank=True)
    photo = models.FileField(upload_to='beneficiary/photos', null=True, blank=True)
    verification_status = models.CharField(choices=STATUS, default='1', max_length=20, null=True, blank=True)
    comments = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    def get_name(self):
        return self.first_name + ' ' + self.last_name



class AgencyDetails(models.Model):
    # ORG_TYPE = [
    #     (1, 'Societies, registered under the Societies Registration Act, 1860 and their branches, if any, separately'),
    #     (2, 'Registered charitable trusts'),
    #     (3, 'District Rural Development Agencies, Indian Red Cross Societies and other Autonomous Bodies headed by District Collector/Chief Executive Officer/District Development Officer of Zilla Parishad'),
    #     (4, 'National/Apex Institutes including ALIMCO functioning under administrative control of the Ministry of Social Justice and Empowerment/Ministry of Health and Family Welfare'),
    #     (5, 'State Handicapped Development Corporations'),
    #     (6, 'Local Bodies- Zilla Parishad, Municipalities, District Autonomous Development Councils and Panchayats'),
    #     (7, 'Hospitals registered as separate entity, as recommended by state/central government'),
    #     (8, 'Nehru Yuvak Kendras')
    # ]
    # ORG_TYPE_DICT = dict(ORG_TYPE)
    # user = models.ForeignKey('auth.user')
    type = models.CharField(max_length=128, unique=True, blank=True)
    name = models.CharField(max_length=128, null=True, blank=True)
    username = models.CharField(max_length=128, null=True, blank=True)
    password = models.CharField(max_length=128, null=True, blank=True)
    address = models.CharField(max_length=512, null=True, blank=True)
    country = models.CharField(max_length=64, null=True, blank=True)
    state = models.CharField(max_length=64, null=True, blank=True)
    district = models.CharField(max_length=128, null=True, blank=True)
    pin_code = models.PositiveIntegerField(null=True, blank=True)
    phone = models.CharField(max_length=16, null=True, blank=True)
    fax_number = models.CharField(max_length=16, null=True, blank=True)
    pan_number = models.CharField(max_length=10, null=True, blank=True)
    website = models.CharField(max_length=128, null=True, blank=True)
    cin_number = models.CharField(max_length=21, null=True, blank=True)
    support_name = models.CharField(max_length=128, null=True, blank=True)
    support_designation = models.CharField(max_length=128, null=True, blank=True)
    support_email = models.EmailField(null=True, blank=True)
    support_phone = models.CharField(max_length=16, null=True, blank=True)
    address_proof = models.FileField(upload_to='agency/address_proof')

    def __str__(self):
        return self.name


class BenificiaryAgencyRelation(models.Model):
    agency = models.ForeignKey('AgencyDetails', on_delete=models.CASCADE)
    benificiary = models.ForeignKey('BeneficiaryDetails', on_delete=models.CASCADE)
    scheme = models.ForeignKey('Schemes', on_delete=models.CASCADE)


class SchemeTypes(models.Model):
    type = models.CharField(max_length=128, null=True, blank=True)
    description = models.CharField(max_length=512, null=True, blank=True)

class Schemes(models.Model):
    agency = models.ForeignKey('AgencyDetails', on_delete=models.CASCADE)
    name = models.CharField(max_length=128, null=True, blank=True)
    type = models.ForeignKey('SchemeTypes', on_delete=models.CASCADE)
    description = models.CharField(max_length=512, null=True, blank=True)
