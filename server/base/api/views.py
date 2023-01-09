from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import (
    AccessToken,
    RefreshToken
)
from django.contrib.auth import authenticate, login
from django.core.mail import send_mail
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.utils.translation import gettext_lazy as _
from rest_framework import generics, status
from .serializers import PasswordResetRequestSerializer, PasswordResetResponseSerializer
from django.contrib.auth.tokens import default_token_generator
from django.urls import reverse


from base.models import User

# Register User to Database


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/token/refresh/',
    ]

    return Response(routes)


@api_view(['POST'])
# Get the request data
def register_user(request):
    data = request.data
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Validate the data
    if not username or not email or not password:
        return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the user already exists
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)

    # Create the user
    user = User.objects.create_user(
        username=username, email=email, password=password)
    user.save()

    access = AccessToken.for_user(user)
    refresh = RefreshToken.for_user(user)

    # Return a success response
    return Response({"message": "User registered successfully", "accessToken": str(access), "refreshToken": str(refresh)}, status=status.HTTP_201_CREATED)


# Login user
@api_view(['POST'])
def login_user(request):
 # Get the request data
    data = request.data
    email = data.get('email')
    password = data.get('password')

    # Validate the data,
    if not email or not password:
        return Response({"error": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

    # Authenticate the user
    user = authenticate(request, email=email, password=password)
    if user is None:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

    # Login the user
    login(request, user)

    access = AccessToken.for_user(user)
    refresh = RefreshToken.for_user(user)

    # Return a success response
    return Response({"message": "Login successful", "accessToken": str(access), "refreshToken": str(refresh)}, status=status.HTTP_200_OK)

# sending password reset mail


@api_view(['POST'])
def password_reset(request):
    serializer = PasswordResetRequestSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': _('Email address not found')}, status=status.HTTP_404_NOT_FOUND)

        # Send password reset email
        subject = _('Password reset')
        message = _('Click the link below to reset your password:')
        link = request.build_absolute_uri(reverse('password_reset_confirm', kwargs={
            'uidb64': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': default_token_generator.make_token(user),
        }))
        send_mail(subject, message, 'from@example.com',
                  [email], html_message=f'<p>{message}</p><p><a href="{link}">{link}</a></p>')

        return Response(PasswordResetResponseSerializer(data={'success': _('Password reset email sent')}).data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
