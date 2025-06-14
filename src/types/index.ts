
import type { LucideIcon } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactNode } from 'react';

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export interface ServicePackageFeature {
  name: string;
  description: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
  features: ServicePackageFeature[];
  cta: string;
}

export interface Testimonial {
  [x: string]: ReactNode;
  id: string;
  name: string;
  company: string;
  avatarUrl: string;
  dataAiHint?: string;
  quote: string;
  location?: string;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  icon: LucideIcon;
}
export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  imageUrl: string;
  dataAiHint?: string;
  testimonial?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  dataAiHint?: string;
  author: string;
  category: string;
  tags: string[];
  content?: string; // Full content for individual blog post page
}

export interface TracLeadFormValues {
  name?: string;
  website?: string;
  phoneNumber: string;
}

export interface ContactFormValues {
  name?: string;
  email?: string;
  company?: string;
  phoneNumber: string;
  website?: string;
  service?: string;
  message?: string;
}

export interface ClientLogo {
  name: string;
  imageUrl: string;
  dataAiHint?: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

// City Specific Page Types
export interface CityHeroData {
  pageTitle: string; // For <title> tag
  metaDescription: string;
  heroTitle: string; // e.g., "Portland Digital Marketing Agency"
  heroSubtitle: string;
  heroDescription: string;
 heroImage: string | {
 src: string;
 alt: string;
 dataAiHint?: string;
 };
  heroVideoUrl: string;
  formTitle: string;
}

export interface CityServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CityWhyChooseItem {
  icon: string; // Changed from LucideIcon to string
  title: string;
  description: string;
}

export interface CityAwardData {
  headline: string;
  text: string;
}

export interface CityLocationData {
  officeImageUrl: string;
  addressLines: string[];
  phone: string;
  email: string;
}

export interface CityPageData {
  slug: string;
  cityName: string;
  heroData: CityHeroData;
  resultsHeadline: string; 
  readyToGrowHeadline: string; 
  servicesSectionHeadline: string; 
  servicesSectionSubheadline: string;
  services: CityServiceItem[];
  whyChooseSectionHeadline: string; 
  whyChooseIntro: string;
  whyChooseParagraph1: string;
  whyChooseParagraph2: string;
  whyChoosePoints: CityWhyChooseItem[];
  awards: {
    clutch: CityAwardData;
    upcity: CityAwardData;
  };
  location: CityLocationData;
  bottomFormTitle: string;
}

export interface CityHeroFormValues {
  website?: string;
  phoneNumber: string;
  city: string; 
  formType: string; 
}

export interface CityBottomFormValues {
  website?: string;
  phoneNumber: string;
  message?: string;
  city: string;
  formType: string; 
}

// Landscaping State Specific Page Types
export interface LandscapingStateHeroData {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroImage: {
    src: string;
    alt: string;
    dataAiHint?: string;
  };
  heroVideoUrl: string; // Can be generic or state-specific if available
  formTitle: string;
}

export interface LandscapingStateServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LandscapingStateWhyChooseItem {
  icon: string; // Icon name as string
  title: string;
  description: string;
}

export interface LandscapingStateAwardData { // Can reuse CityAwardData or make specific
  headline: string;
  text: string;
}

export interface LandscapingStateCoverageData { // Simpler than physical location
  mainHeadline: string;
  points: string[]; // e.g., "Serving landscapers in Los Angeles, San Francisco, San Diego..."
  mapImageUrl?: string; // Optional: image of the state
  mapImageAlt?: string;
}

export interface LandscapingStatePageData {
  slug: string; // e.g., 'california'
  stateName: string; // e.g., 'California'
  heroData: LandscapingStateHeroData;
  resultsHeadline: string;
  readyToGrowHeadline: string;
  servicesSectionHeadline: string;
  servicesSectionSubheadline: string;
  services: LandscapingStateServiceItem[];
  whyChooseSectionHeadline: string;
  whyChooseIntro: string;
  whyChooseParagraph1: string;
  whyChooseParagraph2: string;
  whyChoosePoints: LandscapingStateWhyChooseItem[];
  awards: { // Can be generic SEO awards
    clutch: LandscapingStateAwardData;
    upcity: LandscapingStateAwardData;
  };
  coverageData: LandscapingStateCoverageData; // Instead of physical location
  bottomFormTitle: string;
}

export interface LandscapingStateHeroFormValues {
  website?: string;
  phoneNumber: string;
  state: string; 
  formType: string; // e.g., "Landscaping Hero Form"
}

export interface LandscapingStateBottomFormValues {
  website?: string;
  phoneNumber: string;
  message?: string;
  state: string;
  formType: string; // e.g., "Landscaping Bottom Form"
}
