export type WorkCategory = 'uiux' | 'graphic';

export interface WorkItem {
  id: string;
  imageUrl: string;
  /** Intrinsic size of the image, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
  alt: string;
  category: WorkCategory;
  title: string;
  subtitle: string;
}

export interface CategoryOption {
  id: WorkCategory;
  label: string;
}

export interface ContactItem {
  label: string;
  value: string;
  /** `null` renders plain text instead of a link. */
  href: string | null;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
}
