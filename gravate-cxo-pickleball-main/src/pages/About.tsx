import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Users, Zap, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We deliver world-class sporting experiences that exceed expectations'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building connections between leaders through the power of sports'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering new formats and experiences in corporate sports'
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Bringing dynamic energy and passion to every event we organize'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Corporate Events' },
    { number: '1000+', label: 'Executives Engaged' },
    { number: '25+', label: 'Fortune 500 Companies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-hero text-white border-0">
              About Gravate Sports
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Where Sports Meet</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Influence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We at Gravate Sports (GRV8) are pioneers in creating exclusive sporting experiences 
              that bring together India's most influential business leaders. Our mission is to 
              foster connections, build communities, and create unforgettable moments through 
              the power of sports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="hero" size="lg">
                  <Trophy className="mr-2 h-5 w-5" />
                  View Our Events
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-hero bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gravate Sports was born from a simple yet powerful idea: that the best business 
                connections are made not in boardrooms, but on playing fields. We recognized 
                that sports have a unique ability to break down barriers, build trust, and 
                create lasting relationships.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Starting with our vision of India's first-ever CXO Pickleball League, we've 
                set out to revolutionize how business leaders connect, compete, and collaborate. 
                Our events are more than tournaments – they're celebrations of leadership, 
                sportsmanship, and community.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're proud to be the trusted partner for India's most prestigious 
                companies, creating experiences that combine the thrill of competition with 
                the value of meaningful networking.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-primary/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="bg-gradient-hero bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Sets Us <span className="bg-gradient-hero bg-clip-text text-transparent">Apart</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Globe className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Venues</h3>
                <p className="text-muted-foreground">
                  We partner with India's most prestigious venues to provide world-class 
                  experiences for our participants.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Award className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Celebrity Appearances</h3>
                <p className="text-muted-foreground">
                  We bring sports legends and celebrities to add star power and inspiration 
                  to our events.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-card transition-all duration-300 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Users className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Curated Networking</h3>
                <p className="text-muted-foreground">
                  Every event is designed to facilitate meaningful connections between 
                  like-minded business leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of India's most exclusive corporate sports community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cxo-league">
              <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                Join CXO League
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;