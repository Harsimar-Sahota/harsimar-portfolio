export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface LeadershipItem {
  title: string;
  role?: string;
  description: string;
}
