import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-black py-16 border-t border-slate-900 scroll-mt-28">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          <h4 className="text-3xl font-serif font-bold text-white tracking-tighter">ALİ<span className="text-gold-500">GÜÇLÜ</span></h4>
          
          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gold-500 text-sm uppercase tracking-widest font-semibold">{t.footer.contact_title}</span>
            <a href="mailto:ali.guclu@outlook.com" className="flex items-center space-x-2 text-xl text-slate-300 hover:text-white transition-colors">
              <Mail size={20} />
              <span>ali.guclu@outlook.com</span>
            </a>
          </div>

          <div className="w-12 h-px bg-slate-800 my-4"></div>

          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;