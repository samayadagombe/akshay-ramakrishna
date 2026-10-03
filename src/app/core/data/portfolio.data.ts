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
    imageUrl: 'images/GD1.jpg',
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
    imageUrl: unsplash(
      'photo-1762365189058-7be5b07e038b',
      700,
      460
    ),
    width: 700,
    height: 460,
    alt: 'Two campaign posters on a concrete wall',
    category: 'graphic',
    title: 'Campaign Poster Series',
    subtitle: 'Aspiration Advertising · Art Direction',
  },

  {
    id: 'g2',
    imageUrl: unsplash(
      'photo-1605106325682-3482f7c1c9c4',
      700,
      1120
    ),
    width: 700,
    height: 1120,
    alt: 'Black and white brand illustration',
    category: 'graphic',
    title: 'Brand Identity System',
    subtitle: 'Visual Identity · Illustration',
  },

  {
    id: 'g3',
    imageUrl: unsplash(
      'photo-1644352739408-a191ed85e513',
      700,
      490
    ),
    width: 700,
    height: 490,
    alt: 'Branded brochure with tree motif on dark surface',
    category: 'graphic',
    title: 'Marketing Collateral Suite',
    subtitle: 'Print · Digital · Aspiration Advertising',
  },

  {
    id: 'g4',
    imageUrl: unsplash(
      'photo-1774751006577-41afbfa6a5c6',
      700,
      460
    ),
    width: 700,
    height: 460,
    alt: 'Blue neon poster house projection on wall',
    category: 'graphic',
    title: 'Event Branding — Typography',
    subtitle: 'Experiential · Signage',
  },

  {
    id: 'g5',
    imageUrl: unsplash(
      'photo-1555000001-2d6d7e9f553c',
      700,
      1050
    ),
    width: 700,
    height: 1050,
    alt: 'Red brand manual book on dark surface',
    category: 'graphic',
    title: 'Brand Guidelines Manual',
    subtitle: 'Campfire Lifestyle · Style Guide',
  },

  {
    id: 'g6',
    imageUrl: 'images/graphic-design-6.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 6',
    category: 'graphic',
    title: 'Campaign Artwork 06',
    subtitle: 'Graphic Design · Campaign',
  },

  {
    id: 'g7',
    imageUrl: 'images/graphic-design-7.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 7',
    category: 'graphic',
    title: 'Campaign Artwork 07',
    subtitle: 'Graphic Design · Campaign',
  },

  {
    id: 'g8',
    imageUrl: 'images/graphic-design-8.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 8',
    category: 'graphic',
    title: 'Campaign Artwork 08',
    subtitle: 'Graphic Design · Branding',
  },

  {
    id: 'g9',
    imageUrl: 'images/graphic-design-9.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 9',
    category: 'graphic',
    title: 'Campaign Artwork 09',
    subtitle: 'Graphic Design · Branding',
  },

  {
    id: 'g10',
    imageUrl: 'images/graphic-design-10.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 10',
    category: 'graphic',
    title: 'Campaign Artwork 10',
    subtitle: 'Graphic Design · Art Direction',
  },

  {
    id: 'g11',
    imageUrl: 'images/graphic-design-11.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 11',
    category: 'graphic',
    title: 'Campaign Artwork 11',
    subtitle: 'Graphic Design · Art Direction',
  },

  {
    id: 'g12',
    imageUrl: 'images/graphic-design-12.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 12',
    category: 'graphic',
    title: 'Campaign Artwork 12',
    subtitle: 'Graphic Design · Editorial',
  },

  {
    id: 'g13',
    imageUrl: 'images/graphic-design-13.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 13',
    category: 'graphic',
    title: 'Campaign Artwork 13',
    subtitle: 'Graphic Design · Editorial',
  },

  {
    id: 'g14',
    imageUrl: 'images/graphic-design-14.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 14',
    category: 'graphic',
    title: 'Campaign Artwork 14',
    subtitle: 'Graphic Design · Print',
  },

  {
    id: 'g15',
    imageUrl: 'images/graphic-design-15.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 15',
    category: 'graphic',
    title: 'Campaign Artwork 15',
    subtitle: 'Graphic Design · Print',
  },

  {
    id: 'g16',
    imageUrl: 'images/graphic-design-16.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 16',
    category: 'graphic',
    title: 'Campaign Artwork 16',
    subtitle: 'Graphic Design · Digital',
  },

  {
    id: 'g17',
    imageUrl: 'images/graphic-design-17.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 17',
    category: 'graphic',
    title: 'Campaign Artwork 17',
    subtitle: 'Graphic Design · Digital',
  },

  {
    id: 'g18',
    imageUrl: 'images/graphic-design-18.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 18',
    category: 'graphic',
    title: 'Campaign Artwork 18',
    subtitle: 'Graphic Design · Identity',
  },

  {
    id: 'g19',
    imageUrl: 'images/graphic-design-19.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 19',
    category: 'graphic',
    title: 'Campaign Artwork 19',
    subtitle: 'Graphic Design · Identity',
  },

  {
    id: 'g20',
    imageUrl: 'images/graphic-design-20.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 20',
    category: 'graphic',
    title: 'Campaign Artwork 20',
    subtitle: 'Graphic Design · Advertising',
  },

  {
    id: 'g21',
    imageUrl: 'images/graphic-design-21.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 21',
    category: 'graphic',
    title: 'Campaign Artwork 21',
    subtitle: 'Graphic Design · Advertising',
  },

  {
    id: 'g22',
    imageUrl: 'images/graphic-design-22.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 22',
    category: 'graphic',
    title: 'Campaign Artwork 22',
    subtitle: 'Graphic Design · Social Media',
  },

  {
    id: 'g23',
    imageUrl: 'images/graphic-design-23.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 23',
    category: 'graphic',
    title: 'Campaign Artwork 23',
    subtitle: 'Graphic Design · Social Media',
  },

  {
    id: 'g24',
    imageUrl: 'images/graphic-design-24.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 24',
    category: 'graphic',
    title: 'Campaign Artwork 24',
    subtitle: 'Graphic Design · Packaging',
  },

  {
    id: 'g25',
    imageUrl: 'images/graphic-design-25.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 25',
    category: 'graphic',
    title: 'Campaign Artwork 25',
    subtitle: 'Graphic Design · Packaging',
  },

  {
    id: 'g26',
    imageUrl: 'images/graphic-design-26.png',
    width: 700,
    height: 900,
    alt: 'Graphic design campaign artwork 26',
    category: 'graphic',
    title: 'Campaign Artwork 26',
    subtitle: 'Graphic Design · Visual Communication',
  },

  {
    id: 'g27',
    imageUrl: 'images/graphic-design-27.png',
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

export const EXPERIENCE: readonly ExperienceItem[] = [];

/**
 * ============================================================
 * CONTACT
 * ============================================================
 *
 * Keep these entries only if your portfolio currently uses
 * ContactItem elsewhere in the application.
 */

export const CONTACT: readonly ContactItem[] = [];
export const CONTACT_ITEMS: readonly ContactItem[] = [];
export const PROFILE: ProfileItem = {
  name: 'Akshay',
  email: 'your-email@example.com',
  role: 'Senior UX/UI Designer',
  location: 'Bengaluru, India',
  city: 'Bengaluru',
  title: 'Senior UX/UI Designer'
};
export const SKILLS: readonly ContactItem[] = [];