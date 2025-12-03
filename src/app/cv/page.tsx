import { cvData } from '@/lib/cv-data';
import { Mail, Download } from 'lucide-react';
import { siteConfig } from '@/lib/config';
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
    <header className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-6 md:p-8 mb-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
    <div className="flex-1">
    <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">
    {siteConfig.author.name}
    </h1>
    <p className="text-lg md:text-xl text-zinc-300 mb-4">
    {siteConfig.author.title}
    </p>
    
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-zinc-300">
    <div className="flex items-center space-x-2">
    <Mail size={16} />
    <span className="text-sm sm:text-base">{siteConfig.author.email}</span>
    </div>
    </div>
    </div>
    
    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
    <a href="/Yurii_Voievodin_CV.pdf" target='blank' className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-violet-500/20 cursor-pointer flex-1 sm:flex-none">
    <Download size={16} />
    <span>Download PDF</span>
    </a>
    <a href="/projects" className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-blue-500/20 cursor-pointer flex-1 sm:flex-none">
    <span>View Projects</span>
    </a>
    </div>

    </div>
    </header>
    
    {/* Professional Summary */}
    <section className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-6 md:p-8 mb-8">
    <h2 className="text-2xl font-bold text-zinc-100 mb-4">
    Professional Summary
    </h2>
    <p className="text-zinc-300 leading-relaxed">
    Experienced software developer with 10+ years of expertise in web and mobile apps development, and with a bachelor&apos;s degree in Computer Science.
    Proficient in Swift programming language, modern iOS frameworks, and agile methodologies.</p>
    <p className="text-violet-300 leading-relaxed">I&apos;m using AI-based development tools and implementing AI/ML features in production applications.</p>
    </section>

    {/* Skills Section */}
    {cvData
      .filter(section => section.title === "Skills")
      .map((section, index) => (
      <section key={index} className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-4 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">
      {section.title}
      </h2>

      <div className="space-y-6">
      {section.items.map((item, itemIndex) => (
        <div key={itemIndex} className="border-l-2 border-blue-500/30 pl-4 md:pl-4">
        <h3 className="text-lg font-semibold text-zinc-100">
        {item.title}
        </h3>

        {item.subtitle && (
          <p className="text-blue-400 font-medium mb-1">
          {item.subtitle}
          </p>
        )}

        {item.period && (
          <p className="text-zinc-400 text-sm mb-2">
          {item.period}
          </p>
        )}

        {item.description && (
          <p className="text-zinc-300 mb-3">
          {item.description}
          </p>
        )}

        {item.htmlContent && (
          <div
          className="prose prose-sm max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-100 prose-code:bg-zinc-700 prose-code:text-zinc-100 prose-pre:bg-zinc-800 prose-pre:text-zinc-100 prose-blockquote:border-zinc-600 prose-blockquote:text-zinc-400 prose-li:text-zinc-300"
          dangerouslySetInnerHTML={{ __html: item.htmlContent }}
          />
        )}

        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
          {item.skills.map((skill) => (
            <span
            key={skill}
            className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20"
            >
            {skill}
            </span>
          ))}
          </div>
        )}
        </div>
      ))}
      </div>
      </section>
    ))}

    {/* Experience Section */}
    <section className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-4 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Experience</h2>

      <div className="space-y-6">
        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#16february2022" className="text-zinc-100 hover:text-blue-300 hover:underline">
              Lead iOS Engineer
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://www.vistaprint.com" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              VistaPrint
            </a>
            {' + '}
            <a href="https://create.vista.com" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              VistaCreate
            </a>
          </p>
          <p className="text-zinc-400 mb-2">2022 - 2025</p>
          <p className="text-zinc-400 italic mb-2">Role and responsibilities:</p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Cover app business logic with unit tests</li>
            <li>Implement modular architecture in iOS app</li>
            <li>Integrate analytics services <span className="font-bold">Firebase, AppsFlyer, Iterable</span></li>
            <li>Implement <span className="font-bold">A/B tests</span></li>
          </ul>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#january2022" className="text-zinc-100 hover:text-blue-300 hover:underline">
              Software Engineer (iOS, Swift)
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://www.clowder.com" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              Clowder
            </a>
          </p>
          <p className="text-zinc-400 mb-2">2020 - 2022</p>
          <p className="text-zinc-400 italic mb-2">Role and responsibilities:</p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Create clones (copies) of the <span className="font-bold">Core</span> product</li>
            <li>Add customizations to the clones and enable/disable product modules</li>
            <li>Integrate user profile with custom fields to the clones of the <span className="font-bold">Core</span> product</li>
            <li>Work with Git by <code className="bg-zinc-700 px-1 rounded text-xs">GitFlow</code> methodology, resolve merge conflicts</li>
            <li>Support existing apps and update to the latest version of the <span className="font-bold">Core</span> product</li>
            <li>Create proposals and make changes in the <span className="font-bold">Core</span></li>
          </ul>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#10february2021" className="text-zinc-100 hover:text-blue-300 hover:underline">
              iOS Developer
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://coachnow.io" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              CoachNow
            </a>
            {' (part time)'}
          </p>
          <p className="text-zinc-400 mb-2">2020 - 2021</p>
          <p className="text-zinc-300 mt-2 mb-2">
            Main responsibility here is to support the{' '}
            <a href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              CoachNow app
            </a>
            {' (iOS and iPadOS) and add new features. It\'s an app with a long history (8+ years) and mixed codebase ('}
            <code className="bg-zinc-700 px-1 rounded text-xs">Objective-C</code>
            {' and '}
            <code className="bg-zinc-700 px-1 rounded text-xs">Swift</code>
            {') with a lot of dependencies.'}
          </p>
          <p className="text-zinc-400 italic mb-2">Role and responsibilities:</p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Rewrite code from <code className="bg-zinc-700 px-1 rounded text-xs">Objective-C</code> to <code className="bg-zinc-700 px-1 rounded text-xs">Swift</code></li>
            <li>Make code reviews</li>
            <li>Publish new versions of the app to the <span className="font-bold">TestFlight</span> for internal testing</li>
            <li>Publish new releases of the app to the <span className="font-bold">App Store</span></li>
            <li>Implement screen recording with <code className="bg-zinc-700 px-1 rounded text-xs">ReplayKit</code> framework</li>
            <li>Make improvement and fixes</li>
          </ul>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#march2020" className="text-zinc-100 hover:text-blue-300 hover:underline">
              iOS, iPadOS and macOS Apps Developer
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://www.appdev.academy" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              App Dev Academy
            </a>
          </p>
          <p className="text-zinc-400 mb-2">2016 - 2020</p>
          <p className="text-zinc-300 mt-2">I have participated in development, publication and support of <span className="font-bold">10+ iOS apps</span> and one macOS app.</p>
          <p className="text-zinc-400 italic mb-2 pt-2">Role and responsibilities:</p>
          <ul className="list-disc pl-6 space-y-1 text-zinc-300 marker:text-zinc-300">
            <li>Create apps from scratch and design apps architecture</li>
            <li>Create user interface with <span className="font-bold">Storyboards</span> and <span className="font-bold">XIB</span> files</li>
            <li>Use <code className="bg-zinc-700 px-1 rounded text-xs">UIKit</code> and create <span className="font-bold">custom UI</span> components</li>
            <li>Design a database architecture and use <code className="bg-zinc-700 px-1 rounded text-xs">Core Data</code> framework</li>
            <li>Write code on <code className="bg-zinc-700 px-1 rounded text-xs">Swift</code> programming language</li>
            <li>Implement networking layer - <span className="font-bold">REST API</span></li>
            <li>Integrate third-party dependencies</li>
          </ul>
        </div>

        <hr className="border-zinc-700 my-8" />

        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#january2016" className="text-zinc-100 hover:text-blue-300 hover:underline">
              PHP Developer
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://soloway.tech" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              bvblogic
            </a>
          </p>
          <p className="text-zinc-400 mb-2">2012 - 2016</p>
          <p className="text-zinc-300 mt-2">
            I build websites on <code className="bg-zinc-700 px-1 rounded text-xs">PHP</code> programming language, using frameworks such as{' '}
            <code className="bg-zinc-700 px-1 rounded text-xs">Laravel</code>, <code className="bg-zinc-700 px-1 rounded text-xs">Kohana</code>,{' '}
            <code className="bg-zinc-700 px-1 rounded text-xs">Codeigniter</code>, <code className="bg-zinc-700 px-1 rounded text-xs">Yii</code>.
            Also, I used <code className="bg-zinc-700 px-1 rounded text-xs">CSS3</code>, <code className="bg-zinc-700 px-1 rounded text-xs">HTML5</code>,{' '}
            <code className="bg-zinc-700 px-1 rounded text-xs">jQuery</code>, and <code className="bg-zinc-700 px-1 rounded text-xs">Bootstrap</code> for the frontend.
            First experience of building and supporting commercial projects.
          </p>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#20112012" className="text-zinc-100 hover:text-blue-300 hover:underline">
              Senior Laboratory
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://dl.sumdu.edu.ua/en" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              Laboratory of distance learning
            </a>
            {' at '}
            <a href="https://int.sumdu.edu.ua/en/" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              Sumy State University
            </a>
          </p>
          <p className="text-zinc-400 mb-2">2012 - 2013</p>
          <p className="text-zinc-300 mt-2">
            I worked on simple training apps for students on <code className="bg-zinc-700 px-1 rounded text-xs">Java</code> and an internal framework.
            Also convert Microsoft Word documents to <code className="bg-zinc-700 px-1 rounded text-xs">HTML</code> pages as part of my job there.
          </p>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            <a href="/timeline/#20072008" className="text-zinc-100 hover:text-blue-300 hover:underline">
              Laboratory Technician
            </a>
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            <a href="https://kpt.sumdu.edu.ua" rel="nofollow" target="_blank" className="text-blue-400 hover:text-blue-300">
              Polytechnic College of Konotop Institute of the SSU
            </a>
          </p>
          <p className="text-zinc-400 mb-2">2007 - 2008</p>
          <p className="text-zinc-300 mt-2">At college, my job was to configure, maintain and update PCs on Windows 98 and XP. Also, I helped students to make homework done.</p>
        </div>
      </div>
    </section>

    {/* Education Section */}
    <section className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-4 md:p-8 mb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">
        Education
      </h2>

      <div className="space-y-6">
        <div className="border-l-2 border-blue-500/30 pl-4 md:pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            Bachelor of Computer Science
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            Sumy State University
          </p>
          <p className="text-zinc-400 text-sm mb-2">
            2009 - 2012
          </p>
          <p className="text-zinc-300 mb-3">
            Specialized in software engineering
          </p>
        </div>

        <div className="border-l-2 border-blue-500/30 pl-4 md:pl-4">
          <h3 className="text-lg font-semibold text-zinc-100">
            Junior Specialist
          </h3>
          <p className="text-blue-400 font-medium mb-1">
            Polytechnic College of Konotop Institute of the SSU
          </p>
          <p className="text-zinc-400 text-sm mb-2">
            2007 - 2008
          </p>
          <p className="text-zinc-300 mb-3">
            Maintenance of Computers, Intelligent Systems, and Networks
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

