from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Company Information Model
class Company(BaseModel):
    name: str
    tagline: str
    description: str
    globalClients: str
    foundedYear: int
    mission: str
    vision: str
    values: str

# Service Models
class Service(BaseModel):
    id: int
    title: str
    description: str
    features: List[str]
    status: str = "ACTIVE"

# Project Models
class Project(BaseModel):
    id: int
    title: str
    category: str
    description: str
    technologies: List[str]
    impact: str
    region: str
    status: str = "DEPLOYED"

# Testimonial Models
class Testimonial(BaseModel):
    id: int
    name: str
    role: str
    message: str
    rating: int
    verified: bool = True

# Course Models
class Course(BaseModel):
    id: int
    title: str
    duration: str
    level: str
    description: str
    preparationProgress: int
    status: str = "EM BREVE"

# Career Models
class Career(BaseModel):
    id: int
    title: str
    level: str
    type: str
    location: str
    skills: List[str]
    description: str
    status: str = "OPEN"

# Contact Models
class ContactCreate(BaseModel):
    name: str
    email: str
    company: Optional[str] = None
    subject: str
    message: str

class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    subject: str
    message: str
    status: str = "submitted"
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# Stats Models
class Stats(BaseModel):
    northAmerica: int
    europe: int
    latinAmerica: int
    asiaPacific: int
    totalClients: int
    successRate: float
    averageProjectDuration: str
    continentsCovered: int

# Training Platform Status
class TrainingStatus(BaseModel):
    developmentProgress: int
    virtualLabsSetup: int
    instructorCertification: int
    contentCreation: int
    estimatedLaunch: str