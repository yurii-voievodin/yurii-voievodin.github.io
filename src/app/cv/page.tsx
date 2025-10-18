import { cvData, experienceHTML } from '@/lib/cv-data';
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
    
    <a href="/Yurii_Voievodin_CV.pdf" target='blank' className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-violet-500/20 cursor-pointer w-full md:w-auto">
    <Download size={16} />
    <span>Download PDF</span>
    </a>
    
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
    <p className="text-violet-300 leading-relaxed">Using AI-based development tools and implementing AI/ML features in production applications.</p>
    </section>
    
    {/* Experience Section with HTML */}
    <section className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-4 md:p-8 mb-8">
    <div 
    className="prose prose-lg max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-300 prose-a:bg-gradient-to-r prose-a:from-violet-400 prose-a:to-purple-400 prose-a:bg-clip-text prose-a:text-transparent prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-100 prose-code:bg-zinc-700 prose-code:text-zinc-100 prose-pre:bg-zinc-800 prose-pre:text-zinc-100 prose-blockquote:border-zinc-600 prose-blockquote:text-zinc-400 prose-li:text-zinc-300"
    dangerouslySetInnerHTML={{ __html: experienceHTML }}
    />
    </section>
    
    {/* CV Sections */}
    {cvData.map((section, index) => (
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
    </div>
  );
}

