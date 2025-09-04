'use client';

import Image from 'next/image';

export default function WorkingPlacesDetails() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-10 text-center">
                    <h1 className="text-4xl font-bold mb-3">🏠 Working Spaces Journey</h1>
                    <p className="text-xl opacity-90">From First Computer to Modern Home Office</p>
                </div>

                {/* Content */}
                <div className="p-10 text-zinc-100">
                    {/* About Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            My Development Environment Evolution
                        </h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Throughout my software development journey, my working environment has evolved significantly - from shared office spaces to a fully remote home office setup. Each workspace represents a different chapter in my career, with unique equipment, locations, and memories that shaped my professional growth.
                        </p>
                    </div>

                    {/* Current Setup */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            Current Setup (2024)
                        </h2>
                        <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                                <div>
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                        🏡 Home Office - Ivano-Frankivsk, Ukraine
                                    </h3>
                                    <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                        My current fully remote workspace designed for maximum productivity. Features a clean, minimalist setup with dual monitors, ergonomic peripherals, and optimized lighting for long development sessions.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['MacBook Pro', 'External Monitors', 'Mechanical Keyboard', 'Wireless Mouse', 'Studio Lighting'].map((item) => (
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
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            Remote Work Evolution (2021)
                        </h2>
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
                                        The transition to Apple's M1 chip marked a revolution in my development workflow. The MacBook Air M1 delivered unprecedented performance and battery life, enabling true mobility in my work. This setup coincided with the shift to fully remote work.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['MacBook Air M1', 'iOS Development', 'Swift', 'Xcode', 'Remote Work'].map((item) => (
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

                    {/* Historic Workplaces */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            Historic Workplaces
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* App Dev Academy Office */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    🏢 App Dev Academy Office
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    Traditional office environment where I developed 10+ iOS apps over 4 years. Collaborative workspace with dedicated development machines and testing devices.
                                </p>
                                <div className="flex justify-center mb-4">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/office.jpg"
                                            alt="App Dev Academy Office"
                                            width={300}
                                            height={200}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                        />
                                    </div>
                                </div>
                                <div className="text-sm text-teal-300">2016-2020 • Sumy, Ukraine</div>
                            </div>

                            {/* BVBLogic Office */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    💻 BVBLogic Office
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    My first professional development environment as a PHP developer. Open office layout with shared workstations, where I learned the fundamentals of commercial web development.
                                </p>
                                <div className="flex justify-center mb-4">
                                    <div className="relative w-full max-w-sm">
                                        <Image
                                            src="/timeline/bvblogic.jpg"
                                            alt="BVBLogic Office"
                                            width={300}
                                            height={200}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                        />
                                    </div>
                                </div>
                                <div className="text-sm text-teal-300">2012-2016 • Sumy, Ukraine</div>
                            </div>
                        </div>
                    </div>

                    {/* Equipment Milestones */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            Equipment Milestones
                        </h2>
                        <div className="space-y-6">
                            {/* First MacBook */}
                            <div className="bg-gradient-to-r from-zinc-800/80 to-zinc-700/80 p-6 rounded-2xl border border-zinc-600/30">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                                    <div className="lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-2 text-zinc-100">
                                            🍎 First MacBook (2013) - The Game Changer
                                        </h3>
                                        <p className="text-zinc-300 opacity-90 leading-relaxed mb-3">
                                            Purchasing my first MacBook Pro 13" with macOS Mavericks was a pivotal moment in my career. This machine opened the door to iOS development and marked my transition from web to mobile development.
                                        </p>
                                        <div className="text-sm text-cyan-300">
                                            💡 This purchase completely changed my career trajectory towards iOS development
                                        </div>
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

                    {/* Technical Evolution */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            Development Environment Evolution
                        </h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {['MS-DOS', 'Windows 98/XP', 'macOS', 'PHP', 'Java', 'Objective-C', 'Swift', 'iOS Development', 'Remote Work', 'Home Office'].map((tech) => (
                                <span 
                                    key={tech}
                                    className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-500 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Workspace Philosophy */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-cyan-400 mb-5 border-b-3 border-cyan-500 pb-1 inline-block">
                            Workspace Philosophy
                        </h2>
                        <p className="text-zinc-300 mb-6 leading-relaxed">
                            My approach to workspace design has evolved from simply having a place to code to creating environments that inspire creativity and maintain focus. Each setup reflects the technology and work culture of its era - from shared office spaces to the flexibility of remote work.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                            The transition to remote work has allowed me to optimize every aspect of my development environment, from lighting and ergonomics to the precise positioning of monitors and input devices. This evolution continues as technology and work practices advance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}