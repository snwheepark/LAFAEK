import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const cities = [
  { name: 'Dili', lat: -8.556, lng: 125.578, note: 'Capital', hdi: 0.787, isCapital: true, isExclave: false },
  { name: 'Baucau', lat: -8.470, lng: 126.457, note: 'Second largest city', hdi: null, isCapital: false, isExclave: false },
  { name: 'Maliana', lat: -8.992, lng: 125.214, note: 'Bobonaro municipality', hdi: null, isCapital: false, isExclave: false },
  { name: 'Suai', lat: -9.312, lng: 125.255, note: 'Cova Lima municipality', hdi: null, isCapital: false, isExclave: false },
  { name: 'Same', lat: -9.003, lng: 125.661, note: 'Manufahi municipality', hdi: null, isCapital: false, isExclave: false },
  { name: 'Ermera', lat: -8.752, lng: 125.398, note: 'Coffee-growing region', hdi: 0.605, isCapital: false, isExclave: false },
  { name: 'Viqueque', lat: -8.858, lng: 126.367, note: 'Viqueque municipality', hdi: null, isCapital: false, isExclave: false },
  { name: 'Oecusse', lat: -9.198, lng: 124.340, note: 'Exclave — surrounded by Indonesia', hdi: null, isCapital: false, isExclave: true },
];

function makeIcon(isCapital: boolean, isExclave: boolean) {
  const color = isExclave ? '#8B3A3A' : isCapital ? '#C9A97A' : '#1A1A1A';
  const size = isCapital ? 14 : 10;
  return new L.DivIcon({
    html: `<div style="width:${size}px;height:${size}px;background:${color};border:2px solid white;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    className: '',
  });
}

export default function TimorMap() {
  return (
    <MapContainer
      center={[-8.874, 125.727]}
      zoom={8}
      style={{ height: '340px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {cities.map((city) => (
        <Marker
          key={city.name}
          position={[city.lat, city.lng]}
          icon={makeIcon(city.isCapital, city.isExclave)}
        >
          <Popup>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', minWidth: '140px' }}>
              <div style={{ fontFamily: 'EB Garamond, serif', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                {city.name} {city.isExclave ? '⚑' : ''}
              </div>
              <div style={{ color: '#6B6B6B' }}>{city.note}</div>
              {city.hdi !== null && (
                <div style={{ marginTop: '6px' }}>HDI: <strong>{city.hdi}</strong></div>
              )}
              {city.isExclave && (
                <div style={{ marginTop: '6px', color: '#8B3A3A', fontSize: '11px' }}>
                  Exclave — surrounded by Indonesian territory
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
