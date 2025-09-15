from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
from datetime import datetime
import uuid

# Portfolio Data Models
class PersonalInfo(BaseModel):
    name: str
    title: str
    subtitle: str
    email: str
    phone: str
    linkedin: str
    github: str
    location: str
    profileImage: str

class AboutInfo(BaseModel):
    summary: str
    highlights: List[str]

class Project(BaseModel):
    id: int
    title: str
    subtitle: Optional[str] = None
    duration: str
    description: str
    challenge: str
    approach: str
    results: List[str]
    technologies: List[str]
    skills: List[str]
    category: str

class Skill(BaseModel):
    name: str
    level: int
    category: str

class SkillsData(BaseModel):
    dataScience: List[Skill]
    frameworks: List[Skill]
    webDev: List[Skill]
    specialized: List[Skill]

class Education(BaseModel):
    degree: str
    institution: str
    location: str
    duration: str
    details: str
    status: str

class Certification(BaseModel):
    title: str
    issuer: str
    date: str
    category: str
    details: Optional[str] = None

class Experience(BaseModel):
    title: str
    company: str
    location: str
    duration: str
    responsibilities: List[str]

class Language(BaseModel):
    name: str
    level: str

# Database Models
class PortfolioData(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    section: str
    data: Dict[str, Any]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")

class ContactSubmissionCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str