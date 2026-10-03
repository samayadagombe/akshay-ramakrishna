import {
  CategoryOption,
ContactItem,
  ExperienceItem,
  WorkItem,
  ProfileItem
} from '../models/portfolio.models';

/**
 * ============================================================
 * PORTFOLIO CATEGORIES
 * ============================================================
 */

export const CATEGORIES: readonly CategoryOption[] = [
  {
    id: 'uiux',
    label: 'UI / UX',
  },
  {
    id: 'graphic',
    label: 'Graphic Design',
  },
];

/**
 * ============================================================
 * HELPER
 * ============================================================
 */

const unsplash = (
  photoId: string,
  w: number,
  h: number
): string =>
  `https://images.unsplash.com/${photoId}?w=${w}&h=${h}&fit=crop&auto=format`;

/**
 * ============================================================
 * SELECTED WORK
 * ============================================================
 */

export const WORK: readonly WorkItem[] = [
  // ==========================================================
  // UI / UX — 2 PROJECTS
  // ==========================================================

  {
    id: 'u1',
    imageUrl: 'images/ux_case_study.png',
    width: 1400,
    height: 6000,
    alt: 'Sentinel Cybersecurity Platform UX case study',
    category: 'uiux',
    title: 'Sentinel Cybersecurity Platform',
    subtitle: 'Enterprise UX · Design Systems',
  },

  {
    id: 'u2',
    imageUrl: 'images/ux_case_study2.png',
    width: 1400,
    height: 1000,
    alt: 'Product user experience and interface design case study',
    category: 'uiux',
    title: 'Enterprise Product Experience',
    subtitle: 'Product Design · UI/UX · Prototyping',
  },

  // ==========================================================
  // GRAPHIC DESIGN — 27 PROJECTS
  // ==========================================================

  {
    id: 'g1',
    imageUrl: 'images/GD1.jpg',
    width: 700,
    height: 460,
    alt: 'Two campaign posters on a concrete wall',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g2',
    imageUrl: 'images/GD2.jpg',
    width: 700,
    height: 1120,
    alt: 'Black and white brand illustration',
    category: 'graphic',
    title: 'Brand Identity System',
    subtitle: 'Visual Identity · Illustration',
  },

  {
    id: 'g3',
    imageUrl: 'images/GD3.jpg',
    width: 700,
    height: 490,
    alt: 'Branded brochure with tree motif on dark surface',
    category: 'graphic',
    title: 'Marketing Collateral Suite',
    subtitle: 'Print · Digital · Aspiration Advertising',
  },

  {
    id: 'g4',
    imageUrl: 'images/GD4.jpg',
    width: 700,
    height: 460,
    alt: 'Blue neon poster house projection on wall',
    category: 'graphic',
    title: 'Event Branding — Typography',
    subtitle: 'Experiential · Signage',
  },

  {
    id: 'g5',
    imageUrl: 'images/GD5.jpg',
    width: 700,
    height: 1050,
    alt: 'Red brand manual book on dark surface',
    category: 'graphic',
    title: 'Brand Guidelines Manual',
    subtitle: 'Campfire Lifestyle · Style Guide',
  },

  {
    id: 'g6',
    imageUrl: 'images/GD6.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 6',
    category: 'graphic',
    title: 'Campaign Artwork 06',
    subtitle: 'Graphic Design · Campaign',
  },

  {
    id: 'g7',
    imageUrl: 'images/GD7.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 7',
    category: 'graphic',
    title: 'Campaign Artwork 07',
    subtitle: 'Graphic Design · Campaign',
  },

  {
    id: 'g8',
    imageUrl: 'images/GD8.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 8',
    category: 'graphic',
    title: 'Campaign Artwork 08',
    subtitle: 'Graphic Design · Branding',
  },

  {
    id: 'g9',
    imageUrl: 'images/GD9.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 9',
    category: 'graphic',
    title: 'Campaign Artwork 09',
    subtitle: 'Graphic Design · Branding',
  },

  {
    id: 'g10',
    imageUrl: 'images/GD10.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 10',
    category: 'graphic',
    title: 'Campaign Artwork 10',
    subtitle: 'Graphic Design · Art Direction',
  },

  {
    id: 'g11',
    imageUrl: 'images/GD11.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 11',
    category: 'graphic',
    title: 'Campaign Artwork 11',
    subtitle: 'Graphic Design · Art Direction',
  },

  {
    id: 'g12',
    imageUrl: 'images/GD12.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 12',
    category: 'graphic',
    title: 'Campaign Artwork 12',
    subtitle: 'Graphic Design · Editorial',
  },

  {
    id: 'g13',
    imageUrl: 'images/GD13.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 13',
    category: 'graphic',
    title: 'Campaign Artwork 13',
    subtitle: 'Graphic Design · Editorial',
  },

  {
    id: 'g14',
    imageUrl: 'images/GD14.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 14',
    category: 'graphic',
    title: 'Campaign Artwork 14',
    subtitle: 'Graphic Design · Print',
  },

  {
    id: 'g15',
    imageUrl: 'images/GD15.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 15',
    category: 'graphic',
    title: 'Campaign Artwork 15',
    subtitle: 'Graphic Design · Print',
  },

  {
    id: 'g16',
    imageUrl: 'images/GD16.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 16',
    category: 'graphic',
    title: 'Campaign Artwork 16',
    subtitle: 'Graphic Design · Digital',
  },

  {
    id: 'g17',
    imageUrl: 'images/GD17.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 17',
    category: 'graphic',
    title: 'Campaign Artwork 17',
    subtitle: 'Graphic Design · Digital',
  },

  {
    id: 'g18',
    imageUrl: 'images/GD18.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 18',
    category: 'graphic',
    title: 'Campaign Artwork 18',
    subtitle: 'Graphic Design · Identity',
  },

  {
    id: 'g19',
    imageUrl: 'images/GD19.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 19',
    category: 'graphic',
    title: 'Campaign Artwork 19',
    subtitle: 'Graphic Design · Identity',
  },

  {
    id: 'g20',
    imageUrl: 'images/GD20.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 20',
    category: 'graphic',
    title: 'Campaign Artwork 20',
    subtitle: 'Graphic Design · Advertising',
  },

  {
    id: 'g21',
    imageUrl: 'images/GD21.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 21',
    category: 'graphic',
    title: 'Campaign Artwork 21',
    subtitle: 'Graphic Design · Advertising',
  },

  {
    id: 'g22',
    imageUrl: 'images/GD22.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 22',
    category: 'graphic',
    title: 'Campaign Artwork 22',
    subtitle: 'Graphic Design · Social Media',
  },

  {
    id: 'g23',
    imageUrl: 'images/GD23.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 23',
    category: 'graphic',
    title: 'Campaign Artwork 23',
    subtitle: 'Graphic Design · Social Media',
  },

  {
    id: 'g24',
    imageUrl: 'images/GD24.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 24',
    category: 'graphic',
    title: 'Campaign Artwork 24',
    subtitle: 'Graphic Design · Packaging',
  },

  {
    id: 'g25',
    imageUrl: 'images/GD25.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 25',
    category: 'graphic',
    title: 'Campaign Artwork 25',
    subtitle: 'Graphic Design · Packaging',
  },

  {
    id: 'g26',
    imageUrl: 'images/GD26.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 26',
    category: 'graphic',
    title: 'Campaign Artwork 26',
    subtitle: 'Graphic Design · Visual Communication',
  },

  {
    id: 'g27',
    imageUrl: 'images/GD27.jpg',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 27',
    category: 'graphic',
    title: 'Campaign Artwork 27',
    subtitle: 'Graphic Design · Visual Communication',
  },
];

/**
 * ============================================================
 * EXPERIENCE
 * ============================================================
 *
 * Keep these entries only if your portfolio currently uses
 * ExperienceItem elsewhere in the application.
 */

export const EXPERIENCE: readonly ExperienceItem[] = [
  { role: 'Senior UX Designer', company: 'Subex', period: '2020 — Present' },
  { role: 'UI/UX Designer', company: 'Himpact', period: '2019 — 2020' },
  { role: 'Graphic Designer', company: 'Campfire & Aspiration', period: '2015 — 2019' },
];

/**
 * ============================================================
 * CONTACT
 * ============================================================
 *
 * Keep these entries only if your portfolio currently uses
 * ContactItem elsewhere in the application.
 */

export const CONTACT: readonly ContactItem[] = [];
export const PROFILE = {
  name: 'Akshay R',
  title: 'Senior UX/UI Designer',
  city: 'Bengaluru',
  email: 'eminem21089@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/akshayramakrishna',
} as const;

export const CONTACT_ITEMS: readonly ContactItem[] = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: 'Phone', value: '+91 78921 96085', href: 'tel:+917892196085' },
   { label: 'LinkedIn', value: 'linkedin.com/in/akshayramakrishna', href: PROFILE.linkedinUrl},
  { label: 'Location', value: 'Bengaluru, India', href: null },
];


export const SKILLS: readonly string[] = [ 
'UX Strategy', 
'User Research',
'Product Design', 
'User Flows',
'UI Design', 
'Design Systems', 
'Prototyping',  
'Wireframing',   
'WCAG Accessibility', 
'SaaS Design', 
'Figma', 
'Adobe Creative Suite',
'Branding', 
];