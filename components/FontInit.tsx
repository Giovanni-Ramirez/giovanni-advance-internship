"use client"
import { useEffect } from 'react';

export default function FontInit() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem('playerFontSize');
      if (saved) {
        document.documentElement.style.setProperty('--player-font-size', saved);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
