// Evidence-based skill classification types
export type SkillEvidence =
  | "Professional Internship Experience"
  | "Technical Experience"
  | "Currently Learning";

// 1. Profile Data Interface
export interface ProfileData {
  name: string;
  primaryTitle: string;
  currentRole: string;
  secondaryTitles: string[];
  location: string;
  bio: string;
  defensePrinciples: string[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
    formspreeEndpoint?: string; // optional Formspree endpoint if configured
  };
}

// 2. Career Experience Timeline Interfaces
export interface CurrentPosition {
  role: string;
  organization: string;
  period: string;
  isCurrent: boolean;
  statusBadge: "CURRENT";
  summary: string;
  responsibilities?: string[];
  technologies?: string[];
}

export interface PreviousInternship {
  title: string;
  role: string;
  organization?: string;
  period?: string;
  domain: string;
  summary: string;
  verifiedMetrics?: string[];
  keyHighlights?: string[];
  cards: Array<{
    id: string;
    title: string;
    area: string;
    summary: string;
    technologies: string[];
    caseStudyUrl?: string;
  }>;
}

export interface CareerExperienceData {
  currentPosition: CurrentPosition;
  previousInternship: PreviousInternship;
}

// 3. Detailed Case Study Interface
export type CaseStudySlug = "fortinet" | "hirschmann" | "data-diode" | "kvm";

export interface CaseStudyMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface CaseStudyArchitectureNode {
  label: string;
  sublabel?: string;
  type?: "source" | "process" | "security" | "destination";
}

export interface CaseStudy {
  slug: CaseStudySlug;
  title: string;
  category: string;
  technologies: string[];
  publicDescription: string;
  teaserMetric?: string;
  metricSummary?: string;
  metrics?: CaseStudyMetric[];
  myRole: string[];
  objective: string;
  environment: string;
  responsibilities: string[];
  implementation: string;
  configurationAreas: Array<{
    title: string;
    description: string;
    points?: string[];
  }>;
  validationChecklist: string[];
  keyTechnicalLearnings: string[];
  architectureFlow?: CaseStudyArchitectureNode[];
  operationalRelevance?: string;
  sanitizationDisclaimer?: string;
}

// 4. Skills Matrix Interface (Evidence-Based)
export interface SkillItem {
  name: string;
  evidence: SkillEvidence;
}

export interface SkillCategoryGroup {
  id: string;
  categoryTitle: string;
  description: string;
  skills: SkillItem[];
}

// 5. Phase 4: Learning Journey & Roadmap Interfaces
export type RoadmapStatus = "COMPLETED" | "IN PROGRESS" | "PLANNED";

export type ResourceTrack = "CYBERSECURITY / SOC RESOURCE" | "AUTOMATION / CLOUD RESOURCE" | "FOUNDATIONAL";

export interface RoadmapStage {
  stageNumber: number;
  stageCode: string;
  title: string;
  subtitle?: string;
  track: ResourceTrack;
  primaryResources: string[];
  focusTopics: string[];
  expectedOutput?: string;
  status: RoadmapStatus;
  statusNote?: string;
}

export interface ResourceMatrixItem {
  learningArea: string;
  primaryResource: string;
  focusDomain: string;
}

export interface LearningRoadmapData {
  philosophy: {
    cycle: string;
    measurement: string;
  };
  resourceStrategy: {
    cybersecurityTrack: {
      title: string;
      primaryResource: string;
      usage: string[];
      scopeGuideline: string;
    };
    automationTrack: {
      title: string;
      primaryResource: string;
      usage: string[];
      scopeGuideline: string;
    };
  };
  stages: RoadmapStage[];
  resourceMatrix: ResourceMatrixItem[];
}

// 6. Future Phases Data Interfaces (Reserved)
export interface PersonalProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  architectureHighlights: string[];
  technologies: string[];
  githubUrl?: string;
  documentationUrl?: string;
}

export interface LearningTopic {
  id: string;
  topic: string;
  domain: string;
  focusArea: string;
  status: "Actively Researching" | "Lab Testing" | "Planned";
}

export interface CertificationItem {
  id: string;
  title: string;
  issuingBody: string;
  status: "Certified" | "Training Completed" | "In Progress";
  credentialId?: string;
  verificationUrl?: string;
  date: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
}
