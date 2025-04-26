export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  skills: SkillsProps[];
  education: EducationProps[];
  about: AboutProps;
}

//HeroProps
export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

//EducationProps
export interface EducationProps {
  academy: string;
  position: string;
  startDate: string;
  endDate: string;
}

//ExperienceProps
export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

//ProjectProps
export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface SkillsProps {
  nameTechnology: string;
}
//AboutProps
export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface FooterProps {
  socialLinks: { text: string; href: string }[];
  author: string;
}
