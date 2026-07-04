# Personal Portfolio Website

A production-deployed portfolio website presenting my academic, research, and project work as a Computer Science student, with a strong focus on **AI/ML, Data Science, software engineering, and applied problem-solving**.

**Live Website:** [virajdalsania.vercel.app](https://virajdalsania.vercel.app/)  
**Repository:** [Viraj5503/Personal-Portfolio](https://github.com/Viraj5503/Personal-Portfolio)

---

## Overview

This portfolio serves as a central technical profile that highlights:

- Research-oriented and implementation-focused projects
- Applied AI/ML and data science work
- Software engineering and development experience
- Education, certifications, and professional trajectory
- Contact and collaboration channels

It is designed to be clean, responsive, and recruiter-friendly while maintaining technical depth.

---

## Key Highlights

- **Responsive, modern UI** across desktop, tablet, and mobile
- **Dark/Light theme support** with persistent preference via `localStorage`
- **Structured project presentation** with overview and technical detail views
- **Professional profile sections**: about, skills, education, experience, certifications
- **Contact integration** using Formspree
- **Deployed on Vercel** for reliable and fast delivery

---

## Project Scope

The showcased work is **multi-domain**, including areas such as:

- Artificial Intelligence & Machine Learning
- Natural Language Processing / Deep Learning
- Data Science & Analytics
- IoT + AI applications
- Software and full-stack engineering applications

> This repository is not limited to “web development projects”; the portfolio presents broader technical work from academic and applied contexts.

---

## Tech Stack

Based on repository composition and implementation:

- **JavaScript** (primary frontend implementation)
- **Python** (project and data/ML-oriented ecosystem context)
- **HTML5**
- **CSS3**

Platform and tooling:

- **React** (frontend app structure)
- **Git & GitHub** (version control and collaboration)
- **Vercel** (deployment and hosting)
- **Formspree** (contact form handling)

---

## Repository Structure

```bash
Personal-Portfolio/
├── frontend/                 # Main frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   └── ...
│   └── ...
├── README.md
└── ...
```

---

## Local Development

### Prerequisites

- Git
- Node.js (LTS recommended)
- npm

### Setup

```bash
git clone https://github.com/Viraj5503/Personal-Portfolio.git
cd Personal-Portfolio/frontend
npm install
npm start
```

Open: [http://localhost:3000](http://localhost:3000)

---

## Environment Configuration

Create `frontend/.env.local`:

```env
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

This variable is used for portfolio contact submissions.

---

## Deployment

This site is hosted on **Vercel**.

**Production URL:**  
[https://virajdalsania.vercel.app/](https://virajdalsania.vercel.app/)

Typical flow:

1. Push updates to GitHub
2. Vercel detects new commits
3. Build + deployment run automatically

---

## Engineering Notes

This portfolio emphasizes practical software quality attributes:

- Maintainable component-based architecture
- Semantic and accessible UI patterns
- Theme-aware styling and smooth UX transitions
- Clear separation of content and presentation concerns
- Extensible structure for future project additions

---

## Future Enhancements

- Enhanced project filtering/search by domain and technology
- Additional technical write-ups/case-study pages
- CI-based lint/build checks
- Performance and accessibility score optimization
- Expanded analytics and engagement insights

---

## Contact

For collaboration, internships, research discussions, or opportunities:

- Portfolio: [virajdalsania.vercel.app](https://virajdalsania.vercel.app/)
- GitHub: [@Viraj5503](https://github.com/Viraj5503)

---

## License

No explicit license is currently defined.

If you want others to reuse parts of this project, consider adding an MIT License.
