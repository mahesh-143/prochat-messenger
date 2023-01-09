from django.urls import path
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
    path('password_reset_confirm/<uidb64>/<token>/', password_reset_confirm, name='password_reset_confirm'),
    path('forgotpassword', views.password_reset)
]
