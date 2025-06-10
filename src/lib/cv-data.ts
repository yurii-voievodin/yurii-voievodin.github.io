import { CVSection, HTMLCVSection } from '@/types/blog';

// HTML content for experience section
export const experienceHTML = `
<h4 class="text-2xl font-bold text-zinc-100 mb-6">Experience</h4>

<dl class="space-y-8">
    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2022 - now</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">Software Engineer (iOS, Swift) at 
                <a href="https://www.vistaprint.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">VistaPrint</a> 
                (and <a href="https://create.vista.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">VistaCreate</a>)
            </span>
            <div class="mt-3 pl-4 border-l-2 border-blue-500/30">
                <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
                <ul class="text-zinc-300 space-y-1 text-sm">
                    <li>• Make completely new app Home screen</li>
                    <li>• Write unit tests for cover app business logic</li>
                    <li>• Build an app with a modular architecture</li>
                    <li>• Work with analytics services <span class="font-bold">Firebase, AppsFlyer, Iterable</span></li>
                    <li>• Implement <span class="font-bold">A/B tests</span></li>
                </ul>
            </div>
        </dd>
    </div>

    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2020 - 2022</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">Software Engineer (iOS, Swift) at 
                <a href="https://www.clowder.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">Clowder</a>
            </span>
            <div class="mt-3 pl-4 border-l-2 border-blue-500/30">
                <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
                <ul class="text-zinc-300 space-y-1 text-sm">
                    <li>• Create clones (copies) of the <span class="font-bold">Core</span> product</li>
                    <li>• Add customizations to the clones and enable/disable product modules</li>
                    <li>• Integrate user profile with custom fields to the clones of the <span class="font-bold">Core</span> product</li>
                    <li>• Work with Git by <code class="bg-zinc-700 px-1 rounded text-xs">GitFlow</code> methodology, resolve merge conflicts</li>
                    <li>• Support existing apps and update to the latest version of the <span class="font-bold">Core</span> product</li>
                    <li>• Create proposals and make changes in the <span class="font-bold">Core</span></li>
                </ul>
            </div>
        </dd>
    </div>

    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2020 - 2021</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">Software Engineer (iOS, Swift) at 
                <a href="https://coachnow.io" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">CoachNow</a> 
                (part time)
            </span>
            <p class="text-zinc-300 text-sm mt-2 pl-4 border-l-2 border-blue-500/30">
                Main responsibility here is to support the 
                <a href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">CoachNow app</a> 
                (iOS and iPadOS) and add new features. It's an app with a long history (8+ years) and mixed codebase 
                (<code class="bg-zinc-700 px-1 rounded text-xs">Objective-C</code> and <code class="bg-zinc-700 px-1 rounded text-xs">Swift</code>) 
                with a lot of dependencies.
            </p>
            <div class="mt-3 pl-4 border-l-2 border-blue-500/30">
                <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
                <ul class="text-zinc-300 space-y-1 text-sm">
                    <li>• Rewrite code from <code class="bg-zinc-700 px-1 rounded text-xs">Objective-C</code> to <code class="bg-zinc-700 px-1 rounded text-xs">Swift</code></li>
                    <li>• Make code reviews</li>
                    <li>• Publish new versions of the app to the <span class="font-bold">TestFlight</span> for internal testing</li>
                    <li>• Publish new releases of the app to the <span class="font-bold">App Store</span></li>
                    <li>• Implement screen recording with <code class="bg-zinc-700 px-1 rounded text-xs">ReplayKit</code> framework</li>
                    <li>• Implement "pinned posts" feature</li>
                    <li>• Make improvement and fixes</li>
                </ul>
            </div>
        </dd>
    </div>

    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2016 - 2020</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">iOS, iPadOS and macOS Apps Developer at 
                <a href="https://www.appdev.academy" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">App Dev Academy</a>
            </span>
            <p class="text-zinc-300 text-sm mt-2 pl-4 border-l-2 border-blue-500/30">
                I have participated in development, publication and support of <span class="font-bold">10+ iOS apps</span> and one macOS app.
            </p>
            <div class="mt-3 pl-4 border-l-2 border-blue-500/30">
                <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
                <ul class="text-zinc-300 space-y-1 text-sm">
                    <li>• Create apps from scratch and design apps architecture</li>
                    <li>• Create user interface with <span class="font-bold">Storyboards</span> and <span class="font-bold">XIB</span> files</li>
                    <li>• Use <code class="bg-zinc-700 px-1 rounded text-xs">UIKit</code> and create <span class="font-bold">custom UI</span> components</li>
                    <li>• Design a database architecture and use <code class="bg-zinc-700 px-1 rounded text-xs">Core Data</code> framework</li>
                    <li>• Write code on <code class="bg-zinc-700 px-1 rounded text-xs">Swift</code> programming language</li>
                    <li>• Implement networking layer - <span class="font-bold">REST API</span></li>
                    <li>• Integrate third-party dependencies</li>
                </ul>
            </div>
        </dd>
    </div>

    <hr class="border-zinc-700 my-8">

    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2012 - 2016</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">PHP Developer at 
                <a href="https://bvblogic.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">bvblogic</a>
            </span>
            <p class="text-zinc-300 text-sm mt-2 pl-4 border-l-2 border-blue-500/30">
                I build websites on <code class="bg-zinc-700 px-1 rounded text-xs">PHP</code> programming language, using frameworks such as 
                <code class="bg-zinc-700 px-1 rounded text-xs">Laravel</code>, <code class="bg-zinc-700 px-1 rounded text-xs">Kohana</code>, 
                <code class="bg-zinc-700 px-1 rounded text-xs">Codeigniter</code>, <code class="bg-zinc-700 px-1 rounded text-xs">Yii</code>. 
                Also, I used <code class="bg-zinc-700 px-1 rounded text-xs">CSS3</code>, <code class="bg-zinc-700 px-1 rounded text-xs">HTML5</code>, 
                <code class="bg-zinc-700 px-1 rounded text-xs">jQuery</code>, and <code class="bg-zinc-700 px-1 rounded text-xs">Bootstrap</code> for the frontend. 
                First experience of building and supporting commercial projects.
            </p>
        </dd>
    </div>

    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2012 - 2013</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">Senior Laboratory at 
                <a href="https://dl.sumdu.edu.ua/en" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">Laboratory of distance learning</a> 
                at <a href="https://sumdu.edu.ua/int/en" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">Sumy State University</a>
            </span>
            <p class="text-zinc-300 text-sm mt-2 pl-4 border-l-2 border-blue-500/30">
                I worked on simple training apps for students on <code class="bg-zinc-700 px-1 rounded text-xs">Java</code> and an internal framework. 
                Also convert Microsoft Word documents to <code class="bg-zinc-700 px-1 rounded text-xs">HTML</code> pages as part of my job there.
            </p>
        </dd>
    </div>

    <div class="flex flex-col md:flex-row">
        <dt class="md:w-1/4 text-zinc-400 font-medium mb-2 md:mb-0">2007 - 2008</dt>
        <dd class="md:w-3/4">
            <span class="text-zinc-300 font-medium">Laboratory Technician at 
                <a href="https://kpt.sumdu.edu.ua" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">Polytechnic College of Konotop Institute of the SSU</a>
            </span>
            <p class="text-zinc-300 text-sm mt-2 pl-4 border-l-2 border-blue-500/30">
                At college, my job was to configure, maintain and update PCs on Windows 98 and XP. Also, I helped students to make homework done.
            </p>
        </dd>
    </div>
</dl>
`;

// Regular CV data for other sections
export const cvData: CVSection[] = [
  {
    title: "Education",
    items: [
      {
        title: "Master of Science in Computer Science",
        subtitle: "University Name",
        period: "2018 - 2020",
        description: "Specialized in software engineering and web technologies."
      },
      {
        title: "Bachelor of Science in Computer Science",
        subtitle: "University Name",
        period: "2014 - 2018",
        description: "Foundation in programming, algorithms, and data structures."
      }
    ]
  },
  {
    title: "Skills",
    items: [
      {
        title: "Programming Languages",
        skills: ["Swift", "JavaScript", "TypeScript", "Python", "Java", "Go"]
      },
      {
        title: "Mobile Development",
        skills: ["iOS", "UIKit", "SwiftUI", "Xcode", "CocoaPods", "Firebase"]
      },
      {
        title: "Frontend",
        skills: ["React", "Next.js", "Vue.js", "HTML", "CSS", "Tailwind CSS"]
      },
      {
        title: "Backend",
        skills: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB"]
      },
      {
        title: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
      }
    ]
  }
];

