# Rezz Tools

Next.js + Supabase tools dashboard.

## 1. Install

```bash
npm install
```

## 2. Environment

Copy `.env.example` to `.env.local` and put your Supabase publishable key in `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.

Do NOT put a Supabase service-role/secret key in `.env.local` values that start with `NEXT_PUBLIC_`.

## 3. Run

```bash
npm run dev
```

Open http://localhost:3000

## 4. Vercel

Import this repository. Leave Root Directory as `./`, Framework as Next.js, and use the default build settings. Add the two environment variables from `.env.local` in Vercel.

## Supabase

This project is wired to the existing Azenm123 project (`bjvyzsrawajmoakcozpu`). The database already contains profiles, tools, categories, Premium plans, Premium requests, and site settings.

The publishable key is intended for browser use. Never expose a service-role/secret key.
