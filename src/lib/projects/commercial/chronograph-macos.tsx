import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { chronographMacOSImages } from "@/lib/commercial-projects-images";

export const chronographMacos: Project = {
  slug: "chronograph-macos",
  name: "Chronograph (macOS)",
  summary:
    "macOS counterpart of the Pomodoro timer app, sharing a codebase and Core Data schema with the iOS version.",
  date: "March 2016",
  tags: ["Productivity"],
  images: chronographMacOSImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://apps.apple.com/ua/app/chronograph-my-productivity/id1316023026?mt=12">
          Chronograph
        </GradientLink>{" "}
        — macOS counterpart of the iOS Pomodoro timer app (App Dev Academy).
        Native Cocoa/AppKit interface with window-based navigation, custom
        analog and digital clock views, and shared business logic with the iOS
        version.
      </p>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, Cocoa/AppKit with{" "}
          <CodeTag>NSWindowController</CodeTag>-based navigation and
          Storyboards
        </li>
        <li>
          <strong>Shared codebase</strong> with iOS — all models, networking,
          Core Data, state machines, managers, and helpers via{" "}
          <code>#if os(macOS)</code> guards
        </li>
        <li>
          Custom <CodeTag>MacAnalogClockView</CodeTag> and{" "}
          <CodeTag>MacDigitalClockView</CodeTag> — native AppKit timer
          rendering
        </li>
        <li>
          Statistics screen built with <strong>SwiftUI</strong> — embedded in
          the Cocoa app
        </li>
        <li>
          Same <strong>Core Data</strong> schema and{" "}
          <strong>SynchronizationManager</strong> as iOS for cross-device sync
        </li>
        <li>
          <strong>In-App Subscriptions</strong> (StoreKit) +{" "}
          <strong>Firebase</strong> analytics + <strong>Crashlytics</strong>
        </li>
        <li>
          Deployment target: <strong>macOS 10.14+</strong>
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>Design app architecture and build from scratch</li>
        <li>
          Design Core Data schema and implement background sync with REST API
        </li>
        <li>Implement statistics screen in SwiftUI</li>
        <li>
          Manage shared Swift codebase and third-party dependencies across
          platforms
        </li>
        <li>Integration of analytics and In-App Subscriptions</li>
      </Bullets>
    </>
  ),
};
