import React from 'react';
import { Briefcase, Globe, Tv, Signal, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CareerTimeline: React.FC = () => {
  const { t } = useLanguage();

  const careerItems = [
    {
      company: "Ericsson",
      role: t.career.items.ericsson.role,
      icon: <Signal className="w-8 h-8 text-gold-500" />,
      desc: t.career.items.ericsson.desc
    },
    {
      company: "Turkcell",
      role: t.career.items.turkcell.role,
      icon: <Briefcase className="w-8 h-8 text-gold-500" />,
      desc: t.career.items.turkcell.desc
    },
    {
      company: "UNHCR",
      role: t.career.items.unhcr.role,
      icon: <Globe className="w-8 h-8 text-gold-500" />,
      desc: t.career.items.unhcr.desc
    },
    {
      company: "Digitürk",
      role: t.career.items.digiturk.role,
      icon: <Tv className="w-8 h-8 text-gold-500" />,
      desc: t.career.items.digiturk.desc
    },
    {
      company: "Kamu Sektörü", // Keeping company names as proper nouns or general terms mostly same
      role: t.career.items.public.role,
      icon: <Building2 className="w-8 h-8 text-gold-500" />,
      desc: t.career.items.public.desc
    }
  ];

  return (
    <section id="career" className="py-24 bg-slate-900 border-t border-slate-800 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{t.career.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.career.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerItems.map((item, index) => (
            <div 
              key={index} 
              className="p-8 bg-slate-950 border border-slate-800 hover:border-gold-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-slate-900 w-fit rounded-lg group-hover:bg-slate-800 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.company}</h3>
              <p className="text-gold-500 text-sm uppercase tracking-wider mb-4">{item.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
          
          <div className="p-8 bg-gradient-to-br from-gold-600 to-gold-800 flex flex-col justify-center items-center text-center text-white border border-transparent">
             <h3 className="text-2xl font-serif italic mb-4">{t.career.quote}</h3>
             <div className="w-12 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;