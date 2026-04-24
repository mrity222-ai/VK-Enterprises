
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SOLAR_SOLUTIONS, TESTIMONIALS, PROJECTS } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import {
  Quote,
  Leaf,
  ArrowRight,
  MapPin,
  Rocket,
  Award,
  Star,
  Zap,
  ChevronDown,
  CirclePlay,
  Sun,
  Droplets,
  Building,
  Heart,
  Share2,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { AnimatedStats } from '@/components/animated-stats';
import { CtaSection } from '@/components/cta-section';
import { CertificationsSection } from '@/components/certifications-section';
import { Badge } from '@/components/ui/badge';


export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-solar-fountain');
  const cardImage = PlaceHolderImages.find((img) => img.id === 'card-solar-install');
  const solutionsBgImage = PlaceHolderImages.find((img) => img.id === 'solutions-background');
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-main');

  const impactStats = [
    { value: 70, suffix: '%', label: 'Energy Cost Savings' },
    { value: 100, suffix: '%', label: '100% Green Energy' },
    { value: 23, suffix: 'M+', label: 'Project Value Delivered' },
    { value: 26, suffix: '+', label: 'Projects Completed Successfully' },
  ];

  const servicesData = [
    {
      id: 'water-fountain',
      title: 'Water Fountain',
      description: 'India\'s trusted water fountain design company. We create stunning, custom water features for parks, hotels, and luxury homes across Lucknow, Noida, and beyond.',
      icon: Droplets,
      highlight: false,
    },
    {
      id: 'solar-panels',
      title: 'Solar Panel Installation UP',
      description: 'Expert solar panel installation in Uttar Pradesh for homes and businesses. As a leading solar company in UP, we ensure top-tier panels & long-term savings.',
      icon: Sun,
      highlight: true,
    },
    {
      id: 'turnkey-project',
      title: 'Turnkey Project',
      description: 'Your reliable turnkey project contractor in India for large-scale government and commercial projects, from planning to execution.',
      icon: Building,
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col">
       <section className="relative w-full overflow-hidden">
         {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative mx-auto grid min-h-screen items-center px-4 md:grid-cols-2 section-padding gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            
            <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Top <span className="text-gradient">Solar & Water Fountain</span> Company in Uttar Pradesh
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground mx-auto md:mx-0">
              VK Enterprises offers expert solar panel installation and custom water fountain design across UP, including Lucknow, Noida, and Gorakhpur. Power your future with sustainable solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold">
                <Link href="/contact">
                  Get a Free Quote <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#our-works">
                  <CirclePlay className="mr-2" /> View Our Work
                </Link>
              </Button>
            </div>
             <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Star className="h-5 w-5 text-accent" fill="currentColor" />
                <span>4.8 Customer Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Award className="h-5 w-5 text-accent" />
                <span>Govt Approved Contractor</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Zap className="h-5 w-5 text-accent" />
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex md:justify-center">
            <div className="glassmorphism group rounded-2xl p-6 w-full max-w-sm shadow-xl">
              <div className="relative h-56 w-full overflow-hidden rounded-lg">
                {cardImage && (
                  <Image
                    src={cardImage.imageUrl}
                    alt={cardImage.description}
                    data-ai-hint={cardImage.imageHint}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                  />
                )}
              </div>
              <p className="mt-4 text-center text-sm text-foreground/80">Innovative energy solutions for a greener tomorrow in India.</p>
              <Button asChild variant="secondary" className="mt-4 w-full">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="section-padding bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Trusted by Businesses Across Uttar Pradesh, Proven by Numbers
            </h2>
          </div>
          <AnimatedStats stats={impactStats} className="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto" />
        </div>
      </section>

      <section id="services" className="section-padding bg-background">
        <div className="container relative mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    Our Core Services for Uttar Pradesh & India
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Discover our main areas of expertise, delivering excellence in solar, water fountain, and turnkey solutions across India.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:-space-x-8">
                {servicesData.map((service) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={service.id}
                            className={cn(
                                "relative w-full max-w-sm rounded-3xl p-8 pt-12 transition-all duration-300 group",
                                service.highlight 
                                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 lg:z-10 lg:scale-105" 
                                    : "bg-card text-card-foreground shadow-xl",
                                "hover:!scale-110 hover:shadow-2xl hover:z-20 hover:-translate-y-2",
                                service.highlight ? "hover:shadow-primary/40" : "hover:shadow-primary/20",
                            )}
                        >
                            <div 
                                className="absolute right-6 top-0 -translate-y-1/2 p-4 rounded-full"
                                style={{
                                    background: service.highlight ? 'hsl(var(--secondary))' : 'hsl(var(--primary))'
                                }}
                            >
                                <Icon className={cn(
                                    "h-8 w-8",
                                    service.highlight ? "text-primary" : "text-secondary-foreground"
                                )} />
                            </div>

                            <div 
                                className="absolute top-1/2 -right-3 -translate-y-1/2 text-center"
                                style={{ writingMode: 'vertical-rl' }}
                            >
                                <span className={cn(
                                    "text-xs font-bold uppercase tracking-widest text-muted-foreground/60 transition-colors group-hover:text-primary",
                                    service.highlight && "text-primary-foreground/60 group-hover:text-white"
                                )}>
                                    Learn More
                                </span>
                            </div>
                            
                            <h3 className="font-headline text-2xl font-bold mt-4">{service.title}</h3>
                            <p className={cn(
                                "mt-2 text-sm min-h-[56px]",
                                service.highlight ? "opacity-90" : "text-muted-foreground"
                            )}>
                                {service.description}
                            </p>
                            
                            <div className="flex justify-between items-center mt-6">
                                <Button 
                                    asChild
                                    variant={service.highlight ? "secondary" : "default"}
                                    className="rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                                >
                                    <Link href="/services">Get Started</Link>
                                </Button>
                                <div className="flex gap-1">
                                     <Button
                                         variant="ghost"
                                         size="icon"
                                         className={cn("rounded-full", service.highlight ? "text-primary-foreground/70 hover:bg-white/10 hover:text-white" : "text-muted-foreground/70 hover:bg-muted")}
                                     >
                                         <Heart className="h-4 w-4" />
                                     </Button>
                                     <Button
                                         variant="ghost"
                                         size="icon"
                                         className={cn("rounded-full", service.highlight ? "text-primary-foreground/70 hover:bg-white/10 hover:text-white" : "text-muted-foreground/70 hover:bg-muted")}
                                     >
                                         <Share2 className="h-4 w-4" />
                                     </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      <section id="about-us" className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
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
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                Pioneering a Sustainable Future in Uttar Pradesh
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                For over 15 years, VK Enterprises has been at the forefront of the green energy revolution in India, delivering cutting-edge solar and water solutions. As a leading solar company in UP, our mission is to provide sustainable and innovative services that empower our clients and protect our planet.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">To empower Indian communities with sustainable and innovative energy solutions.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">15+ Years of Experience</h3>
                    <p className="text-sm text-muted-foreground">A proven track record of quality, integrity, and customer satisfaction across Uttar Pradesh.</p>
                  </div>
                </li>
              </ul>
              <Button asChild className="mt-8">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="our-works" className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
              Our Recent Projects in Uttar Pradesh
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A glimpse into our portfolio of successful solar, fountain, and turnkey projects across different sectors in UP.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/projects">
                  View All Projects <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-16">
            {PROJECTS.slice(0, 3).map((project, index) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.image
              );
              const categoryDisplay = {
                  solar: 'Solar Panel Installation',
                  fountain: 'Water Fountain Design',
                  turnkey: 'Turnkey Project',
              };
              const categoryText = categoryDisplay[project.category as keyof typeof categoryDisplay] || project.category;

              return (
                <Card
                  key={project.id}
                  className="group grid grid-cols-1 items-center overflow-hidden rounded-2xl border transition-all duration-300 hover:scale-103 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 md:grid-cols-2 hover:border-primary/30"
                >
                  <div
                    className={cn(
                      'relative h-80 w-full overflow-hidden md:h-full',
                      index % 2 !== 0 && 'md:order-last'
                    )}
                  >
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        data-ai-hint={projectImage.imageHint}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="flex flex-col p-8 lg:p-12">
                      <Badge variant="outline" className="mb-4 w-fit border-primary/50 bg-primary/10 text-primary capitalize">{categoryText}</Badge>
                    <h3 className="font-headline text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="benefits" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Solar Panels in Uttar Pradesh?
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground">
                Installing residential solar panels on your home's roof in UP offers significant financial and ecological benefits. With government incentives and long-term reliability, residential solar is an excellent choice for homeowners in Lucknow, Kanpur, and across the state.
              </p>
            </div>
          </div>
          
          <hr className="my-12 border-border/50" />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 text-xl font-bold">Major Cost Savings</h3>
              <p className="text-muted-foreground">
                Solar energy can significantly reduce your electricity bills over time, offering long-term savings on ever-increasing utility costs in Uttar Pradesh.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Environmental Benefits</h3>
              <p className="text-muted-foreground">
                As a clean, renewable energy source, solar power reduces your carbon footprint and helps combat climate change in India.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Energy Independence</h3>
              <p className="text-muted-foreground">
                Generate your own power and reduce your reliance on the grid. Solar provides energy security for your home or business.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Increased Home Value</h3>
              <p className="text-muted-foreground">
                Homes in Uttar Pradesh with solar panels typically sell at a premium and are more attractive to eco-conscious buyers.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">UP Government Incentives</h3>
              <p className="text-muted-foreground">
                The government offers incentives, rebates, and tax credits for installing solar panels, making it more affordable than ever for UP residents.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Long-Term Reliability</h3>
              <p className="text-muted-foreground">
                Modern solar panel systems require minimal maintenance and often come with performance warranties lasting up to 25 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4">
            <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        Eco Technology Integration by VK Enterprises
                    </h2>
                </div>
                <div>
                    <p className="text-lg text-muted-foreground">
                        As a leading solar company in UP, we integrate smart solar solutions with eco-friendly technology to boost efficiency, cut costs, and protect the environment.
                    </p>
                </div>
            </div>
            
            <div className="relative">
                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-background md:flex" aria-hidden="true">
                    <Leaf className="h-4 w-4 text-primary" />
                </div>

                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:pr-6">
                        <p className="font-headline text-6xl font-bold tracking-tighter text-chart-1">390MW+</p>
                        <h4 className="mt-4 text-xl font-bold">Clean Energy Generated</h4>
                        <p className="mt-2 max-w-xs text-muted-foreground">
                            We've produced massive amounts of renewable energy to power thousands of homes and businesses across India.
                        </p>
                    </div>

                    <hr className="border-border md:hidden" />

                    <div className="flex flex-col items-center text-center md:pl-6">
                        <p className="font-headline text-6xl font-bold tracking-tighter text-chart-1">1,050+</p>
                        <h4 className="mt-4 text-xl font-bold">Businesses Empowered in UP</h4>
                        <p className="mt-2 max-w-xs text-muted-foreground">
                            We've helped companies in Uttar Pradesh reduce costs and achieve sustainability goals through solar power.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <section id="testimonials" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <div className="mb-12 flex flex-col items-start text-left md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        What Our Happy Customers in Uttar Pradesh Say
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        Hear what our satisfied clients have to say about their experience with VK Enterprises, a leading solar company in UP.
                    </p>
                </div>
                <div className="mt-4 flex gap-2 md:mt-0">
                    <CarouselPrevious className="relative h-10 w-10 translate-y-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
                </div>
            </div>
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((testimonial, index) => {
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <div className="h-full">
                      <Card className="flex h-full flex-col text-left rounded-xl p-6 bg-card text-card-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                          <div className="mb-4">
                              <div>
                                  <p className="font-bold">{testimonial.name}</p>
                                  <p className="text-sm opacity-70">{testimonial.role}</p>
                              </div>
                          </div>
                          <div className="flex-grow">
                              <Quote className="h-6 w-6 mb-2 text-primary" />
                              <p className="text-sm opacity-90">"{testimonial.quote}"</p>
                          </div>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <CertificationsSection />

      <CtaSection />
    </div>
  );
}
