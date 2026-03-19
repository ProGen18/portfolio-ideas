'use client';

import { usePortalStore, useScrollStore } from "@stores";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const HtmlFooter = () => {
  const scrollProgress = useScrollStore((state) => state.scrollProgress);
  const portal = usePortalStore((state) => state.activePortalId);
  const visible = scrollProgress >= 0.98 && !portal;
  const containerRef = useRef<HTMLDivElement>(null);
  const wasVisible = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    if (visible && !wasVisible.current) {
      gsap.killTweensOf(containerRef.current);
      gsap.fromTo(containerRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power2.out" }
      );
    } else if (!visible && wasVisible.current) {
      gsap.killTweensOf(containerRef.current);
      gsap.to(containerRef.current,
        { opacity: 0, y: 8, duration: 0.5, ease: "power2.in" }
      );
    }

    wasVisible.current = visible;
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className="fixed w-full bottom-5 left-0 z-50 pointer-events-none flex justify-center"
      style={{ opacity: 0 }}
    >
      <p className="text-white/40 text-[10px] sm:text-[11px] font-medium tracking-widest text-center" style={{ fontFamily: 'var(--font-vercetti)' }}>
        © {new Date().getFullYear()} — Created by <a
          href="https://www.stephane-talab.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#c9a84c] text-white/60 transition-colors font-normal underline underline-offset-2 pointer-events-auto"
          style={{ pointerEvents: visible ? 'auto' : 'none' }}
        >
          Stéphane TALAB
        </a>
      </p>
    </div>
  );
};
