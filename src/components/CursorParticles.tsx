import React, { useEffect, useRef } from 'react';

// Lightweight particle system that emits blue particles following the cursor
// Usage: place inside a relatively positioned container; it will stretch to fill parent
const CursorParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parentRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
  }>>([]);
  const mouseRef = useRef<{x: number; y: number; active: boolean}>({ x: 0, y: 0, active: false });

  // Resize canvas to parent size
  const resize = () => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // Emit particles at mouse
  const emit = (count: number) => {
    const parent = parentRef.current;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const px = mouseRef.current.x - rect.left;
    const py = mouseRef.current.y - rect.top;
    // small radial jitter so emission feels like a tiny burst area
    const jitterRadius = 6;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.35 + Math.random() * 0.9; // subtle drift
      const r = Math.random() * jitterRadius;
      const jx = Math.cos(angle) * r;
      const jy = Math.sin(angle) * r;
      particlesRef.current.push({
        x: px + jx,
        y: py + jy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 34 + Math.random() * 28,
        size: 1.6 + Math.random() * 1.0, // slightly larger diameter
        hue: 195 + Math.random() * 15, // darker blue with a touch of green (toward cyan)
      });
    }
  };

  // Animation loop
  const loop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

  // Clear frame for crisp grains (no trail)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Emit if active
    if (mouseRef.current.active) {
      emit(9); // slower emission rate
    }

    // Update & draw particles
    const next: typeof particlesRef.current = [];
    for (const p of particlesRef.current) {
      p.life += 1;
      // apply slight upward drift and friction
      p.vy -= 0.015;
      p.vx *= 0.995;
      p.vy *= 0.995;
      p.x += p.vx;
      p.y += p.vy;
      const alpha = Math.max(0, 1 - p.life / p.maxLife);
      if (alpha > 0) {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 96%, 48%, ${Math.min(1, alpha * 1.15)})`;
        ctx.shadowColor = 'rgba(40, 160, 200, 0.55)';
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        next.push(p);
      }
    }
    particlesRef.current = next;

    rafRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    // parent is the canvas parent element (hero-content)
    if (canvasRef.current) {
      parentRef.current = canvasRef.current.parentElement as HTMLElement | null;
    }
    resize();
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(loop);

    const container = parentRef.current;
    const onMove = (e: MouseEvent) => {
      // suppress emission over interactive elements (buttons/links)
      const target = e.target as Element | null;
      const overInteractive = !!target?.closest('button, a, .nav-btn, .hero-cta');
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = !overInteractive;
    };
    const onEnter = () => { mouseRef.current.active = true; };
    const onLeave = () => { mouseRef.current.active = false; };
    container?.addEventListener('mousemove', onMove as any, { passive: true });
    container?.addEventListener('mouseenter', onEnter as any, { passive: true });
    container?.addEventListener('mouseleave', onLeave as any, { passive: true });
    return () => {
      window.removeEventListener('resize', resize);
      container?.removeEventListener('mousemove', onMove as any);
      container?.removeEventListener('mouseenter', onEnter as any);
      container?.removeEventListener('mouseleave', onLeave as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-canvas"
      aria-hidden="true"
    />
  );
};

export default CursorParticles;
