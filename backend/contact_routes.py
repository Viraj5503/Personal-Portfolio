# backend/contact_routes.py

from fastapi import APIRouter, HTTPException, Depends, BackgroundTasks
from motor.motor_asyncio import AsyncIOMotorClient
from models import ContactSubmission, ContactSubmissionCreate
import logging
import os
from dotenv import load_dotenv

# --- NEW IMPORTS for sending email ---
import smtplib
import ssl
from email.message import EmailMessage

# Load environment variables from .env file
load_dotenv()

# Create router for contact endpoints
contact_router = APIRouter(prefix="/api/contact", tags=["contact"])

logger = logging.getLogger(__name__)

# --- NEW FUNCTION: To send the email notification ---
def send_email_notification(submission: ContactSubmission):
    """
    Constructs and sends an email notification for a new contact form submission.
    """
    # Get email credentials from environment variables
    email_sender = os.getenv("EMAIL_HOST_USER")
    email_password = os.getenv("EMAIL_HOST_PASSWORD")
    email_receiver = email_sender  # Send the notification to yourself

    if not email_sender or not email_password:
        logger.error("Email credentials are not configured in the .env file.")
        return # Silently fail if not configured, to not break the API for the user

    # Create the email content
    subject = f"New Portfolio Contact: {submission.subject}"
    body = f"""
    You have received a new message from your portfolio contact form.

    From: {submission.name}
    Email: {submission.email}
    Subject: {submission.subject}
    -----------------------------------

    Message:
    {submission.message}
    """

    em = EmailMessage()
    # Use the site email as the actual SMTP sender (helps with SPF/DKIM),
    # but present the submitter's name in the From display and set Reply-To
    # so you can reply directly to the person who filled the form.
    em['From'] = f"{submission.name} <{email_sender}>"
    em['To'] = email_receiver
    em['Subject'] = subject
    em['Reply-To'] = submission.email
    em.set_content(body)

    # Add SSL (layer of security)
    context = ssl.create_default_context()

    try:
        # Log in and send the email
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_receiver, em.as_string())
        logger.info(f"Email notification sent successfully for submission ID: {submission.id}")
    except Exception as e:
        logger.error(f"Failed to send email notification for submission ID {submission.id}: {e}")
        # We log the error but do not raise an HTTP exception,
        # because the user's message was successfully saved.

# Database dependency
async def get_database():
    from server import db
    return db

@contact_router.post("/", response_model=dict)
async def submit_contact_form(
    submission: ContactSubmissionCreate,
    background_tasks: BackgroundTasks, # Add BackgroundTasks dependency
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

            # --- MODIFIED PART ---
            # Add the email sending task to the background.
            # This prevents the user from having to wait for the email to send.
            background_tasks.add_task(send_email_notification, contact_submission)
            
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

# ... (The rest of your file with GET and PUT routes can remain the same) ...
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