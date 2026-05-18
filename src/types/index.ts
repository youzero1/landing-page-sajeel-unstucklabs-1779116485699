export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
