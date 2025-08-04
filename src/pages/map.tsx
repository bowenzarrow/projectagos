import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import MapPinpoint from '../components/pinpoint';
import './pages-css/map.css';

interface PinpointData {
  id: number;
  position: [number, number];
  title: string;
  image: string;
  description: string;
}

export const Map: React.FC = () => {
  const unionCountyCenter: [number, number] = [40.6595, -74.2884];

  const pinpoints: PinpointData[] = [
    {
      id: 1,
      position: [40.668, -74.2],
      title: "Example",
      image: "",
      description: ""
    },
  ];

  return (
    <div className="map-page-container">
      <header className="map-header">
        Here's what we've been up to!
      </header>
      <div className="map-container-wrapper">
        <MapContainer
          center={unionCountyCenter}
          zoom={12}
          minZoom={12}
          maxBounds={[[40.5, -74.4], [40.8, -74.1]]}
          maxBoundsViscosity={10.0}
          className="custom-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pinpoints.map(pin => (
            <MapPinpoint key={pin.id} {...pin} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
