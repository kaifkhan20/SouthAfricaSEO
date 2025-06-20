
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/jacksonville-seocompany.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Jacksonville-Thrive-office-location.jpg';

export const jacksonvilleData: CityPageData = {
  slug: 'jacksonville',
  cityName: 'Jacksonville',
  heroData: {
    pageTitle: 'Jacksonville SEO Company | TRAC - SEO Services Jacksonville, FL',
    metaDescription: 'TRAC is a Jacksonville SEO company helping businesses improve search rankings and drive organic traffic. Contact our Jacksonville SEO experts for a free quote.',
    heroTitle: 'Jacksonville SEO Company: Navigating Your Digital Success',
    heroSubtitle: 'Shine Online in Jacksonville with TRAC\'s Expert SEO Strategies',
    heroDescription: 'TRAC delivers expert SEO services tailored for businesses in Jacksonville, Florida, aiming to significantly boost online visibility and drive sustainable growth. The River City presents unique opportunities for businesses to connect with a diverse local audience, from established communities to growing suburban areas. Our comprehensive SEO approach includes meticulous local SEO to enhance your presence in Jacksonville-specific searches (e.g., "SEO services Jacksonville Beach," "best dentists Southside Jax"), robust technical optimization to ensure your website performs at its peak for speed and mobile usability, and engaging content strategies designed to attract and convert Jacksonville customers. We begin by understanding your business objectives and the competitive landscape in Jacksonville, allowing us to craft a customized SEO plan that addresses your specific needs. TRAC is committed to transparent reporting and ethical practices, making us a trusted partner for businesses looking to expand their digital footprint in Jacksonville and achieve long-term online marketing goals. Let us help your Jacksonville business achieve its online marketing goals with proven SEO techniques.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Jacksonville, FL', dataAiHint: 'Jacksonville city beach' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Free Jacksonville SEO Audit!',
  },
  resultsHeadline: 'SEO Success for Jacksonville Businesses: Measurable Growth',
  readyToGrowHeadline: 'Grow Your Jacksonville Business with Strategic SEO?',
  servicesSectionHeadline: 'Jacksonville SEO Services: Driving Local & Regional Visibility',
  servicesSectionSubheadline: 'Our SEO solutions are customized for the Jacksonville, Florida market, focusing on helping businesses connect with both local residents and visitors across Duval County.',
  services: [
    { icon: Search, title: 'Jacksonville Local SEO & GMB Optimization', description: 'Improve your local search presence in Jacksonville and surrounding Duval County areas (e.g., St. Johns, Ponte Vedra). We optimize your Google Business Profile, build relevant local citations, and target keywords for specific Jacksonville neighborhoods to attract more customers.' },
    { icon: Settings, title: 'Technical SEO for Jacksonville Sites & E-commerce', description: 'Optimize your website’s technical framework for Jacksonville search engines and user experience, ensuring fast load times, mobile-friendliness for users on the go, and proper indexing for all your pages. We also handle e-commerce SEO for Jacksonville online stores.' },
    { icon: Mail, title: 'Content Strategy Targeting Jacksonville Audiences', description: 'Create high-value, SEO-driven content (such as blog posts about Jacksonville events, local guides, or industry-specific articles) that targets Jacksonville audiences, answers their questions, and boosts your website\'s authority and organic search rankings in Florida.' },
    { icon: BarChart2, title: 'Jacksonville SEO Reporting & Performance Analysis', description: 'Track your SEO results in Jacksonville with transparent, easy-to-understand analytics. We focus on key metrics that demonstrate real business impact and ROI for Jacksonville campaigns, including organic traffic growth and lead quality improvements.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Dedicated Jacksonville SEO Partner',
  whyChooseIntro: 'Choose TRAC for effective, results-driven SEO strategies specifically designed for the Jacksonville market. We understand the local business climate, from the port to the beaches, and how to make you stand out.',
  whyChooseParagraph1: 'Our Jacksonville SEO team possesses a deep understanding of the local market dynamics, from the burgeoning downtown to the distinct beach communities and suburban areas. We craft SEO strategies that are not only effective but also resonate with the unique character of Jacksonville, ensuring your message reaches the right audience and drives conversions.',
  whyChooseParagraph2: 'We are committed to using ethical, white-hat SEO practices to achieve long-term, sustainable success for our Jacksonville clients. Our focus is on building your brand\'s authority and online visibility in a way that earns trust from both search engines and users in the Jacksonville area. We stay current with all SEO best practices.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Jacksonville SEO Growth & Increased Leads', description: 'Increase your online visibility, attract more qualified organic traffic, and generate more leads within the Jacksonville, FL market with our tailored SEO approaches. We target keywords that convert for Jacksonville businesses.' },
    { icon: 'Lightbulb', title: 'Localized Jacksonville SEO Expertise', description: 'Benefit from SEO strategies meticulously crafted for the Jacksonville, Florida audience, considering local search trends, industry competition (e.g., logistics, healthcare, tourism), and regional economic factors to give you a competitive edge.' },
    { icon: 'ShieldCheck', title: 'Trusted & Transparent Jacksonville SEO Services', description: 'Experience reliable, transparent, and effective SEO services in Jacksonville, focused on ethical practices and delivering measurable, long-term business success for your company. We provide clear monthly reports.' },
  ],
  awards: {
    clutch: { headline: 'Top Jacksonville SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering impactful SEO results and superior client service to businesses in the Jacksonville area. Our clients consistently praise our strategic approach.' },
    upcity: { headline: 'Jacksonville SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for premier SEO services and demonstrating consistent success in helping Jacksonville businesses grow their online presence and achieve their marketing goals.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['841 Prudential Dr', '12th Floor PMB 72', 'Jacksonville, FL 32207'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Get Your SEO Proposal',
};

    