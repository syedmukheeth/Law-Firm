export type Chapter = {
  id: string;
  act: number;
  actLabel: string;
};

export const totalActs = 5;

export const chapters: Chapter[] = [
  { id: "hero", act: 1, actLabel: "Opening Statement" },
  { id: "case-journey", act: 1, actLabel: "Opening Statement" },
  { id: "trust-metrics", act: 1, actLabel: "Opening Statement" },
  { id: "who-we-are", act: 2, actLabel: "The Firm" },
  { id: "practice-areas", act: 2, actLabel: "The Firm" },
  { id: "attorneys", act: 2, actLabel: "The Firm" },
  { id: "industries", act: 2, actLabel: "The Firm" },
  { id: "case-studies", act: 3, actLabel: "The Record" },
  { id: "why-choose-us", act: 3, actLabel: "The Record" },
  { id: "testimonials", act: 4, actLabel: "The Verdict" },
  { id: "awards", act: 4, actLabel: "The Verdict" },
  { id: "insights", act: 4, actLabel: "The Verdict" },
  { id: "consultation-process", act: 5, actLabel: "The Next Chapter" },
  { id: "global-presence", act: 5, actLabel: "The Next Chapter" },
  { id: "faq", act: 5, actLabel: "The Next Chapter" },
  { id: "contact", act: 5, actLabel: "The Next Chapter" },
];
