import { Badge } from '@/components/ui/badge';

const GalleryHero = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-gradient-hero text-white border-0 px-6 py-2">
          Live Updates & Highlights
        </Badge>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Tournament Gallery
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience the excitement and energy of India's most exclusive corporate pickleball league. 
          Follow our live updates and behind-the-scenes moments.
        </p>
      </div>
    </section>
  );
};

export default GalleryHero;