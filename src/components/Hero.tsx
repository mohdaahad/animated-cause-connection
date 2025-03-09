
import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const backgroundParallax = useParallax({ speed: 0.3, direction: 'up' });
  const textParallax = useParallax({ speed: 0.5, direction: 'up' });

  // Reveal animation on mount
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Scroll to content function
  const scrollToContent = () => {
    const element = document.getElementById('mission-section');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        ref={backgroundParallax.ref}
        className="absolute inset-0 z-0"
        style={backgroundParallax.style}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1920&auto=format&fit=crop')", 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background"></div>
      </div>
      
      {/* Hero Content */}
      <div 
        ref={textParallax.ref}
        className="container mx-auto px-4 z-10 text-center py-20"
        style={textParallax.style}
      >
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block py-1.5 px-4 bg-ngo-accent/90 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 animate-fade-in">
            Making a difference together
          </span>
        </div>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight transition-all duration-1000 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block">Empowering Communities,</span>
          <span className="block mt-2">Changing Lives</span>
        </h1>
        
        <p className={`text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Join our global movement to create meaningful change in communities around the world through sustainable development, education, and healthcare initiatives.
        </p>
        
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/donate" 
            className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-8 py-3.5 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Donate Now
          </Link>
          <Link 
            to="/volunteer" 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-lg font-medium text-lg transition-all duration-300"
          >
            Volunteer
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={scrollToContent}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2">Discover More</span>
          <ArrowDown className="text-white/80 w-5 h-5 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
