import type { NavItem, Profile } from '../types';
import { skillGroups } from './skills';
export const navItems: NavItem[] = [
  { label: 'About', id: 'about' }, { label: 'Skills', id: 'skills' }, { label: 'Experience', id: 'experience' },
   { label: 'Projects', id: 'projects' }, { label: 'Services', id: 'services' }, { label: 'Contact', id: 'contact' },
];
export const profile: Profile = {
  name: 'G. Genslin Pricilla',
  shortName: 'Genslin',
  brand: 'Genslin',
  title: 'React / Web Developer',
  roles: ['React interfaces', 'TypeScript applications', 'React Native apps', 'REST API integrations'],
  intro: 'React / Web Developer with 2+ years of experience building responsive web and mobile applications, focused on frontend development with React and TypeScript.',
  about: [
    'I am a React / Web Developer with 2+ years of professional experience in web and mobile application development, primarily focused on the frontend.',
    'I build responsive, user-friendly applications with React, TypeScript, React Native, Material UI and modern state-management tools. My work includes reusable UI components, REST API integration, authentication, application state, CRUD operations and API testing with Postman.',
  ],
  email: 'pricillagenslin@gmail.com',
  phone: '9944759684',
  location: 'Nagercoil, Tamil Nadu, India',
  resumeUrl: '/resume.pdf', // TODO: add resume.pdf to /public
  socials: [ // TODO: replace with your real profile URLs
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
  ],
  stats: [
    { label: 'Years of experience', value: 2, suffix: '+' },
    { label: 'Featured projects', value: 2 },
    { label: 'Platforms: web and mobile', value: 2 },
    { label: 'Skills and tools', value: skillGroups.reduce((n, g) => n + g.skills.length, 0) },
  ],
};
