'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PROJECTS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { MapPin, Users, Building, Zap, CirclePlay } from 'lucide-react';
import { CtaSection } from '@/components/cta-section';
import { OpenQuoteModalButton } from '@/components/get-quote-modal';
import { Badge } from '@/components/ui/badge';

type Filter = 'all' | 'solar' | 'fountain' | 'turnkey';

const filters: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Solar', value: 'solar' },
  { label: 'Water Fountain', value: 'fountain' },
  { label: 'Turnkey', value: 'turnkey' },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  
  const filteredProjects = useMemo(
    () =>
      PROJECTS.filter(
        (project) => activeFilter === 'all' || project.category === activeFilter
      ),
    [activeFilter]
  );
    
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'project-solar-generic');
  
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categoryDisplay = {
    solar: 'Solar',
    fountain: 'Water Fountain',
    turnkey: 'Turnkey Project',
  };

  useEffect(() => {
    // Reset refs and visible projects when filter changes
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);
    setVisibleProjects(new Set());
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.projectId;
            if (id) {
              setVisibleProjects((prev) => new Set(prev).add(id));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [filteredProjects]);


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
            <div className="mb-4">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                Showcasing Excellence • Innovation • Sustainability
              </span>
            </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Our Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Turning Ideas into Sustainable Reality
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
            Explore our diverse range of solar, water fountain, and large-scale projects that reflect our commitment to quality, innovation, and environmental responsibility.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#projects-grid">View All Projects</Link>
            </Button>
            <OpenQuoteModalButton>
              <Button size="lg" variant="outline">
                Get Free Consultation
              </Button>
            </OpenQuoteModalButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">Solar Projects</Badge>
              <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">Fountain Designs</Badge>
              <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">Turnkey Projects</Badge>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span>50+ Clients</span>
              </div>
              <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-accent" />
                  <span>26+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  <span>15+ Years Experience</span>
              </div>
          </div>
        </div>
      </section>

      <div id="projects-grid" className="section-padding">
        <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4 border-b">
                {filters.map(({ label, value }) => (
                    <button
                        key={value}
                        onClick={() => setActiveFilter(value)}
                        className={cn(
                            'relative bg-transparent pb-3 text-base font-medium transition-colors duration-300',
                            activeFilter === value ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                        )}
                    >
                        {label}
                        {activeFilter === value && (
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"></span>
                        )}
                    </button>
                ))}
            </div>


          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project: any, index) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.image
              );
              const isVisible = visibleProjects.has(project.id);
              const categoryText = categoryDisplay[project.category as keyof typeof categoryDisplay] || project.category;
              return (
                <Card
                  key={project.id}
                  ref={(el) => (projectRefs.current[index] = el)}
                  data-project-id={project.id}
                  className={cn(
                    'group overflow-hidden rounded-lg border text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/20 hover:border-primary/50',
                    'opacity-0 transform-gpu scale-95',
                    isVisible && 'opacity-100 scale-100'
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-60 w-full">
                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                      />
                    ) : (
                      projectImage && (
                        <Image
                          src={projectImage.imageUrl}
                          alt={projectImage.description}
                          data-ai-hint={projectImage.imageHint}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                        />
                      )
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="absolute top-3 right-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold capitalize backdrop-blur-sm">
                      {categoryText}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <Button variant="secondary">
                          {project.id === 'p2' ? (
                              <>
                                  <CirclePlay className="mr-2" />
                                  <span>View Video</span>
                              </>
                          ) : (
                              'View Details'
                          )}
                        </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                     <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
}
