import type { Metadata } from 'next';

export function movedMetadata(to: string): Metadata {
    return {
        title: 'Wavefall',
        robots: { index: false, follow: true },
        alternates: { canonical: to },
    };
}

export default function MovedPage({ to }: { to: string }) {
    return (
        <>
            <meta httpEquiv="refresh" content={`0; url=${to}`} />
            <main style={{ padding: '48px 24px', fontFamily: 'system-ui, sans-serif' }}>
                <p>
                    DustDrift is now Wavefall. Continue to <a href={to}>{to}</a>.
                </p>
            </main>
        </>
    );
}
