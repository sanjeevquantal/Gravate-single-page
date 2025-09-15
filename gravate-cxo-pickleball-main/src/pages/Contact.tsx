import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to message form if hash is present
    if (window.location.hash === '#message-form') {
      setTimeout(() => {
        const element = document.getElementById('message-form');
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100; // Offset to show form header nicely
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'grv8sports@gmail.com',
      description: 'For event inquiries and registrations'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 9818223112',
      description: 'Speak directly with our team'
    },
    {
      icon: MapPin,
      title: 'Events Location',
      content: 'Mumbai, Delhi, Bangalore',
      description: 'Premium venues across India'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'We respond to all inquiries promptly'
    }
  ];

  const services = [
    {
      icon: Calendar,
      title: 'Event Organization',
      description: 'Complete event management from concept to execution'
    },
    {
      icon: Users,
      title: 'Corporate Partnerships',
      description: 'Strategic partnerships for ongoing sporting initiatives'
    },
    {
      icon: MessageSquare,
      title: 'Custom Experiences',
      description: 'Tailored sporting experiences for your organization'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-hero text-white border-0">
              Get In Touch
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Let's Create</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Something Amazing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to bring your corporate sporting vision to life? Whether you want to join our 
              CXO Pickleball League or create a custom experience for your organization, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-primary/10">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero group-hover:animate-glow">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-primary mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card id="message-form" className="shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company Name" 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 9876543210" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="CXO League Registration / Custom Event Inquiry" 
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, team size, preferred dates, or any specific needs..."
                      rows={4}
                      required 
                      className="mt-1"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Services & Quick Contact */}
            <div className="space-y-8">
              {/* Services */}
              <Card className="shadow-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Services</CardTitle>
                  <p className="text-muted-foreground">
                    How we can help your organization
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center">
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-card border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Contact</CardTitle>
                  <p className="text-muted-foreground">
                    Need immediate assistance?
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gradient-hero/10 rounded-lg">
                    <h3 className="font-semibold mb-2">CXO Pickleball League</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For registration and event details
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button variant="premium" size="sm" className="justify-start">
                        <Mail className="mr-2 h-4 w-4" />
                        grv8sports@gmail.com
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        <Phone className="mr-2 h-4 w-4" />
                        +91 9818223112
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <h3 className="font-semibold mb-2">Custom Events</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      For corporate event planning
                    </p>
                    <p className="text-sm">
                      Use the contact form or email us directly for custom requirements 
                      and we'll provide a tailored proposal within 48 hours.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="bg-gradient-hero bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I register for the CXO Pickleball League?</h3>
                <p className="text-muted-foreground">
                  Simply email us at grv8sports@gmail.com or call +91 9818223112. We'll guide you through 
                  the registration process and provide all necessary details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can you organize custom events for our company?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We specialize in creating custom corporate sporting experiences. Contact us 
                  with your requirements, and we'll design a perfect event for your organization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What's included in the CXO League participation fee?</h3>
                <p className="text-muted-foreground">
                  The ₹1.25 lakhs covers the entire month-long plan for a team of 3 players, including 
                  training, matches, meals, networking events, and all premium amenities.
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
            Let's Start the Conversation
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're excited to hear from you and discuss how we can create an amazing sporting experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" className="text-lg px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white/30 text-white hover:bg-white/10">
              <MessageSquare className="mr-2 h-5 w-5" />
              Start Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;