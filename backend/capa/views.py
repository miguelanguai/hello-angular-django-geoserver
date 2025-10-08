from rest_framework.views import APIView
from .models import Capa
from .serializers import CapaSerializer

class CapaView(APIView):
    """Vista de modelo Capa

    Args:
        viewsets (ViewSets): _description_
    """
    queryset = Capa.objects.all()
    serializer_class = CapaSerializer
