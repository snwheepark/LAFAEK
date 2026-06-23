import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const diliIcon = new L.DivIcon({
  html: `<div style="width:12px;height:12px;background:#C9A97A;border:2px solid #1A1A1A;border-radius:50%;"></div>`,
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  className: '',
});

function ZoomToDili() {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.flyTo([-8.556, 125.578], 6, { duration: 2 });
    }, 800);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

export default function WorldMap() {
  return (
    <MapContainer
      center={[0, 120]}
      zoom={2}
      style={{ height: '280px', width: '100%' }}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <ZoomToDili />
      <Marker position={[-8.556, 125.578]} icon={diliIcon}>
        <Popup>
          <strong style={{ fontFamily: 'EB Garamond, serif' }}>Dili</strong><br />
          Capital of East Timor
        </Popup>
      </Marker>
    </MapContainer>
  );
}
