from rest_framework import serializers
from .models import Capa

class CapaSerializer(serializers.ModelSerializer):
    """Serializador de entidad Capa

    Args:
        serializers (Serializer): _description_
    """
    class Meta:
        """clase Meta del Serializer
        """
        model = Capa
        fields = '__all__'
