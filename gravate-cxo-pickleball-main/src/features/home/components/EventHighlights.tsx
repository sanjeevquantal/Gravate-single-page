import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, Users, Calendar } from 'lucide-react';

const EventHighlights = () => {
  const highlights = [
    { icon: Trophy, title: 'Elite Competition', description: 'Play with India\'s top business leaders' },
    { icon: Star, title: 'Saina Nehwal', description: 'Olympic medallist special appearance' },
    { icon: Users, title: 'Premium Networking', description: 'Connect with dynamic CXOs and MDs' },
    { icon: Calendar, title: 'Full Experience', description: 'Training, matches, and gourmet dining' },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Event <span className="bg-gradient-hero bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Play, Compete, Connect with India's business elite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;