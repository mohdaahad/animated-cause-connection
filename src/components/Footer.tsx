
import { Heart, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    
    // Reset the subscription state after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Programs', path: '/programs' },
    { name: 'Get Involved', path: '/volunteer' },
    { name: 'Donate', path: '/donate' },
    { name: 'Events', path: '/events' },
    { name: 'News & Stories', path: '/about' },
  ];

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ];

  return (
    <footer className="bg-secondary/30 pt-20 pb-10 relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-ngo-accent hover:bg-ngo-accent-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
      
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Organization Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Heart className="w-6 h-6 text-ngo-accent" strokeWidth={2.5} fill="currentColor" />
              <span className="font-display font-bold text-2xl">
                Hope<span className="text-ngo-accent">Forward</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Creating positive change through sustainable development, education, healthcare, and emergency relief efforts worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-ngo-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-muted-foreground hover:text-ngo-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-ngo-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-ngo-blue transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-muted-foreground hover:text-ngo-blue transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-ngo-blue flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Hope Street, New York, NY 10001, United States
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-ngo-blue flex-shrink-0" />
                <a href="tel:+12345678900" className="text-muted-foreground hover:text-ngo-blue transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-ngo-blue flex-shrink-0" />
                <a href="mailto:info@hopeforward.org" className="text-muted-foreground hover:text-ngo-blue transition-colors">
                  info@hopeforward.org
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive updates on our projects and impact.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 pr-12 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-ngo-blue"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-ngo-blue text-white p-1.5 rounded-md"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <Heart className="w-5 h-5 animate-pulse" fill="currentColor" />
                ) : (
                  <ArrowUp className="w-5 h-5 rotate-45" />
                )}
              </button>
            </form>
            {isSubscribed && (
              <p className="text-ngo-blue text-sm mt-2 animate-fade-in">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HopeForward. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {policyLinks.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className="text-sm text-muted-foreground hover:text-ngo-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
