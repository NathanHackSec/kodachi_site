from fastapi import APIRouter, HTTPException
from typing import List
from models import *
from database import *
import logging

logger = logging.getLogger(__name__)

# Create router
router = APIRouter(prefix="/api")

@router.get("/company", response_model=Company)
async def get_company():
    """Get company information"""
    try:
        company = await company_collection.find_one()
        if not company:
            raise HTTPException(status_code=404, detail="Company information not found")
        
        # Remove MongoDB _id field
        company.pop('_id', None)
        return Company(**company)
    except Exception as e:
        logger.error(f"Error fetching company data: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/services", response_model=List[Service])
async def get_services():
    """Get all services"""
    try:
        services = await services_collection.find().to_list(1000)
        # Remove MongoDB _id field from each service
        for service in services:
            service.pop('_id', None)
        return [Service(**service) for service in services]
    except Exception as e:
        logger.error(f"Error fetching services: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects"""
    try:
        projects = await projects_collection.find().to_list(1000)
        # Remove MongoDB _id field from each project
        for project in projects:
            project.pop('_id', None)
        return [Project(**project) for project in projects]
    except Exception as e:
        logger.error(f"Error fetching projects: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    """Get all testimonials"""
    try:
        testimonials = await testimonials_collection.find().to_list(1000)
        # Remove MongoDB _id field from each testimonial
        for testimonial in testimonials:
            testimonial.pop('_id', None)
        return [Testimonial(**testimonial) for testimonial in testimonials]
    except Exception as e:
        logger.error(f"Error fetching testimonials: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/courses", response_model=List[Course])
async def get_courses():
    """Get all courses"""
    try:
        courses = await courses_collection.find().to_list(1000)
        # Remove MongoDB _id field from each course
        for course in courses:
            course.pop('_id', None)
        return [Course(**course) for course in courses]
    except Exception as e:
        logger.error(f"Error fetching courses: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/careers", response_model=List[Career])
async def get_careers():
    """Get all career positions"""
    try:
        careers = await careers_collection.find().to_list(1000)
        # Remove MongoDB _id field from each career
        for career in careers:
            career.pop('_id', None)
        return [Career(**career) for career in careers]
    except Exception as e:
        logger.error(f"Error fetching careers: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/stats", response_model=Stats)
async def get_stats():
    """Get global presence statistics"""
    try:
        stats = await stats_collection.find_one()
        if not stats:
            raise HTTPException(status_code=404, detail="Stats not found")
        
        # Remove MongoDB _id field
        stats.pop('_id', None)
        return Stats(**stats)
    except Exception as e:
        logger.error(f"Error fetching stats: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/training-status", response_model=TrainingStatus)
async def get_training_status():
    """Get training platform status"""
    try:
        status = await training_status_collection.find_one()
        if not status:
            raise HTTPException(status_code=404, detail="Training status not found")
        
        # Remove MongoDB _id field
        status.pop('_id', None)
        return TrainingStatus(**status)
    except Exception as e:
        logger.error(f"Error fetching training status: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/contact", response_model=Contact)
async def submit_contact(contact_data: ContactCreate):
    """Submit contact form"""
    try:
        # Create contact object
        contact = Contact(**contact_data.dict())
        
        # Insert into database
        result = await contacts_collection.insert_one(contact.dict())
        
        if result.inserted_id:
            logger.info(f"Contact form submitted successfully: {contact.email}")
            return contact
        else:
            raise HTTPException(status_code=500, detail="Failed to submit contact form")
            
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    """Get all contact submissions (admin endpoint)"""
    try:
        contacts = await contacts_collection.find().sort("timestamp", -1).to_list(1000)
        # Remove MongoDB _id field from each contact
        for contact in contacts:
            contact.pop('_id', None)
        return [Contact(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")