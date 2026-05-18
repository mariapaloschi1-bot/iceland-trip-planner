'use client';

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface Location {
  lat: number;
  lng: number;
  name: string;
  type: string;
  description?: string;
  address?: string;
  special?: string;
  price?: string;
}

interface MapProps {
  locations: Location[];
}

export default function IcelandMap({ locations }: MapProps) {
  const center: [number, number] = [64.9, -19.2];

  const routeCoordinates: [number, number][] = Array.from(
    new globalThis.Map(
      locations
        .filter((loc) => loc.type.startsWith('day-'))
        .map((loc) => [loc.type, [loc.lat, loc.lng] as [number, number]])
    ).values()
  );

  return (
    <MapContainer
      center={center}
      zoom={6}
      className="w-full h-full"
      style={{ background: '#000' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {routeCoordinates.length > 1 && (
        <Polyline
          positions={routeCoordinates}
          color="#00D9FF"
          weight={3}
          opacity={0.8}
        />
      )}

      {locations.map((location, index) => (
        <Marker
          key={`${location.name}-${index}`}
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup maxWidth={300}>
            <div className="bg-black text-ice-blue p-1 min-w-[220px]">
              <h3 className="font-bold text-base md:text-lg text-ice-light mb-2">{location.name}</h3>
              {location.address && (
                <p className="text-xs md:text-sm mb-2">
                  <span className="font-bold text-ice-purple-light">📍 Indirizzo/area:</span><br />
                  {location.address}
                </p>
              )}
              {location.description && (
                <p className="text-xs md:text-sm mb-2">
                  <span className="font-bold text-ice-purple-light">Cos’è:</span><br />
                  {location.description}
                </p>
              )}
              {location.special && (
                <p className="text-xs md:text-sm mb-2">
                  <span className="font-bold text-ice-purple-light">Cosa ha di speciale:</span><br />
                  {location.special}
                </p>
              )}
              {location.price && (
                <p className="text-xs md:text-sm">
                  <span className="font-bold text-ice-purple-light">Nota:</span> {location.price}
                </p>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
