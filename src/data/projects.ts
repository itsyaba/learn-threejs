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
    id: 'portfolio-v2',
    title: 'Portfolio V2',
    section: 'Portfolio',
    description:
      'Personal portfolio website built with Next.js, Tailwind CSS, shadcn/ui, and Aceternity UI.',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Aceternity UI'],
    githubUrl: 'https://github.com/itsyaba/portfolio-v2',
    liveUrl: 'https://www.yeab.works/',
    cameraPosition: [0.2, 1.65, 1.7],
    cameraTarget: [0, 0.78, -1.25],
    objectKey: 'desk',
  },
  {
    id: 'cypress',
    title: 'Cypress',
    section: 'Projects',
    description:
      'A note-taking app built with Next.js, Clerk authentication, and Convex.',
    techStack: ['TypeScript', 'Next.js', 'Clerk', 'Convex'],
    githubUrl: 'https://github.com/itsyaba/cypress',
    liveUrl: 'https://cypress-note-taking.vercel.app',
    cameraPosition: [-0.8, 1.45, 0.35],
    cameraTarget: [-0.45, 0.98, -1.28],
    objectKey: 'laptop',
  },
  {
    id: 'ethiopian-elegance',
    title: 'Ethiopian Elegance',
    section: 'Projects',
    description:
      'A deployed JavaScript web project for Ethiopian Elegance, hosted on Render.',
    techStack: ['JavaScript', 'Web App', 'Render'],
    githubUrl: 'https://github.com/itsyaba/Ethiopian-Elegance',
    liveUrl: 'https://ethiopian-elegance.onrender.com/',
    cameraPosition: [1.1, 1.35, 0.45],
    cameraTarget: [0.55, 0.82, -0.98],
    objectKey: 'phone',
  },
  {
    id: 'breadit',
    title: 'Breadit',
    section: 'Projects',
    description:
      'A Reddit-inspired clone website built with Next.js and TypeScript.',
    techStack: ['TypeScript', 'Next.js', 'Reddit Clone'],
    githubUrl: 'https://github.com/itsyaba/Breadit',
    liveUrl: 'https://breadit-nextjs.vercel.app/',
    cameraPosition: [-1.45, 1.8, -0.8],
    cameraTarget: [-1.55, 1.75, -2.92],
    objectKey: 'poster',
  },
  {
    id: 'gallery-glimpse',
    title: 'Gallery Glimpse',
    section: 'Projects',
    description:
      'A gallery-focused MERN stack frontend using React, Redux Toolkit, and Zod.',
    techStack: ['TypeScript', 'React', 'MERN', 'Zod'],
    githubUrl: 'https://github.com/itsyaba/Gallery_Glimpse_Frontend',
    liveUrl: 'https://gallery-glimpse-web.vercel.app/',
    cameraPosition: [1.25, 1.6, -0.7],
    cameraTarget: [2.28, 1.05, -2.35],
    objectKey: 'bookshelf',
  },
  {
    id: 'tms-platform',
    title: 'TMS Platform',
    section: 'Projects',
    description:
      'A TypeScript platform project deployed on Vercel.',
    techStack: ['TypeScript', 'Platform', 'Vercel'],
    githubUrl: 'https://github.com/itsyaba/tms-platform',
    liveUrl: 'https://tms-platforms.vercel.app',
    cameraPosition: [0.85, 1.55, -0.9],
    cameraTarget: [1.15, 1.05, -2.93],
    objectKey: 'door',
  },
];
