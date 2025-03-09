
import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Donate', path: '/donate' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 glass shadow-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <div className="relative">
              <Heart 
                className={`w-6 h-6 ${isScrolled ? 'text-ngo-accent' : 'text-white'} transition-all duration-300 group-hover:scale-110`} 
                strokeWidth={2.5} 
                fill="currentColor"
              />
              <div className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            </div>
            <span 
              className={`font-display font-bold text-xl md:text-2xl transition-all duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Hope
              <span className="text-ngo-accent">Forward</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-all duration-200 hover:text-ngo-accent ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/donate"
              className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ngo-accent rounded-md p-2 transform active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-2xl font-medium hover:text-ngo-accent transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/donate"
            className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium mt-4 text-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
