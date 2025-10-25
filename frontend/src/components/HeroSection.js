import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Inovação. Segurança. Futuro.';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix Background */}
      <div className="matrix-bg"></div>
      
      {/* Binary Code Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 text-red-500 text-xs font-mono">
          01001001 01101110 01101111 01110110 01100001 01100011 01100001 01101111
        </div>
        <div className="absolute top-20 right-0 text-purple-500 text-xs font-mono">
          01010011 01100101 01100111 01110101 01110010 01100001 01101110 01100011 01100001
        </div>
        <div className="absolute bottom-20 left-0 text-cyan-400 text-xs font-mono">
          01000110 01110101 01110100 01110101 01110010 01101111
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        {/* Terminal Animation */}
        <div className="terminal mb-8 max-w-2xl mx-auto">
          <div className="text-cyan-400 mb-2">root@kodachi:~$</div>
          <div className="text-white">
            <span className="neon-red">echo</span> "
            <span className="typewriter">{displayText}</span>
            "
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="neon-red">KODACHI</span>{' '}
          <span className="neon-purple">TECNOLOGIA</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
          <span className="neon-cyan">Cybersecurity</span> & Software para um mundo global
        </h2>

        {/* Global Clients Counter */}
        <div className="mb-8">
          <div className="inline-block cyber-card">
            <div className="text-3xl md:text-4xl font-bold neon-red mb-2">+1.000</div>
            <div className="text-sm md:text-base text-gray-400">CLIENTES GLOBAIS</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            className="btn-cyber pulse-red"
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
          >
            NOSSOS SERVIÇOS
          </button>
          <button 
            className="btn-cyber purple"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            FALAR CONOSCO
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-red-500 hover:text-purple-500 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>

      {/* Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-1 bg-purple-500 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;