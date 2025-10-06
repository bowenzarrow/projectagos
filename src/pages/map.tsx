import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import MapPinpoint from '../components/pinpoint';
import './pages-css/map.css';

import rahway from '../assets/rahwayRiver.jpg'
import zimmerman from '../assets/zimmermanPark.png'

interface PinpointData {
  id: number;
  position: [number, number];
  location: string;     
  image: string;
  date: string;       
  trashAmount: string; 
}

export const Map: React.FC = () => {
  const unionCountyCenter: [number, number] = [40.6595, -74.2884];


  //IMAGE SHOULD BE AROUND 180x130 PX
  const pinpoints: PinpointData[] = [
    {
      id: 1,
      position: [40.707949, -74.292635],
      location: "Rahway River",
      image: rahway, 
      date: "2025-09-20",
      trashAmount: ">350 lbs",
    },

    {
      id: 2,
      position: [40.6854500354575, -74.23839923404297],
      location: "Zimmerman Park",
      image: zimmerman, 
      date: "2025-10-05",
      trashAmount: ">1,100 lbs",
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
            <MapPinpoint
              key={pin.id}
              position={pin.position}
              location={pin.location}
              image={pin.image}
              date={pin.date}
              trashAmount={pin.trashAmount}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
