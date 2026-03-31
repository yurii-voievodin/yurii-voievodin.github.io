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

                {/* Projects Grid */}
                <div className="space-y-8">
                    {/* Hooh */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="inline-block bg-cyan-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">
                                    2025 - 2026
                                </div>
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
                                    <li>Deployment target: <strong>iOS 17.6+</strong></li>
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

                    {/* VistaPrint */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30">
                                    August 2023 - December 2025
                                </div>
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

                    {/* VistaCreate */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="inline-block bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                                    February 2022 - August 2023
                                </div>
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

                    {/* Clowder */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
                                    March 2020 - January 2022
                                </div>
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

                    {/* CoachNow */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-orange-600/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/30 mb-4">
                                    February 2021
                                </div>
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
                            </div>
                        </div>
                    </div>

                    {/* Solitaire */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 mb-4">
                                    November 2019
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on <GradientLink href="https://apps.apple.com/us/app/id1457988491">Solitaire (Classic)</GradientLink> <strong>iOS app</strong> and <strong>iOS SDK</strong>
                                        </p>
                                        <p className="text-zinc-300">
                                            Classic solitaire game with multiplayer and challenges.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Written in <strong>Swift</strong></li>
                                            <li><strong>UIKit</strong> and custom UI components</li>
                                            <li><strong>iOS SDK</strong> for integrating different types of games with multiplayer features</li>
                                            <li>Apple Pay and Push Notifications integration</li>
                                        </ul>
                                        <p className="text-zinc-300 font-semibold">Role and responsibilities:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design iOS app architecture and create app from scratch</li>
                                            <li>Implement networking layer - <strong>REST API</strong></li>
                                            <li>Make pull requests and code reviews</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={solitaireImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Look Up */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                    June 2019
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <p className="text-zinc-300">
                                        Started working on the <em>"Look Up"</em> Native <strong>iOS app</strong>, written in Swift. Used <strong>API</strong> on remote server for receive a list of products and perform search by query or filters.
                                    </p>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={lookUpImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* My University */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                    24 December 2018
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started a new personal project
                                        </p>
                                        <p className="text-zinc-300">
                                            <GradientLink href="https://github.com/university-my/ios">My University</GradientLink> web service and API on Rails framework.
                                            <br />
                                            In this day, I made my first commit 🎉
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>iOS app written in Swift</li>
                                            <li>User interface created with Storyboards and <strong>SwiftUI</strong></li>
                                            <li><strong>MVC</strong> architecture (with Dependency Injection) and <strong>MVVM</strong> architecture</li>
                                            <li>URLSession for network requests to <strong>REST API</strong></li>
                                            <li>CoreData as offline storage</li>
                                            <li><GradientLink href="https://rubyonrails.org">Ruby On Rails</GradientLink> for backend</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={myUniversityImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PROVEIT */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                    March 2017
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on the <strong>iOS app</strong> <GradientLink href="https://apps.apple.com/app/proveit-real-money-games/id1219398758">PROVEIT</GradientLink>
                                        </p>
                                        <p className="text-zinc-300">
                                            TechCrunch about PROVEIT - <GradientLink href="https://techcrunch.com/2018/06/18/proveit-trivia">Bet money on yourself with Proveit, the 1-vs-1 trivia app</GradientLink>
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Written in Swift</li>
                                            <li>Cocoapods as dependency manager</li>
                                            <li><strong>MVC</strong> architecture</li>
                                            <li>User interface created with <strong>Storyboards</strong> and <strong>XIB</strong> files</li>
                                            <li>Apple Pay and Push Notifications integration</li>
                                            <li>Third-party integrations: <strong>Firebase</strong>, <strong>Crashlytics</strong></li>
                                        </ul>
                                        <p className="text-zinc-300 font-semibold">Role and responsibilities:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design app architecture and create app from scratch</li>
                                            <li>Implement networking layer <strong>REST API</strong></li>
                                            <li>Implement <strong>custom UI</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={proveitImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chronograph iOS */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                    July 2016
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on a new <strong>iOS app</strong>
                                        </p>
                                        <p className="text-zinc-300">
                                            <GradientLink href="https://apps.apple.com/app/chronograph/id1281918814">Chronograph</GradientLink>
                                            <br />
                                            In-house application (App Dev Academy) with time tracking and task management.
                                        </p>
                                        <hr className="border-zinc-700/50" />
                                    <p className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">My role:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design an architecture and create an app from scratch</li>
                                            <li>Design a database architecture and use CoreData framework</li>
                                            <li>Implement custom layout of the "timer" and "clock"</li>
                                            <li><strong>iPad version</strong> of the app</li>
                                            <li><strong>Shared codebase</strong> between iOS and macOS versions of the app</li>
                                            <li>Integration of <strong>Analytics</strong> and <strong>In-App purchases</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={chronographiOSImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chronograph macOS */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                    March 2016
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on a new <strong>macOS app</strong>
                                        </p>
                                        <p className="text-zinc-300">
                                            <GradientLink href="https://apps.apple.com/ua/app/chronograph-my-productivity/id1316023026?mt=12">Chronograph</GradientLink>
                                            <br />
                                            In-house application (App Dev Academy) with time tracker that allows you to work by <em>"Pomodoro technique"</em> and plan your tasks.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Role and responsibilities:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design an architecture and create an app from scratch</li>
                                            <li>Design a database architecture and use CoreData framework</li>
                                            <li>Implement background sync with a remote server via the <strong>REST API</strong></li>
                                            <li>Swift codebase and third-party dependencies</li>
                                            <li>Implement <em>"statistics screen"</em> on the SwiftUI</li>
                                            <li>Integration of <strong>Analytics</strong> and <strong>In-App purchases</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={chronographMacOSImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SumDU */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30 mb-4">
                                    November 2015
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                           When I worked with <GradientLink href="https://www.appdev.academy">App Dev Academy</GradientLink> I took my part in <GradientLink href="https://apps.apple.com/ua/app/id698235283">SumDU</GradientLink> iOS app
                                        </p>
                                        <p className="text-zinc-300">
                                            This is the first <strong>iOS app</strong>, published in the App Store, that I'm working on.
                                        </p>
                                        <p className="text-zinc-300">
                                            Source code on GitHub: <GradientLink href="https://github.com/appdev-academy/sumdu-ios">sumdu-ios</GradientLink>
                                        </p>
                                        <p className="text-zinc-300">
                                            For me, the <em>main challenge</em> here was to implement a <strong>custom navigation bar</strong> with nice and <strong>smooth animation</strong>. And implement a custom layout for the <strong>iPad version</strong> of the app.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="w-full max-w-sm">
                                        <PhotoCarousel images={sumduImages} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
