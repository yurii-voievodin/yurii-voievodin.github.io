'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Plus } from 'lucide-react';
import { useState } from 'react';
import DetailModal from '@/components/DetailModal';

export default function ProjectsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetailPage, setSelectedDetailPage] = useState<string>('');

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
                    {/* VistaCreate */}
                    <div className="bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/70 transition-all duration-300">
                        <div className="p-6 md:p-10 text-zinc-100">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="inline-block bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                                    February 2022 - August 2023
                                </div>
                                <button
                                    onClick={() => handleDetailClick('vistacreate-details')}
                                    className="p-3 bg-zinc-700/50 hover:bg-zinc-600/70 border-2 border-zinc-500/50 hover:border-zinc-400/70 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
                                    aria-label="View details"
                                >
                                    <Plus className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Worked on <strong>iOS app</strong> at <a target="_blank" href="https://create.vista.com" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">VistaCreate</a>
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Role and responsibilities:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Built completely new <strong>Home</strong> screen</li>
                                            <li>Wrote <strong>unit tests</strong> to cover app business logic</li>
                                            <li>Built app with <strong>modular architecture</strong></li>
                                            <li>Work with analytics services: <strong>Firebase</strong>, <strong>AppsFlyer</strong>, <strong>Iterable</strong></li>
                                            <li>Implemented <strong>A/B tests</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/detail-pages/VistaCreateDetails/VistaCreate Home Screen.png"
                                            alt="VistaCreate Home Screen"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg w-full h-auto"
                                            priority={false}
                                        />
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Supported 50+ <strong>iOS apps</strong> at <a href="https://www.clowder.com/" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">Clowder</a>. First fully remote job.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Role and responsibilities:</p>
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
                                            Part-time fully remote work on <strong>iOS and iPadOS app</strong> at <a href="https://coachnow.io" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">CoachNow</a>
                                        </p>
                                        <p className="text-zinc-300">
                                            <a href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">CoachNow app</a> with a long history (8+ years) and mixed codebase of <code className="bg-zinc-900 px-2 py-1 rounded">Objective-C</code> and <code className="bg-zinc-900 px-2 py-1 rounded">Swift</code> with lots of dependencies.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Main responsibility:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Support the CoachNow app and add new features</li>
                                            <li>Maintain legacy code and manage dependencies</li>
                                            <li>Work with mixed <code className="bg-zinc-900 px-2 py-1 rounded">Objective-C</code> and <code className="bg-zinc-900 px-2 py-1 rounded">Swift</code> codebase</li>
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <p className="text-zinc-300">
                                        Started working on the <em>"Look Up"</em> Native <strong>iOS app</strong>, written in <code className="bg-zinc-900 px-2 py-1 rounded">Swift</code>. Used <strong>API</strong> on remote server for receive a list of products and perform search by query or filters.
                                    </p>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/lookup.jpg"
                                            alt="lookup"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                            priority={false}
                                        />
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started a new personal project
                                        </p>
                                        <p className="text-zinc-300">
                                            <a href="https://github.com/university-my/ios" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">My University</a> web service and API on <code className="bg-zinc-900 px-2 py-1 rounded">Rails</code> framework.
                                            <br />
                                            In this day, I made my first commit 🎉
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>iOS app written in <code className="bg-zinc-900 px-2 py-1 rounded">Swift</code></li>
                                            <li>User interface created with Storyboards and <strong>SwiftUI</strong></li>
                                            <li><strong>MVC</strong> architecture (with Dependency Injection)</li>
                                            <li>URLSession for network requests to <strong>REST API</strong></li>
                                            <li><code className="bg-zinc-900 px-2 py-1 rounded">CoreData</code> as offline storage</li>
                                            <li><a href="https://rubyonrails.org" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">Ruby On Rails</a> for backend</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/my_university_landing.png"
                                            alt="my_university_landing"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                            priority={false}
                                        />
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on the <strong>iOS app</strong> <a href="https://apps.apple.com/app/proveit-real-money-games/id1219398758" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">PROVEIT</a>
                                        </p>
                                        <p className="text-zinc-300">
                                            TechCrunch about PROVEIT - <a href="https://techcrunch.com/2018/06/18/proveit-trivia" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">Bet money on yourself with Proveit, the 1-vs-1 trivia app</a>
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Technical info:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Written in <code className="bg-zinc-900 px-2 py-1 rounded">Swift</code></li>
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
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/proveit.jpg"
                                            alt="proveit"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                            priority={false}
                                        />
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on a new <strong>iOS app</strong>
                                        </p>
                                        <p className="text-zinc-300">
                                            <a href="https://apps.apple.com/app/chronograph/id1281918814" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">Chronograph</a>
                                            <br />
                                            In-house application (App Dev Academy) with time tracking and task management.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">My role:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design an architecture and create an app from scratch</li>
                                            <li>Design a database architecture and use <code className="bg-zinc-900 px-2 py-1 rounded">CoreData</code> framework</li>
                                            <li>Implement custom layout of the "timer" and "clock"</li>
                                            <li><strong>iPad version</strong> of the app</li>
                                            <li><strong>Shared codebase</strong> between iOS and macOS versions of the app</li>
                                            <li>Integration of <strong>Analytics</strong> and <strong>In-App purchases</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/chronograph_ios_collage.jpg"
                                            alt="chronograph_ios_collage"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                            priority={false}
                                        />
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on a new <strong>macOS app</strong>
                                        </p>
                                        <p className="text-zinc-300">
                                            <a href="https://apps.apple.com/ua/app/chronograph-my-productivity/id1316023026?mt=12" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">Chronograph</a>
                                            <br />
                                            In-house application (App Dev Academy) with time tracker that allows you to work by <em>"Pomodoro technique"</em> and plan your tasks.
                                        </p>
                                        <p className="text-zinc-300 font-semibold">Role and responsibilities:</p>
                                        <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
                                            <li>Design an architecture and create an app from scratch</li>
                                            <li>Design a database architecture and use <code className="bg-zinc-900 px-2 py-1 rounded">CoreData</code> framework</li>
                                            <li>Implement background sync with a remote server via the <strong>REST API</strong></li>
                                            <li><code className="bg-zinc-900 px-2 py-1 rounded">Swift</code> codebase and third-party dependencies</li>
                                            <li>Implement <em>"statistics screen"</em> on the <code className="bg-zinc-900 px-2 py-1 rounded">SwiftUI</code></li>
                                            <li>Integration of <strong>Analytics</strong> and <strong>In-App purchases</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/chronograph_old.jpg"
                                            alt="chronograph_old"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                            priority={false}
                                        />
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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                <div className="lg:col-span-2">
                                    <div className="space-y-3">
                                        <p className="text-zinc-300">
                                            Started working on the <a href="https://apps.apple.com/ua/app/id698235283" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">SumDU</a>
                                        </p>
                                        <p className="text-zinc-300">
                                            This is the first <strong>iOS app</strong>, published in the App Store, that I'm working on.
                                        </p>
                                        <p className="text-zinc-300">
                                            Source code on GitHub: <a href="https://github.com/appdev-academy/sumdu-ios" className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent underline decoration-violet-400/50 hover:decoration-violet-300/50">sumdu-ios</a>
                                        </p>
                                        <p className="text-zinc-300">
                                            For me, the <em>main challenge</em> here was to implement a <strong>custom navigation bar</strong> with nice and <strong>smooth animation</strong>. And implement a custom layout for the <strong>iPad version</strong> of the app.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/sumdu.png"
                                            alt="sumdu"
                                            width={350}
                                            height={280}
                                            className="rounded-2xl shadow-lg border border-zinc-600/50 w-full h-auto"
                                            priority={false}
                                        />
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
