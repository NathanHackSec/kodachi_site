import React from 'react';
import { Shield, Code, Users, GraduationCap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'DESENVOLVIMENTO DE SOFTWARE',
      description: 'Sistemas robustos e escaláveis para ambientes digitais críticos',
      features: ['Arquitetura resiliente', 'Performance otimizada', 'Segurança nativa', 'Escalabilidade global']
    },
    {
      icon: <Shield size={32} />,
      title: 'CIBERSEGURANÇA AVANÇADA',
      description: 'Proteção digital de alto nível contra ameaças modernas',
      features: ['Análise de vulnerabilidades', 'Testes de penetração', 'Monitoramento 24/7', 'Resposta a incidentes']
    },
    {
      icon: <Users size={32} />,
      title: 'CONSULTORIA TECNOLÓGICA',
      description: 'Soluções personalizadas para desafios digitais complexos',
      features: ['Auditoria de segurança', 'Estratégia digital', 'Transformação tecnológica', 'Compliance regulatório']
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'TREINAMENTOS CORPORATIVOS',
      description: 'Capacitação especializada em segurança digital',
      features: ['Hacking ético', 'Awareness security', 'Resposta a incidentes', 'Certificações técnicas']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch neon-purple" data-text="SERVIÇOS">
            SERVIÇOS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Módulos especializados em tecnologia de ponta para proteção e inovação digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="cyber-card group">
              {/* Service Header */}
              <div className="flex items-center mb-6">
                <div className="text-red-500 mr-4 group-hover:text-purple-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:neon-red transition-all duration-300">
                  > {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <span className="neon-cyan mr-3 text-sm">▶</span>
                    <span className="group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Module Status */}
              <div className="mt-6 pt-4 border-t border-red-500 border-opacity-30">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">MODULE STATUS:</span>
                  <span className="neon-red animate-pulse">ACTIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Command */}
        <div className="mt-16">
          <div className="terminal max-w-4xl mx-auto">
            <div className="text-cyan-400 mb-2">root@kodachi:~$ ls -la /services</div>
            <div className="text-white space-y-1">
              <div>drwxr-xr-x 4 root kodachi 4096 Aug 15 2025 <span className="neon-red">software-dev/</span></div>
              <div>drwxr-xr-x 4 root kodachi 4096 Aug 15 2025 <span className="neon-purple">cybersecurity/</span></div>
              <div>drwxr-xr-x 4 root kodachi 4096 Aug 15 2025 <span className="neon-cyan">consulting/</span></div>
              <div>drwxr-xr-x 4 root kodachi 4096 Aug 15 2025 <span className="text-yellow-400">training/</span></div>
            </div>
            <div className="text-cyan-400 mt-4">
              > All modules operational. Ready for deployment.
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-1 bg-gradient-to-r from-red-500 to-purple-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default ServicesSection;