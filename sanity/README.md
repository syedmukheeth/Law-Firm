# Sanity CMS — Future Integration

Content currently ships as static typed data in `lib/data/*.ts`, read through
`lib/content/getArticles.ts`. That function is shaped exactly like a Sanity
GROQ query result, so wiring a live project is a one-file change.

## To go live

1. `npx sanity@latest init` in this repo (or a separate studio repo).
2. Add env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_TOKEN`.
3. Deploy the schemas in `sanity/schemas/*.ts` to your Sanity Studio.
4. Replace the body of `getArticles()` / `getArticleBySlug()` in
   `lib/content/getArticles.ts` with a `next-sanity` client query — the
   `Article` return type is already correct, so no other file changes.
5. Repeat the same pattern for attorneys, practice areas, and case studies if
   those should also move to the CMS.
