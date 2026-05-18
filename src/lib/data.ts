import { NavItem, Feature, Testimonial, PricingPlan, Stat, FaqItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const features: Feature[] = [
  {
    id: 'collab',
    icon: 'Users',
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team in real time. Comments, edits, and updates sync instantly across all devices.',
  },
  {
    id: 'ai',
    icon: 'Sparkles',
    title: 'AI-Powered Insights',
    description: 'Leverage cutting-edge AI to surface actionable insights, automate repetitive tasks, and make smarter decisions faster.',
  },
  {
    id: 'security',
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, SSO integration, and granular permission controls keep your data safe.',
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Advanced Analytics',
    description: 'Deep-dive into performance metrics with beautiful dashboards, custom reports, and real-time data visualization.',
  },
  {
    id: 'integrations',
    icon: 'Puzzle',
    title: '200+ Integrations',
    description: 'Connect with the tools you already love — Slack, GitHub, Jira, Figma, Notion, and hundreds more with one click.',
  },
  {
    id: 'automation',
    icon: 'Zap',
    title: 'Smart Automation',
    description: 'Build powerful workflows that run on autopilot. Trigger actions, send notifications, and move work forward automatically.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Head of Product',
    company: 'Vercel',
    avatar: 'SC',
    content: 'Lumina completely transformed how our team ships features. We cut our release cycle in half within the first month. I can\'t imagine going back.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Williams',
    role: 'Engineering Manager',
    company: 'Stripe',
    avatar: 'MW',
    content: 'The AI insights alone are worth 10x the subscription price. It\'s like having a brilliant analyst on the team 24/7. Our velocity has never been higher.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Priya Patel',
    role: 'CTO',
    company: 'Linear',
    avatar: 'PP',
    content: 'We evaluated 6 tools before choosing Lumina. The security features, ease of use, and incredible support team made it an easy decision. Best investment we made.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'James O\'Brien',
    role: 'VP Engineering',
    company: 'Figma',
    avatar: 'JO',
    content: 'Lumina\'s integrations ecosystem is unmatched. Everything just works. It plugged right into our stack without a single headache. Absolutely love it.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Aisha Diallo',
    role: 'Product Lead',
    company: 'Notion',
    avatar: 'AD',
    content: 'Real-time collaboration at this level is a game changer for distributed teams. Our remote engineers feel more connected than ever. Truly remarkable product.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'Tom Nakamura',
    role: 'Founder',
    company: 'Loom',
    avatar: 'TN',
    content: 'From onboarding to daily use, the experience is just delightful. The attention to detail in Lumina\'s UX is something our own team aspires to. Simply outstanding.',
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small teams just getting started.',
    features: [
      'Up to 5 team members',
      '10 projects',
      '5GB storage',
      'Basic analytics',
      'Community support',
      'Core integrations (10)',
    ],
    highlighted: false,
    cta: 'Get Started Free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    yearlyPrice: 23,
    description: 'For growing teams that need more power and collaboration.',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'All integrations (200+)',
      'AI-powered insights',
      'Custom workflows',
      'API access',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    yearlyPrice: 79,
    description: 'For large organizations with advanced security and compliance needs.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'SSO & SAML',
      'SOC 2 compliance',
      'Dedicated support',
      'Custom contracts',
      'SLA guarantee',
      'On-premise option',
      'Custom integrations',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
];

export const stats: Stat[] = [
  { value: '50K+', label: 'Teams Worldwide' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2M+', label: 'Projects Shipped' },
  { value: '4.9★', label: 'Average Rating' },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! Our Pro plan comes with a 14-day free trial, no credit card required. You can explore all features and decide if Lumina is right for your team.',
  },
  {
    question: 'Can I change my plan at any time?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.',
  },
  {
    question: 'How does the AI insights feature work?',
    answer: 'Our AI analyzes your team\'s workflows, project data, and communication patterns to surface bottlenecks, predict risks, and recommend optimizations — all automatically.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. We use AES-256 encryption at rest and TLS 1.3 in transit. We are SOC 2 Type II certified and undergo regular third-party security audits.',
  },
  {
    question: 'Do you offer discounts for nonprofits or education?',
    answer: 'Yes! We offer a 50% discount for verified nonprofits, open-source projects, and educational institutions. Contact our team to apply.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We support 200+ integrations including Slack, GitHub, GitLab, Jira, Figma, Notion, Google Workspace, Microsoft 365, Salesforce, and many more. Custom integrations are available on the Enterprise plan.',
  },
];
