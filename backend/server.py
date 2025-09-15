from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path

# Import our route modules
from portfolio_routes import portfolio_router
from contact_routes import contact_router

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(
    title="Viraj's Portfolio API",
    description="Backend API for Viraj Dalsania's professional portfolio website",
    version="1.0.0"
)

# Create a router with the /api prefix for basic routes
api_router = APIRouter(prefix="/api")

# Basic health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Viraj's Portfolio API is running!", "status": "healthy"}

@api_router.get("/health")
async def health_check():
    try:
        # Test database connection
        await db.admin.command('ping')
        return {
            "status": "healthy",
            "message": "API and database are running properly",
            "database": "connected"
        }
    except Exception as e:
        return {
            "status": "unhealthy", 
            "message": f"Database connection failed: {str(e)}",
            "database": "disconnected"
        }

# Include all routers
app.include_router(api_router)
app.include_router(portfolio_router)
app.include_router(contact_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_event():
    logger.info("🚀 Viraj's Portfolio API started successfully!")
    logger.info("📊 Available endpoints:")
    logger.info("  - GET /api/ - Health check")
    logger.info("  - GET /api/portfolio/* - Portfolio data endpoints") 
    logger.info("  - POST /api/contact/ - Contact form submission")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
    logger.info("📴 Database connection closed")