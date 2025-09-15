import { Link, useLocation } from 'react-router-dom';
import grv8Logo from '/lovable-uploads/767344d2-ad9c-4836-8a1a-b8d954e27d0e.png';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
  ];

  const isActive = (path: string) => location.pathname === path || (path === '/' && location.pathname === '/cxo-league');

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={grv8Logo} 
              alt="GRV8 Sports" 
              className="h-12 w-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden h-12 w-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G8</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;