# Lafaek — East Timor Economic Intelligence Platform

## Setup

```bash
npm install
cp .env.example .env
# Add your Anthropic API key to .env
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Get an API key at https://console.anthropic.com

## Deploy to Vercel

1. Push this repo to GitHub
2. Import at vercel.com
3. Add `VITE_ANTHROPIC_API_KEY` in Vercel Environment Variables
4. Deploy

The `vercel.json` is already configured with SPA rewrites for React Router.

## Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Recharts for data visualization
- React Router v6
- Anthropic Claude API (claude-sonnet-4-6) for AI policy analysis

## Pages

- `/` — Homepage
- `/petroleum-fund` — Petroleum Fund analysis with charts
- `/economy` — Economy overview
- `/population-labor` — Population and labor market data
- `/human-development` — HDI, HCI, health, food security, poverty
- `/government-budget` — Budget trajectory and execution
- `/policy-debates` — Tasi Mane, Greater Sunrise, fiscal cliff debates
- `/geopolitical-context` — ASEAN, China, Australia, Indonesia, Portugal, US
- `/about` — Why Lafaek exists, sources, methodology
- `/ask` — AI-powered policy brief generator

## Data Sources

All data from primary institutional sources: IMF, World Bank, Ministry of Finance, ILO, WHO, WFP, UNDP, La'o Hamutuk, EITI. Knowledge base updated June 2026.
