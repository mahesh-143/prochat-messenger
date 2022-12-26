from django.db import models
import uuid

# Create your models here.


class User(models.Model):
    class Meta:
        db_table = "User"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    username = models.TextField(unique=True)
    password = models.TextField()
    bio = models.TextField(null=True)
    verified = models.BooleanField()
    is_active = models.BooleanField()
