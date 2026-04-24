
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Info,
  Database,
  Settings,
  Lock,
  Share2,
  Cookie,
  ExternalLink,
  BookUser,
  RefreshCcw,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
                <h2 className="flex items-center gap-3"><Info className="h-7 w-7 text-primary" />1. Introduction</h2>
                <p>VK Enterprises (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Database className="h-7 w-7 text-primary" />2. Information We Collect</h2>
                <p>We may collect the following information:</p>
                <ul>
                  <li><strong>Personal Details:</strong> Name, Phone Number, Email Address</li>
                  <li><strong>Project Information:</strong> Location, requirements, preferences</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on website</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Settings className="h-7 w-7 text-primary" />3. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Respond to inquiries and customer support</li>
                  <li>Share quotations and project updates</li>
                  <li>Improve website performance and user experience</li>
                  <li>Send promotional offers (only if you opt-in)</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Lock className="h-7 w-7 text-primary" />4. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Share2 className="h-7 w-7 text-primary" />5. Sharing of Information</h2>
                <p>We do not sell or rent your personal information. We may share your data with:</p>
                <ul>
                  <li>Trusted service providers</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Cookie className="h-7 w-7 text-primary" />6. Cookies Policy</h2>
                <p>Our website may use cookies to enhance user experience. Cookies help us:</p>
                <ul>
                  <li>Understand user behavior</li>
                  <li>Improve website performance</li>
                  <li>Provide a better user experience</li>
                </ul>
                <p>You can disable cookies through your browser settings.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><ExternalLink className="h-7 w-7 text-primary" />7. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for their privacy policies or content.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><BookUser className="h-7 w-7 text-primary" />8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><RefreshCcw className="h-7 w-7 text-primary" />9. Updates to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
              </div>

              <div>
                <h2 className="flex items-center gap-3"><Mail className="h-7 w-7 text-primary" />10. Contact Us</h2>
                <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
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
