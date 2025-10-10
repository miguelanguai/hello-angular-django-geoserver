from django.db import models


class Capa(models.Model):
    """Capa

    nombre(str): Nombre de la capa
    descripcion(str): Descripción para la capa
    geoserver_url(str): URL al endpoint WMS o WFS de GeoServer. Suele ser http://localhost:8080/geoserver/wms para WMS
    geoserver_nombre(str): Nombre de la capa para GeoServer

    Args:
        models (_type_): modelo de Django

    Returns:
        _type_: _description_
    """
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank=True)
    geoserver_url = models.URLField()
    geoserver_nombre = models.CharField(max_length=100, null=True)

    def __str__(self):
        return str(self.nombre)
