import React from 'react';
import { Github, Instagram, Linkedin, ExternalLink, Shield, Code, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Desenvolvimento de Software', href: '#services' },
      { name: 'Cibersegurança Avançada', href: '#services' },
      { name: 'Consultoria Tecnológica', href: '#services' },
      { name: 'Treinamentos Corporativos', href: '#services' }
    ],
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Projetos', href: '#projects' },
      { name: 'Carreiras', href: '#careers' },
      { name: 'Contato', href: '#contact' }
    ],
    social: [
      { name: 'Instagram', href: 'https://instagram.com/o_nathanmartins', icon: <Instagram size={16} /> },
      { name: 'GitHub', href: 'https://github.com/NathanHackSec', icon: <Github size={16} /> },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/nathan-martins', icon: <Linkedin size={16} /> },
      { name: 'Site Pessoal', href: 'https://kodachi.me/nathanmartins', icon: <ExternalLink size={16} /> }
    ]
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-4 border-t border-red-500 border-opacity-30">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold neon-red mb-4 glitch" data-text="KODACHI TECNOLOGIA">
              KODACHI TECNOLOGIA
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empresa global especializada em cibersegurança e desenvolvimento de software. 
              Protegendo e inovando ambientes digitais críticos para +1.000 clientes worldwide.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center cyber-card py-3">
                <div className="text-xl font-bold neon-red">1K+</div>
                <div className="text-xs text-gray-500">Clientes</div>
              </div>
              <div className="text-center cyber-card py-3">
                <div className="text-xl font-bold neon-purple">24/7</div>
                <div className="text-xs text-gray-500">Suporte</div>
              </div>
              <div className="text-center cyber-card py-3">
                <div className="text-xl font-bold neon-cyan">Global</div>
                <div className="text-xs text-gray-500">Alcance</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold neon-purple mb-4 flex items-center">
              <Code size={18} className="mr-2" />
              SERVIÇOS
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm cursor-pointer"
                  >
                    {">"} {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold neon-cyan mb-4 flex items-center">
              <Users size={18} className="mr-2" />
              EMPRESA
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
                  >
                    {">"} {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="cyber-card mb-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-bold neon-red mb-2">CONTATO DIRETO</h4>
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+5511988190140" 
                  className="neon-red hover:neon-purple transition-colors font-mono text-lg"
                >
                  +55 11 98819-0140
                </a>
                <span className="text-gray-600">|</span>
                <a 
                  href="mailto:contato@kodachi.me" 
                  className="text-cyan-400 hover:neon-cyan transition-colors"
                >
                  contato@kodachi.me
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="text-right">
              <h4 className="text-lg font-bold neon-purple mb-2">SIGA-NOS</h4>
              <div className="flex justify-end space-x-4">
                {footerLinks.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-red-400 transition-colors p-2 border border-gray-700 hover:border-red-500 group"
                    title={social.name}
                  >
                    <span className="group-hover:animate-pulse">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm">
                © {currentYear} <span className="neon-red">KODACHI TECNOLOGIA</span>. 
                Todos os direitos reservados.
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Desenvolvido com <span className="text-red-500">❤</span> pela equipe Kodachi
              </div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <Shield size={16} className="text-green-500" />
              <span>Site protegido por segurança Kodachi</span>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-8">
          <div className="terminal max-w-2xl mx-auto text-center">
            <div className="text-cyan-400 text-sm">root@kodachi:~$ status</div>
            <div className="text-white text-sm mt-2">
              System: <span className="neon-red">ONLINE</span> | 
              Security: <span className="neon-purple">MAXIMUM</span> | 
              Innovation: <span className="neon-cyan">ACTIVE</span>
            </div>
            <div className="text-gray-500 text-xs mt-2">
              > Ready to secure the future.
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-cyan-400 opacity-20"></div>
        <div className="absolute top-10 right-20 w-16 h-1 bg-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-12 h-1 bg-purple-500 opacity-20 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;