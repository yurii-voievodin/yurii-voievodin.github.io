import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { solitaireImages } from "@/lib/commercial-projects-images";

export const solitaire: Project = {
  slug: "solitaire",
  name: "Solitaire (Classic)",
  summary:
    "Competitive solitaire card game with cash-prize tournaments, head-to-head matches, and daily challenges.",
  date: "November 2019",
  tags: ["Game"],
  images: solitaireImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink
          href="https://apps.apple.com/us/app/id1457988491"
          target="_blank"
        >
          Solitaire (Classic)
        </GradientLink>{" "}
        — competitive solitaire card game where users play for cash prizes
        through tournaments, head-to-head matches, and daily challenges,
        powered by the PROVEIT platform.
      </p>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, Storyboard-based UIKit
          architecture (~343 source files)
        </li>
        <li>
          <strong>MVC/MVVM hybrid</strong> — struct-based models, custom{" "}
          <CodeTag>ViewController</CodeTag> base class, singleton managers (
          <CodeTag>Store</CodeTag>, <CodeTag>CurrentGame</CodeTag>,{" "}
          <CodeTag>UserData</CodeTag>)
        </li>
        <li>
          Custom game engine — <strong>CALayer</strong>-based card rendering,
          undo/redo with move history, score calculation with time bonuses,
          game state snapshots
        </li>
        <li>
          <strong>ProveItSDK</strong> — internal SDK namespace abstracting
          tournament system, multiplayer matchmaking, leaderboards, and
          real-money transactions
        </li>
        <li>
          <strong>4 build targets</strong> — localhost, sandbox, staging,
          production — each with its own Info.plist configuration
        </li>
        <li>
          <strong>Alamofire</strong> networking with AES-encrypted JSON API
          communication via custom <CodeTag>Decrypter</CodeTag> layer
        </li>
        <li>
          <strong>In-App Purchases</strong> (StoreKit) +{" "}
          <strong>Google AdMob</strong> for monetization
        </li>
        <li>
          <strong>SwiftLocation</strong> for state-based gameplay compliance
          and location verification
        </li>
        <li>
          Analytics: <strong>Firebase</strong>, <strong>Mixpanel</strong>,{" "}
          <strong>AppsFlyer</strong>; crash reporting via{" "}
          <strong>Fabric/Crashlytics</strong>
        </li>
        <li>
          <strong>Facebook SDK</strong> for social login;{" "}
          <strong>RNCryptor</strong> (AES) + <strong>SAMKeychain</strong> for
          secure storage
        </li>
        <li>
          Push notifications, jailbreak detection, device fingerprinting
        </li>
        <li>
          Deployment target: <strong>iOS 10.0+</strong>, iPhone and iPad
          supported
        </li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>Design app architecture and build from scratch</li>
        <li>
          Implement the networking layer with REST API and encrypted
          communication
        </li>
        <li>Pull requests and code reviews</li>
      </Bullets>
    </>
  ),
};
