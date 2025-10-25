import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch neon-red" data-text="SOBRE NÓS">
            SOBRE NÓS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Company Description */}
        <div className="mb-16">
          <div className="cyber-card text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A <span className="neon-red">Kodachi Tecnologia</span> é uma empresa global com foco em 
              desenvolvimento de software e cibersegurança. Temos <span className="neon-purple">+1.000 clientes</span> ao 
              redor do mundo, entregando soluções de alta performance em ambientes digitais críticos.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="cyber-card">
            <div className="text-center">
              <h3 className="text-2xl font-bold neon-red mb-4">MISSÃO</h3>
              <p className="text-gray-300 leading-relaxed">
                Inovar e proteger, oferecendo sistemas robustos, consultoria estratégica e 
                segurança digital avançada para um mundo cada vez mais conectado.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="cyber-card">
            <div className="text-center">
              <h3 className="text-2xl font-bold neon-purple mb-4">VISÃO</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser referência global em soluções tecnológicas de alta segurança, 
                moldando o futuro digital com inovação e excelência.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="cyber-card">
            <div className="text-center">
              <h3 className="text-2xl font-bold neon-cyan mb-4">VALORES</h3>
              <p className="text-gray-300 leading-relaxed">
                Segurança, inovação, transparência e compromisso com a formação 
                dos futuros talentos da tecnologia global.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Global Presence */}
          <div className="cyber-card">
            <h3 className="text-2xl font-bold neon-red mb-4">
              <span className="text-white">></span> PRESENÇA GLOBAL
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="neon-cyan mr-2">▶</span>
                Atuação global em ambientes digitais críticos
              </li>
              <li className="flex items-center">
                <span className="neon-cyan mr-2">▶</span>
                Soluções de alta performance mundialmente reconhecidas
              </li>
              <li className="flex items-center">
                <span className="neon-cyan mr-2">▶</span>
                Expertise em cibersegurança avançada
              </li>
            </ul>
          </div>

          {/* Future Commitment */}
          <div className="cyber-card">
            <h3 className="text-2xl font-bold neon-purple mb-4">
              <span className="text-white">></span> COMPROMISSO FUTURO
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="neon-cyan mr-2">▶</span>
                Apoio ao desenvolvimento de novos talentos
              </li>
              <li className="flex items-center">
                <span className="neon-cyan mr-2">▶</span>
                Treinamentos práticos e mentorias especializadas
              </li>
              <li className="flex items-center">
                <span className="neon-cyan mr-2">▶</span>
                Plataforma de cursos exclusivos em desenvolvimento
              </li>
            </ul>
          </div>
        </div>

        {/* Terminal Alert */}
        <div className="mt-16">
          <div className="terminal max-w-3xl mx-auto">
            <div className="text-red-500 mb-2">[SYSTEM STATUS] KODACHI.TECH.GLOBAL</div>
            <div className="text-cyan-400">
              > Operational since: 2020<br/>
              > Global clients served: 1000+<br/>
              > Security protocols: ACTIVE<br/>
              > Innovation level: MAXIMUM<br/>
              > <span className="text-white animate-pulse">Status: </span>
              <span className="neon-red">ONLINE AND EXPANDING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-1 h-32 bg-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-1 h-24 bg-purple-500 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default AboutSection;