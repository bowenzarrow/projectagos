import React, { useRef, useState } from 'react';
import './components-css/heroRippleTitle.css';

const TITLE = 'PROJECT AGOS';

const AgosInfoBox: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // Responsive box size for mobile compatibility
  const isMobile = window.innerWidth < 600;
  const BOX_WIDTH = isMobile ? Math.max(window.innerWidth - 32, 320) : 360;
  const BOX_HEIGHT = isMobile ? 260 : 240;
  const EDGE_MARGIN = isMobile ? 16 : 24;
  const NAVBAR_HEIGHT = isMobile ? 56 : 85; // adjust if your navbar is taller
  const [dragging, setDragging] = React.useState(false);
  const [startPos, setStartPos] = React.useState<{ x: number; y: number } | null>(null);
  const [boxPos, setBoxPos] = React.useState<{ x: number; y: number }>({ x: window.innerWidth - BOX_WIDTH - EDGE_MARGIN, y: NAVBAR_HEIGHT });

  React.useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: MouseEvent) => {
      if (!startPos) return;
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;
      setBoxPos(pos => {
        let newX = pos.x + deltaX;
        let newY = pos.y + deltaY;
        newX = Math.max(EDGE_MARGIN, Math.min(window.innerWidth - BOX_WIDTH - EDGE_MARGIN, newX));
        newY = Math.max(EDGE_MARGIN, Math.min(window.innerHeight - BOX_HEIGHT - EDGE_MARGIN, newY));
        return { x: newX, y: newY };
      });
      setStartPos({ x: e.clientX, y: e.clientY });
    };
    const handleUp = () => {
      setBoxPos(pos => {
        const winW = window.innerWidth;
        const distLeft = pos.x - EDGE_MARGIN;
        const distRight = winW - BOX_WIDTH - EDGE_MARGIN - pos.x;
        let newX = distLeft < distRight ? EDGE_MARGIN : winW - BOX_WIDTH - EDGE_MARGIN;
        // Prevent overlap with navbar when snapping to top
        let minY = NAVBAR_HEIGHT;
        let newY = Math.max(minY, Math.min(window.innerHeight - BOX_HEIGHT - EDGE_MARGIN, pos.y));
        return { x: newX, y: newY };
      });
      setDragging(false);
      setStartPos(null);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [dragging, startPos]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  };

  return (
    <div
  className="agos-info-box-modern"
  onMouseDown={handleDragStart}
      style={{
        cursor: dragging ? 'grabbing' : 'grab',
        position: 'fixed',
        left: boxPos.x,
        top: boxPos.y,
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
  minWidth: isMobile ? '220px' : '360px',
  maxWidth: isMobile ? '98vw' : '400px',
  minHeight: isMobile ? '180px' : '180px',
  maxHeight: isMobile ? '80vh' : '260px',
  margin: 0,
  transition: dragging ? 'none' : 'left 0.3s, top 0.3s',
  zIndex: 9999,
  boxSizing: 'border-box',
  borderRadius: isMobile ? '16px' : '20px',
  boxShadow: isMobile ? '0 2px 16px rgba(0,0,0,0.18)' : '0 4px 24px rgba(0,0,0,0.18)',
  padding: isMobile ? '1em 1em' : '0.8em 1.1em',
      }}
    >
      <button
        className="agos-info-x"
        style={{ fontSize: isMobile ? '1.6em' : '1.2em', width: isMobile ? 36 : 28, height: isMobile ? 36 : 28 }}
        onClick={e => { e.stopPropagation(); onClose(); }}
        aria-label="Close info"
      >×</button>
      <div className="agos-info-inner-modern" style={{ fontSize: isMobile ? '0.92em' : '0.78em', lineHeight: isMobile ? '1.32' : '1.22', textAlign: 'left' }}>
        <h3 style={{ fontSize: isMobile ? '1.18em' : '1.12em', marginBottom: '0.4em', textAlign: 'left' }}>Agos: Double Meaning</h3>
        <p style={{ textAlign: 'left', margin: 0 }}>
          <b>Agos</b> means "flow" in Tagalog, symbolizing movement and the power of water to shape and renew. In Greek, <b>Agos</b> means "sacred" or "devoted", reflecting our commitment to protecting waterways and inspiring positive change. Our name connects cultures and purpose—uniting us in the mission to restore and cherish our environment.
        </p>
      </div>
    </div>
  );
};

const HeroRippleTitle: React.FC<{ trigger?: number }> = ({ trigger }) => {
  const [rippleIdx, setRippleIdx] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Animate ripple from left to right
  React.useEffect(() => {
    let frame: number;
    if (trigger !== undefined || rippleIdx === null) {
      setAnimating(true);
      setRippleIdx(0);
      let idx = 0;
      const step = () => {
        setRippleIdx(idx);
        idx++;
        if (idx < TITLE.length) {
          frame = window.setTimeout(step, 60); // slower ripple
        } else {
          setRippleIdx(null);
          setAnimating(false);
        }
      };
      frame = window.setTimeout(step, 55);
    }
    return () => window.clearTimeout(frame);
  }, [trigger]);

  // Calculate effect for each letter
  const getStyle = (i: number) => {
    if (rippleIdx === null) {
      // Animation finished: all letters normal
      return {
        transform: 'scale(1) translateY(0)',
        opacity: 1,
        transition: 'transform 0.6s, opacity 0.6s',
      };
    }
    const dist = Math.abs(i - rippleIdx);
  const maxScale = 1.38;
  const minScale = 1.0;
  const maxElev = 18;
  const minElev = 0;
  const falloff = Math.exp(-dist * 0.32); // wider, more dramatic ripple
  const scale = minScale + (maxScale - minScale) * falloff;
  const elev = minElev + (maxElev - minElev) * falloff;
    return {
      transform: `scale(${scale}) translateY(-${elev}px)`,
      zIndex: Math.max(0, 2 - dist),
      opacity: dist > 4 ? 0.6 : 1,
    };
  };

  return (
    <>
      <div
        className="hero-ripple-title"
        style={{ display: 'inline-flex', gap: '0.08em', userSelect: 'none', cursor: 'pointer' }}
        onClick={() => setShowInfo(true)}
      >
        {TITLE.split('').map((char, i) => (
          <span
            key={i}
            className="hero-ripple-letter"
            style={{
              display: 'inline-block',
              transition: 'transform 0.7s cubic-bezier(.4,1.4,.4,1), opacity 0.5s',
              ...getStyle(i),
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      {showInfo && <AgosInfoBox onClose={() => setShowInfo(false)} />}
    </>
  );
};

export default HeroRippleTitle;