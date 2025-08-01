import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pinpoint from '../assets/pinpoint.png'

interface MapPinpointProps {
  position: [number, number];
  title: string;
  image: string;
  description: string;
}

const customIcon = new L.Icon({
  iconUrl: pinpoint,
  iconSize: [60, 60],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const MapPinpoint: React.FC<MapPinpointProps> = ({ position, title, image, description }) => {
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
        <Popup eventHandlers={{popupclose: () => setOpen(false),}}>
          <div className="w-64">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <img src={image} alt={title} className="w-full h-32 object-cover rounded" />
            <p className="mt-2 text-sm">{description}</p>
          </div>
        </Popup>
      )}
    </Marker>
  );
};

export default MapPinpoint;
