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
  private capaZonas!: L.TileLayer.WMS;

  private GEOSERVER_URL = "http://185.23.121.71:1234/geoserver/vituclim/wms";
  private LAYER_NAME = "vituclim:prueba_capa";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.setMap();
    this.addBaseLayer();
    //this.addStaticLayers();
  }

  private setMap(): void {
    this.map = L.map('map').setView([40.4, -3.7], 10.5);
  }

  private addBaseLayer(): void {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" }).addTo(this.map);
  }

  private addGeoServerLayer(CQLFilter?: string): void {
    if (this.capaZonas) {
      this.map.removeLayer(this.capaZonas);
    }
    const params: L.WMSOptions = {
      layers: this.LAYER_NAME,
      format: 'image/png',
      transparent: true,
      version: '1.1.0',
      attribution: 'GeoServer',
    };

    if (CQLFilter) {
      (params as any).CQL_FILTER = CQLFilter;
    }

    this.capaZonas = L.tileLayer.wms(this.GEOSERVER_URL, params).addTo(this.map);
    console.log(this.capaZonas);
    
  }

  applyFilter(): void {
    const FILTER = "tipo='urbano' AND provincia='Madrid'";
    this.addGeoServerLayer(FILTER);
  }

  addStaticLayers(): void {
    this.http.get<any[]>('http://localhost:8000/api/capa')
      .subscribe(capas => {
        capas.forEach(capa => {
          // Añadir la capa WMS desde GeoServer
          L.tileLayer.wms(capa.geoserver_url, {
            layers: capa.geoserver_nombre,
            format: 'image/png',
            transparent: true,
            opacity: 0.5
          }).addTo(this.map);
        });
        this.capas = capas;
        console.log(this.capas);
      });
  }
}


