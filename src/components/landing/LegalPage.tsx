import type { ReactNode } from 'react';
import BackLink from '@/components/ui/BackLink';
import InlineLink from '@/components/ui/InlineLink';
import { siteConfig } from '@/lib/config';

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-zinc-100 mb-3">{heading}</h2>
      {children}
    </section>
  );
}

export function Faq({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return (
    <div className="space-y-5">
      {items.map(({ question, answer }) => (
        <div key={question}>
          <h3 className="font-semibold text-zinc-100 mb-1">{question}</h3>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  );
}

export default function LegalPage({
  app,
  appHref,
  kind,
  updated,
  children,
}: {
  app: string;
  appHref: string;
  kind: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl mx-auto">
        <BackLink href={appHref}>{app}</BackLink>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2">{app}</h1>
          <p className="text-lg text-zinc-400 font-medium">{kind}</p>
          {updated && <p className="text-sm text-zinc-500 mt-2">Last updated: {updated}</p>}
        </div>

        <div className="space-y-8 text-zinc-300 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function PolicyFooterSections() {
  return (
    <>
      <LegalSection heading="Changes to This Policy">
        <p>
          Any updates to this policy will be reflected in future app versions with an updated date
          above.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          If you have questions about this policy, please contact us at{' '}
          <InlineLink href={siteConfig.social.email}>{siteConfig.author.email}</InlineLink>.
        </p>
      </LegalSection>
    </>
  );
}
