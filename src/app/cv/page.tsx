import { cvData } from '@/lib/cv-data';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Your Full Name
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Senior Software Developer
            </p>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Your City, Country</span>
              </div>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={16} />
            <span>Download PDF</span>
          </button>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Experienced software developer with 5+ years of expertise in full-stack web development. 
          Proficient in modern JavaScript frameworks, cloud technologies, and agile methodologies. 
          Passionate about creating scalable, user-friendly applications and leading development teams 
          to deliver high-quality solutions.
        </p>
      </section>

      {/* CV Sections */}
      {cvData.map((section, index) => (
        <section key={index} className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.title}
          </h2>
          
          <div className="space-y-6">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="border-l-2 border-blue-200 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                
                {item.subtitle && (
                  <p className="text-blue-600 font-medium mb-1">
                    {item.subtitle}
                  </p>
                )}
                
                {item.period && (
                  <p className="text-gray-500 text-sm mb-2">
                    {item.period}
                  </p>
                )}
                
                {item.description && (
                  <p className="text-gray-600 mb-3">
                    {item.description}
                  </p>
                )}
                
                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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

