import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const navLinks = [
    { name: t.navbar.about, href: '#biography' },
    { name: t.navbar.contact, href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-lg border-b border-slate-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-white">
          ALİ<span className="text-gold-500">GÜÇLÜ</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-slate-300 hover:text-gold-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-sm font-semibold text-white border border-slate-700 px-3 py-1 rounded hover:border-gold-500 hover:text-gold-500 transition-all"
          >
            <Globe size={14} />
            <span>{language === 'tr' ? 'EN' : 'TR'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 md:hidden flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-slate-200 hover:text-gold-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="text-lg font-serif text-gold-500 text-left flex items-center gap-2 mt-4"
          >
            <Globe size={18} />
            {language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;