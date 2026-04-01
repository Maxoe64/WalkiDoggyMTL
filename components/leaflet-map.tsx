"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { WalkRoute } from "@/lib/types";

// Fix default marker icon issue with webpack
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

type LeafletMapProps = {
  routes: WalkRoute[];
};

export default function LeafletMap({ routes }: LeafletMapProps) {
  return (
    <MapContainer
      center={[45.50, -73.57]}
      zoom={11}
      className="h-80 w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {routes.map((route) => (
        <Marker key={route.id} position={[route.lat, route.lng]}>
          <Popup>
            <strong>{route.name}</strong>
            <br />
            {route.distanceKm} km · {route.durationMin} min
            <br />
            <a href={`/routes/${route.id}`}>Voir le circuit →</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
