'use client';

import Image from 'next/image';

export default function VistaCreateDetails() {
    return (
        <div className="min-h-screen p-5">
            <div className="max-w-4xl mx-auto bg-zinc-800/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-zinc-700/50">
                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-10 text-center">
                    <h1 className="text-4xl font-bold mb-3">🎨 VistaCreate Journey</h1>
                    <p className="text-xl opacity-90">February 16, 2022 - Present</p>
                </div>

                {/* Content */}
                <div className="p-10 text-zinc-100">
                    {/* About Section */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-1 inline-block">
                            About the Role
                        </h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Joined VistaCreate, formerly known as Crello, as an iOS Developer. VistaCreate is a robust online design platform that empowers thousands of users to create visually appealing content for social media, marketing, and personal projects.
                        </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-1 inline-block">
                            Key Achievements
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                            {/* Featured Home Screen Redesign Card */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    🏠 Home Screen Redesign
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    We completely redesigned and built the new Home screen from scratch, enhancing user engagement and offering a more intuitive creative workflow.
                                </p>
                                <div className="flex justify-center">
                                    <div className="relative w-40">
                                        <Image
                                            src="/detail-pages/VistaCreateDetails/VistaCreate Home Screen.png"
                                            alt="VistaCreate Home Screen Redesign"
                                            width={200}
                                            height={433}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Testing Excellence Card */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    🧪 Testing
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    We’ve implemented unit testing to cover the app’s business logic, ensuring its reliability and reducing the likelihood of production bugs.
                                </p>
                                <div className="flex justify-center">
                                    <div className="relative w-60">
                                        <Image
                                            src="/detail-pages/VistaCreateDetails/VistaCreate Testing.png"
                                            alt="VistaCreate Testing Suite"
                                            width={300}
                                            height={300}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Modular Architecture Card */}
                            <div className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                    🏗️ Modular Architecture
                                </h3>
                                <p className="text-zinc-300 opacity-90 leading-relaxed mb-4">
                                    The app was built with clean, modular architecture principles, which made the codebase more maintainable and scalable.
                                </p>
                                <div className="flex justify-center">
                                    <div className="relative w-60">
                                        <Image
                                            src="/detail-pages/VistaCreateDetails/VistaCreate Modules.png"
                                            alt="VistaCreate Modular Architecture"
                                            width={300}
                                            height={300}
                                            className="rounded-xl shadow-lg border border-zinc-600/50"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Remaining Achievement Cards */}
                            {[
                                {
                                    icon: "📊",
                                    title: "Analytics Integration",
                                    description: "Use analytics services such as Firebase, AppsFlyer, and Iterable to track user behavior and automate marketing efforts."
                                },
                                {
                                    icon: "🔬",
                                    title: "A/B Testing",
                                    description: "Use Firebase A/B testing framework to enable data-driven decisions and optimize user experience through iterative improvements."
                                }
                            ].map((achievement, index) => (
                                <div 
                                    key={index}
                                    className="bg-gradient-to-br from-zinc-700/80 to-zinc-800/80 p-6 rounded-2xl shadow-lg border border-zinc-600/30 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                                        {achievement.icon} {achievement.title}
                                    </h3>
                                    <p className="text-zinc-300 opacity-90 leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical Highlights */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-1 inline-block">
                            Technical Highlights
                        </h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                                {['Swift', 'UIKit', 'Core Data', 'Firebase', 'AppsFlyer', 'Iterable', 'XCTest', 'MVVM', 'Combine'].map((tech) => (
                                    <span 
                                        key={tech}
                                        className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-500 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                    </div>

                    {/* Impact & Growth */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-1 inline-block">
                            Impact & Growth
                        </h2>
                        <p className="text-zinc-300 mb-6 leading-relaxed">
                            Working at VistaCreate has been a valuable experience in my professional growth. The role gave me the opportunity to contribute to a product used by thousands of creators worldwide. Developing features while addressing the technical challenges of mobile applications has been both practical and educational.
                        </p>
                        <p className="text-zinc-300 leading-relaxed">
                                This role expanded my expertise in mobile analytics, A/B testing methodologies, and application development. The collaborative environment and emphasis on data-driven decisions have shaped my approach to iOS engineering.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}