'use client';

import { useEffect, useRef } from 'react';

export default function TimelineHighlighter() {
  const lastElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const removeHighlight = () => {
      if (lastElRef.current) {
        lastElRef.current.classList.remove('timeline-highlight');
        lastElRef.current = null;
      }
    };

    const applyHighlight = (hash?: string) => {
      const raw = typeof window !== 'undefined'
        ? (hash ?? window.location.hash)
        : '';
      const id = decodeURIComponent(raw.replace(/^#/, ''));

      removeHighlight();
      if (!id) return;

      const el = document.getElementById(id);
      if (el) {
        el.classList.add('timeline-highlight');
        lastElRef.current = el as HTMLElement;
        
        // Optional: smooth scroll to the highlighted item
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    // Listen for timeline data load event
    const onTimelineLoaded = () => applyHighlight();
    window.addEventListener('timelineLoaded', onTimelineLoaded);

    // Listen for hash changes during client-side navigation
    const onHashChange = () => applyHighlight();
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('timelineLoaded', onTimelineLoaded);
      window.removeEventListener('hashchange', onHashChange);
      removeHighlight();
    };
  }, []);

  return null;
}
