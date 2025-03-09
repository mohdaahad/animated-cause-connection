
import { useRef, useState, useEffect } from 'react';
import { useParallax } from '../hooks/useParallax';
import AnimatedImage from './AnimatedImage';
import { Sparkles, Heart, Globe } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={featureRef}
      className={`flex items-start p-6 transition-all duration-700 delay-${delay} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex-shrink-0 bg-ngo-blue/10 rounded-xl p-3 mr-4">
        <div className="text-ngo-blue w-6 h-6">{icon}</div>
      </div>
      <div>
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const imageParallax = useParallax({ speed: 0.2, direction: 'up' });
  const contentParallax = useParallax({ speed: 0.1, direction: 'down' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Sparkles strokeWidth={2} />,
      title: 'Sustainable Development',
      description: 'We implement projects that create lasting positive change and empower communities to thrive independently.',
      delay: 200,
    },
    {
      icon: <Heart strokeWidth={2} />,
      title: 'Compassionate Care',
      description: 'Our approach centers on dignity, respect, and understanding the unique needs of each community we serve.',
      delay: 400,
    },
    {
      icon: <Globe strokeWidth={2} />,
      title: 'Global Collaboration',
      description: 'We partner with local organizations and leaders to ensure our programs are culturally relevant and effectively implemented.',
      delay: 600,
    },
  ];

  return (
    <div id="mission-section" ref={sectionRef} className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column with Parallax */}
          <div 
            ref={imageParallax.ref}
            className={`order-2 lg:order-1 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={imageParallax.style}
          >
            <div className="relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?q=80&w=1000&auto=format&fit=crop"
                alt="Children in a classroom"
                className="rounded-2xl shadow-xl"
                animation="scale"
                aspectRatio="aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-ngo-accent text-white p-4 rounded-xl shadow-lg z-10">
                <p className="font-display font-bold text-2xl">15+</p>
                <p className="text-sm">Years of Impact</p>
              </div>
            </div>
          </div>
          
          {/* Content Column with Parallax */}
          <div 
            ref={contentParallax.ref}
            className="order-1 lg:order-2"
            style={contentParallax.style}
          >
            <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block py-1 px-3 bg-ngo-blue/10 text-ngo-blue rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
                Creating a <span className="text-gradient">Better World</span><br />Through Compassion
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                We're dedicated to addressing critical global challenges through sustainable development, education, healthcare, and emergency relief efforts that create lasting positive change in communities worldwide.
              </p>
            </div>
            
            <div className="space-y-2">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
