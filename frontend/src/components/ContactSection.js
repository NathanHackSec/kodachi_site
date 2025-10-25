import React, { useState } from 'react';
import { Phone, Instagram, Github, Linkedin, ExternalLink, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - will be connected to backend later
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@o_nathanmartins',
      url: 'https://instagram.com/o_nathanmartins',
      icon: <Instagram size={20} />,
      color: 'text-pink-400'
    },
    {
      name: 'GitHub',
      handle: 'NathanHackSec',
      url: 'https://github.com/NathanHackSec',
      icon: <Github size={20} />,
      color: 'text-white'
    },
    {
      name: 'LinkedIn',
      handle: 'Nathan Martins',
      url: 'https://linkedin.com/in/nathan-martins',
      icon: <Linkedin size={20} />,
      color: 'text-blue-400'
    },
    {
      name: 'Site Pessoal',
      handle: 'kodachi.me/nathanmartins',
      url: 'https://kodachi.me/nathanmartins',
      icon: <ExternalLink size={20} />,
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch neon-red" data-text="CONTATO">
            CONTATO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em contato conosco. Estamos prontos para proteger e inovar seu ambiente digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="cyber-card">
            <h3 className="text-2xl font-bold neon-purple mb-6">
              <Mail size={24} className="inline mr-2" />
              ENVIE UMA MENSAGEM
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-red-500 border-opacity-50 px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-red-500 border-opacity-50 px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Empresa</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-red-500 border-opacity-50 px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Sua empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Assunto *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-red-500 border-opacity-50 px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="cybersecurity">Cibersegurança</option>
                    <option value="development">Desenvolvimento</option>
                    <option value="consulting">Consultoria</option>
                    <option value="training">Treinamento</option>
                    <option value="career">Carreira</option>
                    <option value="partnership">Parceria</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full bg-black border border-red-500 border-opacity-50 px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Descreva seu projeto ou necessidade..."
                ></textarea>
              </div>

              <button type="submit" className="btn-cyber pulse-red w-full">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="cyber-card">
              <h3 className="text-2xl font-bold neon-red mb-6">
                <Phone size={24} className="inline mr-2" />
                CONTATO DIRETO
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center">
                  <Phone size={20} className="text-red-500 mr-3 animate-pulse" />
                  <div>
                    <div className="text-white font-bold">Telefone/WhatsApp</div>
                    <a 
                      href="tel:+5511988190140" 
                      className="neon-red text-lg font-mono hover:neon-purple transition-colors"
                    >
                      +55 11 98819-0140
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <Mail size={20} className="text-cyan-400 mr-3" />
                  <div>
                    <div className="text-white font-bold">Email Comercial</div>
                    <a 
                      href="mailto:contato@kodachi.me" 
                      className="text-cyan-400 hover:neon-cyan transition-colors"
                    >
                      contato@kodachi.me
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center">
                  <MapPin size={20} className="text-purple-500 mr-3" />
                  <div>
                    <div className="text-white font-bold">Localização</div>
                    <div className="text-gray-400">São Paulo, Brasil | Global Remote</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-card">
              <h3 className="text-2xl font-bold neon-purple mb-6">
                REDES SOCIAIS
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group hover:bg-red-500 hover:bg-opacity-10 p-3 -m-3 transition-all duration-300"
                  >
                    <div className={`${social.color} mr-3 group-hover:animate-pulse`}>
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold group-hover:neon-red transition-colors">
                        {social.name}
                      </div>
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        {social.handle}
                      </div>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-gray-600 group-hover:text-red-500 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="cyber-card">
              <h3 className="text-2xl font-bold neon-cyan mb-6">
                HORÁRIO DE ATENDIMENTO
              </h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Segunda - Sexta:</span>
                  <span className="text-white">08:00 - 18:00 (BRT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábado:</span>
                  <span className="text-white">09:00 - 14:00 (BRT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingo:</span>
                  <span className="text-red-400">Emergências apenas</span>
                </div>
                <div className="pt-2 border-t border-gray-700 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Suporte 24/7:</span>
                    <span className="neon-red animate-pulse">DISPONÍVEL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Contact */}
        <div className="mt-16">
          <div className="terminal max-w-4xl mx-auto">
            <div className="text-cyan-400 mb-2">root@kodachi:~$ contact-info --all</div>
            <div className="text-white space-y-1">
              <div>Primary contact: <span className="neon-red">+55 11 98819-0140</span></div>
              <div>Response time: <span className="neon-purple">{"<"} 24 hours</span></div>
              <div>Global availability: <span className="neon-cyan">YES</span></div>
              <div>Emergency support: <span className="text-yellow-400">24/7/365</span></div>
            </div>
            <div className="text-cyan-400 mt-4">
              {">"} Ready to secure your digital future? Contact us now.
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-1 bg-red-500 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-1 bg-purple-500 opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default ContactSection;