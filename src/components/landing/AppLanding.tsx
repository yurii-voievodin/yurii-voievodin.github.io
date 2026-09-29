import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import type { IconComponent } from '@/components/icons';
import WidePhotoCarousel from '@/components/WidePhotoCarousel';
import GradientText from '@/components/ui/GradientText';
import AppStoreBadge from './AppStoreBadge';
import FeatureTour, { type TourItem } from './FeatureTour';

export interface AppStoreLink {
  href: string;
  badge: string;
  ariaLabel: string;
  alt: string;
}

export interface LandingCard {
  icon: IconComponent;
  title: string;
  body: string;
}

export type LandingSection =
  | {
      kind: 'cards';
      heading: string;
      lead?: string;
      cards: LandingCard[];
      columns?: 3 | 4;
      iconStyle?: 'tile' | 'plain';
    }
  | { kind: 'screenshots'; heading: string; images: { src: string; alt: string }[] }
  | { kind: 'tour'; heading: string; items: TourItem[]; perks?: string[] }
  | { kind: 'custom'; heading: string; children: ReactNode };

export interface AppLandingProps {
  name: string;
  icon: string;
  tagline: string;
  description: string;
  appStore: AppStoreLink;
  ctaNote: string;
  platforms?: { items: string[]; note: string };
  sections: LandingSection[];
  footer: { heading: string; body: string; links: { label: string; href: string }[] };
  lang?: string;
  header?: ReactNode;
  jsonLd?: object;
}

const GRID = {
  3: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4',
  4: 'grid sm:grid-cols-2 lg:grid-cols-4 gap-4',
} as const;

const CARD = 'rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] p-5';
const FOOTER_LINK =
  'text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2';

function SectionBlock({ section }: { section: LandingSection }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-zinc-100 mb-4">{section.heading}</h2>
      {section.kind === 'screenshots' && <WidePhotoCarousel images={section.images} />}
      {section.kind === 'custom' && section.children}
      {section.kind === 'tour' && (
        <>
          <FeatureTour items={section.items} />
          {section.perks && (
            <p className="mt-8 text-center text-sm text-zinc-400">{section.perks.join(' · ')}</p>
          )}
        </>
      )}
      {section.kind === 'cards' && (
        <>
          {section.lead && <p className="text-zinc-400 mb-4 -mt-2">{section.lead}</p>}
          <div className={GRID[section.columns ?? 3]}>
            {section.cards.map(({ icon: Icon, title, body }) => (
              <div key={title} className={CARD}>
                {section.iconStyle === 'plain' ? (
                  <Icon className="w-6 h-6 text-violet-400 mb-3" />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                )}
                <h3 className="font-semibold text-zinc-100 mb-1.5">{title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function AppLanding({
  name,
  icon,
  tagline,
  description,
  appStore,
  ctaNote,
  platforms,
  sections,
  footer,
  lang,
  header,
  jsonLd,
}: AppLandingProps) {
  return (
    <div className="min-h-screen p-5" lang={lang}>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="max-w-5xl mx-auto">
        {header}

        <div
          className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 ${header ? 'pt-2' : 'pt-6'}`}
        >
          <Image
            src={icon}
            alt={`${name} app icon`}
            width={112}
            height={112}
            className="rounded-3xl shadow-lg border border-[var(--border-strong)] flex-shrink-0"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">{name}</h1>
            <GradientText as="p" className="text-lg md:text-xl font-semibold mb-3">
              {tagline}
            </GradientText>
            <p className="text-zinc-300 leading-relaxed max-w-2xl">{description}</p>
          </div>
        </div>

        <div className="mb-12">
          <AppStoreBadge {...appStore} />
          <p className="text-xs text-zinc-400 mt-1.5">{ctaNote}</p>
          {platforms && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {platforms.items.map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/30"
                >
                  {platform}
                </span>
              ))}
              <span className="text-xs text-zinc-400 ml-1">{platforms.note}</span>
            </div>
          )}
        </div>

        {sections.map((section) => (
          <SectionBlock key={section.heading} section={section} />
        ))}

        <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-zinc-100 mb-2">{footer.heading}</h2>
          <p className="text-zinc-400 mb-5">{footer.body}</p>
          <div className="flex justify-center">
            <AppStoreBadge {...appStore} />
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm">
            {footer.links.map((link, i) => (
              <span key={link.href} className="contents">
                {i > 0 && <span className="text-zinc-600">·</span>}
                <Link href={link.href} className={FOOTER_LINK}>
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
