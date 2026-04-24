'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Sun, Droplets, Package } from 'lucide-react';
import { OpenQuoteModalButton } from '@/components/get-quote-modal';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { SERVICES } from '@/lib/data';
import { cn } from '@/lib/utils';

const iconMap = {
  Sun,
  Droplets,
  Package,
};

type Service = typeof SERVICES[number];

type AnimatedServiceCardProps = {
  service: Service;
  serviceImage: ImagePlaceholder | undefined;
  index: number;
};

export function AnimatedServiceCard({ service, serviceImage, index }: AnimatedServiceCardProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div
      ref={ref}
      id={service.id}
      className={cn(
        'scroll-mt-20 opacity-0',
        isInView && 'fade-in-up',
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <Card className="group overflow-hidden border border-transparent transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
        <div className={`grid grid-cols-1 items-center gap-0 md:grid-cols-2 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
          <div className={`relative h-80 w-full overflow-hidden md:h-full ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
            {serviceImage && (
              <Image
                src={serviceImage.imageUrl}
                alt={serviceImage.description}
                data-ai-hint={serviceImage.imageHint}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
              />
            )}
          </div>
          <div className="p-8 lg:p-10">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                {IconComponent && <IconComponent className="h-8 w-8" />}
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter">
                {service.title}
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <OpenQuoteModalButton>
              <Button className="mt-8 transform bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_4px_15px_hsl(var(--primary)/0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_25px_hsl(var(--primary)/0.4)]">
                Inquire Now
              </Button>
            </OpenQuoteModalButton>
          </div>
        </div>
      </Card>
    </div>
  );
}
