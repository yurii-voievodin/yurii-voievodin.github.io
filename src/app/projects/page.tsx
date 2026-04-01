'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';
import { useState } from 'react';
import DetailModal from '@/components/DetailModal';
import GradientLink from '@/components/GradientLink';
import CodeTag from '@/components/CodeTag';
import PhotoCarousel from '@/components/PhotoCarousel';

export default function ProjectsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetailPage, setSelectedDetailPage] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'commercial' | 'personal'>('commercial');

    // Hooh images for carousel
    const hoohImages = [
        { src: '/projects/Hooh/hooh-home.png', alt: 'Hooh Home' },
        { src: '/projects/Hooh/hooh-paywall.png', alt: 'Hooh Paywall' },
        { src: '/projects/Hooh/hooh-upload-merge.png', alt: 'Hooh Upload & Merge' },
        { src: '/projects/Hooh/hooh-pdf-viewer.png', alt: 'Hooh PDF Viewer' },
        { src: '/projects/Hooh/hooh-chat.png', alt: 'Hooh AI Chat' },
        { src: '/projects/Hooh/hooh-documents.png', alt: 'Hooh Documents' },
        { src: '/projects/Hooh/hooh-account.png', alt: 'Hooh Account' },
        { src: '/projects/Hooh/hooh-security.png', alt: 'Hooh Security' },
    ];

    // VistaCreate images for carousel
    const vistaCreateImages = [
        { src: '/projects/VistaCreate/vc-home.png', alt: 'VistaCreate Home Screen' },
        { src: '/projects/VistaCreate/vc-slider.png', alt: 'VistaCreate Slider' },
        { src: '/projects/VistaCreate/vc-onboarding.png', alt: 'VistaCreate Onboarding' },
        { src: '/projects/VistaCreate/vc-export.png', alt: 'VistaCreate Export' },
        { src: '/projects/VistaCreate/vc-paywall-1.png', alt: 'VistaCreate Paywall 1' },
        { src: '/projects/VistaCreate/vc-paywall-2.png', alt: 'VistaCreate Paywall 2' },
    ];

    // Clowder images for carousel
    const clowderImages = [
        { src: '/projects/Clowder/clowder-chat.jpg', alt: 'Clowder Chat' },
        { src: '/projects/Clowder/clowder-news.jpg', alt: 'Clowder News Feed' },
        { src: '/projects/Clowder/clowder-profile.jpg', alt: 'Clowder User Profile' },
    ];

    // VistaPrint images for carousel
    const vistaPrintImages = [
        { src: '/projects/VistaPrint/vp-product.png', alt: 'VistaPrint Product Page' },
        { src: '/projects/VistaPrint/vp-editor.png', alt: 'VistaPrint Design Editor' },
        { src: '/projects/VistaPrint/vp-account.png', alt: 'VistaPrint Account Screen' },
    ];

    // Look Up images for carousel
    const lookUpImages = [
        { src: '/projects/LookUp/lk-search-results.png', alt: 'Look Up Search Results' },
        { src: '/projects/LookUp/lk-menu.png', alt: 'Look Up Menu' },
        { src: '/projects/LookUp/lk-cart.png', alt: 'Look Up Cart' },
        { src: '/projects/LookUp/lk-login.png', alt: 'Look Up Login' },
    ];

    // CoachNow images for carousel
    const coachNowImages = [
        { src: '/projects/CoachNow/coachnow.png', alt: 'CoachNow Video Playback' },
    ];

    // Solitaire images for carousel
    const solitaireImages = [
        { src: '/projects/Solitaire/solitaire-1.png', alt: 'Solitaire Game' },
        { src: '/projects/Solitaire/solitaire-2.png', alt: 'Solitaire Gameplay' },
        { src: '/projects/Solitaire/solitaire-3.png', alt: 'Solitaire Menu' },
        { src: '/projects/Solitaire/solitaire-4.png', alt: 'Solitaire Screen' },
    ];

    // My University images for carousel
    const myUniversityImages = [
        { src: '/projects/MyUniversity/my.png', alt: 'My University Home' },
        { src: '/projects/MyUniversity/my-sumdu.png', alt: 'My University SumDU' },
        { src: '/projects/MyUniversity/my-page.png', alt: 'My University Page' },
        { src: '/projects/MyUniversity/my-abour.png', alt: 'My University About' },
    ];

    // Proveit images for carousel
    const proveitImages = [
        { src: '/projects/Proveit/Arcade 1.png', alt: 'Proveit Arcade 1' },
        { src: '/projects/Proveit/Arcade 2.png', alt: 'Proveit Arcade 2' },
        { src: '/projects/Proveit/Arcade 3.png', alt: 'Proveit Arcade 3' },
        { src: '/projects/Proveit/Arcade 4.png', alt: 'Proveit Arcade 4' },
        { src: '/projects/Proveit/Arcade 5.png', alt: 'Proveit Arcade 5' },
        { src: '/projects/Proveit/Arcade 6.png', alt: 'Proveit Arcade 6' },
    ];

    // Chronograph iOS images for carousel
    const chronographiOSImages = [
        { src: '/projects/Chronograph-iOS/ch-timer.png', alt: 'Chronograph Timer' },
        { src: '/projects/Chronograph-iOS/ch-pomodoro.png', alt: 'Chronograph Pomodoro' },
        { src: '/projects/Chronograph-iOS/ch-tasks.png', alt: 'Chronograph Tasks' },
        { src: '/projects/Chronograph-iOS/ch-stats.png', alt: 'Chronograph Statistics' },
        { src: '/projects/Chronograph-iOS/ch-settings.png', alt: 'Chronograph Settings' },
    ];

    // Chronograph macOS images for carousel
    const chronographMacOSImages = [
        { src: '/projects/Chronograph-macOS/ch-timer.png', alt: 'Chronograph Timer' },
        { src: '/projects/Chronograph-macOS/ch-pomodoro.png', alt: 'Chronograph Pomodoro' }
    ];

    // SumDU images for carousel
    const sumduImages = [
        { src: '/projects/SumDU/sumdu-day.png', alt: 'SumDU Day Schedule' },
        { src: '/projects/SumDU/sumdu-recent.png', alt: 'SumDU Recent' },
        { src: '/projects/SumDU/sumdu-search.png', alt: 'SumDU Search' },
    ];

    const DomainTags = ({ tags }: { tags: string[] }) => (
        <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
                <span key={tag} className="bg-violet-500/10 text-violet-300 border border-violet-500/20 px-2.5 py-0.5 text-xs rounded-full">
                    {tag}
                </span>
            ))}
        </div>
    );

    const handleDetailClick = (detailPage: string) => {
        setSelectedDetailPage(detailPage);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDetailPage('');
    };

    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto">
                {/* Back to CV Link */}
                <Link
                    href="/cv"
                    className="inline-flex items-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-purple-300 mb-6 transition-all font-medium"
                >
                    <ArrowLeft className="mr-2 text-violet-400 hover:text-violet-300 transition-colors" size={16} />
                    Back to CV
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
                        Projects
                    </h1>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Collection of iOS, macOS, and web applications I've developed throughout my career. Each project represents different technologies, challenges, and learning experiences.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab('commercial')}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === 'commercial'
                                ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                                : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                        }`}
                    >
                        Commercial
                    </button>
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeTab === 'personal'
                                ? 'bg-violet-600/30 text-violet-300 border border-violet-500/50'
                                : 'bg-zinc-800/60 text-zinc-400 border border-zinc-700/50 hover:text-zinc-300 hover:border-zinc-600/50'
                        }`}
                    >
                        Personal
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">

                {activeTab === 'commercial' && (<>
                    {/* Hooh */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    2025 - 2026
                                </div>
                                <DomainTags tags={['AI', 'Productivity']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                            <div className="lg:col-span-2 space-y-3">
                                <p className="text-zinc-300">
                                    <strong>Hooh</strong> — AI-powered document management iOS app. Users can upload documents and interact with them through a real-time AI chat interface for analysis, summarization, and Q&A.
                                </p>
                                <p className="text-zinc-300 font-semibold">Technical info:</p>
                                <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                    <li>Written in <strong>Swift</strong>, UIKit-based architecture with SwiftUI components</li>
                                    <li><strong>MVP + Combine</strong> — presenters expose <CodeTag>@Published</CodeTag> state, views observe via Combine</li>
                                    <li>Real-time streaming chat via custom <strong>SSEClient</strong> (Server-Sent Events) using <CodeTag>AsyncThrowingStream</CodeTag></li>
                                    <li><strong>Moya + Alamofire</strong> networking with token refresh middleware and plugin-based interceptors</li>
                                    <li><strong>CoreData</strong> for local persistence, document versioning, and search filters</li>
                                    <li><strong>PDFKit</strong> and custom PDF editor Swift Package — annotations, form filling, signatures, page management</li>
                                    <li>Voice input via <strong>AVAudioEngine</strong> with <strong>Deepgram API</strong> for speech-to-text transcription</li>
                                    <li><strong>RevenueCat</strong> + <strong>StoreKit</strong> for subscriptions, paywalls, and upload quota enforcement</li>
                                    <li><strong>Auth0</strong> (OAuth 2.0) for authentication</li>
                                    <li>Analytics: <strong>PostHog</strong> (feature flags, session replay), <strong>AppsFlyer</strong> (attribution), <strong>TikTok Business SDK</strong></li>
                                    <li>Localization via <strong>Lokalise</strong> with <CodeTag>.xcstrings</CodeTag> string catalogs</li>
                                    <li>Deployment target: <strong>iOS 18.0+</strong></li>
                                </ul>

                                <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
                                <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                    <li><strong>Xcode Cloud</strong> for continuous integration and delivery — separate workflows for <CodeTag>Development</CodeTag>, <CodeTag>Staging</CodeTag>, and <CodeTag>Production</CodeTag> targets</li>
                                    <li>Code reviews and pull requests via <strong>GitHub</strong></li>
                                </ul>

                                <p className="text-zinc-300 font-semibold">AI-assisted development:</p>
                                <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                    <li>UI implemented directly from <strong>Figma</strong> designs using <strong>MCP</strong> and <strong>Claude Code</strong> — designs translated to production SwiftUI/UIKit code</li>
                                </ul>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <GradientLink href="https://apps.apple.com/us/app/documents-file-manager-hooh/id6751770725" target="_blank">App Store</GradientLink>
                                    <GradientLink href="https://hooh.com" target="_blank">hooh.com</GradientLink>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <div className="w-full max-w-sm">
                                    <PhotoCarousel images={hoohImages} />
                                </div>
                            </div>
                            </div>

                            <div className="mt-6">
                                <Image
                                    src="/projects/Hooh/hooh-appstore.png"
                                    alt="Hooh on the App Store"
                                    width={1280}
                                    height={800}
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* VistaPrint */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    August 2023 - December 2025
                                </div>
                                <DomainTags tags={['E-commerce', 'Shopping']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://www.vistaprint.com" target="_blank">VistaPrint</GradientLink> — e-commerce iOS app for ordering custom printed products. Users browse a product catalog, customize designs in an integrated editor, and place orders with Braintree and PayPal payments.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, UIKit-based with SwiftUI components</li>
                                        <li><strong>MVP + DataProvider</strong> architecture — presenters manage business logic, typed data providers handle fetching and caching</li>
                                        <li><strong>37 local CocoaPods modules</strong> for feature isolation (Editor, Gallery, ProductPage, VistaCart, Storage, Networking, etc.)</li>
                                        <li><strong>Moya + Alamofire</strong> networking with custom <CodeTag>NetworkingProvider</CodeTag> and response caching layer</li>
                                        <li><strong>CoreData</strong> + custom Storage module with <strong>EasyMapping</strong> for data persistence</li>
                                        <li>Advanced design editor — SVG rendering, background removal, image filters, color extraction, interactive zoom and transform gestures</li>
                                        <li><strong>Braintree</strong> + <strong>PayPal</strong> for payments, cart and checkout flow</li>
                                        <li><strong>Auth0</strong> (AppAuth) for authentication</li>
                                        <li><strong>Firebase</strong> Remote Config + A/B testing, <strong>Segment</strong> for analytics</li>
                                        <li><strong>SDWebImage</strong> for image loading/caching, <strong>SkeletonView</strong> for loading states</li>
                                        <li><strong>SwiftLint</strong> with custom rule configuration across all modules</li>
                                        <li>Deployment target: <strong>iOS 18.0+</strong></li>
                                    </ul>

                                    <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li><strong>GitLab CI</strong> with parallel test stages — unit tests, snapshot tests, UI tests, smoke tests, and full test suite on release branches</li>
                                        <li><strong>Fastlane</strong> for build automation, versioning, TestFlight distribution, and Slack notifications</li>
                                        <li>S3 artifact storage with CloudFront invalidation on deploy</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Product page — preview images, pricing, discounts, color swatches, size/quantity/material variations</li>
                                        <li>Design editor image capabilities — replacement, cropping, hue/saturation/lightness sliders, filters, color extraction</li>
                                        <li>Account screen with web view integration and links to cart, orders, support</li>
                                        <li>Unit test coverage for core modules, localization with string catalogs, logging system</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={vistaPrintImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* VistaCreate */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    February 2022 - August 2023
                                </div>
                                <DomainTags tags={['Design Tools']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://create.vista.com" target="_blank">VistaCreate</GradientLink> — professional design and creative content creation iOS app. Users work with thousands of templates, add images, text, shapes and audio, and export designs in multiple formats.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, UIKit-based with SwiftUI components; <strong>Metal</strong> for graphics rendering</li>
                                        <li><strong>MVP/VIPER hybrid</strong> — Router-based navigation, Presenter classes for business logic, ViewControllers as the view layer</li>
                                        <li><strong>21 development CocoaPods modules</strong> — HomeModule, OnboardingModule, BillingService, CremUI, Music.TrimmablePlayer, BlackBox, and more (177 pods total)</li>
                                        <li><strong>Moya + Alamofire</strong> networking with custom Networking module and APICache for response caching</li>
                                        <li><strong>CoreData</strong> for local persistence with custom context management and undo/redo support</li>
                                        <li>Full-featured design editor — layers, text, SVG rendering, filters, transparency, color editing, background removal</li>
                                        <li>Audio editing via <strong>AVFoundation</strong> with custom <CodeTag>TrimmablePlayer</CodeTag> and histogram visualization</li>
                                        <li><strong>StoreKit</strong> + custom BillingService module for subscriptions and in-app purchases</li>
                                        <li><strong>Firebase</strong> — Analytics, Crashlytics, RemoteConfig, A/B testing, DynamicLinks, Push Notifications</li>
                                        <li><strong>AppsFlyer</strong> for attribution, <strong>Iterable</strong> for marketing automation, <strong>Facebook SDK</strong> for social</li>
                                        <li><strong>Auth0</strong> for authentication, <strong>R.swift</strong> for type-safe resources</li>
                                        <li><strong>Lokalise</strong> localization with 25 languages supported</li>
                                        <li>Deployment target: <strong>iOS 15.0+</strong>, iPhone and iPad supported</li>
                                    </ul>

                                    <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li><strong>GitLab CI</strong> with Development and Full test plans, JUnit reporting, IPA builds uploaded to S3 via CloudFront</li>
                                        <li><strong>Fastlane</strong> for TestFlight releases, version management, dSYM uploads, and Lokalise sync</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Unit tests with <strong>XCTest</strong> to cover app business logic</li>
                                        <li>Modular architecture using <strong>Private Pods</strong> and <strong>Development Pods</strong></li>
                                        <li>Analytics event logging — <strong>Firebase</strong>, <strong>AppsFlyer</strong>, <strong>Iterable</strong></li>
                                        <li><strong>A/B tests</strong> via Firebase for onboarding and retention experiments</li>
                                        <li>Home screen with caching and data loading via <strong>Swift Concurrency</strong></li>
                                        <li>Onboarding screens with pagination and paywall</li>
                                        <li>SwiftUI slider component for background removal/restoration</li>
                                        <li>Design export UI and logic across multiple formats</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={vistaCreateImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* Clowder */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    March 2020 - January 2022
                                </div>
                                <DomainTags tags={['Social']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://www.clowder.com/" target="_blank">Clowder</GradientLink> — white-label community and event management platform. The Core iOS app is cloned and customized for 50+ organizations, providing event management, community forums, real-time chat, news feeds, resource libraries, and QR-based networking.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, UIKit-based architecture</li>
                                        <li><strong>MVVM + Interactor</strong> — Interactors handle business logic, DataProviders fetch and cache, ViewControllers as the view layer</li>
                                        <li><strong>16 internal frameworks</strong> — CLFoundation, CLBackend, CLServices, CLUIKit, CLAnalytics, CLAdvertisement, CLQRCodeSharing, CLPayments, and more</li>
                                        <li><strong>Alamofire 5</strong> + proprietary <CodeTag>PXRESTRequest</CodeTag> for REST API abstraction; <strong>PromiseKit</strong> for async operations</li>
                                        <li>Proprietary <CodeTag>PXChat</CodeTag> + <strong>Chatto</strong> for real-time messaging</li>
                                        <li><strong>Kingfisher</strong> for image caching, <strong>Eureka</strong> for form building</li>
                                        <li>Push notifications via proprietary <CodeTag>PXPush</CodeTag> and <strong>AppCenter</strong> for crash reporting</li>
                                        <li><strong>Amplitude</strong> for analytics, <strong>KeychainAccess</strong> for secure credential storage</li>
                                        <li>QR code generation and scanning for digital membership cards</li>
                                        <li>Calendar integration, location-based "near me" discovery, rich HTML rendering via <strong>DTCoreText</strong></li>
                                        <li><strong>SwiftGen</strong> for type-safe resources, <strong>Sourcery</strong> for code generation, <strong>SwiftLint</strong> + <strong>SwiftFormat</strong> for code quality</li>
                                        <li>Deployment target: <strong>iOS 13.0+</strong>, iPhone and iPad supported</li>
                                    </ul>

                                    <p className="text-zinc-300 font-semibold">CI/CD & Workflow:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li><strong>GitLab CI</strong> — SwiftLint gate, IPA build, AppCenter for QA, TestFlight for staging, App Store for production</li>
                                        <li><strong>Fastlane</strong> for build automation, versioning, and TestFlight distribution; <strong>YouTrack</strong> integration for automatic issue status updates</li>
                                        <li><strong>GitFlow</strong> branching — develop, feature, release, hotfix, and deploy branches</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Create clones of the Core product and customize them per client (enable/disable modules, custom fields, branding)</li>
                                        <li>Support 50+ existing apps and update them to the latest Core version</li>
                                        <li>Propose and implement changes to the Core product</li>
                                        <li>Resolve merge conflicts and maintain GitFlow discipline across a large multi-repo setup</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={clowderImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* CoachNow */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    February 2021
                                </div>
                                <DomainTags tags={['Sports', 'Video']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472" target="_blank">CoachNow</GradientLink> — coaching and training management platform for coaches and athletes. Users share training posts, videos, and media in dedicated training spaces, communicate through comments and replies, and manage athlete connections.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li><strong>Objective-C + Swift</strong> hybrid codebase (~688 source files) — legacy Objective-C foundation with Swift components added incrementally</li>
                                        <li><strong>MVC with Service Layer</strong> — manager/helper classes (<CodeTag>EDFNetworkClient</CodeTag>, <CodeTag>EDFSyncManager</CodeTag>, <CodeTag>EDFAccountUpdater</CodeTag>) handle business logic alongside UIViewControllers</li>
                                        <li><strong>RestKit</strong> for REST API communication with automatic Core Data object mapping and bi-directional sync</li>
                                        <li><strong>CoreData</strong> (SQLite) for offline-first persistence with migration manager and RestKit integration</li>
                                        <li>Video capture via custom <strong>NextLevel</strong> framework, video trimming (<strong>PryntTrimmerView</strong>), playback, and batch export to <strong>AWS S3</strong></li>
                                        <li><strong>Stripe</strong> for payment processing and subscription management</li>
                                        <li><strong>Firebase</strong> Crashlytics + Performance; <strong>Segment</strong> + <strong>AppsFlyer</strong> for analytics</li>
                                        <li><strong>Intercom</strong> for in-app customer support messaging</li>
                                        <li><strong>Facebook SDK</strong> for social login, <strong>OTP</strong> phone verification, <strong>OAuth2</strong> token-based auth</li>
                                        <li><strong>PureLayout</strong> for programmatic Auto Layout, <strong>SDWebImage</strong> for image caching</li>
                                        <li>Deployment target: <strong>iOS 12.0+</strong>, iPhone and iPad supported</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Support the app and add new features to the mixed Objective-C / Swift codebase</li>
                                        <li>Rewrite legacy <strong>Objective-C</strong> code to <strong>Swift</strong></li>
                                        <li>Make code reviews and publish releases to TestFlight and the App Store</li>
                                        <li>Implement screen recording with <strong>ReplayKit</strong> framework</li>
                                        <li>Maintain dependencies and manage the CocoaPods setup</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={coachNowImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* Solitaire */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    November 2019
                                </div>
                                <DomainTags tags={['Game']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://apps.apple.com/us/app/id1457988491" target="_blank">Solitaire (Classic)</GradientLink> — competitive solitaire card game where users play for cash prizes through tournaments, head-to-head matches, and daily challenges, powered by the PROVEIT platform.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, Storyboard-based UIKit architecture (~343 source files)</li>
                                        <li><strong>MVC/MVVM hybrid</strong> — struct-based models, custom <CodeTag>ViewController</CodeTag> base class, singleton managers (<CodeTag>Store</CodeTag>, <CodeTag>CurrentGame</CodeTag>, <CodeTag>UserData</CodeTag>)</li>
                                        <li>Custom game engine — <strong>CALayer</strong>-based card rendering, undo/redo with move history, score calculation with time bonuses, game state snapshots</li>
                                        <li><strong>ProveItSDK</strong> — internal SDK namespace abstracting tournament system, multiplayer matchmaking, leaderboards, and real-money transactions</li>
                                        <li><strong>4 build targets</strong> — localhost, sandbox, staging, production — each with its own Info.plist configuration</li>
                                        <li><strong>Alamofire</strong> networking with AES-encrypted JSON API communication via custom <CodeTag>Decrypter</CodeTag> layer</li>
                                        <li><strong>In-App Purchases</strong> (StoreKit) + <strong>Google AdMob</strong> for monetization</li>
                                        <li><strong>SwiftLocation</strong> for state-based gameplay compliance and location verification</li>
                                        <li>Analytics: <strong>Firebase</strong>, <strong>Mixpanel</strong>, <strong>AppsFlyer</strong>; crash reporting via <strong>Fabric/Crashlytics</strong></li>
                                        <li><strong>Facebook SDK</strong> for social login; <strong>RNCryptor</strong> (AES) + <strong>SAMKeychain</strong> for secure storage</li>
                                        <li>Push notifications, jailbreak detection, device fingerprinting</li>
                                        <li>Deployment target: <strong>iOS 10.0+</strong>, iPhone and iPad supported</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Design app architecture and build from scratch</li>
                                        <li>Implement the networking layer with REST API and encrypted communication</li>
                                        <li>Pull requests and code reviews</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={solitaireImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* Look Up */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    June 2019
                                </div>
                                <DomainTags tags={['Shopping']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <strong>Look Up</strong> — iOS shopping assistant for searching products, comparing prices across stores, tracking receipts, and managing shared shopping lists. Built for the Saudi market (SAR pricing).
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, Storyboard-based UIKit (13 storyboards, 177 source files)</li>
                                        <li><strong>MVC + DataSource pattern</strong> — explicit DataSource classes for collection/table views, singleton Managers for shared state</li>
                                        <li>Multi-window architecture — separate windows for left menu and right filter panel with animated transitions</li>
                                        <li><strong>Alamofire</strong> + <strong>AlamofireImage</strong> for networking and image caching; token-based auth via <CodeTag>X-Device-Token</CodeTag> stored in <strong>Keychain</strong></li>
                                        <li><strong>Marshal</strong> for bidirectional JSON ↔ Swift struct serialization</li>
                                        <li>Receipt management — local JPEG storage (UUID-named), pending/processed state tracking, image upload pipeline</li>
                                        <li><strong>CoreLocation</strong> for store-based proximity filtering</li>
                                        <li>Phone number verification login flow, shopping list sharing via unique identifiers</li>
                                        <li>Two build targets — localhost and production with conditional API endpoints</li>
                                        <li>Deployment target: <strong>iOS 13.1+</strong>, iPhone and iPad supported</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={lookUpImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* PROVEIT */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    March 2017
                                </div>
                                <DomainTags tags={['Gaming']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://apps.apple.com/app/proveit-real-money-games/id1219398758">PROVEIT</GradientLink> — real-money gaming platform where users compete in trivia, head-to-head challenges, daily tournaments, and 8 skill-based arcade games (Solitaire, Tetris, Flappy Bird, Connect Dots, and more) for cash prizes. Featured in <GradientLink href="https://techcrunch.com/2018/06/18/proveit-trivia">TechCrunch</GradientLink>.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, Storyboard/XIB-based UIKit architecture (~624 source files)</li>
                                        <li><strong>MVC</strong> with singleton managers (<CodeTag>UserManager</CodeTag>, <CodeTag>GameManager</CodeTag>, <CodeTag>TournamentManager</CodeTag>) and struct-based models via <strong>Marshal</strong> JSON serialization</li>
                                        <li><strong>8 arcade games</strong> — SpriteKit-based engines (Second Side RPG with physics, Smashy Bricks, Solitaire, Tetris, Block Star, Connect Dots, Flappy Bird, Number Tile)</li>
                                        <li><strong>Alamofire</strong> networking with <strong>RNCryptor</strong> AES-encrypted request/response layer, <CodeTag>Router</CodeTag> enum pattern with 100+ API endpoints</li>
                                        <li><strong>4 build configurations</strong> — localhost, sandbox, staging, production — each with own API endpoints, security keys, and feature flags</li>
                                        <li><strong>In-App Purchases</strong> (StoreKit) with server-side receipt validation and duplicate order detection</li>
                                        <li><strong>Facebook SDK</strong> for social login; <strong>SAMKeychain</strong> for secure token storage</li>
                                        <li>Location-based compliance for state-level gambling restrictions</li>
                                        <li>Analytics: <strong>Firebase</strong>, <strong>Mixpanel</strong>, <strong>AppsFlyer</strong>; crash reporting via <strong>Fabric/Crashlytics</strong></li>
                                        <li>Apple Pay, Push Notifications, victory video recording</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Design app architecture and build from scratch</li>
                                        <li>Implement the networking layer with REST API and AES-encrypted communication</li>
                                        <li>Build 8 arcade game integrations with tournament and matchmaking systems</li>
                                        <li>Implement real-money transaction flow with In-App Purchases and withdrawals</li>
                                        <li>Pull requests and code reviews</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={proveitImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* Chronograph iOS */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    July 2016
                                </div>
                                <DomainTags tags={['Productivity']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://apps.apple.com/app/chronograph/id1281918814">Chronograph</GradientLink> — in-house Pomodoro timer and task management app (App Dev Academy) that tracks work intervals with configurable work/break cycles, manages tasks with due dates, and syncs data across devices. Shares codebase with the macOS version.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, Storyboard-based UIKit architecture (~164 shared + platform-specific source files)</li>
                                        <li>Custom generic <CodeTag>StateMachine&lt;T&gt;</CodeTag> for timer state transitions — Pomodoro cycles (work → short break → long break) with <CodeTag>willChangeState</CodeTag>/<CodeTag>didChangeState</CodeTag> callbacks</li>
                                        <li><strong>Core Data</strong> persistence — <CodeTag>Task</CodeTag> and <CodeTag>Interval</CodeTag> entities with soft deletion and local change tracking for sync</li>
                                        <li><strong>Alamofire</strong> networking with Router enum pattern — API clients for auth, tasks, intervals, users, and subscriptions</li>
                                        <li><strong>SynchronizationManager</strong> — bi-directional sync with backend, queued export/import, periodic background sync with concurrency guards</li>
                                        <li><strong>Facebook SDK</strong> + email/password auth; <strong>SAMKeychain</strong> for token storage</li>
                                        <li><strong>Charts</strong> library for statistics visualization; <strong>Firebase</strong> analytics; <strong>Fabric/Crashlytics</strong></li>
                                        <li><strong>In-App Subscriptions</strong> (StoreKit) with server-side receipt validation</li>
                                        <li>Local notifications with smart scheduling — generates future notification chains based on current Pomodoro state</li>
                                        <li>Universal app: <strong>iPhone + iPad</strong> support, deployment target <strong>iOS 10.0+</strong></li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Design app architecture and build from scratch</li>
                                        <li>Design Core Data schema and implement bi-directional sync with REST API</li>
                                        <li>Build custom analog/digital clock and timer UI components</li>
                                        <li>Implement shared codebase between iOS and macOS versions</li>
                                        <li>iPad version of the app</li>
                                        <li>Integration of analytics and In-App Subscriptions</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={chronographiOSImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* Chronograph macOS */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    March 2016
                                </div>
                                <DomainTags tags={['Productivity']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://apps.apple.com/ua/app/chronograph-my-productivity/id1316023026?mt=12">Chronograph</GradientLink> — macOS counterpart of the iOS Pomodoro timer app (App Dev Academy). Native Cocoa/AppKit interface with window-based navigation, custom analog and digital clock views, and shared business logic with the iOS version.
                                    </p>
                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, Cocoa/AppKit with <CodeTag>NSWindowController</CodeTag>-based navigation and Storyboards</li>
                                        <li><strong>Shared codebase</strong> with iOS — all models, networking, Core Data, state machines, managers, and helpers via <code>#if os(macOS)</code> guards</li>
                                        <li>Custom <CodeTag>MacAnalogClockView</CodeTag> and <CodeTag>MacDigitalClockView</CodeTag> — native AppKit timer rendering</li>
                                        <li>Statistics screen built with <strong>SwiftUI</strong> — embedded in the Cocoa app</li>
                                        <li>Same <strong>Core Data</strong> schema and <strong>SynchronizationManager</strong> as iOS for cross-device sync</li>
                                        <li><strong>In-App Subscriptions</strong> (StoreKit) + <strong>Firebase</strong> analytics + <strong>Crashlytics</strong></li>
                                        <li>Deployment target: <strong>macOS 10.14+</strong></li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Design app architecture and build from scratch</li>
                                        <li>Design Core Data schema and implement background sync with REST API</li>
                                        <li>Implement statistics screen in SwiftUI</li>
                                        <li>Manage shared Swift codebase and third-party dependencies across platforms</li>
                                        <li>Integration of analytics and In-App Subscriptions</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={chronographMacOSImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* SumDU */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    November 2015
                                </div>
                                <DomainTags tags={['Productivity']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
                                    <p className="text-zinc-300">
                                        <GradientLink href="https://apps.apple.com/ua/app/id698235283">SumDU</GradientLink> — schedule viewer for Sumy State University (<GradientLink href="https://www.appdev.academy">App Dev Academy</GradientLink>). Students and teachers search for groups, teachers, or auditoriums and view class schedules with calendar export. My first iOS app published in the App Store.
                                    </p>
                                    <p className="text-zinc-300">
                                        Source code on GitHub: <GradientLink href="https://github.com/appdev-academy/sumdu-ios">sumdu-ios</GradientLink>
                                    </p>

                                    <p className="text-zinc-300 font-semibold">Technical info:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Written in <strong>Swift</strong>, fully programmatic UI — no Storyboards/XIBs, all layouts via <strong>Cartography</strong> DSL (~26 source files)</li>
                                        <li><strong>MVC</strong> architecture with delegate protocols for decoupled communication (<CodeTag>ParserScheduleDelegate</CodeTag>, <CodeTag>ParserDataListDelegate</CodeTag>)</li>
                                        <li><strong>Alamofire</strong> networking + <strong>Fuzi</strong> HTML parsing — scrapes university website to extract groups, teachers, and auditoriums from HTML select dropdowns</li>
                                        <li><strong>SwiftyJSON</strong> for schedule API responses; 30-day rolling window for schedule queries</li>
                                        <li><strong>NSCoding</strong> persistence via <CodeTag>NSKeyedArchiver</CodeTag> — offline caching of schedules, search history, and directory data in UserDefaults</li>
                                        <li>Adaptive UI: <strong>UINavigationController</strong> on iPhone, <strong>UISplitViewController</strong> on iPad with orientation support</li>
                                        <li>Localization: English, Ukrainian, Russian</li>
                                        <li>Calendar export via <strong>iCal</strong> format</li>
                                    </ul>

                                    <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                        <li>Implement custom navigation bar with smooth animations</li>
                                        <li>Build adaptive layout for iPad with UISplitViewController</li>
                                        <li>Implement search with alphabetical sections and real-time filtering</li>
                                    </ul>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={sumduImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)}

                {activeTab === 'personal' && (<>
                    {/* My University */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    24 December 2018
                                </div>
                                <DomainTags tags={['Productivity']} />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2 space-y-3">
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
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={myUniversityImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="md:hidden border-violet-500/30 my-2" />

                    {/* My University Server */}
                    <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                        <div className="px-0 py-4 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center gap-3 flex-wrap">
                                <div className="text-sm text-zinc-500 font-medium">
                                    24 December 2018
                                </div>
                                <DomainTags tags={['Backend']} />
                            </div>
                            <div className="grid grid-cols-1 gap-4 items-start">
                                <div className="space-y-3">
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
                                </div>
                            </div>
                            <div className="mt-6">
                                <Image
                                    src="/projects/MyUniversity/landing.png"
                                    alt="My University landing page"
                                    width={1280}
                                    height={800}
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </>)}

                </div>
            </div>

            {/* Detail Modal */}
            <DetailModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                detailPage={selectedDetailPage}
            />
        </div>
    );
}
