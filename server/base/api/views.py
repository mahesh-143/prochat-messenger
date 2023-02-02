from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import (
    AccessToken,
    RefreshToken
)
from django.contrib.auth import authenticate, login
from django.utils.translation import gettext_lazy as _
from base.models import User, Friendrequest, FriendList
from .serializers import FriendRequestSerializer, FriendListSerializer

# Register User to Database


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/register',
        'api/login',
        'api/password_reset',
        'api/password_reset/confirm'
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
    return Response({"message": "Login successful", "accessToken": str(access), "refreshToken": str(refresh), "user" : {
        "id" : user.id,
        "username" : user.username,
        "email" : user.email,
        "bio" : user.bio,
        "dateJoined" : user.date_joined
 
    }}, status=status.HTTP_200_OK)

# Add friend

@api_view(['POST'])
def add_fried(request):
    # TO DO : check if friendrequest already sent (with from_id and to_id)
    serializer = FriendRequestSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    friend_request = serializer.save() 
    # To DO : send notification to_user, 

    return Response(serializer.data, status=status.HTTP_201_CREATED)

    

