# spyderboy.com — Roadmap

## Week 1 — Day 1: Foundation

- [x] Add scroll-behavior smooth to html element and verify Tailwind directives are present — touches: `app/globals.css` — done when: globals.css has @tailwind base/components/utilities and html selector with scroll-behavior smooth
- [ ] Update root layout with Inter font, page title "Spyderboy Studio", description, and OG meta tags — touches: `app/layout.tsx` — done when: layout exports metadata with title, description, openGraph title/description/url, and twitter card fields
- [x] Create Netlify config with Next.js build command and plugin — touches: `netlify.toml` — done when: file has [build] command="npm run build" and [[plugins]] package="@netlify/plugin-nextjs"

## Week 1 — Day 2: Data Layer

- [ ] Create Project type and export typed projects array with all five projects including name, status, oneliner, tags, and icon fields — touches: `lib/projects.ts` — done when: five Project objects export correctly with all fields typed, getStatusClasses(status) utility returns correct Tailwind classes for all four status values
- [x] Create constants file with NAV_LINKS array, ENGINE_STATS array, and CONTACT object — touches: `lib/constants.ts` — done when: NAV_LINKS has three items (work/engine/contact with href anchors), ENGINE_STATS has three items (label+value), CONTACT has linkedin/twitter/email strings

## Week 1 — Day 3: Components

- [ ] Create Nav component with spyderboy wordmark and three anchor nav links — touches: `components/Nav.tsx` — done when: renders logo text and links to #projects #engine #why, mobile-friendly layout with flex wrap
- [ ] Create StatCard component accepting label and value props — touches: `components/StatCard.tsx` — done when: renders muted small label above large medium-weight value, uses Tailwind bg-gray-50 card style
- [ ] Create Hero component with eyebrow, four-line h1 headline, subhead paragraph, and two anchor CTA buttons — touches: `components/Hero.tsx` — done when: all copy from VISION.md renders correctly, buttons link to #projects and #engine
- [ ] Create ProjectCard component accepting a Project prop — touches: `components/ProjectCard.tsx` — done when: renders icon emoji or placeholder, status badge with correct color classes from getStatusClasses, h3 title, description, and tag pills. Hover darkens border.
- [ ] Create ProjectGrid component rendering all projects from props — touches: `components/ProjectGrid.tsx` — done when: first four cards in md:grid-cols-2 grid, fifth card (Podomus) has col-span-2 and horizontal flex layout on md+
- [ ] Create EngineSection component with two-column layout on md+ — touches: `components/EngineSection.tsx` — done when: left column has h2 Xanadu title and two description paragraphs, right column renders three StatCard components from ENGINE_STATS
- [ ] Create WhyBuilt component with large opening statement, four body paragraphs, and pull quote with left border — touches: `components/WhyBuilt.tsx` — done when: all copy from VISION.md Why section renders, pull quote has border-l-2 border-gray-300 pl-5 treatment
- [ ] Create Footer component with name/year left and contact links right separated by top border — touches: `components/Footer.tsx` — done when: renders border-t, left side "Jose Antonio Licon · Pittsburgh · 2026", right side three links to LinkedIn/Twitter/email from CONTACT constant

## Week 1 — Day 4: Assembly & Polish

- [ ] Assemble main page importing all components and passing correct props — touches: `app/page.tsx` — done when: page renders Nav, section#projects with ProjectGrid, section#engine with EngineSection, section#why with WhyBuilt, Footer — all sections separated by border-t
- [ ] Add responsive single-column mobile layout to ProjectGrid — touches: `components/ProjectGrid.tsx` — done when: cards stack in single column below md breakpoint, Podomus card stacks vertically on mobile
- [ ] Add responsive layout to EngineSection so stat cards stack below text on mobile — touches: `components/EngineSection.tsx` — done when: single column below md, two columns on md+
- [ ] Audit full page for TypeScript errors and fix all — touches: any file with type errors — done when: npm run build completes with zero type errors
- [ ] Verify all anchor links resolve correctly and smooth scroll works — touches: `components/Nav.tsx`, `app/page.tsx` — done when: clicking work/engine/contact scrolls to correct sections
- [ ] Add canonical URL, robots meta, and verify OG tags are complete — touches: `app/layout.tsx` — done when: canonical https://spyderboy.com, robots index follow, og:image path set
