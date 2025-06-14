
import type { CityPageData } from '@/types';
import { Search, Settings, Mail, BarChart2, TrendingUp, Lightbulb, ShieldCheck, Briefcase } from 'lucide-react';
import { CONTACT_DETAILS } from '@/lib/constants.tsx';

const GENERIC_CITY_HERO_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Houston-SEO-Company.jpg';
const GENERIC_OFFICE_LOCATION_IMAGE_SRC = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Houston-Office-Location.png';

export const houstonData: CityPageData = {
  slug: 'houston',
  cityName: 'Houston',
  heroData: {
    pageTitle: 'Houston SEO Services | TRAC - SEO Experts Houston, TX',
    metaDescription: 'TRAC is a Houston SEO agency helping businesses improve online visibility and drive organic growth. Contact our Houston SEO specialists for a free consultation.',
    heroTitle: 'Houston SEO Experts: Propel Your Business Forward',
    heroSubtitle: 'Launch Your Houston Business to New Heights with TRAC\'s Strategic SEO',
    heroDescription: 'TRAC offers premier SEO services specifically designed for the dynamic and diverse Houston business landscape. In a major economic hub like Houston, a strong online presence is essential for growth and competitiveness. Our tailored SEO strategies aim to significantly improve your search engine rankings, attract highly qualified local and industry-specific traffic, and maximize your return on investment. We delve into the intricacies of the Houston market, from energy and healthcare to retail and professional services, ensuring our SEO approach is perfectly aligned with your industry and target audience (e.g., "Houston oil and gas SEO," "medical SEO Houston"). TRAC’s comprehensive services include advanced local SEO to dominate Houston-area searches, robust technical SEO for optimal website performance, and strategic content marketing that engages and converts. We are committed to transparent processes and delivering measurable results that contribute directly to your Houston business\'s success story. Let TRAC be your partner in navigating the digital frontier of Space City.',
    heroImage: { src: GENERIC_CITY_HERO_IMAGE_SRC, alt: 'SEO Services in Houston, TX', dataAiHint: 'Houston city space' },
    heroVideoUrl: 'https://www.youtube.com/embed/JBPmDzL-Xek',
    formTitle: 'Get Your FREE Houston SEO Strategy!',
  },
  resultsHeadline: 'Delivering Stellar SEO Results in Houston',
  readyToGrowHeadline: 'Ready to Skyrocket Your Houston SEO?',
  servicesSectionHeadline: 'Customized Houston SEO Solutions',
  servicesSectionSubheadline: 'Our SEO services are meticulously crafted to make your Houston business a dominant force in organic search, connecting you with customers across diverse industries from energy to healthcare.',
  services: [
    { icon: Search, title: 'Houston Local SEO Strategy & GMB Optimization', description: 'Dominate local search results in Houston and its surrounding communities (e.g., The Woodlands, Sugar Land). We optimize your Google Business Profile, local citations, and target neighborhood-specific keywords to connect with more customers searching for your specific services in the Houston area.' },
    { icon: Settings, title: 'Technical SEO for Houston Websites & Enterprises', description: 'Ensure your website’s technical health is flawless for peak SEO performance in the competitive Houston market. We focus on site speed, mobile-first indexing, crawlability, and advanced schema markup for Houston businesses, including large enterprises.' },
    { icon: Mail, title: 'Houston SEO Content Marketing & Authority Building', description: 'Create compelling, authoritative content that ranks high in Houston search results, resonates with your target audience (e.g., content about Houston industries or local events), and converts visitors into loyal customers. We highlight your expertise within the Houston context.' },
    { icon: BarChart2, title: 'Houston SEO Performance Analytics & ROI Tracking', description: 'Track and measure your Houston SEO success with detailed, easy-to-understand reports. We focus on key performance indicators that demonstrate tangible ROI and organic growth for your Houston operations, including lead quality and conversion rates.' },
    { icon: Briefcase, title: 'Industry-Specific SEO for Houston (Energy, Medical)', description: 'Leverage our specialized SEO expertise for Houston\'s key sectors, including oil and gas, healthcare (targeting medical center searches), and logistics. We understand the unique challenges and opportunities in these Houston industries and craft tailored SEO approaches.'}
  ],
  whyChooseSectionHeadline: 'TRAC: Your Trusted Houston SEO Agency for Sustainable Growth',
  whyChooseIntro: 'Partner with TRAC for effective, data-driven SEO services in Houston. We understand the complexities of the Space City market and are dedicated to helping your business thrive online through superior search strategies.',
  whyChooseParagraph1: 'Our Houston SEO team possesses deep knowledge of the local economic landscape, diverse demographics, and specific search behaviors of consumers and businesses in the Houston metropolitan area. We use this insight to build strategies that truly connect and convert, whether you target B2B clients in the Energy Corridor or local consumers in Montrose.',
  whyChooseParagraph2: 'We employ ethical, cutting-edge SEO techniques to deliver sustainable, long-term growth for Houston businesses. Our commitment is to transparency, measurable results, and forging strong partnerships with our clients in Houston. We adapt to algorithm changes to keep you ahead.',
  whyChoosePoints: [
    { icon: 'TrendingUp', title: 'Houston Search Growth & Market Share', description: 'Significantly improve your organic search rankings, attract more qualified leads, and increase your market share within the competitive Houston business environment through our expert SEO. We help you reach new customers.' },
    { icon: 'Lightbulb', title: 'Strategic & Adaptive Houston SEO', description: 'Benefit from targeted SEO campaigns specifically designed for the Houston, TX audience, adapting to local market trends (like the Houston Livestock Show and Rodeo interest) and the evolving digital landscape of this major Texas city.' },
    { icon: 'ShieldCheck', title: 'Reliable & Results-Oriented Houston SEO Partner', description: 'Experience transparent, ethical, and results-oriented SEO services in Houston. We are focused on building long-term success and a strong online reputation for your brand in Space City, adhering to all best practices.' },
  ],
  awards: {
    clutch: { headline: 'Top Houston SEO Agency - Clutch 2024', text: 'Recognized by Clutch for delivering consistent excellence and measurable results in Houston SEO for diverse industries, including energy and healthcare.' },
    upcity: { headline: 'Houston SEO Excellence Award - UpCity 2024', text: 'Awarded by UpCity for providing top-tier SEO services and demonstrating strategic leadership in the Houston market, helping businesses achieve significant online growth.' },
  },
  location: {
    officeImageUrl: GENERIC_OFFICE_LOCATION_IMAGE_SRC,
    addressLines: ['707 Ln', 'Suite 200', 'Houston, TX 77019'],
    phone: CONTACT_DETAILS.phone,
    email: CONTACT_DETAILS.email,
  },
  bottomFormTitle: 'Request Your SEO Consultation',
};

    