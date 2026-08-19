import GradientLink from '@/components/GradientLink';
import CodeTag from '@/components/CodeTag';
import ProjectCard from '@/components/projects/ProjectCard';
import DustDriftProjectCard from '@/components/projects/personal/DustDriftCard';
import { wisebudgetScreenshots } from '@/lib/wisebudget-images';
import { headrecorderScreenshots } from '@/lib/headrecorder-images';

export default function PersonalMacOSProjects() {
    return (
        <>
                    {/* Head Recorder */}
                    <ProjectCard date="30 July 2026" tags={['Video', 'macOS']} wideImages={headrecorderScreenshots}>
                        <p className="text-zinc-300">
                            <GradientLink href="/headrecorder">Head Recorder</GradientLink> — macOS app that records your screen and webcam together as a single video, with the camera composited as a customizable bubble (circle or rectangle, resized, repositioned, and mirrored). Recording and processing happen entirely on-device.
                        </p>

                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                            <li>Written in <strong>Swift</strong>, <strong>SwiftUI</strong> + <strong>AppKit</strong> (~13 source files)</li>
                            <li>Screen capture via <strong>ScreenCaptureKit</strong> (<CodeTag>SCStream</CodeTag> → <CodeTag>AVAssetWriter</CodeTag>); camera and mic captured independently via <CodeTag>AVCaptureSession</CodeTag> / <CodeTag>AVCaptureMovieFileOutput</CodeTag></li>
                            <li>Live camera bubble rendered in a floating borderless <CodeTag>NSWindow</CodeTag> (<CodeTag>CameraPreviewWindowController</CodeTag>) with <CodeTag>CAShapeLayer</CodeTag> circle/rounded-rect masking, excluded from the screen capture stream itself so it never appears twice</li>
                            <li>Post-recording compositing via <CodeTag>AVMutableComposition</CodeTag> and a custom <CodeTag>AVVideoCompositing</CodeTag> (<CodeTag>OverlayCompositor</CodeTag>) — CoreImage radial-gradient-feathered circle mask or rounded-rect mask, affine-transform mirroring, and host-time-offset clock sync between the two source tracks</li>
                            <li>Shared <CodeTag>OverlayGeometry</CodeTag> math drives both the live preview window and the final render, so the preview is what you get</li>
                            <li><strong>Zero third-party dependencies</strong> — built entirely with native Apple frameworks</li>
                            <li>Localized in <strong>English</strong> and <strong>Ukrainian</strong> via String Catalogs</li>
                            <li>Deployment target: <strong>macOS 13.0+</strong></li>
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <GradientLink href="/headrecorder">Landing page</GradientLink>
                            <GradientLink href="https://apps.apple.com/us/app/head-recorder-screen-webcam/id6796696067" target="_blank">Mac App Store</GradientLink>
                        </div>
                    </ProjectCard>

                    <DustDriftProjectCard />

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
