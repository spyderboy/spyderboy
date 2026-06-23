# spyderboy.com — Vision

## What This Is

A personal studio portal for Jose Antonio Licon (aka Spyderboy). A single-page Next.js site that introduces five active projects and the AI-powered development system behind them. This is not a portfolio for job-seeking. It is not a pitch for investment. It is an introduction to a builder doing interesting work — aimed at peers, colleagues, and the kind of people worth knowing.

## Headline

> One person. Five very different projects. One engine. Shipping daily.

## Subheadline

> I build apps, games, and platforms — powered by an AI development system I built myself.

## Primary Audience

Silicon Valley investment bankers, technologists, and founders who met Tony at a dinner or event and Googled him afterward. They are sophisticated, time-short, and respond to specificity and confidence — not buzzwords or consulting-speak. The goal is to be memorable and worth a follow-up conversation.

## Tone

Confident. Direct. First-person. No corporate language. No "I help clients achieve." No CTAs to "hire me." Reads like a founder's studio page, not a freelancer's resume.

## Sections (in order)

### 1. Nav
- Logo: "spyderboy" wordmark (text only)
- Links: work · engine · contact (anchor links)

### 2. Hero
- Eyebrow: "Jose Antonio Licon · Pittsburgh, PA"
- Headline (4 lines, large): "One person. / Five very different projects. / One engine. / Shipping daily."
- Subhead: "I build apps, games, and platforms — powered by an AI development system I built myself."
- CTAs: "See the work" (scrolls to #projects) | "The engine →" (scrolls to #engine)

### 3. Projects (id="projects")
Five cards in a 2-column grid. Podomus spans full width at bottom.

| Project | Status | One-liner | Tags |
|---|---|---|---|
| Retro Car Radio | Live | Internet radio with a classic car preset interface. Old school vibes, a world of streaming. | iOS · Android · Flutter |
| Galaxain | Coming soon | A space strategy game where stars produce resources, fleets capture territory, and one more turn becomes five. | iOS · Android · Flutter/Flame |
| Magic Task Hat | In development | Personal productivity powered by Agile principles. Your backlog, your sprints, your rules. | Flutter · Firebase · GCP |
| Apartment Manager | In development | Property management for 29 real units. Built to solve a real problem — and it works. | Flutter · Firebase |
| Podomus | Moonshot | Free podcast hosting on GCP free tiers. Start your show. Zero cost, zero excuses. | GCP · Firebase |

Status badge colors:
- Live → green (bg-green-100 text-green-800)
- Coming soon → amber (bg-amber-100 text-amber-800)
- In development → blue (bg-blue-100 text-blue-800)
- Moonshot → purple (bg-purple-100 text-purple-800)

### 4. Engine (id="engine")
Label: "The engine" — Title: "Xanadu"
Two-column layout: description left, stat cards right.

Description:
"An autonomous development loop: local LLMs in a tiered cascade, mechanical error correction, and a planning layer that turns a backlog into running code — unattended. Claude and Gemini sit at the top, handling escalations and architecture. Everything below runs locally. A 2-week plan compresses to 2–3 days of wall-clock time."

Stats:
- Tasks completed autonomously: 535+
- First-pass success rate: ~70%
- LLM tiers in the cascade: 4 + Claude

### 5. Why I Built It (id="why")
Label: "Why I built it"

Opening (large, weighted):
"I started where everyone starts — Claude, Gemini, the usual suspects. I was amazed at what was possible. Then I ran out of tokens."

Body:
"Most people slow down at that point. I bought a maxed-out MacBook Air and started learning local LLMs instead.

What began as a workaround turned into something more interesting: a complete development loop. Product ideation. SWOT analysis. Backlog generation. Code execution across parallel workers. Models that fail over to more capable tiers when a task is too hard. Error patterns that get learned and encoded so they don't burn retries twice.

Now I set it running overnight. By morning, the project is mostly done. When I need more firepower, I spin up RunPod. A week of backlog in an hour, at a cost that doesn't require a VC.

It didn't replace the craft — my background as a full-stack developer and technical product manager is what makes the system work, not what it replaced. I still drive. I still take the wheel when the models hit a wall, or the project needs a pivot. Agile methodology is the backbone of the whole system — not just a buzzword, but the actual structure that keeps five projects moving at once."

Pull quote (left border):
"This isn't a silver bullet. It's a superpower."

### 6. Footer
Left: "Jose Antonio Licon · Pittsburgh · 2026"
Right: LinkedIn · @spyderboy · dev@spyderboy.com

## Tech Stack

- Next.js 14+ App Router
- TypeScript strict
- Tailwind CSS utilities only — no CSS modules
- next/font for Inter
- next/image for all images
- Netlify hosting (build from GitHub)

## Definition of Done

- [ ] Single page loads at spyderboy.com with no errors
- [ ] All five project cards render with correct status badges
- [ ] Engine and Why sections render correctly
- [ ] Smooth scroll anchors work for nav links
- [ ] Mobile-responsive at 375px and 768px
- [ ] OG tags correct for LinkedIn preview
- [ ] Netlify build succeeds from GitHub push
- [ ] npm run build passes with zero TypeScript errors
