// Mock data for Kodachi Tecnologia website
// This file contains all the mock data used in the frontend components
// This will be replaced with real backend integration later

export const mockData = {
  // Company information
  company: {
    name: "KODACHI TECNOLOGIA",
    tagline: "Cybersecurity & Software para um mundo global",
    globalClients: "1.000+",
    foundedYear: 2020,
    description: "Empresa global com foco em desenvolvimento de software e cibersegurança, entregando soluções de alta performance em ambientes digitais críticos.",
    mission: "Inovar e proteger, oferecendo sistemas robustos, consultoria estratégica e segurança digital avançada para um mundo cada vez mais conectado.",
    vision: "Ser referência global em soluções tecnológicas de alta segurança, moldando o futuro digital com inovação e excelência.",
    values: "Segurança, inovação, transparência e compromisso com a formação dos futuros talentos da tecnologia global."
  },

  // Contact information
  contact: {
    phone: "+55 11 98819-0140",
    email: "contato@kodachi.me",
    location: "São Paulo, Brasil | Global Remote",
    businessHours: {
      weekdays: "08:00 - 18:00 (BRT)",
      saturday: "09:00 - 14:00 (BRT)",
      sunday: "Emergências apenas",
      support247: true
    }
  },

  // Social media links
  socialMedia: {
    instagram: {
      handle: "@o_nathanmartins",
      url: "https://instagram.com/o_nathanmartins"
    },
    github: {
      handle: "NathanHackSec", 
      url: "https://github.com/NathanHackSec"
    },
    linkedin: {
      handle: "Nathan Martins",
      url: "https://linkedin.com/in/nathan-martins"
    },
    website: {
      handle: "kodachi.me/nathanmartins",
      url: "https://kodachi.me/nathanmartins"
    }
  },

  // Services offered
  services: [
    {
      id: 1,
      title: "DESENVOLVIMENTO DE SOFTWARE",
      description: "Sistemas robustos e escaláveis para ambientes digitais críticos",
      features: [
        "Arquitetura resiliente",
        "Performance otimizada", 
        "Segurança nativa",
        "Escalabilidade global"
      ],
      status: "ACTIVE"
    },
    {
      id: 2,
      title: "CIBERSEGURANÇA AVANÇADA",
      description: "Proteção digital de alto nível contra ameaças modernas",
      features: [
        "Análise de vulnerabilidades",
        "Testes de penetração",
        "Monitoramento 24/7",
        "Resposta a incidentes"
      ],
      status: "ACTIVE"
    },
    {
      id: 3,
      title: "CONSULTORIA TECNOLÓGICA", 
      description: "Soluções personalizadas para desafios digitais complexos",
      features: [
        "Auditoria de segurança",
        "Estratégia digital",
        "Transformação tecnológica",
        "Compliance regulatório"
      ],
      status: "ACTIVE"
    },
    {
      id: 4,
      title: "TREINAMENTOS CORPORATIVOS",
      description: "Capacitação especializada em segurança digital",
      features: [
        "Hacking ético",
        "Awareness security",
        "Resposta a incidentes", 
        "Certificações técnicas"
      ],
      status: "ACTIVE"
    }
  ],

  // Project case studies
  projects: [
    {
      id: 1,
      title: "SISTEMA BANCÁRIO GLOBAL",
      category: "Cibersegurança",
      description: "Implementação de sistema de segurança multicamadas para instituição financeira internacional.",
      technologies: ["Pentesting", "Threat Detection", "Compliance SOX"],
      impact: "+50M transações protegidas",
      region: "América do Norte",
      status: "DEPLOYED"
    },
    {
      id: 2,
      title: "PLATAFORMA E-COMMERCE",
      category: "Desenvolvimento", 
      description: "Arquitetura resiliente para marketplace com alta disponibilidade e performance.",
      technologies: ["Microservices", "Cloud Native", "Auto-scaling"],
      impact: "99.99% uptime garantido",
      region: "Europa",
      status: "DEPLOYED"
    },
    {
      id: 3,
      title: "GOVERNO DIGITAL",
      category: "Consultoria",
      description: "Transformação digital de serviços públicos com foco em segurança cidadã.",
      technologies: ["Digital Identity", "Blockchain", "Zero Trust"],
      impact: "+2M cidadãos beneficiados", 
      region: "América Latina",
      status: "DEPLOYED"
    }
  ],

  // Client testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CISO, TechCorp Global",
      message: "Kodachi transformou nossa postura de segurança. Expertise incomparável.",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "Marcus Weber", 
      role: "CTO, EuroBank",
      message: "Parceria estratégica que nos posicionou na vanguarda da inovação.",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "Ana Rodriguez",
      role: "Dir. Tecnologia, GovTech", 
      message: "Soluções que realmente fazem a diferença na vida dos cidadãos.",
      rating: 5,
      verified: true
    }
  ],

  // Global presence statistics
  globalPresence: {
    northAmerica: 350,
    europe: 280,
    latinAmerica: 220,
    asiaPacific: 150,
    totalClients: 1000,
    successRate: 99.8,
    averageProjectDuration: "3-6 months",
    continentsCovered: 4
  },

  // Upcoming courses
  upcomingCourses: [
    {
      id: 1,
      title: "HACKING ÉTICO AVANÇADO",
      duration: "120 horas",
      level: "Avançado",
      description: "Técnicas de penetration testing e análise de vulnerabilidades",
      preparationProgress: 75,
      status: "EM BREVE"
    },
    {
      id: 2,
      title: "CIBERSEGURANÇA CORPORATIVA",
      duration: "80 horas", 
      level: "Intermediário",
      description: "Implementação de políticas de segurança em ambientes empresariais",
      preparationProgress: 80,
      status: "EM BREVE"
    },
    {
      id: 3,
      title: "INCIDENT RESPONSE",
      duration: "60 horas",
      level: "Avançado", 
      description: "Resposta rápida e eficaz a incidentes de segurança",
      preparationProgress: 70,
      status: "EM BREVE"
    },
    {
      id: 4,
      title: "SECURE CODING PRACTICES",
      duration: "100 horas",
      level: "Intermediário",
      description: "Desenvolvimento seguro e análise de código", 
      preparationProgress: 85,
      status: "EM BREVE"
    }
  ],

  // Training platform status
  trainingPlatform: {
    developmentProgress: 75,
    virtualLabsSetup: 80,
    instructorCertification: 90,
    contentCreation: 85,
    estimatedLaunch: "Q4 2025"
  },

  // Career opportunities
  openPositions: [
    {
      id: 1,
      title: "SENIOR SECURITY ENGINEER",
      level: "Senior",
      type: "Full-time",
      location: "Remote/Global",
      skills: ["Penetration Testing", "Threat Hunting", "SIEM", "Incident Response"],
      description: "Lidere nossa equipe de resposta a incidentes e fortaleça defesas globais.",
      status: "OPEN"
    },
    {
      id: 2,
      title: "CYBERSECURITY ANALYST",
      level: "Pleno", 
      type: "Full-time",
      location: "Híbrido",
      skills: ["SOC Analysis", "Malware Analysis", "Forensics", "Risk Assessment"],
      description: "Monitore e analise ameaças em tempo real para clientes globais.",
      status: "OPEN"
    },
    {
      id: 3,
      title: "FULL-STACK DEVELOPER",
      level: "Senior",
      type: "Full-time",
      location: "Remote", 
      skills: ["Node.js", "React", "Python", "DevSecOps"],
      description: "Desenvolva soluções seguras e escaláveis para ambientes críticos.",
      status: "OPEN"
    },
    {
      id: 4,
      title: "SECURITY TRAINEE",
      level: "Trainee",
      type: "Full-time",
      location: "Presencial/SP",
      skills: ["Interesse em Cybersec", "Programação Básica", "Networking", "Linux"],
      description: "Inicie sua carreira na elite da cibersegurança mundial.",
      status: "OPEN"
    }
  ],

  // Company benefits
  benefits: [
    {
      title: "MISSÕES GLOBAIS",
      description: "Trabalhe em projetos que impactam milhões de usuários worldwide"
    },
    {
      title: "TECNOLOGIA DE PONTA", 
      description: "Acesso às mais avançadas ferramentas e laboratórios de security"
    },
    {
      title: "CERTIFICAÇÕES",
      description: "Investimento em certificações internacionais e treinamentos"
    },
    {
      title: "AUTONOMIA TÉCNICA",
      description: "Liberdade para inovar e implementar soluções próprias"
    }
  ],

  // Company culture metrics
  culture: {
    mindset: "24/7 Global",
    workModel: "100% Remote-First", 
    learningPhilosophy: "∞ Learning",
    activeRecruitment: true,
    openPositionsCount: "12+",
    teamGrowth: "Growing rapidly",
    nextHiringSprint: "Q4 2025"
  }
};

// Export individual sections for easier component usage
export const {
  company,
  contact,
  socialMedia, 
  services,
  projects,
  testimonials,
  globalPresence,
  upcomingCourses,
  trainingPlatform,
  openPositions,
  benefits,
  culture
} = mockData;

export default mockData;