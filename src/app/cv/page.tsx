import { Mail, Download, Github, Linkedin, Phone, Play } from 'lucide-react';
import { siteConfig } from '@/lib/config';
import CodeTag from '@/components/CodeTag';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CV - Yurii Voievodin",
  description: "Experienced software developer with 10+ years of expertise in web and mobile apps development. Proficient in Swift, modern iOS frameworks, AI-powered development tools, and implementing AI/ML features in applications.",
  openGraph: {
    title: "CV - Yurii Voievodin",
    description: "Experienced software developer with 10+ years of expertise in web and mobile apps development. Proficient in Swift, modern iOS frameworks, AI-powered development tools, and implementing AI/ML features in applications.",
    url: `${siteConfig.url}/cv`,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "CV - Yurii Voievodin",
    description: "Experienced software developer with 10+ years of expertise in web and mobile apps development. Proficient in Swift, modern iOS frameworks, AI-powered development tools, and implementing AI/ML features in applications.",
  },
};

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto px-4">
    {/* Header */}
    <header className="mb-12">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
    <div className="flex-1">
    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
    {siteConfig.author.name}
    </h1>

    <div className="flex flex-col gap-2 text-zinc-300">
    <a href={`mailto:${siteConfig.author.email}`} className="flex items-center space-x-2 hover:text-violet-400 transition-colors">
    <Mail size={16} />
    <span className="text-sm sm:text-base">{siteConfig.author.email}</span>
    </a>
    <a href="https://github.com/yurii-voievodin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-violet-400 transition-colors">
    <Github size={16} />
    <span className="text-sm sm:text-base">yurii-voievodin</span>
    </a>
    <a href="https://www.linkedin.com/in/yurivoevodin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-violet-400 transition-colors">
    <Linkedin size={16} />
    <span className="text-sm sm:text-base">yurivoevodin</span>
    </a>
    <a href="https://telegram.me/yurii_voievodin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-violet-400 transition-colors">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
    <span className="text-sm sm:text-base">yurii_voievodin</span>
    </a>
    <a href="tel:+359877185470" className="flex items-center space-x-2 hover:text-violet-400 transition-colors">
    <Phone size={16} />
    <span className="text-sm sm:text-base">+359 87 7185470</span>
    </a>
    </div>
    </div>

    <div className="flex flex-col gap-3 w-full md:w-auto">
    <div className="flex flex-col sm:flex-row gap-3">
    <a href="/Yurii_Voievodin_CV.pdf" target='_blank' className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-violet-500/20 cursor-pointer flex-1 sm:flex-none">
    <Download size={16} />
    <span>Download PDF</span>
    </a>
    <a href="/projects" className="flex items-center justify-center space-x-2 px-4 py-3 bg-zinc-700/60 text-zinc-200 rounded-lg border border-zinc-600/50 hover:bg-zinc-700 hover:border-zinc-500/50 transition-all cursor-pointer flex-1 sm:flex-none">
    <span>View Projects</span>
    </a>
    </div>
    <a
      href="https://www.youtube.com/watch?v=rAGeM6KuwWE"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-3 py-2 rounded-lg border border-zinc-700/50 hover:border-violet-500/50 bg-zinc-800/50 hover:bg-zinc-800 transition-all w-full sm:w-fit"
    >
      <div className="relative flex-shrink-0 w-20 h-12 rounded overflow-hidden">
        <img
          src="https://img.youtube.com/vi/rAGeM6KuwWE/mqdefault.jpg"
          alt="Watch my intro video on YouTube"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <Play size={14} className="text-white ml-0.5" fill="white" />
        </div>
      </div>
      <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Watch my intro</span>
    </a>
    </div>

    </div>

    </header>

    {/* Professional Summary */}
    <section className="md:bg-zinc-800/50 md:rounded-lg md:shadow-lg md:border md:border-zinc-700/50 px-0 py-4 md:p-8 mb-4 md:mb-8 border-b border-zinc-700/30 md:border-b-0 pb-6 md:pb-8">
    <h2 className="text-2xl font-bold text-zinc-100 mb-4">
    Professional Summary
    </h2>
    <p className="text-zinc-300 leading-relaxed">Senior iOS / Lead iOS Engineer with 10+ years of experience building and scaling production iOS
applications. Proficient in Swift programming language, modern iOS frameworks, and agile
methodologies. Proven experience leading technical initiatives in large commercial products
(VistaCreate, VistaPrint).</p>
    <p className="text-violet-300 leading-relaxed">I&apos;m using AI-based development tools and implementing AI/ML features in production applications.</p>
    <p className="text-zinc-300 leading-relaxed mt-4">
    <span className="font-semibold">Languages:</span>
    </p>
    <ul className="list-disc pl-6 text-zinc-300">
    <li>English — Upper-Intermediate (B2)</li>
    <li>Ukrainian — Native</li>
    </ul>
    </section>

    {/* Experience Section */}
    <section className="md:bg-zinc-800/50 md:rounded-lg md:shadow-lg md:border md:border-zinc-700/50 px-0 py-4 md:p-8 mb-4 md:mb-8 border-b border-zinc-700/30 md:border-b-0 pb-6 md:pb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Experience</h2>

      <div className="space-y-6">
        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            iOS Developer
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://hooh.com" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              Hooh
            </a> <span className="text-zinc-400 mb-2">• 2025 - 2026</span>
          </p>
          <p className="text-zinc-300 mt-2 mb-2">
            AI-powered document management iOS app where users upload documents and interact with them through real-time AI chat for analysis, summarization, and Q&A.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Built iOS app with <CodeTag>Swift</CodeTag>, <CodeTag>UIKit</CodeTag> and <CodeTag>SwiftUI</CodeTag></li>
            <li>Implemented real-time AI chat</li>
            <li>Set up subscriptions and paywalls with <CodeTag>RevenueCat</CodeTag></li>
            <li>Implemented Auth0 OAuth 2.0 authentication and <CodeTag>CoreData</CodeTag> persistence</li>
            <li>Integrated analytics: PostHog (feature flags, session replay), AppsFlyer, TikTok Business SDK</li>
            <li>Set up Xcode Cloud CI/CD with Development, Staging, and Production targets</li>
          </ul>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#16february2022" className="text-zinc-100 hover:text-violet-300 hover:underline">
              Lead iOS Engineer
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://www.vistaprint.com" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              VistaPrint
            </a>
            {' + '}
            <a href="https://create.vista.com" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              VistaCreate
            </a> <span className="text-zinc-400 mb-2">• 2022 - 2025</span>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Implemented modular architecture with <CodeTag>CocoaPods</CodeTag> modules for feature isolation</li>
            <li>Built A/B testing experiments via <CodeTag>Firebase</CodeTag> that improved onboarding and retention metrics</li>
            <li>Integrated analytics: <CodeTag>Firebase</CodeTag>, <CodeTag>AppsFlyer</CodeTag>, <CodeTag>Iterable</CodeTag>, <CodeTag>Segment</CodeTag></li>
            <li>Developed product page UI, design editor image capabilities (cropping, filters, color extraction)</li>
            <li>Increased unit test coverage with <CodeTag>XCTest</CodeTag> across core business logic modules</li>
            <li>Built onboarding screens with pagination and paywall using <CodeTag>SwiftUI</CodeTag> components</li>
          </ul>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#january2022" className="text-zinc-100 hover:text-violet-300 hover:underline">
              Software Engineer (iOS, Swift)
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://www.clowder.com" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              Clowder
            </a> <span className="text-zinc-400 mb-2">• 2020 - 2022</span>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Customized and deployed iOS apps for 50+ organizations from a shared Core product</li>
            <li>Worked with MVVM + Interactor architecture across 16 internal frameworks</li>
            <li>Enabled/disabled product modules and configured custom fields per client</li>
            <li>Maintained <CodeTag>GitFlow</CodeTag> discipline across a large multi-repo setup, resolving merge conflicts</li>
            <li>Proposed and implemented changes to the Core product</li>
            <li>Managed CI/CD pipeline with <CodeTag>GitLab CI</CodeTag>, <CodeTag>Fastlane</CodeTag>, and <CodeTag>AppCenter</CodeTag> distribution</li>
          </ul>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#10february2021" className="text-zinc-100 hover:text-violet-300 hover:underline">
              iOS Developer
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://coachnow.io" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              CoachNow
            </a>
            {' (part time)'} <span className="text-zinc-400 mb-2">• 2020 - 2021</span>
          </p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Supported and extended a legacy <CodeTag>Objective-C</CodeTag> + <CodeTag>Swift</CodeTag> hybrid codebase (~688 source files)</li>
            <li>Rewrote legacy <CodeTag>Objective-C</CodeTag> code to <CodeTag>Swift</CodeTag> incrementally</li>
            <li>Implemented screen recording with <CodeTag>ReplayKit</CodeTag> framework</li>
            <li>Conducted code reviews and managed TestFlight / App Store releases</li>
          </ul>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#march2020" className="text-zinc-100 hover:text-violet-300 hover:underline">
              iOS, iPadOS and macOS Apps Developer
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://www.appdev.academy" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              App Dev Academy
            </a> <span className="text-zinc-400 mb-2">• 2016 - 2020</span>
          </p>
          <p className="text-zinc-300 mt-2">Participated in development, publication and support of 10+ iOS apps and one macOS app.</p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Create apps from scratch and design apps architecture</li>
            <li>Create user interface with Storyboards and XIB files</li>
            <li>Use <CodeTag>UIKit</CodeTag> and create custom UI components</li>
            <li>Design a database architecture and use <CodeTag>Core Data</CodeTag> framework</li>
            <li>Write code on <CodeTag>Swift</CodeTag> programming language</li>
            <li>Implement networking layer - REST API</li>
            <li>Integrate third-party dependencies</li>
          </ul>
        </div>

        <hr className="border-zinc-700 my-8" />

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#january2016" className="text-zinc-100 hover:text-violet-300 hover:underline">
              PHP Developer
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://soloway.tech" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              bvblogic
            </a> <span className="text-zinc-400 mb-2">• 2012 - 2016</span>
          </p>
          <p className="text-zinc-300 mt-2">
            I build websites on <CodeTag>PHP</CodeTag> programming language, using frameworks such as{' '}
            <CodeTag>Laravel</CodeTag>, <CodeTag>Kohana</CodeTag>,{' '}
            <CodeTag>Codeigniter</CodeTag>, <CodeTag>Yii</CodeTag>.
            Also, I used <CodeTag>CSS3</CodeTag>, <CodeTag>HTML5</CodeTag>,{' '}
            <CodeTag>jQuery</CodeTag>, and <CodeTag>Bootstrap</CodeTag> for the frontend.
            First experience of building and supporting commercial projects.
          </p>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#20112012" className="text-zinc-100 hover:text-violet-300 hover:underline">
              Senior Laboratory
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            Laboratory of distance learning
            {' at '}
            <a href="https://int.sumdu.edu.ua/en/" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              Sumy State University
            </a> <span className="text-zinc-400 mb-2">• 2012 - 2013</span>
          </p>
          <p className="text-zinc-300 mt-2">
            I worked on simple training apps for students on <CodeTag>Java</CodeTag> and an internal framework.
            Also convert Microsoft Word documents to <CodeTag>HTML</CodeTag> pages as part of my job there.
          </p>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#20072008" className="text-zinc-100 hover:text-violet-300 hover:underline">
              Laboratory Technician
            </a>
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            <a href="https://kfk.sumdu.edu.ua" rel="nofollow" target="_blank" className="text-violet-400 hover:text-violet-300">
              Polytechnic College of Konotop Institute of the SSU
            </a> <span className="text-zinc-400 mb-2">• 2007 - 2008</span>
          </p>
          <p className="text-zinc-300 mt-2">At college, my job was to configure, maintain and update PCs on Windows 98 and XP. Also, I helped students to make homework done.</p>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section className="md:bg-zinc-800/50 md:rounded-lg md:shadow-lg md:border md:border-zinc-700/50 px-0 py-4 md:p-8 mb-4 md:mb-8 border-b border-zinc-700/30 md:border-b-0 pb-6 md:pb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Skills</h2>
      <div className="space-y-6">
        {[
          { title: "Core iOS", skills: ["Swift", "UIKit", "SwiftUI", "Auto Layout", "Core Data", "SwiftData"] },
          { title: "Architecture & Tooling", skills: ["Modular architecture", "CI/CD", "GitFlow", "Unit Testing", "SPM", "CocoaPods"] },
          { title: "Monetization & Analytics", skills: ["In-App Purchases", "RevenueCat", "Firebase", "AppsFlyer", "Iterable", "A/B Testing"] },
          { title: "AI/ML", skills: ["CoreML", "Foundation Models", "ML Kit", "Cloud AI APIs", "AI-assisted development tools"] },
          { title: "Programming Languages", skills: ["Swift", "Objective-C", "JavaScript", "Ruby", "PHP", "Python", "Shell script"] },
        ].map((item) => (
          <div key={item.title} className="pl-0">
            <h3 className="text-lg font-semibold text-zinc-100">{item.title}</h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-zinc-700/50 text-zinc-300 text-sm rounded-full border border-zinc-600/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Education Section */}
    <section className="md:bg-zinc-800/50 md:rounded-lg md:shadow-lg md:border md:border-zinc-700/50 px-0 py-4 md:p-8 mb-4 md:mb-8 border-b border-zinc-700/30 md:border-b-0 pb-6 md:pb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">
        Education
      </h2>

      <div className="space-y-6">
        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            Bachelor of Computer Science
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            Sumy State University <span className="text-zinc-400 mb-2">• 2009 - 2012</span>
          </p>
          <p className="text-zinc-300 mb-3">
            Specialization: Software Engineering
          </p>
        </div>

        <div className="pl-0">
          <h3 className="text-lg font-semibold text-zinc-100">
            Junior Specialist
          </h3>
          <p className="text-violet-400 font-medium mb-1">
            Polytechnic College of Konotop Institute of the Sumy State University <span className="text-zinc-400 mb-2">• 2007 - 2008</span>
          </p>
          <p className="text-zinc-300 mb-3">
            Field: Computer Maintenance, Intelligent Systems, and Networks
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

