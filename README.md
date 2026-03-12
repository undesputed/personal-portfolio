# Carrie A. Yu – Personal Portfolio

A Next.js portfolio site showcasing experience, projects, skills, and a contact form. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** Radix UI primitives, shadcn/ui-style components
- **Animation:** Framer Motion
- **Contact form:** EmailJS (client-side)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Install

```bash
npm install
```

### Environment variables

Copy the example env file and fill in values (see [Environment variables](#environment-variables)):

```bash
cp .env.example .env.local
```

### Run

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Yes (for contact form) | EmailJS public key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Yes (for contact form) | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Yes (for contact form) | EmailJS template ID |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL (default: Vercel URL) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Contact email shown and used as form recipient |
| `NEXT_PUBLIC_CONTACT_PHONE` | No | Contact phone |
| `NEXT_PUBLIC_CONTACT_LOCATION` | No | Contact location text |

Contact defaults are in `src/config/site.ts` if env vars are not set.

## Project structure

- `src/app/` – Next.js App Router (layout, page, globals)
- `src/components/` – React components (sections, UI primitives)
- `src/config/site.ts` – Site metadata, contact info, nav sections
- `src/lib/` – Utilities (animations, email service, cn)

## Deploy

The app is configured for [Vercel](https://vercel.com). Set the environment variables in the Vercel project and deploy from the repo.

## License

Private. All rights reserved.
