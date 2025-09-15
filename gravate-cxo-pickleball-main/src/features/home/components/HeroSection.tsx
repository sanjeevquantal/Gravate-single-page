import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-pickleball-corrected.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-4 bg-gradient-hero text-white border-0 px-8 py-2 text-xl md:text-2xl font-bold tracking-widest uppercase shadow-hero backdrop-blur-sm border border-white/20">
          INDIA'S FIRST EVER
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-hero bg-clip-text text-transparent">CXO</span>
          <br />
          <span className="text-foreground">PICKLEBALL</span>
          <br />
          <span className="bg-gradient-hero bg-clip-text text-transparent">LEAGUE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Where sports meet influence. Join India's most dynamic leaders for an exclusive 
          pickleball experience at the iconic <span className="text-primary font-semibold">Taj Lands End, Mumbai</span>
        </p>
        
        
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>27 Sept 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>Taj Lands End, Mumbai</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-accent" />
            <span>3P per team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;