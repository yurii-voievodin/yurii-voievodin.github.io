import { cvData } from '@/lib/cv-data';
import { MapPin, Mail, Download } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto">
    {/* Header */}
    <header className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-8 mb-8">
    <div className="flex justify-between items-start">
    <div>
    <h1 className="text-4xl font-bold text-zinc-100 mb-2">
    {siteConfig.author.name}
    </h1>
    <p className="text-xl text-zinc-300 mb-4">
    {siteConfig.author.title}
    </p>
    
    <div className="flex flex-wrap gap-4 text-zinc-300">
    <div className="flex items-center space-x-2">
    <Mail size={16} />
    <span>{siteConfig.author.email}</span>
    </div>
    <div className="flex items-center space-x-2">
    <MapPin size={16} />
    <span>{siteConfig.author.location}</span>
    </div>
    </div>
    </div>
    
    <a href="/Yurii_Voievodin_CV.pdf" target='blank' className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/20 cursor-pointer">
    <Download size={16} />
    <span>Download PDF</span>
    </a>
    
    </div>
    </header>
    
    {/* Professional Summary */}
    <section className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-8 mb-8">
    <h2 className="text-2xl font-bold text-zinc-100 mb-4">
    Professional Summary
    </h2>
    <p className="text-zinc-300 leading-relaxed">
    Experienced software developer with 5+ years of expertise in full-stack web development. 
    Proficient in modern JavaScript frameworks, cloud technologies, and agile methodologies. 
    Passionate about creating scalable, user-friendly applications and leading development teams 
    to deliver high-quality solutions.
    </p>
    </section>
    
    {/* CV Sections */}
    {cvData.map((section, index) => (
      <section key={index} className="bg-zinc-800/50 rounded-lg shadow-lg border border-zinc-700/50 p-8 mb-8">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">
      {section.title}
      </h2>
      
      <div className="space-y-6">
      {section.items.map((item, itemIndex) => (
        <div key={itemIndex} className="border-l-2 border-blue-500/30 pl-6">
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
        
        {item.skills && item.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span 
            key={skill} 
            className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
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

