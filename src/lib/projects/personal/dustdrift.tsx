import type { Project } from "@/types/project";
import GradientLink from "@/components/GradientLink";
import CodeTag from "@/components/CodeTag";
import Bullets from "@/components/ui/Bullets";
import { dustdriftScreenshots } from "@/lib/dustdrift-images";

export const dustdrift: Project = {
  slug: "dustdrift",
  name: "DustDrift",
  summary:
    "2D top-down exploration and survival game across four connected biomes, for iPhone, iPad, and Mac.",
  date: "25 September 2025",
  tags: ["Game", "iOS", "macOS"],
  wideImages: dustdriftScreenshots,
  content: (
    <>
      <p className="text-zinc-300">
        <GradientLink href="/dustdrift">DustDrift</GradientLink> — 2D top-down
        exploration and survival game inspired by No Man&apos;s Sky, made for
        iPhone and iPad. Stranded on an alien world, players mine resources
        from destructible rocks, craft gear and weapons, and fight off hostile
        robots across four connected biomes reached through portals. Pre-order
        live on the App Store for iPhone, iPad, and Mac, arriving December 10,
        2026.
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
          <strong>Four biomes</strong> (Desert, Water, Ice, Shardlands)
          connected by portals, each with a JSON-authored map and its own
          docked ship for crafting and storage
        </li>
        <li>
          <strong>Combat</strong> — four <CodeTag>HeldItem</CodeTag>/
          <CodeTag>CombatTool</CodeTag> weapons (blaster, heavy rifle, gravity
          gun, cutter) and grid-based enemy AI (RoboSpider, Brawler, Sentinel)
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
