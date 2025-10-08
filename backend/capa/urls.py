from django.urls import path
from .views import CapaView

urlpatterns = [
    path("capa", CapaView.as_view(), name="capa"),
]
