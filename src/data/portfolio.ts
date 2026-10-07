import { Project } from "../types";

export const projects: Project[] = [
  {
    id: 'aptster',
    title: 'Aptster – Community & Neighborhood Platform',
    tagline: 'Love where you live.',
    description:
      "A web and mobile platform that turns an apartment building into a neighborhood. Aptster bridges the gap between residents, HOAs and local businesses — residents discover nearby services, offers and events, while property managers keep their existing PMS (AppFolio, Buildium, Yardi) and simply add community on top.",
    contribution:
      'Frontend development across the web and React Native mobile apps using React, TypeScript, Zustand and TanStack Query. Built resident, business-owner and community modules, REST API integration, authentication flows and reusable Material UI components.',
    features: [
      'Resident ↔ neighborhood discovery',
      'Local business listings & offers',
      'Community events and perks',
      'Service booking with slot management',
      'Marketplace & orders',
      'Inventory management',
      'Authentication & role-based access',
      'REST API integration',
      'State management with Zustand + TanStack Query',
      'Responsive web + React Native mobile',
    ],
    tech: ['React', 'React Native', 'TypeScript', 'Material UI', 'Zustand', 'TanStack Query', 'REST APIs'],
    demo: 'https://www.aptster.com/',
    // github: '',  // private professional work — leave empty
    // image: '/images/aptster.png',  // TODO: drop a screenshot in /public/images and uncomment
    accent: ['#4F46E5', '#06B6D4'],   // indigo → cyan (matches aptster's modern feel)
    kind: 'professional',
  },
  {
    id: 'shophub',
    title: 'ShopHub – E-commerce Website',
    tagline: 'Modern responsive e-commerce UI',
    description:
      'A modern responsive e-commerce web application created to demonstrate frontend development, UI development and state-management skills.',
    contribution:
      'Sole developer — built the full frontend, state layer and UI system from scratch.',
    features: [
      'Homepage',
      'Product listing & details',
      'Search, category filtering & sorting',
      'Wishlist',
      'Shopping cart & quantity management',
      'Login & registration',
      'User profile & address management',
      'Checkout & order history',
    ],
    tech: ['React', 'TypeScript', 'Material UI', 'Redux Toolkit', 'Framer Motion', 'Dummy JSON data'],
    accent: ['#EC4899', '#F59E0B'],   // pink → amber
    kind: 'personal',
  },
]