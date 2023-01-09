from rest_framework import serializers
from base.models import User
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

UserModel = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta : 
        model = User
        fields = '__all__'

class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()
    def validate_email(self, value):
        try:
            # UserModel = self.context['request'].user.__class__
            UserModel.objects.get(email=value)
        except UserModel.DoesNotExist:
            raise serializers.ValidationError(_('Email address not found'))
        return value

class PasswordResetResponseSerializer(serializers.Serializer):
    success = serializers.CharField()