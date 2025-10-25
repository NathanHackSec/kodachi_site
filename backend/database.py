from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Collections
company_collection = db.company
services_collection = db.services
projects_collection = db.projects
testimonials_collection = db.testimonials
courses_collection = db.courses
careers_collection = db.careers
contacts_collection = db.contacts
stats_collection = db.stats
training_status_collection = db.training_status

async def close_db_connection():
    client.close()

# Seed data function
async def seed_database():
    """Seed the database with initial Kodachi Tecnologia data"""
    
    # Company data
    company_data = {
        "name": "KODACHI TECNOLOGIA",
        "tagline": "Cybersecurity & Software para um mundo global",
        "description": "Empresa global com foco em desenvolvimento de software e cibersegurança, entregando soluções de alta performance em ambientes digitais críticos.",
        "globalClients": "1.000+",
        "foundedYear": 2020,
        "mission": "Inovar e proteger, oferecendo sistemas robustos, consultoria estratégia e segurança digital avançada para um mundo cada vez mais conectado.",
        "vision": "Ser referência global em soluções tecnológicas de alta segurança, moldando o futuro digital com inovação e excelência.",
        "values": "Segurança, inovação, transparência e compromisso com a formação dos futuros talentos da tecnologia global."
    }
    
    # Check if company exists
    if not await company_collection.find_one():
        await company_collection.insert_one(company_data)
        print("✅ Company data seeded")
    
    # Services data
    services_data = [
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
    
    if not await services_collection.find_one():
        await services_collection.insert_many(services_data)
        print("✅ Services data seeded")
    
    # Projects data
    projects_data = [
        {
            "id": 1,
            "title": "SISTEMA BANCÁRIO GLOBAL",
            "category": "Cibersegurança",
            "description": "Implementação de sistema de segurança multicamadas para instituição financeira internacional.",
            "technologies": ["Pentesting", "Threat Detection", "Compliance SOX"],
            "impact": "+50M transações protegidas",
            "region": "América do Norte",
            "status": "DEPLOYED"
        },
        {
            "id": 2,
            "title": "PLATAFORMA E-COMMERCE",
            "category": "Desenvolvimento",
            "description": "Arquitetura resiliente para marketplace com alta disponibilidade e performance.",
            "technologies": ["Microservices", "Cloud Native", "Auto-scaling"],
            "impact": "99.99% uptime garantido",
            "region": "Europa",
            "status": "DEPLOYED"
        },
        {
            "id": 3,
            "title": "GOVERNO DIGITAL",
            "category": "Consultoria",
            "description": "Transformação digital de serviços públicos com foco em segurança cidadã.",
            "technologies": ["Digital Identity", "Blockchain", "Zero Trust"],
            "impact": "+2M cidadãos beneficiados",
            "region": "América Latina",
            "status": "DEPLOYED"
        }
    ]
    
    if not await projects_collection.find_one():
        await projects_collection.insert_many(projects_data)
        print("✅ Projects data seeded")
    
    # Testimonials data
    testimonials_data = [
        {
            "id": 1,
            "name": "Sarah Chen",
            "role": "CISO, TechCorp Global",
            "message": "Kodachi transformou nossa postura de segurança. Expertise incomparável.",
            "rating": 5,
            "verified": True
        },
        {
            "id": 2,
            "name": "Marcus Weber",
            "role": "CTO, EuroBank",
            "message": "Parceria estratégica que nos posicionou na vanguarda da inovação.",
            "rating": 5,
            "verified": True
        },
        {
            "id": 3,
            "name": "Ana Rodriguez",
            "role": "Dir. Tecnologia, GovTech",
            "message": "Soluções que realmente fazem a diferença na vida dos cidadãos.",
            "rating": 5,
            "verified": True
        }
    ]
    
    if not await testimonials_collection.find_one():
        await testimonials_collection.insert_many(testimonials_data)
        print("✅ Testimonials data seeded")
    
    # Courses data
    courses_data = [
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
    
    if not await courses_collection.find_one():
        await courses_collection.insert_many(courses_data)
        print("✅ Courses data seeded")
    
    # Careers data
    careers_data = [
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
            "title": "CYBERSECURITY ANALYST",
            "level": "Pleno",
            "type": "Full-time",
            "location": "Híbrido",
            "skills": ["SOC Analysis", "Malware Analysis", "Forensics", "Risk Assessment"],
            "description": "Monitore e analise ameaças em tempo real para clientes globais.",
            "status": "OPEN"
        },
        {
            "id": 3,
            "title": "FULLSTACK DEVELOPER",
            "level": "Senior",
            "type": "Full-time",
            "location": "Remote",
            "skills": ["React", "Node.js", "MongoDB", "DevSecOps"],
            "description": "Desenvolva soluções seguras e escaláveis para ambientes críticos.",
            "status": "OPEN"
        },
        {
            "id": 4,
            "title": "SECURITY TRAINEE",
            "level": "Trainee",
            "type": "Full-time",
            "location": "Presencial/SP",
            "skills": ["Interesse em Cybersec", "Programação Básica", "Networking", "Linux"],
            "description": "Inicie sua carreira na elite da cibersegurança mundial.",
            "status": "OPEN"
        }
    ]
    
    if not await careers_collection.find_one():
        await careers_collection.insert_many(careers_data)
        print("✅ Careers data seeded")
    
    # Stats data
    stats_data = {
        "northAmerica": 350,
        "europe": 280,
        "latinAmerica": 220,
        "asiaPacific": 150,
        "totalClients": 1000,
        "successRate": 99.8,
        "averageProjectDuration": "3-6 months",
        "continentsCovered": 4
    }
    
    if not await stats_collection.find_one():
        await stats_collection.insert_one(stats_data)
        print("✅ Stats data seeded")
    
    # Training status data
    training_status_data = {
        "developmentProgress": 75,
        "virtualLabsSetup": 80,
        "instructorCertification": 90,
        "contentCreation": 85,
        "estimatedLaunch": "Q4 2025"
    }
    
    if not await training_status_collection.find_one():
        await training_status_collection.insert_one(training_status_data)
        print("✅ Training status data seeded")