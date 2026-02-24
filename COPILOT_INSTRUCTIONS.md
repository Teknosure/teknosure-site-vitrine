# Copilot Instructions — Teknosure Website

## Tech stack
- Next.js App Router only (use /app)
- TypeScript
- TailwindCSS


## Code conventions
- Server Components by default
- Add `"use client"` only when needed (forms, hooks, state)
- Use alias imports: @/components, @/lib
- Keep components small and reusable in /components
- Keep pages lean (compose components)

## Design requirements (ESN)
- Corporate, clean, minimal
- Strong spacing, consistent typography
- Accessible (labels, aria where needed)
- Responsive: mobile-first, md+ grid layouts
- No flashy animations



## Output preference
When asked to build a section:
1) explain layout
2) provide code
3) explain important Tailwind classes
