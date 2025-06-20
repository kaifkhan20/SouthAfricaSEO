
import type { CityPageData } from '@/types';
import { Search, Settings, Briefcase, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Cleveland-Thrive-office-location.jpg';

export const corkData: CityPageData = {
  slug: 'cork',
  cityName: 'Cork',
  heroData: {
    pageTitle: 'Cork SEO Services | TRAC - SEO Experts Cork, Ireland',
    metaDescription: 'TRAC offers premier SEO services for businesses in Cork. Enhance your online presence, attract local customers, and grow your business in Ireland\'s southern capital. Contact our Cork SEO team today!',
    heroTitle: 'Cork SEO Agency: Boosting Your Business in the Rebel County',
    heroSubtitle: 'Navigate Cork\'s Digital Landscape with TRAC\'s Tailored SEO Solutions',
    heroDescription: 'TRAC provides specialized SEO services designed to help businesses in Cork City and County thrive in today\'s competitive online environment. Known as the "Rebel County," Cork boasts a vibrant mix of multinational corporations (especially in pharma and tech), a strong food culture, and a thriving local business scene. Our SEO strategies are crafted to increase your visibility, attract targeted local and national traffic, and generate tangible results. We conduct thorough local SEO optimization to ensure your business is found by customers in Cork City, as well as surrounding areas like Ballincollig, Carrigaline, and Midleton. Our technical SEO expertise ensures your website performs optimally, offering a smooth experience for users on all devices. Our content marketing strategies focus on creating valuable, relevant content that connects with the Cork audience and positions your brand as a leader in your field. Whether you\'re in the food and beverage industry, tech, retail, or professional services, TRAC can help your Cork business achieve its online marketing goals through ethical and effective SEO.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Cork, Ireland', dataAiHint: 'Cork city business' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE SEO Analysis!', // Updated: Removed 'Cork'
  },
  resultsHeadline: 'Driving Real SEO Success for Cork Businesses',
  readyToGrowHeadline: 'Ready to Grow Your Cork Business with Strategic SEO?',
  servicesSectionHeadline: 'Targeted SEO Services for Cork & Munster',
  servicesSectionSubheadline: 'Our SEO strategies are designed to put your business in front of customers in Ireland\'s second-largest city and the wider Munster region, using local insights and SEO best practices.',
  services: [
    { icon: Search, title: 'Local SEO & Regional Visibility', description: 'Refine your Google Business Profile and local citations to rank higher in Cork City and Munster local search results. We target Cork-specific keywords (e.g., "SEO services Cork," "best restaurants English Market") to attract geographically relevant customers.' },
    { icon: Settings, title: 'Technical Website Optimization', description: 'Ensure your website is fast, mobile-friendly, and easily discoverable for better Cork rankings. We perform comprehensive audits to find and fix technical SEO issues, improving user experience and search engine performance for your Cork-based site.' },
    { icon: Mail, title: 'Content Marketing for Local SEO', description: 'Create engaging, high-quality content that connects with the Cork audience and builds SEO authority. We focus on topics relevant to your local customers and interests, establishing your expertise and driving organic traffic.' },
    { icon: Briefcase, title: 'SEO for Key Cork Industries', description: 'Specialized SEO strategies for Cork\'s key industries including pharmaceuticals, technology, and its renowned food sector. We understand the unique needs and opportunities within these local markets.' },
  ],
  whyChooseSectionHeadline: 'TRAC: Your Cork SEO Partner for Growth',
  whyChooseIntro: 'TRAC delivers customized, results-driven SEO solutions for businesses in Cork, Ireland. We understand the local market and how to help your business stand out in the Rebel County, driving lasting growth through effective SEO.',
  whyChooseParagraph1: 'Our Cork SEO experts understand the local market dynamics, from its strong multinational presence to its vibrant SME sector. We tailor strategies to achieve your specific business goals, whether it\'s increasing brand awareness within County Cork or attracting national customers.',
  whyChooseParagraph2: 'We combine proven SEO techniques with clear reporting to ensure your Cork business achieves lasting online growth. Our commitment is to ethical practices and measurable outcomes, making us a trusted SEO partner dedicated to your long-term success in Cork and beyond.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'SEO Growth & ROI', description: 'Drive more organic traffic and generate high-quality leads in the competitive Cork market. We focus on SEO strategies that convert visitors into loyal customers for your Irish business.' },
    { icon: 'Lightbulb', title: 'Local & Regional Expertise', description: 'Benefit from SEO strategies tailored specifically to the Cork market and the broader Munster region, understanding its unique demographic, economic factors, and cultural nuances.' },
    { icon: 'ShieldCheck', title: 'Ethical SEO Practices', description: 'Achieve lasting, long-term results through white-hat SEO techniques that build trust with search engines and Cork users. We prioritize quality, integrity, and client success in Ireland.' },
  ],
  awards: {
    clutch: { headline: 'Top Cork SEO Agency - Munster Region Awards 2024', text: 'Recognized for delivering impactful SEO results and exceptional service to businesses across Cork and the Munster province. Our clients value our local knowledge.' },
    upcity: { headline: 'Cork SEO Excellence - National Irish Awards 2024', text: 'Awarded for outstanding SEO services and client success stories in the Cork area, helping businesses thrive in a competitive Irish digital landscape.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['20th shop', 'South Mall', 'Cork City, Ireland'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Strategy Session',
};