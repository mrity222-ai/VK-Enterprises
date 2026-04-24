
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const certificates = [
  {
    id: 'certificate-appreciation',
    title: 'Appreciation Letter',
  },
];

export function CertificationsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Our Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We are committed to the highest standards of quality and safety in every project we undertake.
          </p>
        </header>
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-8">
          {certificates.map((cert) => {
            const certImage = PlaceHolderImages.find((img) => img.id === cert.id);
            return (
              <Card key={cert.id} className="group overflow-hidden text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50">
                {certImage && (
                  <div className="relative h-96 w-full">
                    <Image
                      src={certImage.imageUrl}
                      alt={certImage.description}
                      data-ai-hint={certImage.imageHint}
                      fill
                      className="object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
