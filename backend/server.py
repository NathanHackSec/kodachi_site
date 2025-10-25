from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from database import close_db_connection, seed_database
from routes import router
import logging
from contextlib import asynccontextmanager

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Starting Kodachi Tecnologia API server...")
    try:
        await seed_database()
        logger.info("✅ Database seeded successfully")
    except Exception as e:
        logger.error(f"❌ Error seeding database: {e}")
    
    yield
    
    # Shutdown
    logger.info("Shutting down Kodachi Tecnologia API server...")
    await close_db_connection()
    logger.info("✅ Database connection closed")

# Create the main app
app = FastAPI(
    title="Kodachi Tecnologia API",
    description="API para o site institucional da Kodachi Tecnologia - Cybersecurity & Software",
    version="1.0.0",
    lifespan=lifespan
)

# Include the API router
app.include_router(router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "Kodachi Tecnologia API is running",
        "version": "1.0.0",
        "status": "operational"
    }

# Additional health check
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "kodachi-api",
        "timestamp": "2025-08-15T10:30:00Z"
    }