import Image from 'next/image';
import GradientLink from '@/components/GradientLink';
import PhotoCarousel from '@/components/PhotoCarousel';
import CodeTag from '@/components/CodeTag';
import DomainTags from '@/components/projects/DomainTags';

export default function PersonalProjects() {
    const myUniversityImages = [
        { src: '/projects/MyUniversity/my.png', alt: 'My University Home' },
        { src: '/projects/MyUniversity/my-sumdu.png', alt: 'My University SumDU' },
        { src: '/projects/MyUniversity/my-page.png', alt: 'My University Page' },
        { src: '/projects/MyUniversity/my-abour.png', alt: 'My University About' },
    ];

    return (
        <>
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
        </>
    );
}
