'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const SHORTCUTS = [
  { key: 'h', href: '/', label: 'Home' },
  { key: 'c', href: '/cv/', label: 'CV' },
  { key: 'p', href: '/projects/', label: 'Projects' },
  { key: 'b', href: '/blog/', label: 'Blog' },
  { key: 't', href: '/timeline/', label: 'Timeline' },
  { key: 'm', href: '/personal/', label: 'Personal' },
  { key: 'q', href: '/qa/', label: 'Q&A' },
  { key: 's', href: '/security/', label: 'Security' },
] as const;

function isTypingTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el || el.isContentEditable) return Boolean(el);
  return ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);
}

function hasOpenModal() {
  return Boolean(
    document.querySelector('[role="dialog"][aria-modal="true"]:not([data-shortcut-help])')
  );
}

export default function KeyboardShortcuts() {
  const router = useRouter();
  const pathname = usePathname();
  const [helpOpen, setHelpOpen] = useState(false);

  const go = useCallback(
    (href: string) => {
      setHelpOpen(false);
      if (pathname !== href && `${pathname}/` !== href) router.push(href);
    },
    [pathname, router]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;

      if (e.key === 'Escape') {
        setHelpOpen(false);
        return;
      }
      if (e.key === '?') {
        if (hasOpenModal()) return;
        e.preventDefault();
        setHelpOpen((open) => !open);
        return;
      }
      if (e.key.length !== 1 || hasOpenModal()) return;

      const match = SHORTCUTS.find((s) => s.key === e.key.toLowerCase());
      if (!match) return;
      e.preventDefault();
      go(match.href);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [go]);

  return (
    <>
      <button
        type="button"
        onClick={() => setHelpOpen(true)}
        aria-label="Show keyboard shortcuts"
        className="fixed bottom-4 right-4 z-40 hidden h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-control)] font-mono text-sm text-zinc-400 transition-colors hover:border-[var(--border-strong)] hover:text-zinc-100 md:flex"
      >
        ?
      </button>

      {helpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
          data-shortcut-help
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setHelpOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg-strong)] p-6 shadow-2xl"
          >
            <h2 className="mb-4 text-lg font-semibold text-zinc-100">
              Keyboard shortcuts
            </h2>
            <ul className="space-y-2">
              {SHORTCUTS.map((s) => (
                <li key={s.key} className="flex items-center justify-between">
                  <span className="text-zinc-300">{s.label}</span>
                  <kbd className="rounded border border-[var(--border-strong)] bg-[var(--surface-code)] px-2 py-0.5 font-mono text-xs text-zinc-200">
                    {s.key}
                  </kbd>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-[var(--border-subtle)] pt-4 text-sm text-zinc-400">
              Press <kbd className="font-mono text-zinc-200">?</kbd> to toggle this,{' '}
              <kbd className="font-mono text-zinc-200">Esc</kbd> to close.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
