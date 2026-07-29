import GradientLink from '@/components/GradientLink';
import CodeTag from '@/components/CodeTag';
import ProjectCard from '@/components/projects/ProjectCard';
import { dustdriftScreenshots } from '@/lib/dustdrift-images';
import { wisebudgetScreenshots } from '@/lib/wisebudget-images';

export default function PersonalMacOSProjects() {
    return (
        <>
                    {/* DustDrift */}
                    <ProjectCard date="25 September 2025" tags={['Game', 'macOS']} wideImages={dustdriftScreenshots}>
                        <p className="text-zinc-300">
                            <GradientLink href="/dustdrift">DustDrift</GradientLink> — 2D top-down exploration and survival game. Stranded on an alien world, players mine resources from destructible rocks, craft gear and weapons, and fight off hostile robots across four connected biomes reached through portals. Pre-order live on the Mac App Store, arriving December 10, 2026.
                        </p>

                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                            <li>Written in <strong>Swift</strong>, <strong>SpriteKit</strong> — no SwiftUI, no <CodeTag>.sks</CodeTag> scene files (~330 source files across the shared game code, iOS, and Mac targets)</li>
                            <li><strong>Single shared codebase</strong> for iPhone/iPad and native Mac targets — a thin <CodeTag>GameScene</CodeTag> orchestrator delegates to per-scene subsystems (<CodeTag>WorldStreamer</CodeTag>, <CodeTag>InputDispatcher</CodeTag>, <CodeTag>PortalCoordinator</CodeTag>, <CodeTag>PhysicsContactRouter</CodeTag>) and manager classes (camera, UI, lighting, hints)</li>
                            <li><strong>Four biomes</strong> (Desert, Water, Ice, Shardlands) connected by portals, each with a JSON-authored map and its own docked ship for crafting and storage</li>
                            <li><strong>Combat</strong> — four <CodeTag>HeldItem</CodeTag>/<CodeTag>CombatTool</CodeTag> weapons (blaster, heavy rifle, gravity gun, cutter) and grid-based enemy AI (RoboSpider, Brawler, Sentinel)</li>
                            <li><strong>Crafting, inventory, and equipment</strong> systems with a 3D-printer progression loop, plus destructible/mineable rock and ice formations</li>
                            <li><strong>Procedural, asset-free audio</strong> — an <strong>AVAudioEngine</strong> PCM synth engine with per-biome music moods and a named melody pool, no bundled audio files</li>
                            <li>Procedural rock/terrain texture generation and shader-based ambient overlays (<CodeTag>ShaderLib</CodeTag>)</li>
                            <li>Touch controls via <CodeTag>GCVirtualController</CodeTag>, plus keyboard and game controller support</li>
                            <li><strong>Framework-agnostic core</strong> (<CodeTag>Sources/Core</CodeTag>) shared between the Xcode app and an experimental SwiftPM + Raylib port that runs natively on Linux</li>
                            <li><strong>Swift Testing</strong> framework for unit tests, plus an RPC-driven regression suite exercising crafting/inventory/combat end-to-end; <strong>Xcode Cloud</strong> CI</li>
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <GradientLink href="/dustdrift">Landing page</GradientLink>
                            <GradientLink href="https://apps.apple.com/app/id6758512309" target="_blank">Mac App Store</GradientLink>
                        </div>
                    </ProjectCard>

                    {/* WiseBudgeter */}
                    <ProjectCard date="20 March 2025" tags={['Finance', 'macOS']} wideImages={wisebudgetScreenshots}>
                        <p className="text-zinc-300">
                            <GradientLink href="/wisebudget">WiseBudgeter</GradientLink> — macOS app for personal finance management. Track expenses and income across multiple currencies, sync transactions from <GradientLink href="https://wise.com">Wise</GradientLink> and <GradientLink href="https://www.monobank.ua">Monobank</GradientLink>, plan monthly budgets per category, and visualize spending with charts and analytics.
                        </p>

                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                            <li>Written in <strong>Swift</strong>, <strong>SwiftUI</strong> with <CodeTag>NavigationSplitView</CodeTag> three-column layout (~64 source files)</li>
                            <li><strong>SwiftData</strong> persistence — 6 models (<CodeTag>Expense</CodeTag>, <CodeTag>Income</CodeTag>, <CodeTag>ExpenseCategory</CodeTag>, <CodeTag>IncomeCategory</CodeTag>, <CodeTag>BudgetPlan</CodeTag>, <CodeTag>BudgetPlanItem</CodeTag>) with relationship cascades and predicate-based filtering</li>
                            <li><strong>Dual bank integration</strong> — <strong>Wise</strong> and <strong>Monobank</strong> API clients with OAuth tokens stored in <strong>Keychain</strong>, automatic transaction import with deduplication via <CodeTag>externalId</CodeTag></li>
                            <li><strong>Multi-currency support</strong> — foreign exchange tracking with base currency conversion, rate caching via <CodeTag>ExchangeRateService</CodeTag> with 24-hour TTL</li>
                            <li><strong>Charts</strong> framework for category-based spending visualization and budget vs. actual progress tracking</li>
                            <li><strong>CSV import/export</strong> — parsers for Wise, Monobank, and generic formats with MCC code mapping and merchant keyword auto-categorization</li>
                            <li><strong>Observable</strong> pattern with <CodeTag>@Observable</CodeTag> macro for reactive services, <strong>async/await</strong> concurrency, <strong>OSLog</strong> structured logging</li>
                            <li><strong>Zero third-party dependencies</strong> — built entirely with native Apple frameworks</li>
                            <li><strong>Swift Testing</strong> framework with in-memory <CodeTag>ModelContainer</CodeTag> for isolated unit tests</li>
                            <li>Deployment target: <strong>macOS 15.2+</strong></li>
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <GradientLink href="/wisebudget">Landing page</GradientLink>
                            <GradientLink href="https://apps.apple.com/us/app/wisebudgeter/id6760725900" target="_blank">Mac App Store</GradientLink>
                        </div>
                    </ProjectCard>
        </>
    );
}
