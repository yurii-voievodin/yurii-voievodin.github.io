import type { Project } from "@/types/project";
import GradientText from "@/components/ui/GradientText";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { proveitImages } from "@/lib/commercial-projects-images";

export const proveit: Project = {
  slug: "proveit",
  name: "PROVEIT",
  summary:
    "Real-money gaming platform with trivia, tournaments, and 8 skill-based arcade games — featured in TechCrunch.",
  date: "March 2017",
  tags: ["Gaming"],
  images: proveitImages,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="https://apps.apple.com/app/proveit-real-money-games/id1219398758">
          PROVEIT
        </GradientLink>{" "}
        — real-money gaming platform where users compete in trivia,
        head-to-head challenges, daily tournaments, and 8 skill-based arcade
        games (Solitaire, Tetris, Flappy Bird, Connect Dots, and more) for
        cash prizes. Featured in{" "}
        <GradientLink href="https://techcrunch.com/2018/06/18/proveit-trivia">
          TechCrunch
        </GradientLink>
        .
      </p>
      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, Storyboard/XIB-based UIKit
          architecture (~624 source files)
        </li>
        <li>
          <strong>MVC</strong> with singleton managers (
          <CodeTag>UserManager</CodeTag>, <CodeTag>GameManager</CodeTag>,{" "}
          <CodeTag>TournamentManager</CodeTag>) and struct-based models via{" "}
          <strong>Marshal</strong> JSON serialization
        </li>
        <li>
          <strong>8 arcade games</strong> — SpriteKit-based engines (Second
          Side RPG with physics, Smashy Bricks, Solitaire, Tetris, Block Star,
          Connect Dots, Flappy Bird, Number Tile)
        </li>
        <li>
          <strong>Alamofire</strong> networking with{" "}
          <strong>RNCryptor</strong> AES-encrypted request/response layer,{" "}
          <CodeTag>Router</CodeTag> enum pattern with 100+ API endpoints
        </li>
        <li>
          <strong>4 build configurations</strong> — localhost, sandbox,
          staging, production — each with own API endpoints, security keys,
          and feature flags
        </li>
        <li>
          <strong>In-App Purchases</strong> (StoreKit) with server-side
          receipt validation and duplicate order detection
        </li>
        <li>
          <strong>Facebook SDK</strong> for social login;{" "}
          <strong>SAMKeychain</strong> for secure token storage
        </li>
        <li>
          Location-based compliance for state-level gambling restrictions
        </li>
        <li>
          Analytics: <strong>Firebase</strong>, <strong>Mixpanel</strong>,{" "}
          <strong>AppsFlyer</strong>; crash reporting via{" "}
          <strong>Fabric/Crashlytics</strong>
        </li>
        <li>Apple Pay, Push Notifications, victory video recording</li>
      </Bullets>

      <hr className="border-[var(--border-subtle)]" />
      <GradientText as="p" className="font-semibold">
        My role:
      </GradientText>
      <Bullets>
        <li>Design app architecture and build from scratch</li>
        <li>
          Implement the networking layer with REST API and AES-encrypted
          communication
        </li>
        <li>
          Build 8 arcade game integrations with tournament and matchmaking
          systems
        </li>
        <li>
          Implement real-money transaction flow with In-App Purchases and
          withdrawals
        </li>
        <li>Pull requests and code reviews</li>
      </Bullets>
    </>
  ),
};
