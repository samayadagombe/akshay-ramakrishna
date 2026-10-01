import { CategoryOption, ContactItem, ExperienceItem, WorkItem } from '../models/portfolio.models';

/**
 * All editable portfolio content lives in this file.
 * Update text, links and images here — no template changes needed.
 */

export const PROFILE = {
  name: 'Akshay R',
  title: 'Senior UX/UI Designer',
  city: 'Bengaluru',
  email: 'eminem21089@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/akshayramakrishna',
} as const;

export const CATEGORIES: readonly CategoryOption[] = [
  { id: 'uiux', label: 'UI / UX' },
  { id: 'graphic', label: 'Graphic Design' },
];

const unsplash = (photoId: string, w: number, h: number) =>
  `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&auto=format`;

export const WORK: readonly WorkItem[] = [
  {
    id: 'u1',
    imageUrl: unsplash('photo-1784407090680-335328788832', 700, 440),
    width: 700,
    height: 440,
    alt: 'Cybersecurity platform UX — dark geometric interface mockup',
    category: 'uiux',
    title: 'Subex Cybersecurity Platform',
    subtitle: 'Enterprise UX · Design Systems',
  },
  {
    id: 'u2',
    imageUrl: unsplash('photo-1783195016858-196aa1a7c76a', 700, 440),
    width: 700,
    height: 440,
    alt: 'Abstract app UI on smartphone, teal surface',
    category: 'uiux',
    title: 'Component Design System',
    subtitle: 'Figma · Tokens · Accessibility',
  },
  {
    id: 'u3',
    imageUrl: unsplash('photo-1783194748938-79d7812b6272', 700, 440),
    width: 700,
    height: 440,
    alt: 'Minimal app interface on silver smartphone',
    category: 'uiux',
    title: 'Enterprise SaaS Dashboard',
    subtitle: 'Information Architecture · UX Strategy',
  },
  {
    id: 'u4',
    imageUrl: unsplash('photo-1782328525381-45db8b20bb59', 700, 440),
    width: 700,
    height: 440,
    alt: 'Bold app UI on smartphone with geometric background',
    category: 'uiux',
    title: 'Onboarding Flow Redesign',
    subtitle: 'User Research · Prototyping · Himpact',
  },
  {
    id: 'u5',
    imageUrl: unsplash('photo-1782328479547-d4c0bb802143', 700, 440),
    width: 700,
    height: 440,
    alt: 'Mobile app with sunset silhouette',
    category: 'uiux',
    title: 'Responsive Web Interface',
    subtitle: 'WCAG Accessibility · Wireframing',
  },
  {
    id: 'u6',
    imageUrl: unsplash('photo-1783194588870-c00c3b134780', 700, 440),
    width: 700,
    height: 440,
    alt: 'App displaying foliage silhouette, white torus ring',
    category: 'uiux',
    title: 'Interactive Prototype — SaaS',
    subtitle: 'Adobe XD · Usability Testing',
  },
  {
    id: 'g1',
    imageUrl: unsplash('photo-1762365189058-7be5b07e038b', 700, 460),
    width: 700,
    height: 460,
    alt: 'Two campaign posters on a concrete wall',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Campfire Advertising · Art Direction',
  },
  {
    id: 'g2',
    imageUrl: unsplash('photo-1605106325682-3482f7c1c9c4', 700, 1120),
    width: 700,
    height: 1120,
    alt: 'Black and white brand illustration',
    category: 'graphic',
    title: 'Brand Identity System',
    subtitle: 'Visual Identity · Illustration',
  },
  {
    id: 'g3',
    imageUrl: unsplash('photo-1644352739408-a191ed85e513', 700, 490),
    width: 700,
    height: 490,
    alt: 'Branded brochure with tree motif on dark surface',
    category: 'graphic',
    title: 'Marketing Collateral Suite',
    subtitle: 'Print · Digital · Aspiration Advertising',
  },
  {
    id: 'g4',
    imageUrl: unsplash('photo-1774751006577-41afbfa6a5c6', 700, 460),
    width: 700,
    height: 460,
    alt: 'Blue neon poster house projection on wall',
    category: 'graphic',
    title: 'Event Branding — Typography',
    subtitle: 'Experiential · Signage',
  },
  {
    id: 'g5',
    imageUrl: unsplash('photo-1555000001-2d6d7e9f553c', 700, 1050),
    width: 700,
    height: 1050,
    alt: 'Red brand manual book on dark surface',
    category: 'graphic',
    title: 'Brand Guidelines Manual',
    subtitle: 'Campfire Lifestyle · Style Guide',
  },
];

export const SKILLS: readonly string[] = [
  'UX Strategy',
  'Design Systems',
  'Figma',
  'Prototyping',
  'User Research',
  'WCAG Accessibility',
];

export const EXPERIENCE: readonly ExperienceItem[] = [
  { role: 'Senior UX Designer', company: 'Subex', period: '2020 — Present' },
  { role: 'UI/UX Designer', company: 'Himpact', period: '2019 — 2020' },
  { role: 'Graphic Designer', company: 'Campfire & Aspiration', period: '2015 — 2019' },
];

export const CONTACT_ITEMS: readonly ContactItem[] = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: 'Phone', value: '+91 78921 96085', href: 'tel:+917892196085' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/akshayramakrishna',
    href: PROFILE.linkedinUrl,
  },
  { label: 'Location', value: 'Bengaluru, India', href: null },
];
