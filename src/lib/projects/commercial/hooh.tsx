import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { hoohImages } from "@/lib/commercial-projects-images";

export const hooh: Project = {
  slug: "hooh",
  name: "Hooh",
  summary: "Private AI workspace for documents — native SwiftUI app",
  date: "2025 - 2026",
  tags: ["AI", "Productivity"],
  images: hoohImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://hooh.ai" target="_blank">
          Hooh
        </GradientLink>{" "}
        — private AI workspace for documents. Users upload PDFs, scans,
        photos, and Office files, then chat with an AI assistant that reads,
        summarizes, fills, and signs them.
      </p>
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>
          Designed and built the app's architecture from scratch — feature
          modules, local Swift Package boundaries, and the data/auth layer
        </li>
        <li>
          Set up the CI/CD pipeline with <strong>Xcode Cloud</strong> for
          automated TestFlight builds and releases
        </li>
        <li>
          Implemented the core business features, from AI-powered document
          chat to onboarding and paywall
        </li>
        <li>
          Took the app from first commit to App Store launch, and continued to
          ship new releases
        </li>
      </Bullets>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift 6</strong>, fully <strong>SwiftUI</strong>,
          strict concurrency with <CodeTag>@MainActor</CodeTag> default
          isolation; deployment target <strong>iOS 18.6+</strong>
        </li>
        <li>
          Feature-module architecture (Chat, Library, Auth, Paywall,
          Onboarding, SideMenu…) plus local <strong>Swift Package</strong>{" "}
          modules — <CodeTag>Networking</CodeTag>,{" "}
          <CodeTag>PDFEditor</CodeTag>, <CodeTag>PresentationEditor</CodeTag>,{" "}
          <CodeTag>PresentationViewer</CodeTag>,{" "}
          <CodeTag>DesignSystem</CodeTag>
        </li>
        <li>
          <strong>Supabase</strong> for auth (Apple/Google/email), Postgres
          realtime channels (conversation sync), and shared-keychain session
          storage for the Share Extension
        </li>
        <li>
          Native <strong>App Intents/Siri Shortcuts</strong>, deep-link
          routing, and a <strong>Share Extension</strong> for importing
          documents from other apps
        </li>
        <li>
          Analytics: <strong>PostHog</strong> (product analytics),{" "}
          <strong>AppsFlyer</strong> (attribution, ATT-gated)
        </li>
        <li>
          Localization via <strong>Lokalise</strong> with{" "}
          <CodeTag>.xcstrings</CodeTag> string catalogs across 6 locales
          (English, Ukrainian, German, Spanish, French, and European
          Portuguese)
        </li>
      </Bullets>
      <div className="flex flex-wrap gap-3 pt-2">
        <GradientLink
          href="https://apps.apple.com/us/app/hooh-ai-pdf-document-assistant/id6763233940"
          target="_blank"
        >
          App Store
        </GradientLink>
        <GradientLink href="https://hooh.ai" target="_blank">
          hooh.ai
        </GradientLink>
      </div>
    </>
  ),
};
