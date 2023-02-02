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
    REQUIRED_FIELDS = ['username']


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

class FriendList(models.Model):
    class Meta : 
     db_table = 'FriendList'

    user = models.OneToOneField('User', on_delete=models.CASCADE, related_name="user")
    friends = models.ManyToManyField('User', blank=True, related_name="friends")

    def __str__(self):
        return self.user.username
    
    def add_friend(self, account):
        """
        Add a new friend
        """
        if not account in self.friends.all():
            self.friends.add(account)

    def remove_friend(self, account):
        """
        remove a friend
        """
        if account in self.friends.all():
            self.friends.remove(account)

    def unfriend(self, removee):
        """
        Intitiate the action of unfriending someone
        """

        remover_friends_list = self # person terminating the friendship

        # remove friend from remover friend list
        remover_friends_list.remove_friend(removee)

        # remove friend from removee friend list
        friends_list = FriendList.objects.get(user=removee)
        friends_list.remove_friend(self.user) 
    
def is_mutual_friend(self, friend):
    """
    is this a friend ?
    """
    if friend in self.friends.all():
        return True
    return False


class Friendrequest(models.Model) : 
    class Meta : 
        db_table = 'Friendrequest'
    
    sender = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='friend_request_sent',
    )
    receiver = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        related_name='friend_request_recivied',
    )
    is_active = models.BooleanField(blank=True, null=False, default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.from_user.username

    def accept(self):
        """
        Accept a friend request
        Update both sender and reciver friend lists
        """

        receiver_friend_list = FriendList.objects.get(user=self.receiver)
        if receiver_friend_list:
            receiver_friend_list.add_friend(self.sender)
            sender_friend_list = FriendList.objects.get(user=self.sender)
            if sender_friend_list:
                sender_friend_list.add_friend(self.receiver)
                self.is_active = False
                self.save()

def decline(self):
    """
    Decline a friend request
    It is "declined" by setting the "is_active: field to False
    """
    self.is_active = False
    self.save()

def cancel(self):
    """
    Cancel friend request
    It is "cancelled" by sending the "is_active" field to false
    """ 
    self.is_active = False
    self.save()