# Personal Portfolio (Frontend-only)

This repository has been converted to a frontend-only project to make deployment simple and fast on Vercel. No backend server is required.

## What changed
- Frontend now uses local mock data (`frontend/src/data/mockData.js`) — all portfolio content is self-contained.
- Contact form submits directly to Formspree (free service, no server needed).
- Backend Python files were completely removed.

## Setup Instructions

### Local Development

1. **Add your profile photo:**
   - Save your photo as `profile.jpg` to: `frontend/public/assets/profile.jpg`
   - The app will display it in the Hero section automatically.

2. **Install dependencies and run:**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The app runs on `http://localhost:3000`.

### Formspree Setup (for contact form)

The contact form sends emails directly from the frontend using **Formspree** (free, no backend needed).

1. Go to https://formspree.io and sign up for a free account.
2. Create a new form and copy the form endpoint (e.g., `https://formspree.io/f/abcd1234`).
3. Create a `.env.local` file in the `frontend/` directory with:
   ```
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
4. Test locally by running `npm start` and submitting a test message.
5. Check your email (the one associated with your Formspree account) for the test submission.

### Deploy to Vercel

1. Push your repo to GitHub (already done ✓).
2. Go to https://vercel.com and connect your GitHub repository.
3. Set project root to `frontend/`.
4. In **Environment Variables**, add:
   ```
   REACT_APP_FORMSPREE_ENDPOINT = https://formspree.io/f/your_form_id
   ```
5. Deploy!

## Features

- **Dark Mode Toggle**: Enabled in the header; persists to localStorage.
- **Responsive Design**: Works on desktop, tablet, and mobile.
- **Fast Load**: No backend dependency — loads in milliseconds on Vercel.
- **Contact Form**: Direct email submission via Formspree.

## Troubleshooting

- **Contact form not working?** Ensure `REACT_APP_FORMSPREE_ENDPOINT` is set and matches your Formspree form ID.
- **Photo not showing?** Make sure `frontend/public/assets/profile.jpg` exists.
- **Build errors?** Run `npm install` in the `frontend/` directory to ensure all dependencies are installed.

Enjoy your fast, serverless portfolio! 🚀
