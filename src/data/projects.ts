export type Project = {
  id: string;
  title: string;
  section: string;
  description: string;
  objectKey: 'laptop' | 'phone' | 'poster' | 'bookshelf' | 'door';
};

export const projects: Project[] = [
  {
    id: 'featured-app',
    title: 'Featured App',
    section: 'Projects',
    description: 'A placeholder for the main portfolio project shown on the laptop.',
    objectKey: 'laptop',
  },
  {
    id: 'mobile-work',
    title: 'Mobile Work',
    section: 'Projects',
    description: 'A placeholder for mobile-focused work represented by the phone.',
    objectKey: 'phone',
  },
  {
    id: 'about',
    title: 'About',
    section: 'Profile',
    description: 'A placeholder for profile and background content shown near the poster.',
    objectKey: 'poster',
  },
  {
    id: 'writing',
    title: 'Writing',
    section: 'Notes',
    description: 'A placeholder for articles, experiments, and technical notes.',
    objectKey: 'bookshelf',
  },
  {
    id: 'contact',
    title: 'Contact',
    section: 'Contact',
    description: 'A placeholder for contact links and next steps represented by the door.',
    objectKey: 'door',
  },
];
