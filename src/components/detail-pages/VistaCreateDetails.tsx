'use client';

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
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-3 inline-block">
                            About the Role
                        </h2>
                        <p className="text-zinc-300 leading-relaxed">
                            Joined VistaCreate (formerly Crello) as an iOS Developer to revolutionize the mobile design experience. 
                            VistaCreate is a powerful online design platform that empowers millions of users to create stunning visuals 
                            for social media, marketing, and personal projects.
                        </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-3 inline-block">
                            Key Achievements
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                            {[
                                {
                                    icon: "🏠",
                                    title: "Home Screen Redesign",
                                    description: "Completely redesigned and built the new Home screen from scratch, improving user engagement and providing a more intuitive creative workflow."
                                },
                                {
                                    icon: "🧪", 
                                    title: "Testing Excellence",
                                    description: "Implemented comprehensive unit testing suite to cover critical app business logic, ensuring reliability and reducing production bugs."
                                },
                                {
                                    icon: "🏗️",
                                    title: "Modular Architecture", 
                                    description: "Built the app with clean, modular architecture principles, making the codebase more maintainable and scalable for the growing team."
                                },
                                {
                                    icon: "📊",
                                    title: "Analytics Integration",
                                    description: "Integrated multiple analytics services including Firebase, AppsFlyer, and Iterable for comprehensive user behavior tracking and marketing automation."
                                },
                                {
                                    icon: "🔬",
                                    title: "A/B Testing",
                                    description: "Implemented robust A/B testing framework to enable data-driven decisions and optimize user experience through iterative improvements."
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
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-3 inline-block">
                            Technical Highlights
                        </h2>
                        <div className="bg-zinc-900/50 border-l-4 border-pink-500 p-6 rounded-xl mt-6 border border-zinc-700/30">
                            <h3 className="text-xl font-semibold text-pink-400 mb-3">
                                iOS Development Excellence
                            </h3>
                            <p className="text-zinc-300 mb-4 leading-relaxed">
                                Focused on creating a seamless mobile design experience using modern iOS development practices and cutting-edge technologies.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {['Swift', 'UIKit', 'Firebase', 'AppsFlyer', 'Iterable', 'XCTest', 'MVVM', 'Combine'].map((tech) => (
                                    <span 
                                        key={tech}
                                        className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-500 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Impact & Growth */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-pink-400 mb-5 border-b-3 border-pink-500 pb-3 inline-block">
                            Impact & Growth
                        </h2>
                        <p className="text-zinc-300 mb-6 leading-relaxed">
                            Working at VistaCreate has been an incredible journey of professional growth. The role allowed me to work on a 
                            product used by millions of creators worldwide, directly impacting how people express their creativity through 
                            visual design. The experience of building features that enable artistic expression while dealing with the technical 
                            challenges of a high-scale mobile application has been both rewarding and educational.
                        </p>
                        
                        <div className="bg-zinc-900/50 border-l-4 border-pink-500 p-6 rounded-xl border border-zinc-700/30">
                            <h3 className="text-xl font-semibold text-pink-400 mb-3">
                                Professional Development
                            </h3>
                            <p className="text-zinc-300 leading-relaxed">
                                This role significantly expanded my expertise in mobile analytics, A/B testing methodologies, and building 
                                user-centric applications. The collaborative environment and focus on data-driven development has shaped my 
                                approach to iOS engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}