import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ParticipantsSection = () => {
  const companies = [
    'Premier League', 'ICICI', 'HDFC ERGO', 'BARCLAYS', 'HITACHI', 
    'WNS', 'DSK Legal', 'Tata Digital', 'Adani Airport'
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Confirmed <span className="bg-gradient-hero bg-clip-text text-transparent">Participants</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join fellow CXOs and MDs from India's leading companies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {companies.map((company, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              {company}
            </Badge>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            And many more industry leaders joining us
          </p>
          <Link to="/cxo-league">
            <Button variant="premium" size="lg">
              View Full Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;