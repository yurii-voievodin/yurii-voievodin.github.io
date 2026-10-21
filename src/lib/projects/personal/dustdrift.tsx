import type { Project } from "@/types/project";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { dustdriftScreenshots } from "@/lib/dustdrift-images";

export const dustdrift: Project = {
  slug: "dustdrift",
  name: "DustDrift",
  summary:
    "Hero defense game with turn-based tactical combat: waves of enemies on an arena, weapons crafted between waves, for iPhone, iPad, and Mac.",
  date: "25 September 2025",
  tags: ["Game", "iOS", "macOS"],
  wideImages: dustdriftScreenshots,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="/dustdrift">DustDrift</GradientLink> — 2D hero
        defense game with turn-based tactical combat. Waves of enemies attack
        an arena and the player defends it: move, aim and shoot on your turn,
        then the enemies take theirs. A timer runs between waves, so there is
        time to craft better weapons and extra gear. Every round brings
        stronger enemies, and after a set of rounds the game moves on to a new
        map. Pre-order live on the App Store for iPhone, iPad, and Mac,
        arriving December 10, 2026.
      </p>

      <p className="text-zinc-300 font-semibold">Technical info:</p>
      <Bullets>
        <li>
          Written in <strong>Swift</strong>, <strong>SpriteKit</strong> — no
          SwiftUI, no <CodeTag>.sks</CodeTag> scene files (~330 source files
          across the shared game code, iOS, and Mac targets)
        </li>
        <li>
          <strong>Single shared codebase</strong> for iPhone/iPad and native
          Mac targets — a thin <CodeTag>GameScene</CodeTag> orchestrator
          delegates to per-scene subsystems (<CodeTag>WorldStreamer</CodeTag>,{" "}
          <CodeTag>InputDispatcher</CodeTag>,{" "}
          <CodeTag>PortalCoordinator</CodeTag>,{" "}
          <CodeTag>PhysicsContactRouter</CodeTag>) and manager classes
          (camera, UI, lighting, hints)
        </li>
        <li>
          <strong>Arena mode</strong> — round-based waves driven by a JSON
          config (<CodeTag>ArenaRounds.json</CodeTag>) across three
          JSON-authored arena maps, with a timer between waves and a new map
          after each set of rounds
        </li>
        <li>
          <strong>Turn-based combat</strong> on a grid — four{" "}
          <CodeTag>HeldItem</CodeTag>/<CodeTag>CombatTool</CodeTag> weapons
          (blaster, heavy rifle, gravity gun, cutter), shield and overwatch,
          hit and crit rolls drawn from marble bags, and enemy AI (RoboSpider,
          Sentinel)
        </li>
        <li>
          <strong>Crafting, inventory, and equipment</strong> systems with a
          3D-printer progression loop, plus destructible/mineable rock and ice
          formations
        </li>
        <li>
          <strong>Procedural, asset-free audio</strong> — an{" "}
          <strong>AVAudioEngine</strong> PCM synth engine with per-biome music
          moods and a named melody pool, no bundled audio files
        </li>
        <li>
          Procedural rock/terrain texture generation and shader-based ambient
          overlays (<CodeTag>ShaderLib</CodeTag>)
        </li>
        <li>
          Touch controls via <CodeTag>GCVirtualController</CodeTag>, plus
          keyboard and game controller support
        </li>
        <li>
          <strong>Framework-agnostic core</strong> (
          <CodeTag>Sources/Core</CodeTag>) shared between the Xcode app and an
          experimental SwiftPM + Raylib port that runs natively on Linux
        </li>
        <li>
          <strong>Swift Testing</strong> framework for unit tests, plus an
          RPC-driven regression suite exercising crafting/inventory/combat
          end-to-end; <strong>Xcode Cloud</strong> CI
        </li>
      </Bullets>

      <div className="flex flex-wrap gap-3 pt-2">
        <GradientLink href="/dustdrift">Landing page</GradientLink>
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
