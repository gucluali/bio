import React from 'react';
import { ExternalLink, ArrowRight, Palette, Code, Camera } from 'lucide-react';

const SubdomainGateway: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden scroll-mt-28">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-800 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Dijital Eko-Sistem</h2>
            <p className="text-slate-400">Projelerim ve ilgi alanlarım için özel alanlar.</p>
          </div>
          <div className="hidden md:block text-slate-500 text-sm italic">
            Bu ana sayfa sadece biyografi içindir.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Tech Projects */}
          <a href="https://tech.aliguclu.art" target="_blank" rel="noopener noreferrer" className="group relative h-96 block overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-slate-900 transition-transform duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900/80 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4 text-gold-500 p-3 bg-white/5 backdrop-blur-sm w-fit rounded-full">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Teknoloji & Yazılım</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                Geliştirdiğim yazılım mimarileri, açık kaynak kodlu projeler ve teknik makalelerim.
              </p>
              <div className="flex items-center text-white text-sm font-semibold tracking-wide">
                <span>tech.aliguclu.art</span>
                <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </a>

          {/* Card 2: Art Gallery */}
          <a href="https://gallery.aliguclu.art" target="_blank" rel="noopener noreferrer" className="group relative h-96 block overflow-hidden rounded-lg border border-gold-500/20">
            {/* Artistic Image Placeholder */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/800/600?blur=2')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4 text-gold-500 p-3 bg-white/5 backdrop-blur-sm w-fit rounded-full">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sanat Galerisi</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                Küratörlüğünü yaptığım eserler, sanat eleştirilerim ve koleksiyonlarım.
              </p>
              <div className="flex items-center text-gold-400 text-sm font-semibold tracking-wide">
                <span>gallery.aliguclu.art</span>
                <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </a>

          {/* Card 3: Media & Press */}
          <a href="https://media.aliguclu.art" target="_blank" rel="noopener noreferrer" className="group relative h-96 block overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-slate-800 transition-transform duration-500 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-4 text-gold-500 p-3 bg-white/5 backdrop-blur-sm w-fit rounded-full">
                <Camera size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Basın & Medya</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                Röportajlar, magazin dünyasındaki yansımalar ve görsel arşiv.
              </p>
              <div className="flex items-center text-white text-sm font-semibold tracking-wide">
                <span>media.aliguclu.art</span>
                <ExternalLink size={16} className="ml-2" />
              </div>
            </div>
          </a>

        </div>

        <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm">
                * Projeler bağımsız sub-domainlerde barındırılmaktadır.
            </p>
        </div>
      </div>
    </section>
  );
};

export default SubdomainGateway;