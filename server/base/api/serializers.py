from rest_framework import serializers
from base.models import User, Friendrequest


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friendrequest
        fields = 'all'