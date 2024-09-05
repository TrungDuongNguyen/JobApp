from django.urls import path, include

urlpatterns = [
    path('api/', include('charts.urls')),
]
