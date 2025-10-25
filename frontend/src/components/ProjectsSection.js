import React from 'react';
import { Globe, MessageSquare, Star } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'SISTEMA BANCÁRIO GLOBAL',
      category: 'Cibersegurança',
      description: 'Implementação de sistema de segurança multicamadas para instituição financeira internacional.',
      technologies: ['Pentesting', 'Threat Detection', 'Compliance SOX'],
      impact: '+50M transações protegidas',
      region: 'América do Norte'
    },
    {
      title: 'PLATAFORMA E-COMMERCE',
      category: 'Desenvolvimento',
      description: 'Arquitetura resiliente para marketplace com alta disponibilidade e performance.',
      technologies: ['Microservices', 'Cloud Native', 'Auto-scaling'],
      impact: '99.99% uptime garantido',
      region: 'Europa'
    },
    {
      title: 'GOVERNO DIGITAL',
      category: 'Consultoria',
      description: 'Transformação digital de serviços públicos com foco em segurança cidadã.',
      technologies: ['Digital Identity', 'Blockchain', 'Zero Trust'],
      impact: '+2M cidadãos beneficiados',
      region: 'América Latina'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CISO, TechCorp Global',
      message: 'Kodachi transformou nossa postura de segurança. Expertise incomparável.',
      rating: 5
    },
    {
      name: 'Marcus Weber',
      role: 'CTO, EuroBank',
      message: 'Parceria estratégica que nos posicionou na vanguarda da inovação.',
      rating: 5
    },
    {
      name: 'Ana Rodriguez',
      role: 'Dir. Tecnologia, GovTech',
      message: 'Soluções que realmente fazem a diferença na vida dos cidadãos.',
      rating: 5
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch neon-cyan" data-text="PROJETOS & CLIENTES">
            PROJETOS & CLIENTES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Casos de sucesso que moldaram o futuro digital global
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="cyber-card group">
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm neon-cyan">[{project.category.toUpperCase()}]</span>
                  <Globe size={16} className="text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:neon-red transition-all duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">TECNOLOGIAS:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-red-500 bg-opacity-20 text-red-400 px-2 py-1 border border-red-500 border-opacity-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact & Region */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">IMPACTO:</span>
                  <span className="neon-purple">{project.impact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">REGIÃO:</span>
                  <span className="text-white">{project.region}</span>
                </div>
              </div>

              {/* Status */}
              <div className="mt-4 pt-3 border-t border-red-500 border-opacity-30">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">STATUS:</span>
                  <span className="neon-red animate-pulse">DEPLOYED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Presence Map Placeholder */}
        <div className="mb-16">
          <div className="cyber-card text-center">
            <h3 className="text-2xl font-bold neon-red mb-6">PRESENÇA GLOBAL</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold neon-purple">350+</div>
                <div className="text-sm text-gray-400">América do Norte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-cyan">280+</div>
                <div className="text-sm text-gray-400">Europa</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-red">220+</div>
                <div className="text-sm text-gray-400">América Latina</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">150+</div>
                <div className="text-sm text-gray-400">Ásia-Pacífico</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center neon-purple mb-12">
            DEPOIMENTOS GLOBAIS
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                {/* Chat Style Header */}
                <div className="flex items-center mb-4">
                  <MessageSquare size={20} className="text-cyan-400 mr-2" />
                  <div className="text-sm">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-black bg-opacity-50 p-4 border-l-2 border-red-500 mb-4">
                  <p className="text-gray-300 text-sm italic">
                    "{testimonial.message}"
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-gray-500 ml-2">VERIFIED CLIENT</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Status */}
        <div className="terminal max-w-4xl mx-auto">
          <div className="text-cyan-400 mb-2">root@kodachi:~$ client-stats --global</div>
          <div className="text-white space-y-1">
            <div>Total active clients: <span className="neon-red">1,000+</span></div>
            <div>Global regions covered: <span className="neon-purple">4 continents</span></div>
            <div>Success rate: <span className="neon-cyan">99.8%</span></div>
            <div>Average project duration: <span className="text-yellow-400">3-6 months</span></div>
          </div>
          <div className="text-cyan-400 mt-4">
            > Client satisfaction: MAXIMUM
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-5 w-1 h-40 bg-gradient-to-b from-cyan-400 to-purple-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-5 w-1 h-32 bg-gradient-to-b from-red-500 to-purple-500 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;