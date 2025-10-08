import { Component } from '@angular/core';
import  L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-capa-list',
  imports: [],
  templateUrl: './capa-list.component.html',
  styleUrl: './capa-list.component.css'
})
export class CapaListComponent {
  map!: L.Map;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.map = L.map('map').setView([0, 0], 2);

    // Consultar capas desde el backend Django
    this.http.get<any[]>('http://localhost:8000/api/capa')
      .subscribe(capas => {
        capas.forEach(capa => {
          // Añadir la capa WMS desde GeoServer
          L.tileLayer.wms(capa.geoserver_url, {
            layers: '', // ya viene en la URL
            format: 'image/png',
            transparent: true
          }).addTo(this.map);
        });
      });
  }
}


