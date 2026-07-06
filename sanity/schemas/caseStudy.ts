/**
 * Documented schema stub for future Sanity Studio deployment.
 * Not wired to a live project — see sanity/README.md.
 */
export const caseStudySchema = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "title" } },
    { name: "client", type: "string", title: "Client" },
    { name: "practiceArea", type: "string", title: "Practice Area" },
    { name: "year", type: "string", title: "Year" },
    { name: "challenge", type: "text", title: "Challenge" },
    { name: "approach", type: "text", title: "Approach" },
    { name: "outcome", type: "text", title: "Outcome" },
    { name: "impact", type: "text", title: "Business Impact" },
  ],
};
