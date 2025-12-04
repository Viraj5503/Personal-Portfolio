# Portfolio data for Viraj Dalsania
from models import *

# Personal Information
PERSONAL_INFO = PersonalInfo(
    name="Viraj Suresh Dalsania",
    title="Computer Science Master's Student",
    subtitle="Data Science & AI/ML Enthusiast | TU Dresden",
    email="viraj.dalsania2003@gmail.com",
    phone="(+91) 9316471288",
    linkedin="https://www.linkedin.com/in/virajdalsania",
    github="https://github.com/Viraj5503",
    location="Dresden, Germany",
    profileImage="https://customer-assets.emergentagent.com/job_viraj-analytics/artifacts/qlolufqr_WhatsApp%20Image%202025-09-16%20at%2000.42.38.jpeg"
)

# About Information
ABOUT_INFO = AboutInfo(
    summary="Computer Science Master's student at Technische Universität Dresden with strong interest in Data Science and AI/ML applications. Passionate about exploring emerging AI technologies, conducting analytical research, and developing innovative solutions for complex data problems. Experienced in sentiment analysis, natural language processing, time-series forecasting, and anomaly detection with solid foundation in full-stack development gained through internship experience.",
    highlights=[
        "Outstanding academic performance with distinction in Bachelor's degree",
        "Multiple IBM Data Science certifications and continuous learning",
        "Hands-on experience in ML/AI projects and quantitative finance",
        "Full-stack development experience from professional internship",
        "Currently learning German (B1 level, progressing to B2)"
    ]
)

# Projects Data
PROJECTS = [
    Project(
        id=1,
        title="Implementation of LightGBM based Long-Short Trading Strategy for Indian Stocks",
        subtitle="Bachelor Thesis Project",
        duration="January 2025 - May 2025",
        description="Driven by passion for financial markets and data science, this thesis tackled building a robust, machine learning-powered long-short trading strategy for Indian stocks focusing on Nifty 500 stocks.",
        challenge="Develop automated trading strategy using machine learning for Indian equity markets with real-world relevance and avoid lookahead bias.",
        approach="Complete ML pipeline with automated data acquisition, feature engineering from historical price/volume data, LightGBM for classification/regression, and Optuna for hyperparameter optimization.",
        results=[
            "Consistent out-of-sample Sharpe ratios indicating strong risk-adjusted profitability",
            "High win rates and regression accuracy with reliable predictive capabilities",
            "Developed live signal generation pipeline for next-day trading simulation",
            "Robust backtesting system with strict time-based data splits"
        ],
        technologies=["Python", "LightGBM", "Scikit-learn", "Pandas", "Optuna", "Time-series Analysis", "Quantitative Finance"],
        skills=["Quantitative Finance", "Algorithmic Trading", "Machine Learning", "Time Series Analysis", "Feature Engineering"],
        category="Machine Learning"
    ),
    Project(
        id=2,
        title="Analyzing Impact of Russia-Ukraine War on Oil Prices using NLP and Machine Learning",
        duration="September 2024 - December 2024",
        description="Examined geopolitical news sentiment impact on oil price volatility using advanced NLP techniques and machine learning.",
        challenge="Analyze how geopolitical events and news sentiment affect oil price volatility in real-time.",
        approach="Sentiment analysis using VADER and FinBERT, LSTM time-series forecasting, Reddit API data integration.",
        results=[
            "High accuracy predictive model with clear sentiment-price correlations",
            "Successfully integrated multiple data sources for comprehensive analysis",
            "Demonstrated practical application of NLP in financial markets"
        ],
        technologies=["Python", "TensorFlow", "LSTM", "FinBERT", "Reddit API", "NLP", "Predictive Analytics"],
        skills=["Natural Language Processing", "Deep Learning", "Financial Data Analysis", "Time Series Forecasting"],
        category="NLP & Deep Learning"
    ),
    Project(
        id=3,
        title="Anomaly Detection in Smart Homes Using Autoencoders and XAI",
        duration="August 2024 - December 2024",
        description="Developed system to detect and explain IoT sensor anomalies in smart home environments with explainable AI.",
        challenge="Detect and explain IoT sensor anomalies in smart home environments with interpretable results.",
        approach="Autoencoders for feature extraction, Random Forest classification, LIME for interpretability and explainable AI.",
        results=[
            "Achieved 99% accuracy in anomaly detection",
            "Provided explainable AI insights for better understanding",
            "Demonstrated practical IoT analytics application"
        ],
        technologies=["Python", "Autoencoders", "Random Forest", "LIME", "IoT Analytics"],
        skills=["Deep Learning", "Explainable AI", "IoT Analytics", "Feature Engineering"],
        category="IoT & AI"
    ),
    Project(
        id=4,
        title="Employee Management System",
        duration="May 2024 - July 2024",
        description="Created comprehensive full-stack application for employee data management during internship at IIH Global.",
        challenge="Build production-ready employee management system with secure authentication and modern UI.",
        approach="React.js frontend with Redux, Node.js/Express.js backend, MySQL database with JWT authentication.",
        results=[
            "Production-ready application deployed successfully",
            "Secure authentication system implemented",
            "Modern, responsive UI with excellent user experience"
        ],
        technologies=["React.js", "Redux Toolkit", "Node.js", "Express.js", "MySQL", "JWT", "Material-UI"],
        skills=["Full-Stack Development", "Database Design", "Authentication Systems"],
        category="Web Development"
    )
]

# Skills Data
SKILLS = SkillsData(
    dataScience=[
        Skill(name="Python", level=95, category="Programming"),
        Skill(name="Machine Learning", level=90, category="AI/ML"),
        Skill(name="Deep Learning", level=85, category="AI/ML"),
        Skill(name="Natural Language Processing", level=80, category="AI/ML"),
        Skill(name="Time Series Analysis", level=88, category="Analytics"),
        Skill(name="Statistical Modeling", level=82, category="Analytics")
    ],
    frameworks=[
        Skill(name="PyTorch", level=85, category="AI/ML"),
        Skill(name="TensorFlow", level=80, category="AI/ML"),
        Skill(name="Scikit-learn", level=92, category="AI/ML"),
        Skill(name="LightGBM", level=88, category="AI/ML"),
        Skill(name="Pandas", level=95, category="Data"),
        Skill(name="NumPy", level=90, category="Data")
    ],
    webDev=[
        Skill(name="React.js", level=85, category="Frontend"),
        Skill(name="Node.js", level=80, category="Backend"),
        Skill(name="JavaScript", level=85, category="Programming"),
        Skill(name="MySQL", level=75, category="Database"),
        Skill(name="Redux", level=78, category="Frontend")
    ],
    specialized=[
        Skill(name="Quantitative Finance", level=85, category="Finance"),
        Skill(name="Algorithmic Trading", level=80, category="Finance"),
        Skill(name="AWS", level=70, category="Cloud"),
        Skill(name="Git/GitHub", level=88, category="Tools")
    ]
)

# Education Data
EDUCATION = [
    Education(
        degree="Master of Science in Computer Science",
        institution="Technische Universität Dresden",
        location="Dresden, Germany",
        duration="October 2025 - Present",
        details="Focus: Advanced AI/ML research and applications",
        status="current"
    ),
    Education(
        degree="Bachelor of Technology in Information and Communication Technology",
        institution="Pandit Deendayal Energy University",
        location="Gandhinagar, India",
        duration="2021 - 2025",
        details="CGPA: 9.69/10.0 (Graduated with Outstanding Distinction)",
        status="completed"
    )
]

# Certifications Data
CERTIFICATIONS = [
    Certification(title="Databases and SQL for Data Science with Python", issuer="IBM", date="September 2025", category="Data Science"),
    Certification(title="Python Project for Data Science", issuer="IBM", date="June 2025", category="Data Science"),
    Certification(title="Python for Data Science, AI & Development", issuer="IBM", date="April 2025", category="Data Science"),
    Certification(title="Data Science Methodology", issuer="IBM", date="February 2025", category="Data Science"),
    Certification(title="Tools for Data Science", issuer="IBM", date="January 2025", category="Data Science"),
    Certification(title="What is Data Science?", issuer="IBM", date="January 2025", category="Data Science"),
    Certification(title="Ultimate AWS Certified Cloud Practitioner CLF-C02", issuer="Udemy", date="July 2024", category="Cloud Computing"),
    Certification(title="Privacy and Security in Online Social Media", issuer="NPTEL", date="April 2024", category="Security", details="Elite Certificate, Top 1%")
]

# Experience Data
EXPERIENCE = [
    Experience(
        title="Full Stack Web Developer Intern",
        company="IIH Global",
        location="Ahmedabad, India",
        duration="May 2024 - July 2024",
        responsibilities=[
            "Developed Employee Management application using MERN stack with Redux Toolkit",
            "Implemented secure authentication and real-time database operations",
            "Enhanced skills in both frontend and backend development through various projects",
            "Gained practical experience in full-stack development, API integration, and database management"
        ]
    )
]

# Languages Data
LANGUAGES = [
    Language(name="English", level="C2 Listening/Reading, C1 Writing/Speaking"),
    Language(name="German", level="B1 (Currently learning B2)"),
    Language(name="Hindi", level="Native"),
    Language(name="Gujarati", level="Native")
]

# Achievements
ACHIEVEMENTS = [
    "Outstanding Academic Performance with distinction in Bachelor's degree",
  "Multiple professional certifications in data science",
  "Successfully completed comprehensive ML/AI projects with practical applications",
  "National Silver Medalist - Reliance Drishti Essay Writing Competition",
  "Elite Certificate (Top 1%) - NPTEL Privacy and Security course",
  "District Level Table Tennis Player"
]