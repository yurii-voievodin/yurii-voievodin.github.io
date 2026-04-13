import Image from 'next/image';
import GradientLink from '@/components/GradientLink';
import CodeTag from '@/components/CodeTag';
import ProjectCard from '@/components/projects/ProjectCard';

export default function PersonalProjects() {
    const wiseBudgeterImages = [
        { src: '/projects/WiseBudgeter/Expenses calendar.jpg', alt: 'WiseBudgeter Expenses Calendar' },
        { src: '/projects/WiseBudgeter/Budget planning.jpg', alt: 'WiseBudgeter Budget Planning' },
        { src: '/projects/WiseBudgeter/Bank sync.jpg', alt: 'WiseBudgeter Bank Sync' },
    ];

    const myUniversityImages = [
        { src: '/projects/MyUniversity/my.png', alt: 'My University Home' },
        { src: '/projects/MyUniversity/my-sumdu.png', alt: 'My University SumDU' },
        { src: '/projects/MyUniversity/my-page.png', alt: 'My University Page' },
        { src: '/projects/MyUniversity/my-abour.png', alt: 'My University About' },
    ];

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

            {/* My University */}
            <ProjectCard date="24 December 2018" tags={['Productivity']} images={myUniversityImages}>
                <p className="text-zinc-300">
                    <GradientLink href="https://github.com/university-my/ios">My University</GradientLink> — personal project for browsing university schedules. Students and teachers search for groups, teachers, or classrooms and view class schedules with favorites, sharing, and offline support.
                </p>

                <p className="text-zinc-300 font-semibold">Technical info:</p>
                <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                    <li>Written in <strong>Swift</strong>, UIKit with 13 Storyboards and <strong>SwiftUI</strong> integration via <CodeTag>UIHostingController</CodeTag> (~131 source files)</li>
                    <li><strong>MVC hybrid</strong> with dedicated <strong>DataControllers</strong>, <strong>LogicControllers</strong>, and <strong>DataSources</strong> — protocol-driven design with <CodeTag>ModelProtocol</CodeTag>, <CodeTag>EntityRepresentable</CodeTag>, and <CodeTag>CoreDataEntityProtocol</CodeTag> abstractions</li>
                    <li><strong>URLSession</strong> networking — custom generic <CodeTag>{'NetworkClient<Model>'}</CodeTag> with <strong>Combine</strong>, JSON decoding, and Result-based error handling</li>
                    <li><strong>CoreData</strong> persistence — 5 entities (<CodeTag>UniversityEntity</CodeTag>, <CodeTag>GroupEntity</CodeTag>, <CodeTag>TeacherEntity</CodeTag>, <CodeTag>ClassroomEntity</CodeTag>, <CodeTag>RecordEntity</CodeTag>) with uniqueness constraints and fetch indexes</li>
                    <li><strong>Zero third-party dependencies</strong> — built entirely with native iOS frameworks</li>
                    <li><strong>MetricKit</strong> for crash and performance diagnostics monitoring</li>
                    <li>Localization: <strong>English</strong> and <strong>Ukrainian</strong> with localized storyboards and string files</li>
                    <li>Favorites, search, share URLs, date/time schedule filtering, and "What's New" feature</li>
                    <li>Deployment target: <strong>iOS 16.0+</strong></li>
                </ul>
            </ProjectCard>

            {/* My University Server */}
            <ProjectCard
                date="24 December 2018"
                tags={['Backend']}
                showSeparator={false}
                footer={
                    <div className="mt-6">
                        <Image
                            src="/projects/MyUniversity/landing.png"
                            alt="My University landing page"
                            width={1280}
                            height={800}
                            className="w-full rounded-2xl"
                        />
                    </div>
                }
            >
                <p className="text-zinc-300">
                    <GradientLink href="https://github.com/university-my/server-rails">My University Server</GradientLink> — backend for the My University iOS app powered by <GradientLink href="https://rubyonrails.org">Ruby on Rails</GradientLink>. Aggregates class schedules from 34+ Ukrainian universities via university-specific import services, exposes a REST API for the mobile app, and provides an admin dashboard for data management.
                </p>

                <p className="text-zinc-300 font-semibold">Technical info:</p>
                <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                    <li><strong>Ruby on Rails 7.0</strong> with <strong>Ruby 3.1</strong>, MVC architecture (~256 Ruby source files)</li>
                    <li><strong>PostgreSQL</strong> database with 10+ models — <CodeTag>University</CodeTag>, <CodeTag>Teacher</CodeTag>, <CodeTag>Group</CodeTag>, <CodeTag>Lesson</CodeTag>, <CodeTag>Auditorium</CodeTag>, <CodeTag>Discipline</CodeTag>, <CodeTag>Building</CodeTag>, <CodeTag>Department</CodeTag>, <CodeTag>Faculty</CodeTag>, <CodeTag>Speciality</CodeTag></li>
                    <li><strong>REST API</strong> (<CodeTag>/api/v1/</CodeTag>) with <strong>JBuilder</strong> JSON responses — endpoints for universities, teachers, groups, auditoriums, buildings, and lessons</li>
                    <li><strong>37 service classes</strong> for university-specific schedule import and parsing from external APIs</li>
                    <li><strong>37 background jobs</strong> with <strong>Whenever</strong> cron scheduling for automated data imports</li>
                    <li><strong>ActiveAdmin</strong> dashboard with role-based access control (admin, reader, editor)</li>
                    <li><strong>Devise</strong> for authentication, <strong>Pundit</strong> for authorization policies</li>
                    <li><strong>Ahoy</strong> for event tracking and analytics, <strong>Blazer</strong> for SQL query dashboard</li>
                    <li><strong>FriendlyID</strong> for SEO-friendly URL slugs, <strong>Sitemap Generator</strong> for XML sitemaps</li>
                    <li><strong>Hotwire</strong> (Turbo + Stimulus) for frontend, <strong>Import Maps</strong> for JavaScript</li>
                </ul>
            </ProjectCard>
        </>
    );
}
