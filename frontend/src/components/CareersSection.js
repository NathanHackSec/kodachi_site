import React from 'react';
import { Target, Zap, Shield, Code } from 'lucide-react';

const CareersSection = () => {
  const positions = [
    {
      title: 'SENIOR SECURITY ENGINEER',
      level: 'Senior',
      type: 'Full-time',
      location: 'Remote/Global',
      skills: ['Penetration Testing', 'Threat Hunting', 'SIEM', 'Incident Response'],
      description: 'Lidere nossa equipe de resposta a incidentes e fortaleça defesas globais.'
    },
    {
      title: 'CYBERSECURITY ANALYST',
      level: 'Pleno',
      type: 'Full-time',
      location: 'Híbrido',
      skills: ['SOC Analysis', 'Malware Analysis', 'Forensics', 'Risk Assessment'],
      description: 'Monitore e analise ameaças em tempo real para clientes globais.'
    },
    {
      title: 'FULL-STACK DEVELOPER',
      level: 'Senior',
      type: 'Full-time',
      location: 'Remote',
      skills: ['Node.js', 'React', 'Python', 'DevSecOps'],
      description: 'Desenvolva soluções seguras e escaláveis para ambientes críticos.'
    },
    {
      title: 'SECURITY TRAINEE',
      level: 'Trainee',
      type: 'Full-time',
      location: 'Presencial/SP',
      skills: ['Interesse em Cybersec', 'Programação Básica', 'Networking', 'Linux'],
      description: 'Inicie sua carreira na elite da cibersegurança mundial.'
    }
  ];

  const benefits = [
    {
      icon: <Target size={24} />,
      title: 'MISSÕES GLOBAIS',
      description: 'Trabalhe em projetos que impactam milhões de usuários worldwide'
    },
    {
      icon: <Zap size={24} />,
      title: 'TECNOLOGIA DE PONTA',
      description: 'Acesso às mais avançadas ferramentas e laboratórios de security'
    },
    {
      icon: <Shield size={24} />,
      title: 'CERTIFICAÇÕES',
      description: 'Investimento em certificações internacionais e treinamentos'
    },
    {
      icon: <Code size={24} />,
      title: 'AUTONOMIA TÉCNICA',
      description: 'Liberdade para inovar e implementar soluções próprias'
    }
  ];

  return (
    <section id="careers" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch neon-red" data-text="CARREIRAS">
            CARREIRAS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl neon-purple mb-4">
            JUNTE-SE À ELITE DA CIBERSEGURANÇA GLOBAL
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Construa o futuro da segurança digital ao lado dos melhores especialistas do mundo
          </p>
        </div>

        {/* Call to Trainees */}
        <div className="mb-16">
          <div className="cyber-card max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-sm bg-red-500 bg-opacity-20 text-red-400 px-3 py-1 border border-red-500 border-opacity-50">
                PROGRAMA ESPECIAL
              </span>
            </div>
            <h3 className="text-2xl font-bold neon-cyan mb-4">
              PROCURAMOS NOVOS TALENTOS
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Você é um desenvolvedor, estudante de TI ou entusiasta de segurança digital? 
              Transforme sua paixão por tecnologia em uma carreira de impacto global.
            </p>
            <button className="btn-cyber purple">
              CANDIDATE-SE COMO TRAINEE
            </button>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center neon-purple mb-12">
            POSIÇÕES ABERTAS
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="cyber-card group">
                {/* Position Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:neon-red transition-all duration-300">
                      {position.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs bg-purple-500 bg-opacity-20 text-purple-400 px-2 py-1 border border-purple-500 border-opacity-50">
                        {position.level}
                      </span>
                      <span className="text-xs text-gray-400">{position.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm neon-cyan">{position.location}</div>
                  </div>
                </div>

                {/* Position Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {position.description}
                </p>

                {/* Required Skills */}
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">SKILLS REQUERIDAS:</div>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="text-xs bg-red-500 bg-opacity-20 text-red-400 px-2 py-1 border border-red-500 border-opacity-50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <div className="pt-4 border-t border-gray-700">
                  <button className="btn-cyber text-sm w-full group-hover:pulse-red">
                    APLICAR PARA VAGA
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center neon-red mb-12">
            POR QUE KODACHI?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="text-purple-500 mb-4 group-hover:text-red-500 transition-colors duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:neon-purple transition-all duration-300">
                  {benefit.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture & Values */}
        <div className="mb-16">
          <div className="cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold neon-cyan mb-6 text-center">
              NOSSA CULTURA
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold neon-red mb-2">24/7</div>
                <div className="text-sm text-gray-400">Mindset Global</div>
              </div>
              <div>
                <div className="text-3xl font-bold neon-purple mb-2">100%</div>
                <div className="text-sm text-gray-400">Remote-First</div>
              </div>
              <div>
                <div className="text-3xl font-bold neon-cyan mb-2">∞</div>
                <div className="text-sm text-gray-400">Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Recruitment */}
        <div className="terminal max-w-4xl mx-auto">
          <div className="text-cyan-400 mb-2">root@kodachi:~$ talent-acquisition --status</div>
          <div className="text-white space-y-1">
            <div>Active recruitment: <span className="neon-red">ONGOING</span></div>
            <div>Open positions: <span className="neon-purple">12+ vagas</span></div>
            <div>Team size: <span className="neon-cyan">Growing rapidly</span></div>
            <div>Next hiring sprint: <span className="text-yellow-400">Q4 2025</span></div>
          </div>
          <div className="text-cyan-400 mt-4">
            > Ready to hack the future? Join us.
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-10 w-1 h-32 bg-gradient-to-b from-red-500 to-purple-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-10 w-1 h-24 bg-gradient-to-b from-purple-500 to-cyan-400 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default CareersSection;