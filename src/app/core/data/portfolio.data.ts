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
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g2',
    imageUrl: 'images/GD2.jpg',
    width: 700,
    height: 1120,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g3',
    imageUrl: 'images/GD3.jpg',
    width: 700,
    height: 490,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g4',
    imageUrl: 'images/GD4.jpg',
    width: 700,
    height: 460,
    alt: 'campaign posters',
    category: 'graphic',
   title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g5',
    imageUrl: 'images/GD5.jpg',
    width: 700,
    height: 1050,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g6',
    imageUrl: 'images/GD6.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g7',
    imageUrl: 'images/GD7.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g8',
    imageUrl: 'images/GD8.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g9',
    imageUrl: 'images/GD9.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g10',
    imageUrl: 'images/GD10.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g11',
    imageUrl: 'images/GD11.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g12',
    imageUrl: 'images/GD12.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g13',
    imageUrl: 'images/GD13.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g14',
    imageUrl: 'images/GD14.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g15',
    imageUrl: 'images/GD15.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g16',
    imageUrl: 'images/GD16.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g17',
    imageUrl: 'images/GD17.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g18',
    imageUrl: 'images/GD18.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g19',
    imageUrl: 'images/GD19.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g20',
    imageUrl: 'images/GD20.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g21',
    imageUrl: 'images/GD21.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g22',
    imageUrl: 'images/GD22.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g23',
    imageUrl: 'images/GD23.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g24',
    imageUrl: 'images/GD24.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g25',
    imageUrl: 'images/GD25.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g26',
    imageUrl: 'images/GD26.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g27',
    imageUrl: 'images/GD27.jpg',
    width: 700,
    height: 900,
    alt: 'campaign posters',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
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