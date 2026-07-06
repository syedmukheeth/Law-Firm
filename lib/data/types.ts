export interface PracticeArea {
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  services: string[];
}

export interface Attorney {
  slug: string;
  name: string;
  specialization: string;
  experienceYears: number;
  education: string[];
  languages: string[];
  linkedin: string;
  bio: string;
  portraitInitials: string;
  photo: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  practiceArea: string;
  year: string;
  challenge: string;
  approach: string;
  outcome: string;
  impact: string;
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  isVideo: boolean;
  photo?: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Office {
  city: string;
  country: string;
  coordinates: [number, number];
  isHeadquarters?: boolean;
}

export interface Metric {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
}
