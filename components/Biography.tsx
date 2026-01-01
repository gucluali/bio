import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Biography: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="biography" className="py-24 bg-slate-950 relative scroll-mt-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-32 relative z-10">
        
        <div className="mb-20 text-center">
           <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{t.biography.title}</h2>
           <div className="h-1 w-24 bg-gold-500 mx-auto"></div>
        </div>

        <div className="space-y-24 relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2 hidden md:block"></div>

          {/* Section 1: Roots */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative group">
            <div className="w-full md:w-1/2 md:text-right md:pr-12">
               <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">{t.biography.sections.roots.title}</h3>
               <span className="text-gold-500 text-sm tracking-widest uppercase block mb-4">{t.biography.sections.roots.date}</span>
               <p className="text-slate-400 leading-relaxed text-lg font-light">
                 {t.biography.sections.roots.text}
               </p>
            </div>
            
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-gold-500 rounded-full z-10 mt-2"></div>
            
            <div className="w-full md:w-1/2 md:pl-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hidden md:block">
               <div className="border border-slate-800 p-2 rounded-sm">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" alt="Entrepreneurship" className="w-full h-auto rounded-sm" />
               </div>
            </div>
          </div>

          {/* Section 2: Tech */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start relative group">
            <div className="w-full md:w-1/2 md:text-left md:pl-12">
               <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">{t.biography.sections.tech.title}</h3>
               <span className="text-gold-500 text-sm tracking-widest uppercase block mb-4">{t.biography.sections.tech.date}</span>
               <p className="text-slate-400 leading-relaxed text-lg font-light mb-4">
                 {t.biography.sections.tech.text}
               </p>
               <ul className="list-disc list-inside text-slate-400 space-y-2 marker:text-gold-500">
                  <li>{t.biography.sections.tech.list1}</li>
                  <li>{t.biography.sections.tech.list2}</li>
               </ul>
            </div>
            
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-gold-500 rounded-full z-10 mt-2"></div>
            
            <div className="w-full md:w-1/2 md:pr-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hidden md:block">
               <div className="border border-slate-800 p-2 rounded-sm">
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop" alt="Digital Revolution" className="w-full h-auto rounded-sm" />
               </div>
            </div>
          </div>

          {/* Section 3: Social */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative group">
            <div className="w-full md:w-1/2 md:text-right md:pr-12">
               <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">{t.biography.sections.social.title}</h3>
               <span className="text-gold-500 text-sm tracking-widest uppercase block mb-4">{t.biography.sections.social.date}</span>
               <p className="text-slate-400 leading-relaxed text-lg font-light">
                 {t.biography.sections.social.text}
               </p>
            </div>
            
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-gold-500 rounded-full z-10 mt-2"></div>
            
            <div className="w-full md:w-1/2 md:pl-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hidden md:block">
                <div className="border border-slate-800 p-2 rounded-sm">
                   <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop" alt="Social Impact" className="w-full h-auto rounded-sm" />
                </div>
            </div>
          </div>

           {/* Section 4: Global */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start relative group">
            <div className="w-full md:w-1/2 md:text-left md:pl-12">
               <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">{t.biography.sections.global.title}</h3>
               <span className="text-gold-500 text-sm tracking-widest uppercase block mb-4">{t.biography.sections.global.date}</span>
               <p className="text-slate-400 leading-relaxed text-lg font-light mb-4">
                 {t.biography.sections.global.text1}
               </p>
               <p className="text-slate-400 leading-relaxed text-lg font-light">
                 {t.biography.sections.global.text2}
               </p>
            </div>
            
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-gold-500 rounded-full z-10 mt-2"></div>
            
            <div className="w-full md:w-1/2 md:pr-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hidden md:block">
                <div className="border border-slate-800 p-2 rounded-sm">
                   <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" alt="Global Vision" className="w-full h-auto rounded-sm" />
                </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Biography;