import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-red-500 border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-xl font-bold neon-red cursor-pointer glitch" 
              data-text="KODACHI TECNOLOGIA"
              onClick={() => scrollToSection('home')}
            >
              KODACHI TECNOLOGIA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              SOBRE
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              SERVIÇOS
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              PROJETOS
            </button>
            <button onClick={() => scrollToSection('courses')} className="nav-link">
              CURSOS
            </button>
            <button onClick={() => scrollToSection('careers')} className="nav-link">
              CARREIRAS
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              CONTATO
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 border-t border-red-500 border-opacity-30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block nav-link w-full text-left">
              HOME
            </button>
            <button onClick={() => scrollToSection('about')} className="block nav-link w-full text-left">
              SOBRE
            </button>
            <button onClick={() => scrollToSection('services')} className="block nav-link w-full text-left">
              SERVIÇOS
            </button>
            <button onClick={() => scrollToSection('projects')} className="block nav-link w-full text-left">
              PROJETOS
            </button>
            <button onClick={() => scrollToSection('courses')} className="block nav-link w-full text-left">
              CURSOS
            </button>
            <button onClick={() => scrollToSection('careers')} className="block nav-link w-full text-left">
              CARREIRAS
            </button>
            <button onClick={() => scrollToSection('contact')} className="block nav-link w-full text-left">
              CONTATO
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;