import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Professional Timeline - Yurii Voievodin",
  description: "A chronological journey through my professional career, key milestones, and notable achievements in software development.",
  openGraph: {
    title: "Professional Timeline - Yurii Voievodin",
    description: "A chronological journey through my professional career, key milestones, and notable achievements in software development.",
    url: `${siteConfig.url}/timeline`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Professional Timeline - Yurii Voievodin",
    description: "A chronological journey through my professional career, key milestones, and notable achievements in software development.",
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
