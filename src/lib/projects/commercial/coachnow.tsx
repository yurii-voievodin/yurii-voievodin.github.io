import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { coachNowImages } from "@/lib/commercial-projects-images";

export const coachnow: Project = {
  slug: "coachnow",
  name: "CoachNow",
  summary:
    "Coaching and training management platform for coaches and athletes, with video, chat, and training spaces.",
  date: "February 2021",
  tags: ["Sports", "Video"],
  images: coachNowImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink
          href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472"
          target="_blank"
        >
          CoachNow
        </GradientLink>{" "}
        — coaching and training management platform for coaches and athletes.
        Users share training posts, videos, and media in dedicated training
        spaces, communicate through comments and replies, and manage athlete
        connections.
      </p>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          <strong>Objective-C + Swift</strong> hybrid codebase (~688 source
          files) — legacy Objective-C foundation with Swift components added
          incrementally
        </li>
        <li>
          <strong>MVC with Service Layer</strong> — manager/helper classes (
          <CodeTag>EDFNetworkClient</CodeTag>,{" "}
          <CodeTag>EDFSyncManager</CodeTag>,{" "}
          <CodeTag>EDFAccountUpdater</CodeTag>) handle business logic
          alongside UIViewControllers
        </li>
        <li>
          <strong>RestKit</strong> for REST API communication with automatic
          Core Data object mapping and bi-directional sync
        </li>
        <li>
          <strong>CoreData</strong> (SQLite) for offline-first persistence
          with migration manager and RestKit integration
        </li>
        <li>
          Video capture via custom <strong>NextLevel</strong> framework, video
          trimming (<strong>PryntTrimmerView</strong>), playback, and batch
          export to <strong>AWS S3</strong>
        </li>
        <li>
          <strong>Stripe</strong> for payment processing and subscription
          management
        </li>
        <li>
          <strong>Firebase</strong> Crashlytics + Performance;{" "}
          <strong>Segment</strong> + <strong>AppsFlyer</strong> for analytics
        </li>
        <li>
          <strong>Intercom</strong> for in-app customer support messaging
        </li>
        <li>
          <strong>Facebook SDK</strong> for social login, <strong>OTP</strong>{" "}
          phone verification, <strong>OAuth2</strong> token-based auth
        </li>
        <li>
          <strong>PureLayout</strong> for programmatic Auto Layout,{" "}
          <strong>SDWebImage</strong> for image caching
        </li>
        <li>
          Deployment target: <strong>iOS 12.0+</strong>, iPhone and iPad
          supported
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>
          Support the app and add new features to the mixed Objective-C /
          Swift codebase
        </li>
        <li>
          Rewrite legacy <strong>Objective-C</strong> code to{" "}
          <strong>Swift</strong>
        </li>
        <li>
          Make code reviews and publish releases to TestFlight and the App
          Store
        </li>
        <li>
          Implement screen recording with <strong>ReplayKit</strong> framework
        </li>
        <li>Maintain dependencies and manage the CocoaPods setup</li>
      </Bullets>
    </>
  ),
};
