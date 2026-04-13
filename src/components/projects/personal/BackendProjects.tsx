import Image from 'next/image';
import GradientLink from '@/components/GradientLink';
import CodeTag from '@/components/CodeTag';
import ProjectCard from '@/components/projects/ProjectCard';

export default function PersonalBackendProjects() {
    return (
        <>
                    {/* My University Server */}
                    <ProjectCard
                        date="24 December 2018"
                        tags={['Backend']}
                        showSeparator={false}
                        footer={
                            <div className="mt-6">
                                <Image
                                    src="/projects/MyUniversity/landing.png"
                                    alt="My University landing page"
                                    width={1280}
                                    height={800}
                                    className="w-full rounded-2xl"
                                />
                            </div>
                        }
                    >
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
                    </ProjectCard>
        </>
    );
}
