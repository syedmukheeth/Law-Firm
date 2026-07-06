/**
 * Documented schema stub for future Sanity Studio deployment.
 * Not wired to a live project — see sanity/README.md.
 */
export const practiceAreaSchema = {
  name: "practiceArea",
  title: "Practice Area",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "slug", type: "slug", title: "Slug", options: { source: "name" } },
    { name: "shortDescription", type: "text", title: "Short Description" },
    { name: "description", type: "text", title: "Description" },
    { name: "services", type: "array", title: "Services", of: [{ type: "string" }] },
    { name: "icon", type: "string", title: "Icon Name" },
  ],
};
