import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram } from 'lucide-react';

const InstagramFeed = () => {
  // Using Elfsight embed for Instagram feed

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-hero border-primary/20">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Instagram className="h-8 w-8 text-primary" />
              <CardTitle className="text-3xl">Live from the Courts</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div 
              className="elfsight-app-587e2527-9609-477e-aa69-7fdaeb39618d w-full min-h-[400px]" 
              data-elfsight-app-lazy
            />
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Follow us <strong>@grv8sports</strong> on Instagram for exclusive content and live tournament updates
              </p>
              <a 
                href="https://instagram.com/grv8sports" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-hero text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Instagram className="h-5 w-5" />
                Follow @grv8sports
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstagramFeed;