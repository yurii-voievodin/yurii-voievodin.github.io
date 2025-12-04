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
        { src: '/projects/Chronograph-macOS/ch-pomodoro.png', alt: 'Chronograph Pomodoro' },
        { src: '/projects/Chronograph-macOS/ch-tasks.png', alt: 'Chronograph Tasks' },
        { src: '/projects/Chronograph-macOS/ch-stats.png', alt: 'Chronograph Statistics' },
        { src: '/projects/Chronograph-macOS/ch-settings.png', alt: 'Chronograph Settings' },
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
                        A collection of iOS, macOS, and web applications I've developed throughout my career. Each project represents different technologies, challenges, and learning experiences.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {/* VistaPrint */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="inline-block bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm font-medium border border-violet-500/30">
                                    August 2023 - December 2025
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300"><GradientLink href="https://www.vistaprint.com" target="_blank">VistaPrint</GradientLink> <strong>iOS app</strong>, my role and responsibilities:</p>

                                        <p className="text-zinc-300 font-semibold">Infrastructure & Quality</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Comprehensive unit test coverage for core modules</li>
                                            <li>Localization support with string catalogs</li>
                                            <li>Logging system for analytics and debugging</li>
                                            <li>Fastlane setup for build automation</li>
                                        </ul>

                                        <p className="text-zinc-300 font-semibold">Product Display & Selection</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Product page with preview images, pricing, and discount information</li>
                                            <li>Color selection interface with scrollable swatches and visual feedback</li>
                                            <li>Product options and variations (size, quantity, material)</li>
                                            <li>Stock availability filtering</li>
                                        </ul>

                                        <p className="text-zinc-300 font-semibold">Design Editor - Image Capabilities</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Image replacement with automatic size adjustment and cropping</li>
                                            <li>Color adjustment tools (hue, saturation, lightness sliders)</li>
                                            <li>Image filters and color extraction features</li>
                                        </ul>

                                        <p className="text-zinc-300 font-semibold">Account Management</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Account screen with user settings</li>
                                            <li>Web view integration for account-related pages</li>
                                            <li>Links to cart, orders, and support resources</li>
                                        </ul>


                                    </div>
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
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300"><GradientLink href="https://create.vista.com" target="_blank">VistaCreate</GradientLink> <strong>iOS app</strong>, my role and responsibilities:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Wrote <strong>unit tests</strong> using <GradientLink href="https://developer.apple.com/documentation/xctest" target="_blank">XCTest</GradientLink> framework to cover app business logic</li>
                                            <li>Built an app with <strong>modular architecture</strong> with <GradientLink href="https://guides.cocoapods.org/making/private-cocoapods.html" target="_blank">Private Pods</GradientLink> and <GradientLink href="https://guides.cocoapods.org/making/development-cocoapods.html" target="_blank">Development Pods</GradientLink></li>
                                            <li>Implement logging of analytics events with <strong>Firebase</strong>, <strong>AppsFlyer</strong>, <strong>Iterable</strong></li>
                                            <li>Implemented <strong>A/B tests</strong> using <GradientLink href="https://firebase.google.com/docs/ab-testing/" target="_blank">Firebase</GradientLink></li>
                                            <li>Built new Home screen with caching and data loading with <CodeTag>Swift Concurency</CodeTag></li>
                                            <li>Build <strong>Onboarding</strong> screens with pagination and a paywall</li>
                                            <li>Create a <CodeTag>SwiftUI</CodeTag> slider component that used to control removal or restoring a photos background</li>
                                            <li>Implemnent UI and logic of desing export in diffrent formats</li>
                                        </ul>
                                    </div>
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
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Supported 50+ <strong>iOS apps</strong> at <GradientLink href="https://www.clowder.com/">Clowder</GradientLink>, my role and responsibilities:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Create clones (copies) of the <strong>Core</strong> product</li>
                                            <li>Add customizations to the clones and enable/disable product modules</li>
                                            <li>Integrate user profile with custom fields to clones</li>
                                            <li>Work with Git by <strong>GitFlow</strong> methodology, resolve merge conflicts</li>
                                            <li>Support existing apps and update to the latest <strong>Core</strong> version</li>
                                            <li>Create proposals and make changes in the <strong>Core</strong> product</li>
                                        </ul>
                                    </div>
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Part-time fully remote work on <strong>iOS and iPadOS app</strong> at <GradientLink href="https://coachnow.io">CoachNow</GradientLink>
                                        </p>
                                        <p className="text-zinc-300">
                                            <GradientLink href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472">CoachNow app</GradientLink> with a long history (8+ years) and mixed codebase of <CodeTag>Objective-C</CodeTag> and <CodeTag>Swift</CodeTag> with lots of dependencies.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Main responsibility:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Support the CoachNow app and add new features</li>
                                            <li>Maintain legacy code and manage dependencies</li>
                                            <li>Work with mixed <CodeTag>Objective-C</CodeTag> and <CodeTag>Swift</CodeTag> codebase</li>
                                        </ul>
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
                                        Started working on the <em>"Look Up"</em> Native <strong>iOS app</strong>, written in <CodeTag>Swift</CodeTag>. Used <strong>API</strong> on remote server for receive a list of products and perform search by query or filters.
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
                                            <GradientLink href="https://github.com/university-my/ios">My University</GradientLink> web service and API on <CodeTag>Rails</CodeTag> framework.
                                            <br />
                                            In this day, I made my first commit 🎉
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>iOS app written in <CodeTag>Swift</CodeTag></li>
                                            <li>User interface created with Storyboards and <strong>SwiftUI</strong></li>
                                            <li><strong>MVC</strong> architecture (with Dependency Injection) and <strong>MVVM</strong> architecture</li>
                                            <li>URLSession for network requests to <strong>REST API</strong></li>
                                            <li><CodeTag>CoreData</CodeTag> as offline storage</li>
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
                                            <li>Written in <CodeTag>Swift</CodeTag></li>
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
                                        <p className="text-zinc-300 font-semibold">My role:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design an architecture and create an app from scratch</li>
                                            <li>Design a database architecture and use <CodeTag>CoreData</CodeTag> framework</li>
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
                                            <li>Design a database architecture and use <CodeTag>CoreData</CodeTag> framework</li>
                                            <li>Implement background sync with a remote server via the <strong>REST API</strong></li>
                                            <li><CodeTag>Swift</CodeTag> codebase and third-party dependencies</li>
                                            <li>Implement <em>"statistics screen"</em> on the <CodeTag>SwiftUI</CodeTag></li>
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
