'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SolarPanelIllustration = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="10" y="30" width="80" height="40" rx="2" stroke="currentColor" strokeWidth="1"/>
        <path d="M10 50H90" stroke="currentColor" strokeWidth="1"/>
        <path d="M30 30V70" stroke="currentColor" strokeWidth="1"/>
        <path d="M50 30V70" stroke="currentColor" strokeWidth="1"/>
        <path d="M70 30V70" stroke="currentColor" strokeWidth="1"/>
        <path d="M45 70V85H55V70" stroke="currentColor" strokeWidth="1"/>
        <path d="M35 85H65" stroke="currentColor" strokeWidth="1"/>
    </svg>
);


const WindTurbineIllustration = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M50 90V55" stroke="currentColor" strokeWidth="1"/>
        <circle cx="50" cy="50" r="3" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
        <path d="M50 50L80 40L50 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 50L30 70L20 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 50L70 70L80 50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export function CtaSection() {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative text-center">
                    <div className="pointer-events-none absolute -left-16 top-1/2 -translate-y-1/2 transform text-muted-foreground/10 opacity-50 hidden lg:block">
                        <WindTurbineIllustration className="h-48 w-48" />
                    </div>
                    <div className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 transform text-muted-foreground/10 opacity-50 hidden lg:block">
                        <SolarPanelIllustration className="h-48 w-48" />
                    </div>

                    <div className="mx-auto max-w-2xl">
                        <h2 className={cn(
                            "font-headline text-3xl font-bold tracking-tighter sm:text-5xl",
                            isInView ? "fade-in-up" : "opacity-0"
                        )}>
                            Ready to Embrace a Greener Future?
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <div className={cn(isInView ? 'animate-scale-in' : 'opacity-0')} style={{ animationDelay: '200ms' }}>
                                <Button size="lg" className="h-12 rounded-lg px-8 font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 animate-pulse-glow" asChild>
                                    <Link href="/services">Explore our solar solution</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
