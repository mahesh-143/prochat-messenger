from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class User(AbstractUser):
    class Meta:
        db_table = 'User'

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True, null=False, blank=False, default="", db_index=True)
    password = models.CharField(max_length=255)
    bio = models.TextField(null=True)
    verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

