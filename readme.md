# Md Mostafizur Rahaman — Portfolio

A modern, responsive portfolio website for Md Mostafizur Rahaman, a Software Engineer and AI/ML developer from Dhaka, Bangladesh. Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive design** — optimized for mobile, tablet, and desktop
- **Dark / light mode** — persisted preference via `localStorage`
- **Live GitHub data** — repositories, stars, and top projects fetched from the GitHub API
- **Animated sections** — scroll-triggered reveals with `framer-motion`
- **Contact form** — EmailJS integration (fallback to direct email when not configured)
- **SEO-ready** — meta description, Open Graph, and favicon included
- **Accessibility-minded** — semantic markup, aria labels, and reduced-motion support

## Tech Stack

- **Frontend:** React 18, Vite 5, Tailwind CSS 3, Framer Motion, lucide-react, wouter
- **Tooling:** TypeScript-compatible JSX, PostCSS, esbuild

## Getting Started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

   The client runs on `http://localhost:3000`.

3. Build for production:

   ```sh
   npm run build
   ```

## Contact Form Setup (optional)

The contact form sends messages through [EmailJS](https://www.emailjs.com). To enable it, create a `.env` file in the project root with:

```sh
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should expose the parameters `from_name`, `reply_to`, and `message`. If these variables are not set, submitting the form gracefully opens the visitor's email app with the message pre-filled to `bsse1320@iit.du.ac.bd` — so the form always works.

## Customizing Content

All personal data (about, experience, projects, skills, achievements, and links) lives in a single file:

```
client/src/data/portfolio-data.js
```

Update it to keep the portfolio current without touching any component code.

## License

MIT