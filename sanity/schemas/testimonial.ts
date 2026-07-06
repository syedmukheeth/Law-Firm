/**
 * Documented schema stub for future Sanity Studio deployment.
 * Not wired to a live project — see sanity/README.md.
 */
export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "title", type: "string", title: "Title" },
    { name: "company", type: "string", title: "Company" },
    { name: "quote", type: "text", title: "Quote" },
    { name: "videoUrl", type: "url", title: "Video URL (optional)" },
  ],
};
