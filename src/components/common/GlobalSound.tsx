"use client";

import { useEffect, useRef } from "react";

export function GlobalSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    const audio = new Audio("/click.mp3");
    audio.volume = 0.1; // ~10% volume
    audioRef.current = audio;

    const playSound = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Play sound if target is a button or a link, or inside one
      if (target.closest("button") || target.closest("a")) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener("click", playSound);
    return () => {
      document.removeEventListener("click", playSound);
    };
  }, []);

  return null;
}
