from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Capa
from .serializers import CapaSerializer

class CapaView(APIView):
    """Vista de modelo Capa

    Args:
        viewsets (ViewSets): _description_
    """
    def get(self, request):
        """GET de todas las entidades del modelo Capa

        Args:
            request (_type_): _description_

        Returns:
            _type_: _description_
        """
        queryset = Capa.objects.all()
        serializer_class = CapaSerializer(queryset, many=True)
        return Response(serializer_class.data)
