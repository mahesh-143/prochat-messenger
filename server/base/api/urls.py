from django.urls import path, include
from . import views

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )


urlpatterns = [
    path('', views.getRoutes),
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register', views.register_user),
    path('login', views.login_user),
    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
