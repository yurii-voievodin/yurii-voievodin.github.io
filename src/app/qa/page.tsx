'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface QAItem {
    question: string;
    answer: React.ReactNode;
    projects: string[];
}

interface QASectionProps {
    title: string;
    items: QAItem[];
}

function QASection({ title, items }: QASectionProps) {
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-100 mb-4">{title}</h2>
            {items.map((item, index) => (
                <QACard key={index} item={item} />
            ))}
        </div>
    );
}

function QACard({ item }: { item: QAItem }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-4 md:px-6 flex items-start justify-between gap-4 text-left"
            >
                <span className="text-zinc-100 font-medium">{item.question}</span>
                <ChevronDown
                    size={18}
                    className={`text-zinc-500 mt-1 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="px-4 pb-4 md:px-6 md:pb-6">
                    <div className="text-zinc-300 leading-relaxed space-y-3">
                        {item.answer}
                    </div>
                    {item.projects.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {item.projects.map((project) => (
                                <span key={project} className="bg-zinc-700/50 text-zinc-400 px-2.5 py-0.5 text-xs rounded-full border border-zinc-600/30">
                                    {project}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

const architectureQA: QAItem[] = [
    {
        question: "What architecture patterns have you used in iOS development?",
        answer: (
            <>
                <p>I have worked with <strong>MVC</strong>, <strong>MVP</strong>, <strong>MVVM</strong>, and <strong>VIPER</strong> hybrids depending on project complexity and team size.</p>
                <p>For larger projects, I use <strong>MVP + Combine</strong> where presenters expose <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-sm">@Published</code> state and views observe reactively. For apps with complex navigation, I've used <strong>VIPER hybrids</strong> with Router-based navigation and dedicated Presenter classes. Simpler projects use <strong>MVC with a service layer</strong> — dedicated DataControllers, LogicControllers, and DataSources to keep ViewControllers thin.</p>
            </>
        ),
        projects: ['Hooh', 'VistaPrint', 'VistaCreate', 'Clowder', 'My University'],
    },
    {
        question: "How do you handle modular architecture in large iOS codebases?",
        answer: (
            <>
                <p>I break monolithic apps into <strong>isolated CocoaPods modules</strong> — each feature or service becomes its own pod with clear API boundaries. This enables parallel development, faster compile times, and independent testing.</p>
                <p>I've managed projects with up to <strong>37 local modules</strong> (Editor, Gallery, ProductPage, Cart, Storage, Networking) and <strong>177 total pods</strong>. Each module has its own SwiftLint configuration, and shared utilities are extracted into foundation frameworks.</p>
            </>
        ),
        projects: ['VistaPrint', 'VistaCreate', 'Clowder'],
    },
    {
        question: "UIKit or SwiftUI — which do you prefer and when?",
        answer: (
            <>
                <p>I use <strong>UIKit as the primary framework</strong> for complex production apps that require fine-grained control over navigation, animations, and legacy compatibility. I integrate <strong>SwiftUI components via UIHostingController</strong> for new screens where declarative UI makes sense — settings, statistics dashboards, onboarding flows.</p>
                <p>For Metal-based rendering or custom design editors, UIKit is essential. For simpler views with reactive state, SwiftUI is more productive. The key is choosing the right tool per screen rather than committing to one framework entirely.</p>
            </>
        ),
        projects: ['Hooh', 'VistaPrint', 'VistaCreate', 'My University', 'Chronograph'],
    },
];

const networkingQA: QAItem[] = [
    {
        question: "How do you structure the networking layer in your iOS apps?",
        answer: (
            <>
                <p>I typically use <strong>Moya + Alamofire</strong> with a Router enum pattern that defines all API endpoints as typed cases. This gives compile-time safety for URLs, HTTP methods, parameters, and headers. For simpler projects, I use <strong>URLSession</strong> with generic <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-sm">{'NetworkClient<Model>'}</code> wrappers and Combine publishers.</p>
                <p>I add <strong>token refresh middleware</strong> as an Alamofire interceptor plugin, response caching layers, and custom error mapping. For real-time features, I've built a custom <strong>SSE (Server-Sent Events) client</strong> using <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-sm">AsyncThrowingStream</code> for streaming AI chat responses.</p>
            </>
        ),
        projects: ['Hooh', 'VistaPrint', 'VistaCreate', 'Clowder', 'My University'],
    },
    {
        question: "How do you handle offline support and data synchronization?",
        answer: (
            <>
                <p>I use <strong>CoreData</strong> as the local persistence layer with a dedicated <strong>SynchronizationManager</strong> that handles bi-directional sync with the backend. Changes are tracked locally with soft deletion flags and change timestamps, then queued for export during periodic sync cycles.</p>
                <p>For offline-first apps, the sync manager uses <strong>concurrency guards</strong> to prevent duplicate operations, handles conflict resolution by timestamp, and supports background sync. The CoreData stack is configured with separate contexts for read and write operations.</p>
            </>
        ),
        projects: ['Chronograph', 'CoachNow', 'My University'],
    },
];

const securityQA: QAItem[] = [
    {
        question: "How do you securely store credentials and tokens on iOS?",
        answer: (
            <>
                <p>I use Apple <strong>Keychain Services</strong> through libraries like <strong>SAMKeychain</strong> and <strong>KeychainAccess</strong>. Authentication tokens, API keys, and user credentials are stored with appropriate access control flags — never in UserDefaults, plist files, or plain text.</p>
                <p>For device-bound authentication, I generate unique <strong>X-Device-Token</strong> identifiers stored in the Keychain, which are sent as HTTP headers to prevent token reuse across devices.</p>
            </>
        ),
        projects: ['PROVEIT', 'Solitaire', 'Clowder', 'Look Up', 'Chronograph'],
    },
    {
        question: "Have you implemented API encryption beyond HTTPS?",
        answer: (
            <>
                <p>Yes. For real-money gaming apps that required additional protection, I implemented <strong>AES encryption</strong> using <strong>RNCryptor</strong> on top of HTTPS. Every request payload and response body is encrypted/decrypted through a custom <strong>Decrypter middleware</strong> in the Alamofire pipeline, making traffic unreadable even if TLS is compromised.</p>
                <p>I also implemented <strong>token refresh middleware</strong> with plugin-based interceptors to ensure tokens are rotated securely without exposing credentials during renewal.</p>
            </>
        ),
        projects: ['PROVEIT', 'Solitaire', 'Hooh'],
    },
    {
        question: "How do you detect jailbroken devices?",
        answer: (
            <>
                <p>I implement multi-layered <strong>jailbreak detection</strong> that checks for common artifacts: existence of Cydia and other jailbreak-related files, ability to write outside the sandbox, presence of suspicious dynamic libraries, and fork() availability. These checks run at launch and periodically during runtime.</p>
                <p>Combined with <strong>device fingerprinting</strong>, this prevents users from manipulating app behavior, creating duplicate accounts, or exploiting promotional offers on compromised devices.</p>
            </>
        ),
        projects: ['Solitaire', 'PROVEIT'],
    },
    {
        question: "How do you handle In-App Purchase security?",
        answer: (
            <>
                <p>I implement <strong>server-side receipt validation</strong> for all StoreKit transactions — the app sends the receipt to the backend which validates it directly with Apple's servers. This prevents receipt forgery and unauthorized access to premium features.</p>
                <p>I also build <strong>duplicate order detection</strong> to reject replayed receipts, and use <strong>RevenueCat</strong> for subscription lifecycle management with server-side entitlement verification. For e-commerce payments, I use tokenized processing through <strong>Braintree</strong> and <strong>PayPal</strong>, ensuring raw card credentials never touch the app layer.</p>
            </>
        ),
        projects: ['PROVEIT', 'Chronograph', 'Hooh', 'VistaPrint', 'Solitaire'],
    },
];

const testingQA: QAItem[] = [
    {
        question: "What is your approach to testing iOS applications?",
        answer: (
            <>
                <p>I write <strong>unit tests with XCTest</strong> covering business logic in presenters, data providers, and service classes. For UI-heavy features, I add <strong>snapshot tests</strong> to catch visual regressions, and <strong>UI tests</strong> for critical user flows like checkout and authentication.</p>
                <p>In CI pipelines, I run tests in parallel stages — <strong>unit tests, snapshot tests, UI tests, and smoke tests</strong> separately, with a full suite on release branches. JUnit reporting feeds into merge request reviews so test failures block merges.</p>
            </>
        ),
        projects: ['VistaPrint', 'VistaCreate', 'Clowder'],
    },
    {
        question: "How do you set up CI/CD for iOS projects?",
        answer: (
            <>
                <p>I've used <strong>Xcode Cloud</strong> with separate workflows for Development, Staging, and Production targets, and <strong>GitLab CI</strong> with parallel test stages and artifact storage on S3/CloudFront.</p>
                <p><strong>Fastlane</strong> handles build automation — versioning, TestFlight distribution, dSYM uploads for crash symbolication, Slack notifications, and localization sync with Lokalise. The pipeline includes a <strong>SwiftLint gate</strong> that blocks PRs with code style violations.</p>
            </>
        ),
        projects: ['Hooh', 'VistaPrint', 'VistaCreate', 'Clowder'],
    },
];

const dataQA: QAItem[] = [
    {
        question: "How do you work with CoreData in production apps?",
        answer: (
            <>
                <p>I design CoreData schemas with <strong>uniqueness constraints, fetch indexes</strong>, and migration support. Entities use soft deletion for sync compatibility, and I set up separate managed object contexts for background writes vs. main thread reads to avoid blocking the UI.</p>
                <p>For complex apps, I build dedicated <strong>DataProvider</strong> classes that abstract CoreData operations behind typed protocols, so the rest of the app never touches <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-sm">NSManagedObjectContext</code> directly. This also makes unit testing persistence logic straightforward with in-memory stores.</p>
            </>
        ),
        projects: ['My University', 'Hooh', 'VistaPrint', 'Chronograph', 'CoachNow'],
    },
    {
        question: "How do you handle concurrency in Swift?",
        answer: (
            <>
                <p>In modern projects, I use <strong>Swift Concurrency</strong> with async/await and <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-sm">AsyncThrowingStream</code> for streaming data (e.g., SSE real-time chat). For reactive state management, I use <strong>Combine</strong> — presenters expose <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-sm">@Published</code> properties and views subscribe to state changes.</p>
                <p>In older codebases, I've used <strong>PromiseKit</strong> for chained async operations and <strong>GCD</strong> for background processing. The choice depends on the project's minimum deployment target and existing patterns.</p>
            </>
        ),
        projects: ['Hooh', 'My University', 'Clowder', 'VistaCreate'],
    },
];

export default function QAPage() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/cv"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    Back to CV
                </Link>

                <div className="space-y-10">
                    <QASection title="Architecture & UI" items={architectureQA} />
                    <QASection title="Networking & Data Sync" items={networkingQA} />
                    <QASection title="Security & Privacy" items={securityQA} />
                    <QASection title="Testing & CI/CD" items={testingQA} />
                    <QASection title="Data & Concurrency" items={dataQA} />
                </div>
            </div>
        </div>
    );
}
