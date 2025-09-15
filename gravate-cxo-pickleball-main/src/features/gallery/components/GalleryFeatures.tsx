import { Card, CardContent } from '@/components/ui/card';
import { Camera, Share2, Heart } from 'lucide-react';

const GalleryFeatures = () => {
  const features = [
    {
      icon: Camera,
      title: 'Tournament Action',
      description: 'Professional shots of intense matches, winning moments, and athletic excellence.',
    },
    {
      icon: Share2,
      title: 'Behind the Scenes',
      description: 'Exclusive access to player preparations, coaching sessions, and candid moments.',
    },
    {
      icon: Heart,
      title: 'Community Moments',
      description: 'Networking sessions, celebrations, and the camaraderie that makes our league special.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Gallery <span className="bg-gradient-hero bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Capturing every moment of our exclusive corporate sports experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryFeatures;