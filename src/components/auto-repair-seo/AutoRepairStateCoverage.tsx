
import type { AutoRepairStateCoverageData } from '@/types';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface AutoRepairStateCoverageProps {
  coverageData: AutoRepairStateCoverageData;
  stateName: string;
}

export function AutoRepairStateCoverage({ coverageData, stateName }: AutoRepairStateCoverageProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{coverageData.mainHeadline.replace('[StateName]', stateName)}</h2>
            <p className="text-muted-foreground mb-4">
              Our expert auto repair SEO services are designed to help shops and mechanics thrive across {stateName}. We target car owners effectively in regions including:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {coverageData.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted-foreground">
              Wherever your auto repair shop is located in {stateName}, TRAC has the SEO strategies to bring more customers to your bays.
            </p>
          </div>
          {coverageData.mapImageUrl && coverageData.mapImageAlt && (
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={coverageData.mapImageUrl}
                alt={coverageData.mapImageAlt.replace('[StateName]', stateName)}
                width={600}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="state map auto repair service area"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
