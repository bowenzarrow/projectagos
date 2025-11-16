import React, { useState, useRef } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pinpoint from '../assets/pinpoint.png';
import './components-css/pinpoint.css';
import ImageGallery from './ImageGallery';

interface MapPinpointProps {
  position: [number, number];
  location: string;
  image: string;
  date: string;
  trashAmount: string;
}

const customIcon = new L.DivIcon({
  className: '',
  html: `
    <div class="pulse-marker">
      <div class="pulse"></div>
  <div class="icon blue-pinpoint" style="background-image: url(${pinpoint})"></div>
    </div>
  `,
  iconSize: [38, 38],
  iconAnchor: [19, 19],
  popupAnchor: [0, -19],
});

const MapPinpoint: React.FC<MapPinpointProps> = ({
  position,
  location,
  image,
  date,
  trashAmount,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const popupRef = useRef<L.Popup | null>(null);
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const handleMarkerMouseOver = () => setOpen(true);
  const handleMarkerMouseOut = () => {
    setTimeout(() => {
      if (!popupRef.current?.isOpen()) {
        setOpen(false);
      }
    }, 100);
  };

  return (
    <>
      <Marker
        position={position}
        icon={customIcon}
        eventHandlers={{
          mouseover: handleMarkerMouseOver,
          mouseout: handleMarkerMouseOut,
        }}
      >
        {open && (
          <Popup
            ref={popupRef}
            eventHandlers={{
              add: () => {
                setOpen(true);
                // Add a 'genie-in' class to latest popup for the swoop animation
                setTimeout(() => {
                  const popups = document.querySelectorAll('.leaflet-popup');
                  const last = popups[popups.length - 1] as HTMLElement | undefined;
                  if (last) {
                    last.classList.add('genie-in');
                  }
                }, 10);
              },
              remove: () => setOpen(false),
            }}
          >
            <div
              className="map-popup-content w-64"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <h2 className="text-lg font-bold mb-2">{location}</h2>
              <img
                src={image}
                alt={location}
                className="map-popup-image w-full h-32 object-cover rounded"
                onClick={() => {
                  setGalleryIndex(0);
                  setGalleryOpen(true);
                }}
              />
              <p className="mt-2 text-sm"><strong>Date:</strong> {date}</p>
              <p className="mt-1 text-sm"><strong>Trash Collected:</strong> {trashAmount}</p>
            </div>
          </Popup>
        )}
      </Marker>

      {galleryOpen && (
        <ImageGallery
          images={[image]}
          startIndex={galleryIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
};

export default MapPinpoint;
