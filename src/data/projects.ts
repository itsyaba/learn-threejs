export type Project = {
  id: string;
  title: string;
  section: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  objectKey: 'desk' | 'laptop' | 'phone' | 'poster' | 'bookshelf' | 'door';
};

export const defaultCameraPosition: [number, number, number] = [4, 3, 6];
export const defaultCameraTarget: [number, number, number] = [0, 1.2, 0];

export const projects: Project[] = [
  {
    id: 'workspace',
    title: 'Workspace',
    section: 'Overview',
    description: 'A placeholder for the portfolio room and current work surface.',
    techStack: ['React', 'Three.js', 'R3F'],
    githubUrl: 'https://github.com/itsyaba/learn-threejs',
    liveUrl: 'https://itsyaba.github.io/learn-threejs/',
    cameraPosition: [0.2, 1.65, 1.7],
    cameraTarget: [0, 0.78, -1.25],
    objectKey: 'desk',
  },
  {
    id: 'featured-app',
    title: 'Featured App',
    section: 'Projects',
    description: 'A placeholder for the main portfolio project shown on the laptop.',
    techStack: ['TypeScript', 'React', 'Vite'],
    githubUrl: 'https://github.com/itsyaba/learn-threejs',
    liveUrl: 'https://itsyaba.github.io/learn-threejs/',
    cameraPosition: [-0.8, 1.45, 0.35],
    cameraTarget: [-0.45, 0.98, -1.28],
    objectKey: 'laptop',
  },
  {
    id: 'mobile-work',
    title: 'Mobile Work',
    section: 'Projects',
    description: 'A placeholder for mobile-focused work represented by the phone.',
    techStack: ['React Native', 'Expo', 'UI'],
    githubUrl: 'https://github.com/itsyaba/learn-threejs',
    liveUrl: 'https://itsyaba.github.io/learn-threejs/',
    cameraPosition: [1.1, 1.35, 0.45],
    cameraTarget: [0.55, 0.82, -0.98],
    objectKey: 'phone',
  },
  {
    id: 'about',
    title: 'About',
    section: 'Profile',
    description: 'A placeholder for profile and background content shown near the poster.',
    techStack: ['Design', 'Frontend', '3D'],
    githubUrl: 'https://github.com/itsyaba/learn-threejs',
    liveUrl: 'https://itsyaba.github.io/learn-threejs/',
    cameraPosition: [-1.45, 1.8, -0.8],
    cameraTarget: [-1.55, 1.75, -2.92],
    objectKey: 'poster',
  },
  {
    id: 'writing',
    title: 'Writing',
    section: 'Notes',
    description: 'A placeholder for articles, experiments, and technical notes.',
    techStack: ['Docs', 'Research', 'Web'],
    githubUrl: 'https://github.com/itsyaba/learn-threejs',
    liveUrl: 'https://itsyaba.github.io/learn-threejs/',
    cameraPosition: [1.25, 1.6, -0.7],
    cameraTarget: [2.28, 1.05, -2.35],
    objectKey: 'bookshelf',
  },
  {
    id: 'contact',
    title: 'Contact',
    section: 'Contact',
    description: 'A placeholder for contact links and next steps represented by the door.',
    techStack: ['Email', 'GitHub', 'LinkedIn'],
    githubUrl: 'https://github.com/itsyaba/learn-threejs',
    liveUrl: 'https://itsyaba.github.io/learn-threejs/',
    cameraPosition: [0.85, 1.55, -0.9],
    cameraTarget: [1.15, 1.05, -2.93],
    objectKey: 'door',
  },
];
