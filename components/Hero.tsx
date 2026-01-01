import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0"></div>
      
      {/* Abstract Artistic Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <p className="text-gold-500 tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-[fadeIn_1s_ease-out]">
          Ali Güçlü
        </p>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-[slideUp_1s_ease-out]">
          {t.hero.title} <br/><span className="text-gold-500">{language === 'tr' ? 'Stratejinin' : 'Strategy'}</span> {language === 'tr' ? 'Kesişim Noktası' : ''}
        </h1>
        
        <p className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-10 animate-[fadeIn_1.5s_ease-out_0.5s_both]">
          {t.hero.subtitle}
        </p>

        <div className="flex justify-center gap-4 animate-[fadeIn_2s_ease-out_1s_both]">
          <a 
            href="#biography"
            className="px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-slate-900 transition-all duration-300 uppercase tracking-wider text-sm font-semibold"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      <a 
        href="#biography" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;