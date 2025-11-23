import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {

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
                                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                        <ReactMarkdown>Started working on the *"Look Up"* Native **iOS app**, written in `Swift`.  Used **API** on remote server for receive a list of products and perform search by query or filters.</ReactMarkdown>
                                    </div>
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
                                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                        <ReactMarkdown>Started a new personal project \n\n[My University](https://github.com/university-my/ios) web service and API on `Rails` framework.\nIn this day, I made my first commit 🎉 \n\n*Technical info:* \n\n\n- iOS app written in `Swift` \n\n- User interface created with Storyboards and **SwiftUI** \n\n- **MVC** architecture (with Dependency Injection) \n\n- URLSession for network requests to **REST API** \n\n- `CoreData` as offline storage \n\n- [Ruby On Rails](https://rubyonrails.org) for backend</ReactMarkdown>
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
                                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                        <ReactMarkdown>Started working on the **iOS app** [PROVEIT](https://apps.apple.com/app/proveit-real-money-games/id1219398758)\n\nTechCrunch about PROVEIT - [Bet money on yourself with Proveit, the 1-vs-1 trivia app](https://techcrunch.com/2018/06/18/proveit-trivia) \n\n*Technical info:* \n\n- Written in `Swift` \n\n- Cocoapods as dependency manager \n\n- **MVC** architecture \n\n- User interface created with **Storyboards** and **XIB** files \n\n- Apple Pay and Push Notifications integration \n\n- Third-party integrations: **Firebase**, **Crashlytics** \n\n *Role and responsibilities:* \n\n- Design app architecture and create app from scratch \n\n- Implement networking layer **REST API** \n\n- Implement **custom UI**</ReactMarkdown>
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
                                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                        <ReactMarkdown>Started working on a new **iOS app** \n\n[Chronograph](https://apps.apple.com/app/chronograph/id1281918814)\n In-house application (App Dev Academy) with time tracking and task management. \n\n*My role:*\n\n- Design an architecture and create an app from scratch\n\n- Design a database architecture and use `CoreData` framework \n\n- Implement custom layout of the "timer" and "clock"\n\n- **iPad version** of the app \n\n- **Shared codebase** between iOS and macOS versions of the app \n\n- Integration of **Analytics** and **In-App purchases**</ReactMarkdown>
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
                                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                        <ReactMarkdown>Started working on a new **macOS app** \n\n[Chronograph](https://apps.apple.com/ua/app/chronograph-my-productivity/id1316023026?mt=12) \n In-house application (App Dev Academy) with time tracker that allows you to work by *"Pomodoro technique"* and plan your tasks. \n\n *Role and responsibilities:* \n\n- Design an architecture and create an app from scratch \n\n- Design a database architecture and use `CoreData` framework\n\n- Implement background sync with a remote server via the **REST API** \n\n- `Swift` codebase and third-party dependencies \n\n- Implement *"statistics screen"* on the `SwiftUI` \n\n- Integration of **Analytics** and **In-App purchases**</ReactMarkdown>
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
                                    <div className="prose prose-invert max-w-none prose-p:text-zinc-300 prose-h2:text-zinc-100 prose-h3:text-zinc-100 prose-strong:text-zinc-100 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:underline prose-a:decoration-violet-400/50 hover:prose-a:decoration-violet-300/50 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                        <ReactMarkdown>Started working on the [SumDU](https://apps.apple.com/ua/app/id698235283) \n This is the first **iOS app**, published in the App Store, that I'm working on. \n Souce code on GitHub \n\n[sumdu-ios](https://github.com/appdev-academy/sumdu-ios) \n\n For me, the *main challenge* here was to implement a **custom navigation bar** with nice and **smooth animation**. And implement a custom layout for the **iPad version** of the app.</ReactMarkdown>
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
        </div>
    );
}
