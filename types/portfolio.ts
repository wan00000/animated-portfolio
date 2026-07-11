export type NavigationItem = {
  name: string;
  link: string;
};

export type SocialLink = {
  id: number;
  name: string;
  link: string;
  img: string;
};

export type SiteProfile = {
  name: string;
  displayName: string;
  currentRole: string;
  currentEmployer: string;
  currentEmployerLogo?: string;
  roleDescription: string;
  focusAreas: string[];
  portrait: string;
  githubUrl: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  problem?: string;
  contribution?: string[];
  outcomes?: string[];
  technologies: string[];
  technologyIcons: string[];
  images: string[];
  repository?: string;
  demo?: string;
  category: string;
  year?: string;
  featured: boolean;
};

export type Capability = {
  id: number;
  title: string;
  description: string;
  tools: string[];
  icon: "cloud" | "integration" | "software" | "automation" | "operations" | "data";
};

export type ExperienceItem = {
  id: number;
  role: string;
  organization: string;
  period: string;
  summary: string;
  contributions: string[];
  capabilities: string[];
  logo: string;
};

export type CertificationItem = {
  id: number;
  title: string;
  issuer: string;
  image: string;
  issueDate: string;
  link: string;
  featured?: boolean;
};

export type AchievementItem = {
  id: number;
  title: string;
  organization?: string;
  description?: string;
  year?: string;
  link?: string;
};

export type EducationItem = {
  id: number;
  title: string;
  institution: string;
  description?: string;
  period: string;
  courseWork?: string[];
  img?: string;
};
