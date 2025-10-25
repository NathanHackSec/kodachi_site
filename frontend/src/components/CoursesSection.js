import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Users, BookOpen } from 'lucide-react';

const CoursesSection = () => {
  const [blinkingText, setBlinkingText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkingText(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const upcomingCourses = [
    {
      title: 'HACKING ÉTICO AVANÇADO',
      duration: '120 horas',
      level: 'Avançado',
      description: 'Técnicas de penetration testing e análise de vulnerabilidades'
    },
    {
      title: 'CIBERSEGURANÇA CORPORATIVA',
      duration: '80 horas',
      level: 'Intermediário',
      description: 'Implementação de políticas de segurança em ambientes empresariais'
    },
    {
      title: 'INCIDENT RESPONSE',
      duration: '60 horas',
      level: 'Avançado',
      description: 'Resposta rápida e eficaz a incidentes de segurança'
    },
    {
      title: 'SECURE CODING PRACTICES',
      duration: '100 horas',
      level: 'Intermediário',
      description: 'Desenvolvimento seguro e análise de código'
    }
  ];

  return (
    <section id="courses" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* System Alert Terminal */}
        <div className="mb-16">
          <div className="terminal max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle size={24} className="text-red-500 mr-2 animate-pulse" />
              <span className="text-red-500 font-bold">[SYSTEM ALERT]</span>
            </div>
            <div className="text-cyan-400 mb-2">
              Kodachi Training Hub loading<span className="animate-pulse">...</span>
            </div>
            <div className="text-white mb-4">
              Cursos exclusivos em tecnologia e cibersegurança estarão disponíveis{' '}
              <span className={`neon-purple font-bold ${blinkingText ? 'opacity-100' : 'opacity-50'} transition-opacity`}>
                EM BREVE
              </span>
            </div>
            <div className="text-gray-400 text-sm">
              > Preparando ambiente de treinamento...
            </div>
            <div className="text-gray-400 text-sm">
              > Configurando laboratórios virtuais...
            </div>
            <div className="text-gray-400 text-sm">
              > Certificando instrutores especialistas...
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch neon-red" data-text="CURSOS KODACHI">
            CURSOS KODACHI
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Formação de elite em cibersegurança e hacking ético
          </p>
        </div>

        {/* Upcoming Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingCourses.map((course, index) => (
            <div key={index} className="cyber-card group opacity-75">
              {/* Course Header */}
              <div className="flex items-center justify-between mb-4">
                <BookOpen size={24} className="text-purple-500" />
                <span className="text-xs bg-red-500 bg-opacity-20 text-red-400 px-2 py-1 border border-red-500 border-opacity-50">
                  EM BREVE
                </span>
              </div>

              {/* Course Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:neon-purple transition-all duration-300">
                {course.title}
              </h3>

              {/* Course Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Course Details */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock size={16} className="text-cyan-400 mr-2" />
                    <span className="text-gray-400">Duração:</span>
                  </div>
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users size={16} className="text-cyan-400 mr-2" />
                    <span className="text-gray-400">Nível:</span>
                  </div>
                  <span className="neon-cyan">{course.level}</span>
                </div>
              </div>

              {/* Loading Bar */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-xs text-gray-500 mb-2">PREPARAÇÃO:</div>
                <div className="w-full bg-gray-800 h-2">
                  <div className="bg-gradient-to-r from-red-500 to-purple-500 h-2 animate-pulse" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card text-center">
            <div className="neon-red text-2xl font-bold mb-2">100%</div>
            <div className="text-gray-400">Prático</div>
            <div className="text-sm text-gray-500 mt-2">Laboratórios reais de hacking</div>
          </div>
          <div className="cyber-card text-center">
            <div className="neon-purple text-2xl font-bold mb-2">24/7</div>
            <div className="text-gray-400">Suporte</div>
            <div className="text-sm text-gray-500 mt-2">Mentoria especializada</div>
          </div>
          <div className="cyber-card text-center">
            <div className="neon-cyan text-2xl font-bold mb-2">GLOBAL</div>
            <div className="text-gray-400">Certificação</div>
            <div className="text-sm text-gray-500 mt-2">Reconhecimento internacional</div>
          </div>
        </div>

        {/* Early Access CTA */}
        <div className="text-center">
          <div className="cyber-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold neon-purple mb-4">
              ACESSO ANTECIPADO
            </h3>
            <p className="text-gray-300 mb-6">
              Seja um dos primeiros a ter acesso aos nossos cursos exclusivos. 
              Inscreva-se na lista de espera e ganhe desconto especial.
            </p>
            <button className="btn-cyber pulse-red mb-4">
              ENTRAR NA LISTA DE ESPERA
            </button>
            <div className="text-xs text-gray-500">
              * Vagas limitadas para primeira turma
            </div>
          </div>
        </div>

        {/* Terminal Loading */}
        <div className="mt-16">
          <div className="terminal max-w-4xl mx-auto">
            <div className="text-cyan-400 mb-2">root@kodachi:~$ training-hub --status</div>
            <div className="text-white space-y-1">
              <div>Platform development: <span className="neon-yellow">75% complete</span></div>
              <div>Virtual labs setup: <span className="neon-cyan">80% complete</span></div>
              <div>Instructor certification: <span className="neon-purple">90% complete</span></div>
              <div>Content creation: <span className="neon-red">85% complete</span></div>
            </div>
            <div className="text-cyan-400 mt-4">
              > Estimated launch: <span className="neon-red animate-pulse">Q4 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-1 bg-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-1 bg-purple-500 opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-16 bg-cyan-400 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default CoursesSection;