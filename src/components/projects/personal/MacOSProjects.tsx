import GradientLink from '@/components/GradientLink';
import CodeTag from '@/components/CodeTag';
import ProjectCard from '@/components/projects/ProjectCard';
import { wiseBudgeterImages } from '@/lib/personal-projects-images';

export default function PersonalMacOSProjects() {
    return (
        <>
                    {/* WiseBudgeter */}
                    <ProjectCard date="20 March 2025" tags={['Finance', 'macOS']} wideImages={wiseBudgeterImages}>
                        <p className="text-zinc-300">
                            <GradientLink href="https://apps.apple.com/us/app/wisebudgeter/id6760725900">WiseBudgeter</GradientLink> — macOS app for personal finance management. Track expenses and income across multiple currencies, sync transactions from <GradientLink href="https://wise.com">Wise</GradientLink> and <GradientLink href="https://www.monobank.ua">Monobank</GradientLink>, plan monthly budgets per category, and visualize spending with charts and analytics.
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
                    </ProjectCard>
        </>
    );
}
