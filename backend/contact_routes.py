from fastapi import APIRouter, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorClient
from models import ContactSubmission, ContactSubmissionCreate
import logging
import os

# Create router for contact endpoints
contact_router = APIRouter(prefix="/api/contact", tags=["contact"])

logger = logging.getLogger(__name__)

# Database dependency (using the same client from server.py)
async def get_database():
    from server import db
    return db

@contact_router.post("/", response_model=dict)
async def submit_contact_form(
    submission: ContactSubmissionCreate,
    db = Depends(get_database)
):
    """Handle contact form submission"""
    try:
        # Create contact submission object
        contact_submission = ContactSubmission(**submission.dict())
        
        # Insert into database
        result = await db.contact_submissions.insert_one(contact_submission.dict())
        
        if result.inserted_id:
            logger.info(f"Contact form submitted successfully: {contact_submission.id}")
            return {
                "success": True,
                "message": "Thank you for your message. I'll get back to you soon!",
                "submission_id": contact_submission.id
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact submission")
            
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@contact_router.get("/submissions", response_model=list)
async def get_contact_submissions(
    limit: int = 50,
    db = Depends(get_database)
):
    """Get contact form submissions (admin endpoint)"""
    try:
        submissions = await db.contact_submissions.find().sort("submitted_at", -1).limit(limit).to_list(limit)
        return [ContactSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@contact_router.put("/submissions/{submission_id}/status")
async def update_submission_status(
    submission_id: str,
    status: str,
    db = Depends(get_database)
):
    """Update contact submission status (admin endpoint)"""
    try:
        result = await db.contact_submissions.update_one(
            {"id": submission_id},
            {"$set": {"status": status}}
        )
        
        if result.modified_count > 0:
            return {"success": True, "message": "Status updated successfully"}
        else:
            raise HTTPException(status_code=404, detail="Submission not found")
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating submission status: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")