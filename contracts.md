# Kodachi Tecnologia - API Contracts & Integration Specification

## Overview
Este documento define os contratos de API, estrutura de dados e integração entre frontend React e backend FastAPI + MongoDB para o site institucional Kodachi Tecnologia.

## Backend API Structure

### Base Configuration
- **Base URL**: `/api`
- **Database**: MongoDB
- **Authentication**: None (public institutional site)
- **CORS**: Enabled for frontend integration

## API Endpoints

### 1. Company Information
```
GET /api/company
```
**Response:**
```json
{
  "name": "KODACHI TECNOLOGIA",
  "tagline": "Cybersecurity & Software para um mundo global",
  "description": "Empresa global com foco em desenvolvimento de software e cibersegurança, entregando soluções de alta performance em ambientes digitais críticos.",
  "globalClients": "1.000+",
  "foundedYear": 2020,
  "mission": "Inovar e proteger, oferecendo sistemas robustos, consultoria estratégica e segurança digital avançada para um mundo cada vez mais conectado.",
  "vision": "Ser referência global em soluções tecnológicas de alta segurança, moldando o futuro digital com inovação e excelência.",
  "values": "Segurança, inovação, transparência e compromisso com a formação dos futuros talentos da tecnologia global."
}
```

### 2. Services
```
GET /api/services
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "DESENVOLVIMENTO DE SOFTWARE",
    "description": "Sistemas robustos e escaláveis para ambientes digitais críticos",
    "features": [
      "Arquitetura resiliente",
      "Performance otimizada",
      "Segurança nativa",
      "Escalabilidade global"
    ],
    "status": "ACTIVE"
  },
  {
    "id": 2,
    "title": "DESENVOLVIMENTO FULLSTACK",
    "description": "Soluções completas frontend e backend com tecnologias modernas",
    "features": [
      "React + Node.js",
      "APIs RESTful",
      "Banco de dados MongoDB",
      "Deploy automatizado"
    ],
    "status": "ACTIVE"
  },
  {
    "id": 3,
    "title": "CIBERSEGURANÇA AVANÇADA",
    "description": "Proteção digital de alto nível contra ameaças modernas",
    "features": [
      "Análise de vulnerabilidades",
      "Testes de penetração",
      "Monitoramento 24/7",
      "Resposta a incidentes"
    ],
    "status": "ACTIVE"
  },
  {
    "id": 4,
    "title": "CONSULTORIA TECNOLÓGICA",
    "description": "Soluções personalizadas para desafios digitais complexos",
    "features": [
      "Auditoria de segurança",
      "Estratégia digital",
      "Transformação tecnológica",
      "Compliance regulatório"
    ],
    "status": "ACTIVE"
  }
]
```

### 3. Projects
```
GET /api/projects
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "SISTEMA BANCÁRIO GLOBAL",
    "category": "Cibersegurança",
    "description": "Implementação de sistema de segurança multicamadas para instituição financeira internacional.",
    "technologies": ["Pentesting", "Threat Detection", "Compliance SOX"],
    "impact": "+50M transações protegidas",
    "region": "América do Norte",
    "status": "DEPLOYED"
  }
]
```

### 4. Testimonials
```
GET /api/testimonials
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "Sarah Chen",
    "role": "CISO, TechCorp Global",
    "message": "Kodachi transformou nossa postura de segurança. Expertise incomparável.",
    "rating": 5,
    "verified": true
  }
]
```

### 5. Courses
```
GET /api/courses
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "HACKING ÉTICO AVANÇADO",
    "duration": "120 horas",
    "level": "Avançado",
    "description": "Técnicas de penetration testing e análise de vulnerabilidades",
    "preparationProgress": 75,
    "status": "EM BREVE"
  },
  {
    "id": 2,
    "title": "DESENVOLVIMENTO FULLSTACK",
    "duration": "160 horas",
    "level": "Intermediário",
    "description": "Stack completo React + Node.js + MongoDB para aplicações modernas",
    "preparationProgress": 70,
    "status": "EM BREVE"
  },
  {
    "id": 3,
    "title": "CIBERSEGURANÇA CORPORATIVA",
    "duration": "80 horas",
    "level": "Intermediário",
    "description": "Implementação de políticas de segurança em ambientes empresariais",
    "preparationProgress": 80,
    "status": "EM BREVE"
  },
  {
    "id": 4,
    "title": "INCIDENT RESPONSE",
    "duration": "60 horas",
    "level": "Avançado",
    "description": "Resposta rápida e eficaz a incidentes de segurança",
    "preparationProgress": 70,
    "status": "EM BREVE"
  }
]
```

### 6. Career Positions
```
GET /api/careers
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "SENIOR SECURITY ENGINEER",
    "level": "Senior",
    "type": "Full-time",
    "location": "Remote/Global",
    "skills": ["Penetration Testing", "Threat Hunting", "SIEM", "Incident Response"],
    "description": "Lidere nossa equipe de resposta a incidentes e fortaleça defesas globais.",
    "status": "OPEN"
  },
  {
    "id": 2,
    "title": "FULLSTACK DEVELOPER",
    "level": "Senior",
    "type": "Full-time",
    "location": "Remote",
    "skills": ["React", "Node.js", "MongoDB", "DevSecOps"],
    "description": "Desenvolva soluções seguras e escaláveis para ambientes críticos.",
    "status": "OPEN"
  }
]
```

### 7. Global Presence Stats
```
GET /api/stats
```
**Response:**
```json
{
  "northAmerica": 350,
  "europe": 280,
  "latinAmerica": 220,
  "asiaPacific": 150,
  "totalClients": 1000,
  "successRate": 99.8,
  "averageProjectDuration": "3-6 months",
  "continentsCovered": 4
}
```

### 8. Contact Form Submission
```
POST /api/contact
```
**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "subject": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "id": "string",
  "status": "submitted",
  "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
  "timestamp": "2025-08-15T10:30:00Z"
}
```

### 9. Training Platform Status
```
GET /api/training-status
```
**Response:**
```json
{
  "developmentProgress": 75,
  "virtualLabsSetup": 80,
  "instructorCertification": 90,
  "contentCreation": 85,
  "estimatedLaunch": "Q4 2025"
}
```

## MongoDB Collections

### 1. company
```javascript
{
  _id: ObjectId,
  name: String,
  tagline: String,
  description: String,
  globalClients: String,
  foundedYear: Number,
  mission: String,
  vision: String,
  values: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 2. services
```javascript
{
  _id: ObjectId,
  id: Number,
  title: String,
  description: String,
  features: [String],
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. projects
```javascript
{
  _id: ObjectId,
  id: Number,
  title: String,
  category: String,
  description: String,
  technologies: [String],
  impact: String,
  region: String,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. testimonials
```javascript
{
  _id: ObjectId,
  id: Number,
  name: String,
  role: String,
  message: String,
  rating: Number,
  verified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 5. courses
```javascript
{
  _id: ObjectId,
  id: Number,
  title: String,
  duration: String,
  level: String,
  description: String,
  preparationProgress: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 6. careers
```javascript
{
  _id: ObjectId,
  id: Number,
  title: String,
  level: String,
  type: String,
  location: String,
  skills: [String],
  description: String,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 7. contacts
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String,
  subject: String,
  message: String,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

### 8. stats
```javascript
{
  _id: ObjectId,
  northAmerica: Number,
  europe: Number,
  latinAmerica: Number,
  asiaPacific: Number,
  totalClients: Number,
  successRate: Number,
  averageProjectDuration: String,
  continentsCovered: Number,
  updatedAt: Date
}
```

## Frontend Integration Requirements

### 1. Remove Mock Data
- Delete all references to `/src/mock.js`
- Replace mock data imports with API calls
- Update all components to use real API data

### 2. API Service Layer
Create `/src/api/kodachiApi.js`:
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const kodachiApi = {
  getCompany: () => axios.get(`${API}/company`),
  getServices: () => axios.get(`${API}/services`),
  getProjects: () => axios.get(`${API}/projects`),
  getTestimonials: () => axios.get(`${API}/testimonials`),
  getCourses: () => axios.get(`${API}/courses`),
  getCareers: () => axios.get(`${API}/careers`),
  getStats: () => axios.get(`${API}/stats`),
  getTrainingStatus: () => axios.get(`${API}/training-status`),
  submitContact: (data) => axios.post(`${API}/contact`, data)
};
```

### 3. Component Updates Required

#### HeroSection.js
- Replace hardcoded client count with API data from `/api/stats`
- Use `stats.totalClients` for global clients counter

#### AboutSection.js  
- Replace company info with API data from `/api/company`
- Use `company.mission`, `company.vision`, `company.values`

#### ServicesSection.js
- Replace services array with API data from `/api/services`
- **ADD new service**: "DESENVOLVIMENTO FULLSTACK"

#### ProjectsSection.js
- Replace projects and testimonials with API data
- Use `/api/projects` and `/api/testimonials`
- Use `/api/stats` for global presence numbers

#### CoursesSection.js
- Replace courses with API data from `/api/courses`
- **ADD new course**: "DESENVOLVIMENTO FULLSTACK"
- Use `/api/training-status` for platform status

#### CareersSection.js
- Replace positions with API data from `/api/careers`
- **UPDATE**: Include "FULLSTACK DEVELOPER" position

#### ContactSection.js
- Integrate form submission with `/api/contact`
- Handle success/error responses
- Clear form after successful submission

### 4. Social Media Links Fix

**Current Mock Links (to be kept in frontend):**
```javascript
const socialLinks = {
  instagram: "https://instagram.com/o_nathanmartins",
  github: "https://github.com/NathanHackSec", 
  linkedin: "https://linkedin.com/in/nathan-martins",
  website: "https://kodachi.me/nathanmartins"
};
```

**Ensure all components use these exact URLs:**
- ContactSection.js social links
- Footer.js social links  
- Any other social media references

### 5. Error Handling & Loading States

Add to all components:
```javascript
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await kodachiApi.getXXX();
      setData(response.data);
    } catch (err) {
      setError('Erro ao carregar dados');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  fetchData();
}, []);
```

## Implementation Order

1. **Backend Setup**
   - Create MongoDB models
   - Implement API endpoints
   - Seed database with initial data

2. **Frontend Integration**
   - Create API service layer
   - Update components one by one
   - Remove mock.js completely
   - Add error handling & loading states

3. **Testing & Validation**
   - Test all API endpoints
   - Verify frontend integration
   - Test contact form submission
   - Validate social media links

## Additional Features Added

### New Service: DESENVOLVIMENTO FULLSTACK
- Full-stack development with modern technologies
- React + Node.js + MongoDB stack
- RESTful APIs and database integration
- Automated deployment solutions

### New Course: DESENVOLVIMENTO FULLSTACK  
- 160 hours of comprehensive training
- Intermediate level
- Complete stack from frontend to backend
- Practical projects and portfolio development

### Social Media Integration
- Direct links to official profiles
- Proper external link handling (`target="_blank"`, `rel="noopener noreferrer"`)
- Consistent styling across components

## Success Criteria

✅ All mock data replaced with real API responses  
✅ Contact form submits to backend successfully  
✅ Social media links redirect correctly  
✅ New "Desenvolvimento Fullstack" service visible  
✅ New "Desenvolvimento Fullstack" course visible  
✅ Error handling and loading states implemented  
✅ MongoDB data persistence working  
✅ All sections dynamically populated from backend