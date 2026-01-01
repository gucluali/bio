import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import CareerTimeline from './components/CareerTimeline';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-gold-500 selection:text-white">
        <Navbar />
        
        <main>
          <Hero />
          <Biography />
          <CareerTimeline />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;