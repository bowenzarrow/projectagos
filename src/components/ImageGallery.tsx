import React, { useEffect, useState } from 'react';

interface Props {
  images: string[];
  startIndex?: number;
  onClose: () => void;
}

const ImageGallery: React.FC<Props> = ({ images, startIndex = 0, onClose }) => {
  const [index, setIndex] = useState<number>(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(images.length - 1, i + 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div className="form-modal modal-genie-in image-gallery-modal" role="dialog" aria-modal="true">
      <div className="form-modal-inner image-gallery-inner">
        <button className="modal-close" onClick={onClose} aria-label="Close gallery">×</button>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            style={{position: 'absolute', left: 20, zIndex: 101000, background: 'transparent', border: 'none', fontSize: 36, color: '#193b6a', cursor: 'pointer'}}
            aria-label="Previous"
          >
            ‹
          </button>

          <img src={images[index]} alt={`Gallery ${index + 1}`} style={{maxWidth: '90%', maxHeight: '85%', borderRadius: 10, boxShadow: '0 20px 60px rgba(10,30,60,0.35)'}} />

          <button
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            style={{position: 'absolute', right: 20, zIndex: 101000, background: 'transparent', border: 'none', fontSize: 36, color: '#193b6a', cursor: 'pointer'}}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
