
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
    { value: 70, suffix: '%', label: 'Saving Energy Cost' },
    { value: 100, suffix: '%', label: 'Renewable Energy' },
    { value: 23, suffix: 'M+', label: 'Worth Energy Cost' },
  ];

  const servicesData = [
    {
      id: 'water-fountain',
      title: 'Water Fountain',
      description: 'Custom-designed fountains for gardens, parks, hotels, and commercial spaces.',
      icon: Droplets,
      highlight: false,
    },
    {
      id: 'solar-panels',
      title: 'Solar Panels',
      description: 'Installation, maintenance, and repair of solar panels for homes and businesses.',
      icon: Sun,
      highlight: true,
    },
    {
      id: 'turnkey-project',
      title: 'Turnkey Project',
      description: 'We specialize in commercial projects and also collaborate with government sectors.',
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
              Powering the Future with <span className="text-gradient">Clean Energy</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground mx-auto md:mx-0">
              Smart, sustainable, and cost-effective energy solutions for homes and businesses.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">
                  <CirclePlay className="mr-2" /> Watch Demo
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
                <span>Govt Approved Projects</span>
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
              <p className="mt-4 text-center text-sm text-foreground/80">Innovative energy solutions for a better tomorrow.</p>
              <Button asChild variant="secondary" className="mt-4 w-full">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="section-padding bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Trusted by thousands, proven by numbers
            </h2>
          </div>
          <AnimatedStats stats={impactStats} className="grid-cols-1 sm:grid-cols-3 max-w-5xl mx-auto" />
        </div>
      </section>

      <section id="services" className="section-padding bg-background">
        <div className="container relative mx-auto px-4">
            <div className="mb-12 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
                    Our Core Services
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Discover our main areas of expertise, delivering excellence and innovation.
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
                Pioneering a Sustainable Future
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                For over 15 years, VK Enterprises has been at the forefront of the green energy revolution, delivering cutting-edge solar and water solutions. Our mission is to provide sustainable and innovative solutions that empower our clients and protect our planet.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">To empower communities with sustainable and innovative energy solutions.</p>
                  </div>
                </li>
                 <li className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">15+ Years of Experience</h3>
                    <p className="text-sm text-muted-foreground">A proven track record of quality, integrity, and customer satisfaction.</p>
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
              Our Recent Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A glimpse into our portfolio of successful projects across different sectors.
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
                  solar: 'Solar',
                  fountain: 'Water Fountain',
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
                Why Choose Residential Solar Panels?
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground">
                There are many significant benefits to installing residential solar panels on your homes roof. With minimal maintenance and long-term reliability, residential solar is an excellent choice for those seeking both financial and ecological benefits.
              </p>
            </div>
          </div>
          
          <hr className="my-12 border-border/50" />

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-2 text-xl font-bold">Cost Saving</h3>
              <p className="text-muted-foreground">
                Solar energy can significantly reduce electricity bills over time, offering long-term savings on utility costs.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Environmental Benefits</h3>
              <p className="text-muted-foreground">
                Solar power is a clean, renewable energy source that reduces carbon footprint and helps combat climate change.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Energy Independence</h3>
              <p className="text-muted-foreground">
                Solar panels provide homeowners with more control over their energy usage, reducing reliance on traditional energy sources.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Increased Home Value</h3>
              <p className="text-muted-foreground">
                Homes with solar panels typically sell at a premium and are more attractive to eco-conscious buyers.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Government Incentives</h3>
              <p className="text-muted-foreground">
                Many governments offer incentives, rebates, and tax credits for installing solar panels, making it more affordable.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Long-Term Reliability</h3>
              <p className="text-muted-foreground">
                Solar panels have minimal maintenance requirements and often come with warranties lasting 25 years.
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
                        Eco Technology Integration
                    </h2>
                </div>
                <div>
                    <p className="text-lg text-muted-foreground">
                        We integrate smart solar solutions with eco-friendly technology to boost efficiency, cut costs, and protect the environment.
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
                            Produced massive amounts of renewable energy to power thousands of homes and businesses.
                        </p>
                    </div>

                    <hr className="border-border md:hidden" />

                    <div className="flex flex-col items-center text-center md:pl-6">
                        <p className="font-headline text-6xl font-bold tracking-tighter text-chart-1">1,050+</p>
                        <h4 className="mt-4 text-xl font-bold">Businesses Empowered</h4>
                        <p className="mt-2 max-w-xs text-muted-foreground">
                            Supported companies in reducing costs and achieving sustainability goals through solar power.
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
                        What Our Happy Customers Say
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                        Hear what our satisfied clients have to say about their experience with VK Enterprises.
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
