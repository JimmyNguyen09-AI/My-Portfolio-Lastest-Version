"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const glow = glowRef.current;
    const trail = trailRef.current;

    if (!glow || !trail || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const render = () => {
      const { x, y } = pointRef.current;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      trail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      glow.classList.add("cursor-glow--visible");
      trail.classList.add("cursor-trail--visible");
      frameRef.current = null;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointRef.current = { x: event.clientX, y: event.clientY };

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.classList.remove("has-custom-cursor");
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={trailRef} aria-hidden="true" className="cursor-trail">
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 2 46 24 24 46 2 24 24 2Z" />
        </svg>
      </div>
      <div ref={glowRef} aria-hidden="true" className="cursor-glow">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 3 27 16 17 18 13 29 4 3Z" />
        </svg>
      </div>
    </>
  );
}
