import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface CTAButton {
  text: string;
  href?: string;
  variant?: 'glass' | 'outline' | 'hero' | 'premium';
  icon?: ReactNode;
  onClick?: () => void;
}

interface SectionCTAProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  className?: string;
}

const SectionCTA = ({ title, description, buttons, className = "" }: SectionCTAProps) => {
  return (
    <section className={`py-20 bg-gradient-hero relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttons.map((button, index) => {
            const ButtonComponent = (
              <Button 
                variant={button.variant || 'glass'} 
                size="lg" 
                className="text-lg px-8 py-3"
                onClick={button.onClick}
              >
                {button.icon && <span className="mr-2">{button.icon}</span>}
                {button.text}
              </Button>
            );

            if (button.href) {
              return (
                <Link key={index} to={button.href}>
                  {ButtonComponent}
                </Link>
              );
            }

            return <div key={index}>{ButtonComponent}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;