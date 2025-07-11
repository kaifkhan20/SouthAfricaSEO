
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityData, CITIES_DATA } from '@/lib/cityConstants.tsx'; 
import { APP_NAME, CONTACT_DETAILS } from '@/lib/constants.tsx';

// Import City Specific Components
import { CityHeroSection } from '@/components/city-seo/CityHeroSection';
import { CityResultsHighlights } from '@/components/city-seo/CityResultsHighlights';
import { CityReadyToGrow } from '@/components/city-seo/CityReadyToGrow';
import { CityServicesGrid } from '@/components/city-seo/CityServicesGrid';
import { CityWhyChoose } from '@/components/city-seo/CityWhyChoose';
import { CityAwards } from '@/components/city-seo/CityAwards';
import { CityLocation } from '@/components/city-seo/CityLocation';
import { CityBottomForm } from '@/components/city-seo/CityBottomForm';
import { CityFAQSection } from '@/components/city-seo/CityFAQSection';

interface CityPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CITIES_DATA.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const cityData = getCityData(params.slug);
  const domain = process.env.WEBSITE_URL || 'https://www.traconomics.com';

  if (!cityData) {
    return {
      title: 'City SEO Services Not Found | TRAC',
      description: 'The city SEO service page you are looking for could not be found.',
    };
  }

  return {
    title: cityData.heroData.pageTitle,
    description: cityData.heroData.metaDescription,
    keywords: cityData.metaKeywords,
    alternates: {
      canonical: `${domain}/${cityData.slug}-seo-service-agency`,
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const cityData = getCityData(params.slug);

  if (!cityData) {
    notFound();
  }

  const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': `${APP_NAME} - ${cityData.cityName} SEO Services`,
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': cityData.location.streetAddress, // Use new streetAddress property
    'addressLocality': cityData.location.addressLocality, // Use new addressLocality property
    'addressRegion': cityData.location.addressRegion, // Use new addressRegion property
    'postalCode': cityData.location.postalCode, // Use new postalCode property
    'addressCountry': cityData.location.addressCountry, // Use new addressCountry property
  },
  'telephone': cityData.location.phone,
  'email': cityData.location.email,
  'url': `${process.env.WEBSITE_URL || 'https://www.traconomics.com'}/${cityData.slug}-seo-service-agency`,
  'image': typeof cityData.heroData.heroImage === 'string' ? cityData.heroData.heroImage : cityData.heroData.heroImage.src,
  'description': cityData.heroData.metaDescription,
  'geo': { // Placeholder GeoCoordinates, should be updated with real data if available
    '@type': 'GeoCoordinates',
    'latitude': '0.0',
    'longitude': '0.0'
  },
};


  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <CityHeroSection cityData={cityData.heroData} cityName={cityData.cityName} />
      <CityResultsHighlights headline={cityData.resultsHeadline} />
      <CityReadyToGrow headline={cityData.readyToGrowHeadline} cityName={cityData.cityName} />
      <CityServicesGrid
        headline={cityData.servicesSectionHeadline}
        subheadline={cityData.servicesSectionSubheadline}
        services={cityData.services}
      />
      <CityWhyChoose
        headline={cityData.whyChooseSectionHeadline}
        intro={cityData.whyChooseIntro}
        points={cityData.whyChoosePoints}
        whyChooseParagraph1={cityData.whyChooseParagraph1}
        whyChooseParagraph2={cityData.whyChooseParagraph2}
        cityName={cityData.cityName}
      />
      <CityAwards
        clutchAward={cityData.awards.clutch}
        upcityAward={cityData.awards.upcity}
        cityName={cityData.cityName}
      />
      <CityLocation locationData={cityData.location} cityName={cityData.cityName} />
      <CityFAQSection
        faqData={cityData.faqData}
        cityName={cityData.cityName}
        headline={cityData.faqSectionHeadline}
      />
      <section className="py-12 md:py-16 bg-white"> 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CityBottomForm cityName={cityData.cityName} formTitle={cityData.bottomFormTitle} />
        </div>
      </section>
    </div>
  );
}
