import type { Project } from "@/types/project";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { wavefallScreenshots } from "@/lib/wavefall-images";

export const wavefall: Project = {
  slug: "wavefall",
  name: "Wavefall",
  summary:
    "Hero defense game with turn-based tactical combat: a rogue AI sends robots through a portal, and you hold the arena alone. For iPhone, iPad, and Mac.",
  date: "25 September 2025",
  tags: ["Game", "iOS", "macOS"],
  wideImages: wavefallScreenshots,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="/wavefall">Wavefall</GradientLink> — hero defense
        game with turn-based tactical combat, drawn in a dimetric view with
        rigged 3D characters and Blender-modeled 3D environments. An AI has
        slipped out of control and sends its robots through a portal in waves,
        and the player holds the arena alone. Between rounds there is a minute
        to mine resources and print a new weapon on the 3D printer. Every
        cleared map opens the portal to the next one, and the Spider Tank
        waits on the last. Pre-order live on the App Store for iPhone, iPad,
        and Mac, arriving December 10, 2026.
      </p>

      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong> on <strong>SpriteKit</strong> and{" "}
          <strong>SceneKit</strong> — no SwiftUI, no{" "}
          <CodeTag>.sks</CodeTag> scene files (~1,000 source files across the
          shared core, the iOS and Mac app, and the Raylib port)
        </li>
        <li>
          <strong>Hybrid 2D/3D rendering</strong> — rigged 3D characters
          (Operative, Robo-Spider, Sentinel, Spider Tank) play 70+ USDZ
          animation clips, rendered live through <CodeTag>SCNRenderer</CodeTag>{" "}
          into Metal textures inside the SpriteKit scene; props, terrain, walls
          and decorations are modeled in <strong>Blender</strong> and rendered
          into dimetric sprites by Python scripts
        </li>
        <li>
          <strong>Single shared codebase</strong> for iPhone/iPad and native
          Mac targets — a thin <CodeTag>GameScene</CodeTag> orchestrator
          delegates to per-scene subsystems (<CodeTag>WorldStreamer</CodeTag>,{" "}
          <CodeTag>InputDispatcher</CodeTag>,{" "}
          <CodeTag>PortalCoordinator</CodeTag>,{" "}
          <CodeTag>GridMovementController</CodeTag>) and manager classes
          (camera, UI, lighting, hints)
        </li>
        <li>
          <strong>Arena mode</strong> — 15 rounds of multi-wave fights across
          four JSON-authored maps, driven by{" "}
          <CodeTag>ArenaRounds.json</CodeTag>, with a timed intermission
          between rounds and a Spider Tank boss on the last map
        </li>
        <li>
          <strong>Turn-based combat</strong> on a grid — blaster, heavy rifle,
          gravity gun, cyber cutter, grenades, energy shield and a reprogram
          chip; cover, overwatch, destructible rocks and barrels; hit and crit
          rolls drawn from marble bags; full-turn undo from state snapshots;
          enemy AI that relocates and holds its best range
        </li>
        <li>
          <strong>Crafting, inventory, and equipment</strong> systems with a
          3D-printer progression loop and mineable resource rocks
        </li>
        <li>
          <strong>Dynamic lighting</strong> for dark maps, lamp shadows and an
          optional post-processing pass (<CodeTag>ShaderLib</CodeTag>)
        </li>
        <li>
          <strong>AVAudioEngine</strong> audio — a licensed soundtrack plus
          procedurally synthesized sound effects, no bundled effect files
        </li>
        <li>
          <strong>StoreKit 2</strong> free-to-start model with a Full Version
          unlock, earlier buyers recognized through{" "}
          <CodeTag>AppTransaction</CodeTag>; <strong>Game Center</strong>{" "}
          achievements and leaderboards
        </li>
        <li>
          English and Ukrainian localization from JSON string tables in the
          shared core, switchable at runtime
        </li>
        <li>
          Touch controls with tap-to-move, keyboard and full mouse control on
          Mac, plus game controller support
        </li>
        <li>
          <strong>Framework-agnostic core</strong> (
          <CodeTag>Sources/Core</CodeTag>) shared between the Xcode app and an
          experimental SwiftPM + Raylib port that runs natively on Linux
        </li>
        <li>
          <strong>Swift Testing</strong> suite (~350 test files) and{" "}
          <strong>Xcode Cloud</strong> CI; an agent channel and MCP server let
          AI agents play the game, headless arena runs on parallel hosts
          measure balance, and App Store screenshots and preview videos are
          recorded from scripted scenes
        </li>
      </Bullets>

      <div className="flex flex-wrap gap-3 pt-2">
        <GradientLink href="/wavefall">Landing page</GradientLink>
        <GradientLink
          href="https://apps.apple.com/app/id6758512309"
          target="_blank"
        >
          App Store
        </GradientLink>
      </div>
    </>
  ),
};
