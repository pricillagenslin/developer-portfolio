export type ThemeMode = "light" | "dark";
export interface NavItem {
  label: string;
  id: string;
}
export interface Profile {
  name: string;
  shortName: string;
  brand: string;
  title: string;
  roles: string[];
  intro: string;
  about: string[];
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socials: { label: string; href: string; icon: "github" | "linkedin" | "x" }[];
  stats: { label: string; value: number; suffix?: string }[];
}
export interface SkillGroup {
  category: string;
  skills: string[];
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  tech: string[];
}
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  contribution?: string;
  image?: string;
  tech: string[];
  features: string[];
  kind: "professional" | "personal";
  github?: string;
  demo?: string;
  accent: [string, string];
}
export type ServiceIcon = "web" | "react" | "responsive" | "api" | "mobile";
export interface Service {
  title: string;
  description: string;
  icon: ServiceIcon;
}
export interface Education {
  degree: string;
  specialization: string;
  institution: string;
  year: string;
}
