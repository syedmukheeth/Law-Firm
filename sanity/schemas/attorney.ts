/**
 * Documented schema stub for future Sanity Studio deployment.
 * Not wired to a live project — see sanity/README.md.
 */
export const attorneySchema = {
  name: "attorney",
  title: "Attorney",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "name" } },
    { name: "specialization", type: "string", title: "Specialization" },
    { name: "experienceYears", type: "number", title: "Years of Experience" },
    { name: "education", type: "array", title: "Education", of: [{ type: "string" }] },
    { name: "languages", type: "array", title: "Languages", of: [{ type: "string" }] },
    { name: "linkedin", type: "url", title: "LinkedIn URL" },
    { name: "bio", type: "text", title: "Bio" },
    { name: "portrait", type: "image", title: "Portrait" },
  ],
};
