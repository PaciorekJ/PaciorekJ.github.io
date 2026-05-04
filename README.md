# Jason Paciorek — Portfolio Website

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge\&logo=githubpages\&logoColor=white)](https://pages.github.com/)

Personal portfolio website for showcasing my software engineering work, technical background, selected projects, and downloadable resume.

Live site: [https://paciorekj.github.io](https://paciorekj.github.io)

## Overview

This site is built as a focused developer portfolio for full-stack software engineering roles. It highlights my experience across web applications, mobile product development, backend/API work, integrations, deployment workflows, and client-facing software.

The portfolio includes project case studies, technical strengths, a professional timeline, contact links, light/dark theming, and a downloadable one-page resume.

## Highlights

* **Portfolio landing page** with a concise overview of my work and technical focus.
* **Project case studies** for client-facing SaaS work, Routine Gym Journal, FitnessBytes, and GameHWND.
* **Downloadable one-page resume** generated from the site’s resume content.
* **Responsive design** optimized for desktop, tablet, and mobile.
* **Light/dark theme support** with a calm, technical visual style.
* **GitHub Pages SPA routing support** so direct project links work correctly.
* **Centralized content structure** for maintaining project, resume, skill, and contact data.

## Featured Work

### White-Label Membership Management Platform

Client-facing SaaS platform built for a 12,000+ member organization. The platform supports secure onboarding, payments, identity verification, admin workflows, polling, document generation, background workers, and deployment operations.

### Routine Gym Journal

Active full-stack mobile product project focused on workout planning, guided training, local persistence, API-backed data, authentication, subscription readiness, and progress tracking.

### FitnessBytes

Full-stack social fitness platform with authentication, profiles, posts, replies, real-time messaging, notifications, and responsive UI.

### GameHWND

Game discovery platform built with React, TypeScript, React Query, Chakra UI, and the RAWG API.

## Tech Stack

* **Frontend:** React, TypeScript, React Router, Vite
* **Styling:** CSS, custom theme variables, responsive layouts
* **Animation/UI polish:** Framer Motion, icon libraries
* **PDF generation:** React PDF tooling for resume export
* **Deployment:** GitHub Pages, GitHub Actions
* **Package manager:** pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

## Deployment

The site deploys to GitHub Pages from the production build output.

```bash
pnpm build
```

The deployment workflow publishes the `dist` directory to the `gh-pages` branch.

## Contact

* **Email:** [paciorekjason@gmail.com](mailto:paciorekjason@gmail.com)
* **GitHub:** [github.com/PaciorekJ](https://github.com/PaciorekJ)
* **LinkedIn:** [linkedin.com/in/jasonpaciorek](https://www.linkedin.com/in/jasonpaciorek)
