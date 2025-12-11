// Mock data for Viraj's portfolio
export const personalInfo = {
  name: "Viraj Suresh Dalsania",
  title: "Computer Science Master's Student",
  subtitle: "Data Science & AI/ML Enthusiast | TU Dresden",
  email: "viraj.dalsania2003@gmail.com",
  phone: "(+91) 9316471288",
  linkedin: "www.linkedin.com/in/virajdalsania",
  github: "https://github.com/Viraj5503",
  location: "Dresden, Germany",
  // Use a local asset so the site doesn't rely on external/back-end image hosting.
  // Place your photo at `frontend/public/assets/profile.jpg` and it will be served at /assets/profile.jpg
  profileImage: "/assets/profile.jpg"
};

export const aboutContent = {
  summary: "Computer Science Master's student at Technische Universität Dresden with strong interest in Data Science and AI/ML applications. Passionate about exploring emerging AI technologies, conducting analytical research, and developing innovative solutions for complex data problems. Experienced in sentiment analysis, natural language processing, time-series forecasting, and anomaly detection with solid foundation in full-stack development gained through internship experience.",
  highlights: [
    "9.69 CGPA in Bachelor's degree with Outstanding Distinction",
    "Multiple IBM Data Science certifications and continuous learning",
    "Hands-on experience in ML/AI projects and quantitative finance",
    "Full-stack development experience from professional internship",
    "Currently learning German (B1 level, progressing to B2)"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Implementation of LightGBM based Long-Short Trading Strategy for Indian Stocks",
    subtitle: "Bachelor Thesis Project",
    duration: "January 2025 - May 2025",
    description: "Driven by passion for financial markets and data science, this thesis tackled building a robust, machine learning-powered long-short trading strategy for Indian stocks focusing on Nifty 500 stocks.",
    challenge: "Develop automated trading strategy using machine learning for Indian equity markets with real-world relevance and avoid lookahead bias.",
    approach: "Complete ML pipeline with automated data acquisition, feature engineering from historical price/volume data, LightGBM for classification/regression, and Optuna for hyperparameter optimization.",
    results: [
      "Consistent out-of-sample Sharpe ratios indicating strong risk-adjusted profitability",
      "High win rates and regression accuracy with reliable predictive capabilities",
      "Developed live signal generation pipeline for next-day trading simulation",
      "Robust backtesting system with strict time-based data splits"
    ],
    technologies: ["Python", "LightGBM", "Scikit-learn", "Pandas", "Optuna", "Time-series Analysis", "Quantitative Finance"],
    skills: ["Quantitative Finance", "Algorithmic Trading", "Machine Learning", "Time Series Analysis", "Feature Engineering"],
    category: "Machine Learning",
    repoUrl: "https://github.com/Viraj5503/Implementation-of-a-LightGBM-based-Long-Short-Trading-Strategy-for-Indian-Stocks"
  },
  {
    id: 2,
    title: "Analyzing Impact of Russia-Ukraine War on Oil Prices using NLP and Machine Learning",
    duration: "September 2024 - December 2024",
    description: "Examined geopolitical news sentiment impact on oil price volatility using advanced NLP techniques and machine learning.",
    challenge: "Analyze how geopolitical events and news sentiment affect oil price volatility in real-time.",
    approach: "Sentiment analysis using VADER and FinBERT, LSTM time-series forecasting, Reddit API data integration.",
    results: [
      "High accuracy predictive model with clear sentiment-price correlations",
      "Successfully integrated multiple data sources for comprehensive analysis",
      "Demonstrated practical application of NLP in financial markets"
    ],
    technologies: ["Python", "TensorFlow", "LSTM", "FinBERT", "Reddit API", "NLP", "Predictive Analytics"],
    skills: ["Natural Language Processing", "Deep Learning", "Financial Data Analysis", "Time Series Forecasting"],
    category: "NLP & Deep Learning"
  },
  {
    id: 3,
    title: "Anomaly Detection in Smart Homes Using Autoencoders and XAI",
    duration: "August 2024 - December 2024",
    description: "Developed system to detect and explain IoT sensor anomalies in smart home environments with explainable AI.",
    challenge: "Detect and explain IoT sensor anomalies in smart home environments with interpretable results.",
    approach: "Autoencoders for feature extraction, Random Forest classification, LIME for interpretability and explainable AI.",
    results: [
      "Achieved 99% accuracy in anomaly detection",
      "Provided explainable AI insights for better understanding",
      "Demonstrated practical IoT analytics application"
    ],
    technologies: ["Python", "Autoencoders", "Random Forest", "LIME", "IoT Analytics"],
    skills: ["Deep Learning", "Explainable AI", "IoT Analytics", "Feature Engineering"],
    category: "IoT & AI"
  },
  {
    id: 4,
    title: "Employee Management System",
    duration: "May 2024 - July 2024",
    description: "Created comprehensive full-stack application for employee data management during internship at IIH Global.",
    challenge: "Build production-ready employee management system with secure authentication and modern UI.",
    approach: "React.js frontend with Redux, Node.js/Express.js backend, MySQL database with JWT authentication.",
    results: [
      "Production-ready application deployed successfully",
      "Secure authentication system implemented",
      "Modern, responsive UI with excellent user experience"
    ],
    technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MySQL", "JWT", "Material-UI"],
    skills: ["Full-Stack Development", "Database Design", "Authentication Systems"],
    category: "Web Development",
    repoUrl: "https://github.com/Viraj5503/Employee_website"
  }
];

export const skills = {
  dataScience: [
    { name: "Python", level: 95, category: "Programming" },
    { name: "Machine Learning", level: 90, category: "AI/ML" },
    { name: "Deep Learning", level: 85, category: "AI/ML" },
    { name: "Natural Language Processing", level: 80, category: "AI/ML" },
    { name: "Time Series Analysis", level: 88, category: "Analytics" },
    { name: "Statistical Modeling", level: 82, category: "Analytics" }
  ],
  frameworks: [
    { name: "PyTorch", level: 85, category: "AI/ML" },
    { name: "TensorFlow", level: 80, category: "AI/ML" },
    { name: "Scikit-learn", level: 92, category: "AI/ML" },
    { name: "LightGBM", level: 88, category: "AI/ML" },
    { name: "Pandas", level: 95, category: "Data" },
    { name: "NumPy", level: 90, category: "Data" }
  ],
  webDev: [
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "MySQL", level: 75, category: "Database" },
    { name: "Redux", level: 78, category: "Frontend" }
  ],
  specialized: [
    { name: "Quantitative Finance", level: 85, category: "Finance" },
    { name: "Algorithmic Trading", level: 80, category: "Finance" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Git/GitHub", level: 88, category: "Tools" }
  ]
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Technische Universität Dresden",
    location: "Dresden, Germany",
    duration: "October 2025 - Present",
    details: "Focus: Advanced AI/ML research and applications",
    status: "current"
  },
  {
    degree: "Bachelor of Technology in Information and Communication Technology",
    institution: "Pandit Deendayal Energy University",
    location: "Gandhinagar, India",
    duration: "2021 - 2025",
    details: "CGPA: 9.69/10.0 (Graduated with Outstanding Distinction)",
    status: "completed"
  }
];

export const certifications = [
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    date: "September 2025",
    category: "Data Science"
  },
  {
    title: "Python Project for Data Science",
    issuer: "IBM",
    date: "June 2025",
    category: "Data Science"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "April 2025",
    category: "Data Science"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    date: "February 2025",
    category: "Data Science"
  },
  {
    title: "Tools for Data Science",
    issuer: "IBM",
    date: "January 2025",
    category: "Data Science"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    date: "January 2025",
    category: "Data Science"
  },
  {
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    issuer: "Udemy",
    date: "July 2024",
    category: "Cloud Computing"
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "April 2024",
    details: "Elite Certificate, Top 1%",
    category: "Security"
  }
];

export const experience = [
  {
    title: "Full Stack Web Developer Intern",
    company: "IIH Global",
    location: "Ahmedabad, India",
    duration: "May 2024 - July 2024",
    responsibilities: [
      "Developed Employee Management application using MERN stack with Redux Toolkit",
      "Implemented secure authentication and real-time database operations",
      "Enhanced skills in both frontend and backend development through various projects",
      "Gained practical experience in full-stack development, API integration, and database management"
    ]
  }
];

export const achievements = [
  "Outstanding Academic Performance with distinction in Bachelor's degree",
  "Multiple professional certifications in data science",
  "Successfully completed comprehensive ML/AI projects with practical applications",
  "National Silver Medalist - Reliance Drishti Essay Writing Competition",
  "Elite Certificate (Top 1%) - NPTEL Privacy and Security course",
  "District Level Table Tennis Player"
];

export const languages = [
  { name: "English", level: "C2 Listening/Reading, C1 Writing/Speaking" },
  { name: "German", level: "B1 (Currently learning B2)" },
  { name: "Hindi", level: "Native" },
  { name: "Gujarati", level: "Native" }
];