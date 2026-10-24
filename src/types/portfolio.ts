export type Language = 'en' | 'hi';

export interface SocialLinks {
  email: string;
  linkedin: string;
  github?: string;
  whatsapp?: string;
  location: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  outcomes?: string[];
}

export interface SkillItem {
  name: string;
  level: string; // e.g., 'Intermediate', 'Beginner', 'Core'
  category: string;
  iconName: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'strategy' | 'data-ai' | 'operations' | 'sustainability' | 'all';
  description: string;
  detailedOverview: string;
  keyPillars?: string[];
  outcomes: string[];
  technologies: string[];
  date: string;
  affiliation?: string;
  presentationUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  rank?: string;
  date: string;
  category: string;
  description: string;
  highlightText: string;
  organization: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: 'Completed' | 'Pursuing';
  date: string;
  courseId?: string;
  description: string;
  credentialUrl?: string;
}

export interface ProfileData {
  name: string;
  monogram: string;
  title: string;
  secondaryTitle: string;
  bio: string;
  detailedBio: string[];
  isOpenToOpportunities: boolean;
  opportunityMessage: string;
  resumePath: string;
  resumeFileName: string;
  socials: SocialLinks;
  heroMetrics: MetricItem[];
  experiences: ExperienceItem[];
  skills: SkillItem[];
  skillCategories: { id: string; label: string }[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
