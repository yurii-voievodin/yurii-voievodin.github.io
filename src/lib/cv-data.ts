import { CVSection } from '@/types/blog';

// HTML content for experience section
export const experienceHTML = `
<h4 class="text-2xl font-bold text-zinc-100 mb-6">Experience</h4>

<div class="space-y-6">
    <div class="border-l-2 border-blue-500/30 pl-4">
        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#16february2022" class="text-zinc-100 hover:text-blue-300 hover:underline">Lead iOS Engineer</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://www.vistaprint.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">VistaPrint</a> 
                + <a href="https://create.vista.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">VistaCreate</a></p>
        <p class="text-zinc-400 mb-2">2022 - now</p>
        <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
            <ul class="text-zinc-300 space-y-1">
                <li>• Cover app business logic with unit tests</li>
                <li>• Implement modular architecture in iOS app</li>
                <li>• Integrate analytics services <span class="font-bold">Firebase, AppsFlyer, Iterable</span></li>
                <li>• Implement <span class="font-bold">A/B tests</span></li>
            </ul>
    </div>
    <div class="border-l-2 border-blue-500/30 pl-4">
        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#january2022" class="text-zinc-100 hover:text-blue-300 hover:underline">Software Engineer (iOS, Swift)</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://www.clowder.com" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">Clowder</a></p>
        <p class="text-zinc-400 mb-2">2020 - 2022</p>
        <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
            <ul class="text-zinc-300 space-y-1">
                <li>• Create clones (copies) of the <span class="font-bold">Core</span> product</li>
                <li>• Add customizations to the clones and enable/disable product modules</li>
                <li>• Integrate user profile with custom fields to the clones of the <span class="font-bold">Core</span> product</li>
                <li>• Work with Git by <code class="bg-zinc-700 px-1 rounded text-xs">GitFlow</code> methodology, resolve merge conflicts</li>
                <li>• Support existing apps and update to the latest version of the <span class="font-bold">Core</span> product</li>
                <li>• Create proposals and make changes in the <span class="font-bold">Core</span></li>
            </ul>
    </div>
    <div class="border-l-2 border-blue-500/30 pl-4">
        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#10february2021" class="text-zinc-100 hover:text-blue-300 hover:underline">iOS Developer</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://coachnow.io" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">CoachNow</a> 
                (part time)</p>
        <p class="text-zinc-400 mb-2">2020 - 2021</p>
        <p class="text-zinc-300 mt-2 mb-2">
                Main responsibility here is to support the 
                <a href="https://apps.apple.com/app/coachnow-coaching-platform/id596598472" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300 ml-1">CoachNow app</a> 
                (iOS and iPadOS) and add new features. It&apos;s an app with a long history (8+ years) and mixed codebase 
                (<code class="bg-zinc-700 px-1 rounded text-xs">Objective-C</code> and <code class="bg-zinc-700 px-1 rounded text-xs">Swift</code>) 
                with a lot of dependencies.
            </p>
            <p class="text-zinc-400 italic mb-2">Role and responsibilities:</p>
                <ul class="text-zinc-300 space-y-1">
                    <li>• Rewrite code from <code class="bg-zinc-700 px-1 rounded text-xs">Objective-C</code> to <code class="bg-zinc-700 px-1 rounded text-xs">Swift</code></li>
                    <li>• Make code reviews</li>
                    <li>• Publish new versions of the app to the <span class="font-bold">TestFlight</span> for internal testing</li>
                    <li>• Publish new releases of the app to the <span class="font-bold">App Store</span></li>
                    <li>• Implement screen recording with <code class="bg-zinc-700 px-1 rounded text-xs">ReplayKit</code> framework</li>
                    <li>• Implement "pinned posts" feature</li>
                    <li>• Make improvement and fixes</li>
                </ul>
    </div>
    <div class="border-l-2 border-blue-500/30 pl-4">
        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#march2020" class="text-zinc-100 hover:text-blue-300 hover:underline">iOS, iPadOS and macOS Apps Developer</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://www.appdev.academy" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">App Dev Academy</a></p>
        <p class="text-zinc-400 mb-2">2016 - 2020</p>
        <p class="text-zinc-300 mt-2">I have participated in development, publication and support of <span class="font-bold">10+ iOS apps</span> and one macOS app.</p>
        <p class="text-zinc-400 italic mb-2 pt-2">Role and responsibilities:</p>
            <ul class="text-zinc-300 space-y-1">
                <li>• Create apps from scratch and design apps architecture</li>
                <li>• Create user interface with <span class="font-bold">Storyboards</span> and <span class="font-bold">XIB</span> files</li>
                <li>• Use <code class="bg-zinc-700 px-1 rounded text-xs">UIKit</code> and create <span class="font-bold">custom UI</span> components</li>
                <li>• Design a database architecture and use <code class="bg-zinc-700 px-1 rounded text-xs">Core Data</code> framework</li>
                <li>• Write code on <code class="bg-zinc-700 px-1 rounded text-xs">Swift</code> programming language</li>
                <li>• Implement networking layer - <span class="font-bold">REST API</span></li>
                <li>• Integrate third-party dependencies</li>
            </ul>
    </div>
    <hr class="border-zinc-700 my-8">
    <div class="border-l-2 border-blue-500/30 pl-4">

        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#january2016" class="text-zinc-100 hover:text-blue-300 hover:underline">PHP Developer</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://soloway.tech" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">bvblogic</a></p>
        <p class="text-zinc-400 mb-2">2012 - 2016</p>
        <p class="text-zinc-300 mt-2">
            I build websites on <code class="bg-zinc-700 px-1 rounded text-xs">PHP</code> programming language, using frameworks such as 
            <code class="bg-zinc-700 px-1 rounded text-xs">Laravel</code>, <code class="bg-zinc-700 px-1 rounded text-xs">Kohana</code>, 
            <code class="bg-zinc-700 px-1 rounded text-xs">Codeigniter</code>, <code class="bg-zinc-700 px-1 rounded text-xs">Yii</code>. 
            Also, I used <code class="bg-zinc-700 px-1 rounded text-xs">CSS3</code>, <code class="bg-zinc-700 px-1 rounded text-xs">HTML5</code>, 
            <code class="bg-zinc-700 px-1 rounded text-xs">jQuery</code>, and <code class="bg-zinc-700 px-1 rounded text-xs">Bootstrap</code> for the frontend. 
            First experience of building and supporting commercial projects.
        </p>
    </div>
    <div class="border-l-2 border-blue-500/30 pl-4">
        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#20112012" class="text-zinc-100 hover:text-blue-300 hover:underline">Senior Laboratory</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://dl.sumdu.edu.ua/en" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">Laboratory of distance learning</a> 
                at <a href="https://int.sumdu.edu.ua/en/" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">Sumy State University</a></p>
        <p class="text-zinc-400 mb-2">2012 - 2013</p>
        <p class="text-zinc-300 mt-2">I worked on simple training apps for students on <code class="bg-zinc-700 px-1 rounded text-xs">Java</code> and an internal framework.  Also convert Microsoft Word documents to <code class="bg-zinc-700 px-1 rounded text-xs">HTML</code> pages as part of my job there.</p>
    </div>
    <div class="border-l-2 border-blue-500/30 pl-4">
        <h3 class="text-lg font-semibold text-zinc-100"><a href="/timeline/#20072008" class="text-zinc-100 hover:text-blue-300 hover:underline">Laboratory Technician</a></h3>
        <p class="text-blue-400 font-medium mb-1"><a href="https://kpt.sumdu.edu.ua" rel="nofollow" target="_blank" class="text-blue-400 hover:text-blue-300">Polytechnic College of Konotop Institute of the SSU</a></p>
        <p class="text-zinc-400 mb-2">2007 - 2008</p>
        <p class="text-zinc-300 mt-2">At college, my job was to configure, maintain and update PCs on Windows 98 and XP. Also, I helped students to make homework done.</p>
    </div>
</div>
`;

// Regular CV data for other sections
export const cvData: CVSection[] = [
    {
        title: "Education",
        items: [
            {
                title: "Bachelor of Computer Science",
                subtitle: "Sumy State University",
                period: "2009 - 2012",
                description: "Specialized in software engineering"
            },
            {
                title: "Junior Specialist",
                subtitle: "Polytechnic College of Konotop Institute of the SSU",
                period: "2007 - 2008",
                description: "Maintenance of Computers, Intelligent Systems, and Networks"
            }
        ]
    },
    {
        title: "Skills",
        items: [
            {
                title: "AI & Machine Learning",
                skills: ["Claude Code", "ChatGPT", "Codex", "CoreML", "Foundation Models", "ML Kit", "On-device AI", "Cloud-based AI Services"]
            },
            {
                title: "Programming Languages",
                skills: ["Swift", "Objective-C", "JavaScript", "Ruby", "PHP", "Python"]
            },
            {
                title: "Mobile Development",
                skills: ["iOS", "iPadOS", "UIKit", "SwiftUI", "Xcode", "Storyboards", "Auto Layout", "Core Data", "Swift Data", "CocoaPods", "Firebase", "In-App Purchase", "TestFlight", "App Store Connect"]
            },
            {
                title: "Frontend",
                skills: ["HTML", "CSS", "Bootsprap CSS"]
            },
            {
                title: "Backend",
                skills: ["Ruby on Rails", "Laravel", "PostgreSQL", "SQLite", "REST API"]
            },
            {
                title: "Tools & Others",
                skills: ["Git", "GitFlow", "CI/CD", "OOP", "MVC", "Concurrency"]
            }
        ]
    }
];

