'use client';

import Image from 'next/image';

export default function WorkingPlacesDetails() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50">

                {/* Content */}
                <div className="p-5 md:p-10 text-zinc-100">
                    {/* About Section */}
                    <div className="mb-10">
                        <p className="text-zinc-300 leading-relaxed">Each workspace represents a different chapter in my career, with unique equipment, locations, and memories.</p>
                    </div>

                    {/* Current Setup */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-violet-400 mb-5 inline-block">
                            Current Setup (2023-2025)
                        </h2>
                        <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                        🏡 Home Office - Ivano-Frankivsk, Ukraine
                                    </h3>
                                    <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">Clean, minimalist setup optimized lighting for long development sessions.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['MacBook Pro', 'External Monitor', 'Magic Keyboard', 'Magic Trackpad', 'Studio Lighting'].map((item) => (
                                            <span 
                                                key={item}
                                                className="bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full text-sm border border-teal-500/30"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="relative max-w-md">
                                        <Image
                                            src="/timeline/home_office_2024.gif"
                                            alt="Home Office Setup 2024"
                                            width={400}
                                            height={300}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Previous Remote Setup */}
                    <div className="mb-10">
                        <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <div className="order-2 lg:order-1 flex justify-center">
                                    <div className="relative max-w-md">
                                        <Image
                                            src="/timeline/home_office_2021.jpg"
                                            alt="Home Office Setup 2021"
                                            width={400}
                                            height={300}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                        />
                                    </div>
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                        🚀 MacBook Air M1 Era - Sumy, Ukraine
                                    </h3>
                                    <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                        The MacBook Air M1 delivered great performance and battery life, enabling true mobility in my work. This setup coincided with the shift to fully remote work.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['MacBook Air M1', 'iPad Air', 'Remote Work'].map((item) => (
                                            <span 
                                                key={item}
                                                className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workspace Evolution Timeline */}
                    <div className="mb-10">
                        <div className="space-y-8">

                            {/* 2017 Setup */}
                            <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-6 rounded-2xl border border-zinc-600/30">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                                    <div className="order-2 lg:order-1 flex justify-center">
                                        <div className="relative max-w-xs">
                                            <Image
                                                src="/detail-pages/WorkingPacesDetails/sumy_2017.jpeg"
                                                alt="Sumy Workspace 2017"
                                                width={250}
                                                height={200}
                                                className="rounded-xl shadow-lg border border-zinc-600/50 hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-2 order-1 lg:order-2">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">2017</span>
                                            <h3 className="text-xl font-semibold text-zinc-100">
                                                💻 Home Workspace
                                            </h3>
                                        </div>
                                        <p className="text-zinc-300 opacity-90 leading-relaxed mb-3">
                                            Home office setup during my App Dev Academy years.
                                        </p>
                                        <div className="text-sm text-cyan-300">
                                            📍 Sumy, Ukraine
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Historic Workplaces */}
                    <div className="mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* App Dev Academy Office */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    🏢 App Dev Academy Office
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    Traditional office environment where I developed 10+ iOS apps over 4 years. Collaborative workspace with dedicated development machines, multiple iOS devices for testing, and a team-oriented atmosphere.
                                </p>
                                <div className="flex justify-center mb-4">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/detail-pages/WorkingPacesDetails/app_dev_academy_office_sumy.jpeg"
                                            alt="App Dev Academy Office Sumy"
                                            width={300}
                                            height={200}
                                            className="rounded-xl shadow-lg border border-zinc-600/50 hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="text-sm text-teal-300">2016-2020 • Sumy, Ukraine</div>
                            </div>

                            {/* BVBLogic Office */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    💻 bvblogic Office
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    My first professional development environment as a PHP developer. Open office layout, here I learned the fundamentals of commercial web development and team collaboration.
                                </p>
                                <div className="flex justify-center mb-4">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/detail-pages/WorkingPacesDetails/sumy_2014_bvblogic.jpeg"
                                            alt="bvblogic Office 2014"
                                            width={300}
                                            height={200}
                                            className="rounded-xl shadow-lg border border-zinc-600/50 hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="text-sm text-teal-300">2012-2016 • Sumy, Ukraine</div>
                            </div>
                        </div>
                    </div>

                    {/* Workspace Evolution Timeline */}
                    <div className="mb-10">
                        <div className="space-y-8">
                            {/* 2014 Apartments Setup */}
                            <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-6 rounded-2xl border border-zinc-600/30">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                                    <div className="lg:col-span-2">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">2014</span>
                                            <h3 className="text-xl font-semibold text-zinc-100">
                                                🏠 Early Home Office Setup
                                            </h3>
                                        </div>
                                        <p className="text-zinc-300 opacity-90 leading-relaxed mb-3">
                                            My first dedicated home workspace in Sumy apartments. Simple but functional setup where I started transitioning from web to mobile development. This was around the time I got my first MacBook and began exploring iOS development.
                                        </p>
                                        <div className="text-sm text-cyan-300">
                                            📍 Sumy, Ukraine • Web to mobile development transition
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative max-w-xs">
                                            <Image
                                                src="/detail-pages/WorkingPacesDetails/sumy_2014_appartments.jpeg"
                                                alt="Sumy Apartments 2014"
                                                width={250}
                                                height={200}
                                                className="rounded-xl shadow-lg border border-zinc-600/50 hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Equipment Milestones */}
                    <div className="mb-10">
                        <div className="space-y-6">
                            {/* First MacBook */}
                            <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-6 rounded-2xl border border-zinc-600/30">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                                    <div className="lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                                            🍎 First MacBook (2013) - The Game Changer
                                        </h3>
                                        <p className="text-zinc-300 opacity-90 leading-relaxed mb-3">
                                            Purchasing my first MacBook Pro 13 with macOS Mavericks was a pivotal moment in my career. This machine opened the door to iOS development and marked my transition from web to mobile development.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative max-w-xs">
                                            <Image
                                                src="/timeline/macbook_2013.jpg"
                                                alt="First MacBook 2013"
                                                width={250}
                                                height={200}
                                                className="rounded-xl shadow-lg border border-zinc-600/50"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* First Computer */}
                            <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-6 rounded-2xl border border-zinc-600/30">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    💾 Intel 486 Notebook (2004) - Where It All Began
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-3">
                                    My journey started with an already outdated Intel 486 notebook running MS-DOS and Norton Commander. Despite being old technology even at that time, it sparked my interest in computers and programming.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['MS-DOS', 'Norton Commander', 'Intel 486', 'First Computer Experience'].map((item) => (
                                        <span 
                                            key={item}
                                            className="bg-zinc-600/30 text-zinc-300 px-3 py-1 rounded-full text-sm border border-zinc-500/30"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workspace Philosophy */}
                    <div className="mb-6">
                        <p className="text-zinc-300 mb-6 leading-relaxed">
                            My approach to workspace design has evolved from simply having a place to code to creating environments that inspire creativity and maintain focus. Each setup reflects the technology and work culture of its era - from shared office spaces to the flexibility of remote work.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}