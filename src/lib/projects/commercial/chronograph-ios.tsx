import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { chronographiOSImages } from "@/lib/commercial-projects-images";

export const chronographIos: Project = {
  slug: "chronograph-ios",
  name: "Chronograph (iOS)",
  summary:
    "Pomodoro timer and task management app with cross-device sync, sharing a codebase with the macOS version.",
  date: "July 2016",
  tags: ["Productivity"],
  images: chronographiOSImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://apps.apple.com/app/chronograph/id1281918814">
          Chronograph
        </GradientLink>{" "}
        — in-house Pomodoro timer and task management app (App Dev Academy)
        that tracks work intervals with configurable work/break cycles,
        manages tasks with due dates, and syncs data across devices. Shares
        codebase with the macOS version.
      </p>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, Storyboard-based UIKit
          architecture (~164 shared + platform-specific source files)
        </li>
        <li>
          Custom generic <CodeTag>StateMachine&lt;T&gt;</CodeTag> for timer
          state transitions — Pomodoro cycles (work → short break → long
          break) with <CodeTag>willChangeState</CodeTag>/
          <CodeTag>didChangeState</CodeTag> callbacks
        </li>
        <li>
          <strong>Core Data</strong> persistence — <CodeTag>Task</CodeTag> and{" "}
          <CodeTag>Interval</CodeTag> entities with soft deletion and local
          change tracking for sync
        </li>
        <li>
          <strong>Alamofire</strong> networking with Router enum pattern — API
          clients for auth, tasks, intervals, users, and subscriptions
        </li>
        <li>
          <strong>SynchronizationManager</strong> — bi-directional sync with
          backend, queued export/import, periodic background sync with
          concurrency guards
        </li>
        <li>
          <strong>Facebook SDK</strong> + email/password auth;{" "}
          <strong>SAMKeychain</strong> for token storage
        </li>
        <li>
          <strong>Charts</strong> library for statistics visualization;{" "}
          <strong>Firebase</strong> analytics;{" "}
          <strong>Fabric/Crashlytics</strong>
        </li>
        <li>
          <strong>In-App Subscriptions</strong> (StoreKit) with server-side
          receipt validation
        </li>
        <li>
          Local notifications with smart scheduling — generates future
          notification chains based on current Pomodoro state
        </li>
        <li>
          Universal app: <strong>iPhone + iPad</strong> support, deployment
          target <strong>iOS 10.0+</strong>
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>Design app architecture and build from scratch</li>
        <li>
          Design Core Data schema and implement bi-directional sync with REST
          API
        </li>
        <li>Build custom analog/digital clock and timer UI components</li>
        <li>Implement shared codebase between iOS and macOS versions</li>
        <li>iPad version of the app</li>
        <li>Integration of analytics and In-App Subscriptions</li>
      </Bullets>
    </>
  ),
};
