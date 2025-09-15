# API Contracts for Viraj's Portfolio Website

## Overview
This document outlines the API contracts for the full-stack portfolio website, detailing the backend endpoints needed to support the frontend functionality.

## Mock Data to Replace
Current frontend uses mock data from `/frontend/src/data/mockData.js` which includes:
- Personal information
- Projects data
- Skills data  
- Education details
- Certifications
- Experience information
- Achievements
- Contact form submissions

## Required Backend APIs

### 1. Portfolio Data Endpoints

#### GET /api/portfolio/personal
**Purpose**: Retrieve personal information for hero section
**Response**:
```json
{
  "name": "Viraj Suresh Dalsania",
  "title": "Computer Science Master's Student", 
  "subtitle": "Data Science & AI/ML Enthusiast | TU Dresden",
  "email": "viraj.dalsania2003@gmail.com",
  "phone": "(+91) 9316471288",
  "linkedin": "www.linkedin.com/in/virajdalsania",
  "github": "https://github.com/Viraj5503",
  "location": "Dresden, Germany",
  "profileImage": "url_to_image"
}
```

#### GET /api/portfolio/about  
**Purpose**: Retrieve about section content
**Response**:
```json
{
  "summary": "Computer Science Master's student description...",
  "highlights": ["Achievement 1", "Achievement 2", ...]
}
```

#### GET /api/portfolio/projects
**Purpose**: Retrieve all projects for project showcase
**Response**:
```json
[
  {
    "id": 1,
    "title": "Implementation of LightGBM based Long-Short Trading Strategy...",
    "subtitle": "Bachelor Thesis Project",
    "duration": "January 2025 - May 2025",
    "description": "Project description...",
    "challenge": "Challenge description...",
    "approach": "Approach description...",
    "results": ["Result 1", "Result 2", ...],
    "technologies": ["Python", "LightGBM", ...],
    "skills": ["Quantitative Finance", ...],
    "category": "Machine Learning"
  }
]
```

#### GET /api/portfolio/skills
**Purpose**: Retrieve technical skills with levels
**Response**:
```json
{
  "dataScience": [
    {
      "name": "Python",
      "level": 95,
      "category": "Programming"
    }
  ],
  "frameworks": [...],
  "webDev": [...],
  "specialized": [...]
}
```

#### GET /api/portfolio/education
**Purpose**: Retrieve education details
**Response**:
```json
[
  {
    "degree": "Master of Science in Computer Science",
    "institution": "Technische Universität Dresden",
    "location": "Dresden, Germany", 
    "duration": "October 2025 - Present",
    "details": "Focus: Advanced AI/ML research and applications",
    "status": "current"
  }
]
```

#### GET /api/portfolio/certifications
**Purpose**: Retrieve professional certifications
**Response**:
```json
[
  {
    "title": "Databases and SQL for Data Science with Python",
    "issuer": "IBM",
    "date": "September 2025",
    "category": "Data Science",
    "details": "Optional additional info"
  }
]
```

#### GET /api/portfolio/experience
**Purpose**: Retrieve work experience
**Response**:
```json
[
  {
    "title": "Full Stack Web Developer Intern",
    "company": "IIH Global",
    "location": "Ahmedabad, India",
    "duration": "May 2024 - July 2024",
    "responsibilities": ["Responsibility 1", "Responsibility 2", ...]
  }
]
```

### 2. Contact Form Endpoint

#### POST /api/contact
**Purpose**: Handle contact form submissions
**Request Body**:
```json
{
  "name": "Sender Name",
  "email": "sender@example.com", 
  "subject": "Subject Line",
  "message": "Message content"
}
```
**Response**:
```json
{
  "success": true,
  "message": "Thank you for your message. I'll get back to you soon!"
}
```

## Database Models

### PortfolioData Model
```python
class PortfolioData(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    section: str  # 'personal', 'about', 'projects', etc.
    data: dict    # JSON data for the section
    updated_at: datetime = Field(default_factory=datetime.utcnow)
```

### ContactSubmission Model  
```python
class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    submitted_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")  # new, read, replied
```

## Frontend Integration Plan

1. **Replace Mock Data**: Remove import of mockData.js and replace with API calls
2. **Add Loading States**: Implement loading spinners while fetching data
3. **Error Handling**: Add error boundaries and fallback UI
4. **Contact Form**: Integrate form submission with backend API
5. **Environment Variables**: Use REACT_APP_BACKEND_URL for all API calls

## Implementation Priority

1. **Phase 1**: Portfolio data endpoints (GET routes)
2. **Phase 2**: Contact form endpoint (POST route)  
3. **Phase 3**: Frontend integration and testing
4. **Phase 4**: Error handling and loading states

## Success Criteria

- All mock data replaced with live API data
- Contact form functional with database persistence
- Fast loading times (<2 seconds for data fetching)
- Proper error handling for failed requests
- Responsive design maintained across all data-driven components