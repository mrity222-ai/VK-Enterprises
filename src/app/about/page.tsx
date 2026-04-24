
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TEAM } from '@/lib/data';
import { AnimatedStats } from '@/components/animated-stats';
import { OpenQuoteModalButton } from '@/components/get-quote-modal';
import {
  Award,
  Building,
  CheckCircle,
  Eye,
  Leaf,
  Lightbulb,
  Rocket,
  Sun,
  Droplets,
  Users,
  Star,
  Zap,
  HardHat,
} from 'lucide-react';
import { CtaSection } from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'With over 15 years of experience, VK Enterprises is a leader in delivering sustainable solar energy and elegant water fountain solutions.',
};

const aboutServices = [
  {
    title: 'Solar Power Systems',
    description: 'Customized solar solutions for residential and commercial needs.',
    icon: Sun,
  },
  {
    title: 'Water Fountain Solutions',
    description: 'Designing and installing elegant water features for any space.',
    icon: Droplets,
  },
  {
    title: 'Construction Work (Govt Projects)',
    description: 'Handling large-scale government contracts with precision.',
    icon: Building,
  },
  {
    title: 'Energy Efficiency Consultation',
    description: 'Advising on the best ways to reduce energy consumption.',
    icon: Lightbulb,
  },
  {
    title: 'Eco-Friendly Designs',
    description: 'Integrating sustainability into every aspect of our projects.',
    icon: Leaf,
  },
];

const companyHighlights = [
    { text: '15+ Years of Industry Experience' },
    { text: '50+ Happy Customers' },
    { text: 'Government Project Expertise' },
    { text: 'Skilled Engineering Team' },
    { text: 'Focus on Sustainability & Innovation' },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-main');
  const heroBgImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const impactImage = PlaceHolderImages.find((img) => img.id === 'impact-solar-panels');
  const achievements = [
    { value: 50, suffix: '+', label: 'Happy Customers', icon: 'Users' as const },
    { value: 26, suffix: '+', label: 'Projects Completed', icon: 'Building' as const },
    { prefix: '₹', value: 25, suffix: 'L+', label: 'Energy Savings Generated', icon: 'Zap' as const },
    { value: 40, suffix: '+', label: 'Skilled Experts', icon: 'HardHat' as const },
    { value: 1, suffix: '+', label: 'Government Recognition', icon: 'Award' as const },
];

  return (
    <div>
      {/* Hero Section */}
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
        <div className="container relative mx-auto px-4 text-center">
            <div className="mb-4">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                    15+ Years of Excellence
                </span>
            </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            About VK Enterprises
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Delivering sustainable energy solutions and elegant water designs that power homes, businesses, and government projects.
          </p>
           <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
            We combine innovation, engineering expertise, and environmental responsibility to create efficient solar systems and visually stunning water features.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <OpenQuoteModalButton>
              <Button size="lg" className="bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-shadow hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]">Get Free Consultation</Button>
            </OpenQuoteModalButton>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent" />
                <span>4.8 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-accent" />
                <span>Government Project Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                <span>50+ Happy Clients</span>
              </div>
            </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
            <div className="order-2 md:order-1">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary">
                    Who We Are
                </span>
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    A Trusted Name in Sustainable Energy & Water Solutions
                </h2>
                <p className="mt-4 text-muted-foreground">
                    VK Enterprises is a leading provider of solar energy systems and water fountain solutions, delivering innovative and eco-friendly services for over 15+ years. We specialize in residential, commercial, and government projects, combining technical expertise with creative design to ensure high performance and visual excellence.
                </p>
                <ul className="mt-6 space-y-3">
                    {companyHighlights.map((highlight) => (
                      <li key={highlight.text} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-muted-foreground">{highlight.text}</span>
                      </li>
                    ))}
                </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="group rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-2xl">
                {aboutImage && (
                    <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                    />
                )}
              </div>
            </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
           <header className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Our Mission & Vision</h2>
          </header>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Rocket className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-2xl text-foreground">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To promote green energy and innovative water solutions that enhance lifestyles while protecting the environment for future generations.</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-2xl text-foreground">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To become a leading brand in solar and water solutions, known for innovation, quality, and customer trust.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
            <h2 className="text-center font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                The experts behind our success and innovation.
            </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TEAM.map((member) => {
            const memberImage = PlaceHolderImages.find((img) => img.id === member.image);
            return (
              <Card key={member.name} className="overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                  <div className="flex flex-col items-center p-6 text-center sm:p-8">
                      <Avatar className="h-32 w-32 border-4 border-primary/20">
                          {memberImage && (
                              <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />
                          )}
                          <AvatarFallback className="bg-muted text-foreground">{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="mt-4">
                          <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                          <p className="text-sm text-primary">{member.role}</p>
                          <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                      </div>
                  </div>
              </Card>
            );
          })}
        </div>
        </div>
      </section>

      {/* Achievements & Impact Section */}
      <section className="relative section-padding">
        {impactImage && (
            <Image
                src={impactImage.imageUrl}
                alt={impactImage.description}
                data-ai-hint={impactImage.imageHint}
                fill
                className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="container relative mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Our Achievements & Impact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Numbers that reflect our commitment to quality, sustainability, and customer satisfaction.
            </p>
          </header>
          <AnimatedStats stats={achievements} className="grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5" variant="dark" />
          <p className="mt-8 text-center text-sm text-slate-400">
            Trusted by homes, businesses & government projects
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <header className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">Our Capabilities</h2>
          </header>
          <div className="flex flex-col items-center gap-6">
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {aboutServices.slice(0, 3).map((service) => (
                      <Card key={service.title} className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                          <CardHeader className="items-center">
                              <div className="rounded-full bg-primary/10 p-4 text-primary">
                                  <service.icon className="h-8 w-8" />
                              </div>
                              <CardTitle>{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
              <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
                  {aboutServices.slice(3).map((service) => (
                      <Card key={service.title} className="text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                          <CardHeader className="items-center">
                              <div className="rounded-full bg-primary/10 p-4 text-primary">
                                  <service.icon className="h-8 w-8" />
                              </div>
                              <CardTitle>{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
