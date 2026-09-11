import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import Bullets from "@/components/ui/Bullets";
import { vistaPrintImages } from "@/lib/commercial-projects-images";

export const vistaprint: Project = {
  slug: "vistaprint",
  name: "VistaPrint",
  summary:
    "E-commerce iOS app for ordering custom printed products, with an integrated design editor.",
  date: "August 2023 - December 2025",
  tags: ["E-commerce", "Shopping"],
  images: vistaPrintImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://www.vistaprint.com" target="_blank">
          VistaPrint
        </GradientLink>{" "}
        — e-commerce iOS app for ordering custom printed products. Users
        browse a product catalog, customize designs in an integrated editor,
        and place orders.
      </p>
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>
          Implemented the product page UI — preview image gallery, pricing and
          discounts, and size/quantity/material variation pickers
        </li>
        <li>
          Built image editing capabilities for the design editor —
          replacement, cropping, hue/saturation/lightness sliders, filters,
          color extraction
        </li>
        <li>
          Designed the account screen with web view integration and links to
          cart, orders, and support
        </li>
        <li>
          Covered core modules with unit tests, added localization with string
          catalogs, and shipped a logging system
        </li>
      </Bullets>

      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, UIKit-based with SwiftUI
          components
        </li>
        <li>
          <strong>MVP + DataProvider</strong> architecture
        </li>
        <li>
          <strong>37 local CocoaPods modules</strong> for feature isolation
          (Editor, Gallery, ProductPage, VistaCart, Storage, Networking, etc.)
        </li>
        <li>
          <strong>CoreData</strong> + custom Storage module with{" "}
          <strong>EasyMapping</strong> for data persistence
        </li>
        <li>
          <strong>Firebase</strong> Remote Config + A/B testing,{" "}
          <strong>Segment</strong> for analytics
        </li>
        <li>
          Deployment target: <strong>iOS 18.0+</strong>
        </li>
      </Bullets>

      <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
      <Bullets>
        <li>
          <strong>GitLab CI</strong> with parallel test stages — unit,
          snapshot, UI, and smoke tests on every branch, plus the full test
          suite on release branches
        </li>
        <li>
          <strong>Fastlane</strong> for build automation, versioning,
          TestFlight distribution, and Slack notifications
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
    </>
  ),
};
