# Frontend — Personal Portfolio

Frontend application for my portfolio website, built to present my profile, projects, skills, and experience with a clean, responsive, and technical-first user experience.

**Live Site:** [https://virajdalsania.vercel.app/](https://virajdalsania.vercel.app/)  
**Main Repository:** [Viraj5503/Personal-Portfolio](https://github.com/Viraj5503/Personal-Portfolio)

---

## What This Frontend Includes

- Multi-section portfolio UI (About, Projects, Skills, Education, Experience, Contact)
- Domain-oriented project presentation (AI/ML, Data Science, NLP, IoT+AI, etc.)
- Dark/Light mode support with persistent user preference
- Responsive design across common breakpoints
- Contact form integration through Formspree
- Modular component structure for maintainability and extension

---

## Tech Stack

- React
- JavaScript (ES6+)
- HTML5
- CSS3 / utility-first styling patterns
- Lucide icons and reusable UI primitives

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env.local` file in this `frontend/` directory:

```env
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

### 3) Run development server

```bash
npm start
```

App runs on: [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

- `npm start` — start local development server
- `npm test` — run tests (if configured)
- `npm run build` — generate production build
- `npm run eject` — expose CRA internals (irreversible, generally not needed)

---

## Production Build

```bash
npm run build
```

This creates an optimized build in the `build/` directory suitable for deployment.

---

## Deployment (Vercel)

Recommended deployment settings:

- **Framework preset:** Create React App (auto-detected)
- **Root directory:** `frontend/`
- **Build command:** `npm run build`
- **Output directory:** `build`
- **Environment variable:** `REACT_APP_FORMSPREE_ENDPOINT`

After pushing to GitHub, Vercel can auto-deploy updates from the connected branch.

---

## Suggested Frontend Structure

```bash
frontend/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── lib/
│   └── ...
├── .env.local
└── README.md
```

---

## Quality & Engineering Goals

- Maintainable component hierarchy
- Accessible and semantic UI
- Consistent visual system across themes
- Smooth transitions and performant rendering
- Clear separation between content data and UI logic

---

## Notes

- Keep project data updated in your data source files (e.g., `src/data/`).
- Keep external links (GitHub, LinkedIn, email, resume) current.
- Validate environment variables when contact submissions fail.

---

## Contact

If you’d like to connect:

- Portfolio: [https://virajdalsania.vercel.app/](https://virajdalsania.vercel.app/)
- GitHub: [https://github.com/Viraj5503](https://github.com/Viraj5503)
