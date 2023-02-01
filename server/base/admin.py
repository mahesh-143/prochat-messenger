from django.contrib import admin
from base.models import User, Friendrequest

# Register your models here.
class Admin(admin.ModelAdmin):
    readonly_fields = ("id",)
    pass
admin.site.register(User, Admin)
admin.site.register(Friendrequest, Admin)