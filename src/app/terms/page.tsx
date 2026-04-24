
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FileText,
  Briefcase,
  User,
  BadgeIndianRupee,
  CalendarClock,
  Shield,
  AlertTriangle,
  Wrench,
  ExternalLink,
  RefreshCcw,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TermsAndConditionsPage() {
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  return (
    <div>
      <section className="relative overflow-hidden py-20 sm:py-24">
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
        <div className="container relative mx-auto px-4">
          <header className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Last updated: {lastUpdatedDate}
            </p>
          </header>
        </div>
      </section>

      <div className="section-padding">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl text-muted-foreground prose-headings:font-headline prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground">
            <div className="space-y-12">
              <div>
                <h2 className="flex items-center gap-3"><FileText className="h-7 w-7 text-primary" />1. Introduction</h2>
                <p>Welcome to VK Enterprises. By accessing our website and using our services, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree, please do not use our services.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Briefcase className="h-7 w-7 text-primary" />2. Services</h2>
                <p>VK Enterprises provides services including:</p>
                <ul>
                  <li>Solar panel installation and maintenance</li>
                  <li>Water fountain design and installation</li>
                  <li>Turnkey and government project execution</li>
                </ul>
                <p>We reserve the right to modify or discontinue any service without prior notice.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><User className="h-7 w-7 text-primary" />3. User Responsibilities</h2>
                <p>By using our website, you agree:</p>
                <ul>
                  <li>To provide accurate and complete information</li>
                  <li>Not to misuse the website or services</li>
                  <li>Not to engage in any illegal or harmful activities</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><BadgeIndianRupee className="h-7 w-7 text-primary" />4. Pricing & Payments</h2>
                <ul>
                    <li>All pricing is subject to change without notice</li>
                    <li>Final pricing depends on project requirements and site inspection</li>
                    <li>Payments must be made as per agreed terms in quotation or contract</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><CalendarClock className="h-7 w-7 text-primary" />5. Project Timelines</h2>
                 <ul>
                    <li>Project timelines are estimates and may vary due to external factors</li>
                    <li>VK Enterprises is not responsible for delays caused by weather, government approvals, or unforeseen circumstances</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Shield className="h-7 w-7 text-primary" />6. Intellectual Property</h2>
                <p>All content on this website (text, images, design) is the property of VK Enterprises and cannot be copied, reproduced, or used without permission.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><AlertTriangle className="h-7 w-7 text-primary" />7. Limitation of Liability</h2>
                <p>VK Enterprises shall not be liable for:</p>
                <ul>
                  <li>Any indirect or incidental damages</li>
                  <li>Loss of data or profits</li>
                  <li>Delays beyond our control</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Wrench className="h-7 w-7 text-primary" />8. Warranty & Maintenance</h2>
                <ul>
                    <li>Solar systems and projects may include warranties as per agreement</li>
                    <li>Maintenance services are provided as per contract terms</li>
                </ul>
              </div>
              
              <div>
                <h2 className="flex items-center gap-3"><ExternalLink className="h-7 w-7 text-primary" />9. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for their content or policies.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><RefreshCcw className="h-7 w-7 text-primary" />10. Changes to Terms</h2>
                <p>We reserve the right to update these Terms & Conditions at any time. Changes will be effective immediately upon posting.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Mail className="h-7 w-7 text-primary" />11. Contact Information</h2>
                <p>For any queries regarding these Terms & Conditions, contact:</p>
                <div className="not-prose rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                  <h3 className="font-bold text-lg">VK Enterprises</h3>
                  <address className="mt-4 not-italic space-y-3 text-muted-foreground">
                    <p className="flex items-start gap-3"><MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" /> <span>Shope No. 4 Pushpanjali Complex, Shahi Market, Golghar, Gorakhpur, Uttar Pradesh</span></p>
                    <p className="flex items-center gap-3"><Phone className="h-5 w-5 flex-shrink-0 text-primary" /> <a href="tel:+919415212271" className="text-primary hover:underline">+91 9415212271</a></p>
                    <p className="flex items-center gap-3"><Mail className="h-5 w-5 flex-shrink-0 text-primary" /> <a href="mailto:director@vkenterprisess.com" className="text-primary hover:underline">director@vkenterprisess.com</a></p>
                    <p className="flex items-center gap-3"><Mail className="h-5 w-5 flex-shrink-0 text-primary" /> <a href="mailto:info@vkenterprisess.com" className="text-primary hover:underline">info@vkenterprisess.com</a></p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
