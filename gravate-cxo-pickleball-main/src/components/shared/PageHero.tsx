import { Badge } from '@/components/ui/badge';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const PageHero = ({ badge, title, subtitle, description, className = "" }: PageHeroProps) => {
  return (
    <section className={`py-20 bg-gradient-card ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {badge && (
            <Badge className="mb-6 bg-gradient-hero text-white border-0">
              {badge}
            </Badge>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {subtitle ? (
              <>
                <span className="text-foreground">{subtitle}</span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">{title}</span>
              </>
            ) : (
              <span className="bg-gradient-hero bg-clip-text text-transparent">{title}</span>
            )}
          </h1>
          
          {description && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;