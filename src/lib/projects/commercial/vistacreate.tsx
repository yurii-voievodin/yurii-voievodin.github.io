import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { vistaCreateImages } from "@/lib/commercial-projects-images";

export const vistacreate: Project = {
  slug: "vistacreate",
  name: "VistaCreate",
  summary:
    "Professional design and creative content creation iOS app with thousands of templates and a full-featured editor",
  date: "February 2022 - August 2023",
  tags: ["Design Tools"],
  images: vistaCreateImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://create.vista.com" target="_blank">
          VistaCreate
        </GradientLink>{" "}
        — professional design and creative content creation iOS app. Users
        work with thousands of templates, add images, text, shapes and audio,
        and export designs in multiple formats.
      </p>
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>
          Implemented a new Home screen per the Figma design, improving the
          first experience with the app for new users and enabling promotion
          of seasonal offers and discounts
        </li>
        <li>Covered core modules with unit tests</li>
        <li>
          Continuously iterated on the onboarding flow, testing different
          variants with A/B tests to improve user conversion
        </li>
        <li>
          Analytics event logging — <CodeTag>Firebase</CodeTag>,{" "}
          <CodeTag>AppsFlyer</CodeTag>, <CodeTag>Iterable</CodeTag>,{" "}
          <CodeTag>Segment</CodeTag>
        </li>
      </Bullets>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, UIKit-based with SwiftUI
          components; <strong>Metal</strong> for graphics rendering
        </li>
        <li>
          <strong>MVP/VIPER hybrid</strong> — Router-based navigation,
          Presenter classes for business logic, ViewControllers as the view
          layer
        </li>
        <li>
          <strong>21 development CocoaPods modules</strong>{" "}
        </li>
        <li>
          <strong>CoreData</strong> for local persistence with custom context
          management and undo/redo support
        </li>
        <li>
          <strong>StoreKit</strong> + custom BillingService module for
          subscriptions and in-app purchases
        </li>
        <li>
          <strong>Firebase</strong> — Analytics, Crashlytics, RemoteConfig,
          A/B testing, DynamicLinks, Push Notifications
        </li>
        <li>
          <strong>AppsFlyer</strong> for attribution,{" "}
          <strong>Iterable</strong> for marketing automation,{" "}
          <strong>Facebook SDK</strong> for social
        </li>
        <li>
          <strong>Lokalise</strong> localization with 25 languages supported
        </li>
        <li>
          Deployment target: <strong>iOS 15.0+</strong>, iPhone and iPad
          supported
        </li>
      </Bullets>

      <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
      <Bullets>
        <li>
          <strong>GitLab CI</strong> with Development and Full test plans
        </li>
        <li>
          <strong>Fastlane</strong> for TestFlight releases, version
          management, dSYM uploads, and Lokalise sync
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
    </>
  ),
};
