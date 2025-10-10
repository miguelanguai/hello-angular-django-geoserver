import { Component } from '@angular/core';
import L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-capa-list',
  imports: [],
  templateUrl: './capa-list.component.html',
  styleUrl: './capa-list.component.css'
})
export class CapaListComponent {
  map!: L.Map;
  capas?: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.map = L.map('map').setView([40.78, -74], 10.5);
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    });
    osm.addTo(this.map);

    // Consultar capas desde el backend Django
    this.http.get<any[]>('http://localhost:8000/api/capa')
      .subscribe(capas => {
        capas.forEach(capa => {
          // Añadir la capa WMS desde GeoServer
          L.tileLayer.wms(capa.geoserver_url, {
            layers: capa.geoserver_nombre,
            format: 'image/png',
            transparent: true
          }).addTo(this.map);
        });
        this.capas = capas;
        console.log(this.capas);
      });
  }
}


