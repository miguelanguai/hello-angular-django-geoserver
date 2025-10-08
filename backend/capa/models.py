from django.db import models


class Capa(models.Model):
    """Capa

    nombre(str): Nombre de la capa
    descripcion(str): Descripción para la capa
    geoserver_url(str): URL de GeoServer

    Args:
        models (_type_): modelo de Django

    Returns:
        _type_: _description_
    """
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    geoserver_url = models.URLField()  # URL al endpoint WMS o WFS de GeoServer

    def __str__(self):
        return str(self.nombre)
