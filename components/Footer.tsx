import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-black py-12 border-t border-slate-900 scroll-mt-28">
      <div className="container mx-auto px-6 flex justify-center items-center">
        
        <div className="text-center">
          <h4 className="text-2xl font-serif font-bold text-white tracking-tighter">ALİ<span className="text-gold-500">GÜÇLÜ</span></h4>
          <p className="text-slate-500 text-sm mt-2">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;