/**
 * Documented schema stub for future Sanity Studio deployment.
 * Not wired to a live project — see sanity/README.md.
 */
export const articleSchema = {
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
    { name: "excerpt", type: "text", title: "Excerpt" },
    { name: "category", type: "string", title: "Category" },
    { name: "author", type: "string", title: "Author" },
    { name: "publishedAt", type: "datetime", title: "Published At" },
    { name: "readTime", type: "string", title: "Read Time" },
    { name: "body", type: "array", title: "Body", of: [{ type: "block" }] },
  ],
};
