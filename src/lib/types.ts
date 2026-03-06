export interface Work {
  slug: string;
  url: string;
  title: string;
  description: string;
  tag: string;
}

export interface Tier {
  num: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  delivery: string;
  cta: string;
  ctaStyle: "solid" | "outline";
  exclusions: string;
  highlighted: boolean;
}

export interface Service {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  clientRole: string;
  tag: string;
  description: string;
  url: string;
  heroImage?: string;
  challenge: string;
  timeline: TimelineStep[];
  deliverables: string[];
  deliveryTime: string;
  testimonial?: Testimonial;
  metrics?: { label: string; value: string }[];
}

export interface TimelineStep {
  day: string;
  title: string;
  description: string;
  aiContribution?: string;
}
