
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Award, Zap } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { OpenQuoteModalButton } from '@/components/get-quote-modal';
import { CtaSection } from '@/components/cta-section';
import { Badge } from '@/components/ui/badge';
import { AnimatedServiceCard } from '@/components/animated-service-card';

export const metadata: Metadata = {
  title: 'Our Services | Solar, Water Fountain & Turnkey Projects in India',
  description: 'Explore our expert services: Solar Panel Installation in Uttar Pradesh, custom Water Fountain Design across India, and large-scale Turnkey Projects for government and commercial clients.',
};

export default function ServicesPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'solutions-background');
  return (
    <>
      <section className="relative overflow-hidden py-20 text-foreground sm:py-24">
        {heroBgImage && (
          <Image
            src={heroBgImage.imageUrl}
            alt={heroBgImage.description}
            data-ai-hint={heroBgImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                Expert Solar, Water Fountain & Turnkey Services in India
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                Comprehensive Solar & Water Solutions Designed for Efficiency, Sustainability, and Innovation
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
                VK Enterprises provides end-to-end solutions for homes, businesses, and government projects. From solar panel installation in Uttar Pradesh to grand water features and turnkey contracts, we deliver excellence.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <OpenQuoteModalButton>
                    <Button size="lg" className="bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-shadow hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]">
                        Get a Free Quote
                    </Button>
                </OpenQuoteModalButton>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/projects">View Our Work</Link>
                </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">Solar Installation in UP</Badge>
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">Water Fountain Design India</Badge>
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">Government Turnkey Projects</Badge>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span>Trusted by 50+ Clients in UP</span>
                </div>
                <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>15+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span>Leading Govt Project Contractor</span>
                </div>
            </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(
                (img) => img.id === service.image
              );
              return (
                <AnimatedServiceCard 
                  key={service.id}
                  service={service}
                  serviceImage={serviceImage}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
