import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Personal Interests - Yurii Voievodin",
  description: "Explore my personal interests: photography, favorite movies and series, and video games. A glimpse into what inspires me beyond coding.",
  openGraph: {
    title: "Personal Interests - Yurii Voievodin",
    description: "Explore my personal interests: photography, favorite movies and series, and video games. A glimpse into what inspires me beyond coding.",
    url: `${siteConfig.url}/personal`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Personal Interests - Yurii Voievodin",
    description: "Explore my personal interests: photography, favorite movies and series, and video games. A glimpse into what inspires me beyond coding.",
  },
};

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
