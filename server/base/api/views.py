from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import (
    AccessToken,
    RefreshToken
)
from django.contrib.auth import authenticate, login

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
    user = User.objects.create_user(username=username, email=email, password=password)
    user.save()

    access = AccessToken.for_user(user)
    refresh = RefreshToken.for_user(user)

    # Return a success response
    return Response({"message": "User registered successfully", "accessToken" : str(access), "refreshToken" : str(refresh)}, status=status.HTTP_201_CREATED)


#Login user
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
    return Response({"message": "Login successful", "accessToken" : str(access), "refreshToken" : str(refresh)}, status=status.HTTP_200_OK)