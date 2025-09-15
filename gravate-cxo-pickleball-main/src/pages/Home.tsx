import HeroSection from '@/features/home/components/HeroSection';
import EventHighlights from '@/features/home/components/EventHighlights';
import ParticipantsSection from '@/features/home/components/ParticipantsSection';
import CTASection from '@/features/home/components/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EventHighlights />
      <ParticipantsSection />
      <CTASection />
    </div>
  );
};

export default Home;