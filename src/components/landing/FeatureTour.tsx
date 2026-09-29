'use client';

import { useEffect, useRef, useState } from 'react';

export interface TourItem {
  title: string;
  body: string;
  image: { src: string; alt: string };
}

const STEP_MS = 6500;

export default function FeatureTour({ items }: { items: TourItem[] }) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAutoplay(false);
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const running = autoplay && visible && !hovered;

  const select = (index: number) => {
    setAutoplay(false);
    setActive(index);
  };

  return (
    <div
      ref={rootRef}
      className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative order-1 lg:order-2 aspect-[1600/1024] overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-zinc-900 shadow-2xl shadow-black/40">
        {items.map((item, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.image.src}
            src={item.image.src}
            alt={item.image.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            aria-hidden={i !== active}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
            }`}
          />
        ))}
      </div>

      <ul className="order-2 lg:order-1 flex flex-col">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <li key={item.title} className="relative pl-5">
              <span className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-zinc-800 overflow-hidden">
                {isActive && (
                  <span
                    key={`${active}-${autoplay}`}
                    className="tour-progress absolute inset-x-0 top-0 bg-gradient-to-b from-violet-400 to-purple-500"
                    style={{
                      animationDuration: `${STEP_MS}ms`,
                      animationPlayState: running ? 'running' : 'paused',
                      height: autoplay ? undefined : '100%',
                      animationName: autoplay ? undefined : 'none',
                    }}
                    onAnimationEnd={() => setActive((active + 1) % items.length)}
                  />
                )}
              </span>
              <button
                type="button"
                onClick={() => select(i)}
                aria-expanded={isActive}
                className={`w-full text-left py-2.5 text-lg font-semibold transition-colors ${
                  isActive ? 'text-zinc-100' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {item.title}
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <p className="overflow-hidden text-zinc-400 leading-relaxed">
                  <span className="block pb-4">{item.body}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
