from fastapi import APIRouter, HTTPException
from models import *
from portfolio_data import *
import logging

# Create router for portfolio endpoints
portfolio_router = APIRouter(prefix="/api/portfolio", tags=["portfolio"])

logger = logging.getLogger(__name__)

@portfolio_router.get("/personal", response_model=PersonalInfo)
async def get_personal_info():
    """Get personal information for hero section"""
    try:
        return PERSONAL_INFO
    except Exception as e:
        logger.error(f"Error fetching personal info: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/about", response_model=AboutInfo)
async def get_about_info():
    """Get about section information"""
    try:
        return ABOUT_INFO
    except Exception as e:
        logger.error(f"Error fetching about info: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects"""
    try:
        return PROJECTS
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    """Get specific project by ID"""
    try:
        project = next((p for p in PROJECTS if p.id == project_id), None)
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        return project
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project {project_id}: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/skills", response_model=SkillsData)
async def get_skills():
    """Get all skills data"""
    try:
        return SKILLS
    except Exception as e:
        logger.error(f"Error fetching skills: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/education", response_model=List[Education])
async def get_education():
    """Get education information"""
    try:
        return EDUCATION
    except Exception as e:
        logger.error(f"Error fetching education: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/certifications", response_model=List[Certification])
async def get_certifications():
    """Get certifications"""
    try:
        return CERTIFICATIONS
    except Exception as e:
        logger.error(f"Error fetching certifications: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/experience", response_model=List[Experience])
async def get_experience():
    """Get work experience"""
    try:
        return EXPERIENCE
    except Exception as e:
        logger.error(f"Error fetching experience: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/languages", response_model=List[Language])
async def get_languages():
    """Get language proficiencies"""
    try:
        return LANGUAGES
    except Exception as e:
        logger.error(f"Error fetching languages: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/achievements")
async def get_achievements():
    """Get achievements list"""
    try:
        return {"achievements": ACHIEVEMENTS}
    except Exception as e:
        logger.error(f"Error fetching achievements: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")