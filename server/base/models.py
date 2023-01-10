from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from django.dispatch import receiver
from django.urls import reverse
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail

class User(AbstractUser):
    class Meta:
        db_table = 'User'
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


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


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "{}?token={}".format(reverse('password_reset:reset-password-request'), reset_password_token.key)

    send_mail(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message:
        email_plaintext_message,
        # from:
        "noreply@somehost.local",
        # to:
        [reset_password_token.user.email]
    )

class Friendrequest(models.Model) : 
    class Meta : 
        db_table = 'Friendrequest'
    
    from_user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='friend_request_sent',
    )
    to_user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='friend_request_recivied',
    )
    created_at = models.DateTimeField(auto_now_add=True)
    # accepted = models.BooleanField(default=False)