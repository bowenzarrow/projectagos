import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pinpoint from '../assets/pinpoint.png';
import './components-css/pinpoint.css';

interface MapPinpointProps {
  position: [number, number];
  location: string;     
  image: string;
  date: string;         
  trashAmount: string;   
}

// Pulsing icon using divIcon
const customIcon = new L.DivIcon({
  className: '',
  html: `
    <div class="pulse-marker">
      <div class="pulse"></div>
      <div class="icon" style="background-image: url(${pinpoint})"></div>
    </div>
  `,
  iconSize: [60, 60],
  iconAnchor: [30, 30],
  popupAnchor: [0, -30],
});

const MapPinpoint: React.FC<MapPinpointProps> = ({ position, location, image, date, trashAmount }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Marker
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: () => setOpen(true),
        mouseover: () => setOpen(true),
        mouseout: () => setOpen(false),
      }}
    >
      {open && (
        <Popup eventHandlers={{ popupclose: () => setOpen(false) }}>
          <div className="w-64">
            <h2 className="text-lg font-bold mb-2">{location}</h2>
            <img src={image} alt={location} className="w-full h-32 object-cover rounded" />
            <p className="mt-2 text-sm"><strong>Date:</strong> {date}</p>
            <p className="mt-1 text-sm"><strong>Trash Collected:</strong> {trashAmount}</p>
          </div>
        </Popup>
      )}
    </Marker>
  );
};

export default MapPinpoint;
