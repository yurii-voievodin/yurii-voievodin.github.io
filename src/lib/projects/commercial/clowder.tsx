import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { clowderImages } from "@/lib/commercial-projects-images";

export const clowder: Project = {
  slug: "clowder",
  name: "Clowder",
  summary:
    "White-label community and event management platform cloned and customized for 50+ organizations.",
  date: "March 2020 - January 2022",
  tags: ["Social"],
  images: clowderImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://www.clowder.com/" target="_blank">
          Clowder
        </GradientLink>{" "}
        — white-label community and event management platform. The Core iOS
        app is cloned and customized for 50+ organizations, providing event
        management, community forums, real-time chat, news feeds, resource
        libraries, and QR-based networking.
      </p>
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>
          Create clones of the Core product and customize them per client
          (enable/disable modules, custom fields, branding)
        </li>
        <li>
          Support 50+ existing apps and update them to the latest Core version
        </li>
        <li>Propose and implement changes to the Core product</li>
        <li>
          Resolve merge conflicts and maintain GitFlow discipline across a
          large multi-repo setup
        </li>
      </Bullets>

      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, UIKit-based architecture
        </li>
        <li>
          <strong>MVVM + Interactor</strong> — Interactors handle business
          logic, DataProviders fetch and cache, ViewControllers as the view
          layer
        </li>
        <li>
          <strong>16 internal frameworks</strong> — CLFoundation, CLBackend,
          CLServices, CLUIKit, CLAnalytics, CLAdvertisement, CLQRCodeSharing,
          CLPayments, and more
        </li>
        <li>
          <strong>Alamofire 5</strong> + proprietary{" "}
          <CodeTag>PXRESTRequest</CodeTag> for REST API abstraction;{" "}
          <strong>PromiseKit</strong> for async operations
        </li>
        <li>
          Proprietary <CodeTag>PXChat</CodeTag> + <strong>Chatto</strong> for
          real-time messaging
        </li>
        <li>
          <strong>Kingfisher</strong> for image caching,{" "}
          <strong>Eureka</strong> for form building
        </li>
        <li>
          Push notifications via proprietary <CodeTag>PXPush</CodeTag> and{" "}
          <strong>AppCenter</strong> for crash reporting
        </li>
        <li>
          <strong>Amplitude</strong> for analytics,{" "}
          <strong>KeychainAccess</strong> for secure credential storage
        </li>
        <li>QR code generation and scanning for digital membership cards</li>
        <li>
          Calendar integration, location-based &quot;near me&quot; discovery,
          rich HTML rendering via <strong>DTCoreText</strong>
        </li>
        <li>
          <strong>SwiftGen</strong> for type-safe resources,{" "}
          <strong>Sourcery</strong> for code generation,{" "}
          <strong>SwiftLint</strong> + <strong>SwiftFormat</strong> for code
          quality
        </li>
        <li>
          Deployment target: <strong>iOS 13.0+</strong>, iPhone and iPad
          supported
        </li>
      </Bullets>

      <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
      <Bullets>
        <li>
          <strong>GitLab CI</strong> — SwiftLint gate, IPA build, AppCenter
          for QA, TestFlight for staging, App Store for production
        </li>
        <li>
          <strong>Fastlane</strong> for build automation, versioning, and
          TestFlight distribution; <strong>YouTrack</strong> integration for
          automatic issue status updates
        </li>
        <li>
          <strong>GitFlow</strong> branching — develop, feature, release,
          hotfix, and deploy branches
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
    </>
  ),
};
