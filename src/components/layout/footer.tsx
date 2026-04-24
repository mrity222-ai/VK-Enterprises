'use client';

import Link from 'next/link';
import { ArrowUpCircle, Mail, MapPin, Phone } from 'lucide-react';

const SolarPanelIllustration = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="10" y="30" width="80" height="40" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 50H90" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 30V70" stroke="currentColor" strokeWidth="2"/>
        <path d="M50 30V70" stroke="currentColor" strokeWidth="2"/>
        <path d="M70 30V70" stroke="currentColor" strokeWidth="2"/>
        <path d="M45 70V85H55V70" stroke="currentColor" strokeWidth="2"/>
        <path d="M35 85H65" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const linkHoverClasses = "pb-1 bg-gradient-to-r from-accent to-accent bg-no-repeat bg-left-bottom bg-[length:0%_1px] hover:bg-[length:100%_1px] transition-all duration-300 hover:text-accent hover:tracking-wide";

    return (
        <footer className="bg-primary text-primary-foreground" id="contact">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Contact us</span>
                            <h2 className="mt-2 font-headline text-4xl font-bold text-primary-foreground sm:text-5xl">
                                Let’s Build a Brighter Future Together
                            </h2>
                            <div className="mt-8">
                                 <h3 className="font-semibold text-primary-foreground">Quick Links</h3>
                                 <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                                     <Link href="/" className={linkHoverClasses}>Home</Link>
                                     <Link href="/about" className={linkHoverClasses}>About Us</Link>
                                     <Link href="/services" className={linkHoverClasses}>Services</Link>
                                     <Link href="/projects" className={linkHoverClasses}>Projects</Link>
                                 </div>
                            </div>
                        </div>
                         <SolarPanelIllustration className="hidden h-24 w-24 text-primary-foreground/30 lg:block self-start mt-8" />
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 flex-shrink-0 text-primary-foreground/80" />
                            <div>
                                <h3 className="font-semibold text-primary-foreground">Address</h3>
                                <p>Shope No. 4 Pushpanjali Complex, Shahi Market, Golghar Gorakhpur.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 flex-shrink-0 text-primary-foreground/80" />
                            <div>
                                <h3 className="font-semibold text-primary-foreground">Phone</h3>
                                <a href="tel:+919415212271" className="transition-colors duration-300 hover:text-accent hover:tracking-wide">+91 9415212271</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="h-6 w-6 flex-shrink-0 text-primary-foreground/80" />
                            <div>
                                <h3 className="font-semibold text-primary-foreground">Email</h3>
                                <a href="mailto:info@vkenterprisess.com" className="transition-colors duration-300 hover:text-accent hover:tracking-wide block">info@vkenterprisess.com</a>
                                <a href="mailto:sale@vkenterprisess.com" className="transition-colors duration-300 hover:text-accent hover:tracking-wide block">sale@vkenterprisess.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-primary-foreground/20">
                 <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-4 px-4 py-6 text-sm sm:px-6 lg:px-8">
                    <div className="order-2 text-center sm:order-1 sm:text-left">
                        <p>&copy; 2025 VK Enterprises. All Rights Reserved.</p>
                        <p className="text-primary-foreground/70">
                            Website Design by <a href="https://itlc.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">ITLC INDIA PVT LTD</a>
                        </p>
                    </div>
                    
                    <div className="order-1 flex w-full justify-center gap-6 sm:order-2 sm:w-auto">
                        <Link href="/terms" className={linkHoverClasses}>Terms & conditions</Link>
                        <Link href="/privacy" className={linkHoverClasses}>Privacy Policy</Link>
                    </div>
                    
                    <div className="order-3 hidden sm:block">
                        <button onClick={scrollToTop} className="flex items-center gap-2 transition-colors duration-300 hover:text-accent hover:tracking-wide">
                            Back to top
                            <ArrowUpCircle className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
