import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Pickle & Network?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join India's most exclusive corporate sports league. Limited spots available.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="glass" size="lg" className="text-lg px-8 py-3">
            <Clock className="mr-2 h-5 w-5" />
            RSVP: grv8sports@gmail.com
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
            📞 +91 9818223112
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;