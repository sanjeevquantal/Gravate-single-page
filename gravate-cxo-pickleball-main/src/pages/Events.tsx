import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, Trophy, Star, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'CXO Pickleball League',
      subtitle: 'India\'s First Ever CXO Sports League',
      date: '27 Sept 2025',
      venue: 'Taj Lands End, Mumbai',
      price: 'Call for enquiry',
      participants: '9+ Companies',
      status: 'Registration Open',
      featured: true,
      highlights: [
        'Olympic medallist Saina Nehwal appearance',
        'Premium networking with top CXOs',
        'Professional coaching sessions',
        'Gourmet dining experience'
      ]
    }
  ];

  const pastEvents = [
    {
      title: 'Corporate Tennis Championship',
      date: 'March 2024',
      venue: 'Delhi Lawn Tennis Club',
      participants: '15 Companies',
      status: 'Completed'
    },
    {
      title: 'Executive Golf Tournament',
      date: 'January 2024', 
      venue: 'DLF Golf Club, Gurgaon',
      participants: '20 Companies',
      status: 'Completed'
    },
    {
      title: 'Leadership Cricket League',
      date: 'November 2023',
      venue: 'MCA Club, Mumbai',
      participants: '12 Companies',
      status: 'Completed'
    }
  ];

  const eventTypes = [
    {
      icon: Trophy,
      title: 'Tournament Style',
      description: 'Competitive leagues with professional format and scoring'
    },
    {
      icon: Star,
      title: 'Celebrity Appearances',
      description: 'Sports legends and celebrities to inspire and engage'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Professional coaching and training sessions'
    },
    {
      icon: Zap,
      title: 'Networking Focus',
      description: 'Designed for meaningful business connections'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-hero text-white border-0">
              Our Events
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Exclusive</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Corporate Sports</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We create world-class sporting experiences that bring together India's most 
              influential business leaders. From competitive tournaments to networking events, 
              each experience is crafted to perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Upcoming <span className="bg-gradient-hero bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss out on these exclusive opportunities
            </p>
          </div>

          {upcomingEvents.map((event) => (
            <Card key={event.id} className={`mb-8 hover:shadow-hero transition-all duration-300 ${event.featured ? 'border-primary/30 shadow-card' : 'border-primary/10'}`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      {event.featured && (
                        <Badge className="bg-gradient-hero text-white border-0">
                          Featured Event
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground">{event.subtitle}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary w-fit">
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">{event.date}</p>
                      <p className="text-sm text-muted-foreground">Event Date</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-semibold">{event.venue}</p>
                      <p className="text-sm text-muted-foreground">Venue</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-semibold">{event.participants}</p>
                      <p className="text-sm text-muted-foreground">Participants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">{event.price}</p>
                      <p className="text-sm text-muted-foreground">Team Fee</p>
                    </div>
                  </div>
                </div>

                {event.highlights && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Event Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-hero" />
                          <p className="text-sm text-muted-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/cxo-league">
                    <Button variant="hero" size="lg">
                      View Details
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    <Clock className="mr-2 h-4 w-4" />
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Event <span className="bg-gradient-hero bg-clip-text text-transparent">Format</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              What makes our events unique and engaging
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Past <span className="bg-gradient-hero bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A track record of successful corporate sports experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-primary/10">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {event.status}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {event.venue}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.participants}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to Host Your Own Event?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let us create a custom corporate sports experience for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/cxo-league">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                Join Current Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;