# Julius Abaabagre — Portfolio

Personal portfolio site: a landing page and three case studies (Vicinity, Convo, Let's Eat), built with Next.js and Tailwind CSS.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com) — design tokens defined in `src/app/globals.css`
- `next/font` for Geist, Hanken Grotesk, and Fraunces
- `next/image` for every image on the site

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — landing page
- `src/app/vicinity`, `src/app/convo`, `src/app/lets-eat` — case studies
- `src/components` — shared UI (header, footer, ambient effects, reveal-on-scroll)
- `src/components/case-study` — the shared case-study template pieces
- `public/images` — case study and portrait imagery

## Build

```bash
npm run build
npm start
```
