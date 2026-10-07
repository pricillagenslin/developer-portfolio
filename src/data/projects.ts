import type { Project } from '../types';
export const projects: Project[] = [
  { id: 'aptster', title: 'Aptster', kind: 'professional', tagline: 'Community & Small Business Management Application',
    description: 'A web and mobile application for community management and small-business services, built as part of my professional work.',
    tech: ['React', 'React Native', 'TypeScript', 'Zustand', 'TanStack Query', 'REST APIs'],
    features: ['Community management', 'User-related features', 'Small business services', 'Service booking', 'Detailed booking slot management', 'Inventory', 'Marketplace', 'Orders', 'Authentication', 'REST API integration', 'State management'],
    accent: ['#4F6BFF', '#22D3EE'] }, // Professional work: no public links
  { id: 'shophub', title: 'ShopHub', kind: 'personal', tagline: 'E-commerce Website',
    description: 'A modern responsive e-commerce web application created to demonstrate frontend development and state-management skills.',
    tech: ['React', 'TypeScript', 'Material UI', 'Redux Toolkit', 'Framer Motion', 'Dummy JSON data'],
    features: ['Homepage', 'Product listing and details', 'Search, category filtering and sorting', 'Wishlist', 'Shopping cart with quantity management', 'Login and registration', 'User profile and address management', 'Checkout', 'Order history'],
    github: 'https://github.com/', demo: 'https://example.com/', // TODO: real links
    accent: ['#F97316', '#EC4899'] },
];
