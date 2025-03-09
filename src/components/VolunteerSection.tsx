
import { useState, useEffect, useRef } from 'react';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import AnimatedImage from './AnimatedImage';

interface VolunteerOpportunityProps {
  title: string;
  location: string;
  date: string;
  image: string;
  spots: number;
  delay: number;
}

const VolunteerOpportunity: React.FC<VolunteerOpportunityProps> = ({
  title,
  location,
  date,
  image,
  spots,
  delay,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card rounded-2xl overflow-hidden transition-all duration-700 delay-${delay} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <AnimatedImage
          src={image}
          alt={title}
          className={`w-full h-56 object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          animation="none"
        />
        <div className="absolute top-4 right-4 bg-ngo-accent text-white text-sm font-medium py-1 px-3 rounded-full">
          {spots} spots left
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
        
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        
        <button className={`flex items-center text-ngo-blue font-medium transition-all duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}>
          Apply Now
          <ArrowRight className={`w-4 h-4 ml-1 transition-all duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`} />
        </button>
      </div>
    </div>
  );
};

const VolunteerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const opportunities = [
    {
      title: 'Community Teaching Program',
      location: 'Nairobi, Kenya',
      date: 'Starting Jan 15, 2024',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=800&auto=format&fit=crop',
      spots: 5,
      delay: 100,
    },
    {
      title: 'Medical Outreach Initiative',
      location: 'Guadalajara, Mexico',
      date: 'Feb 10 - Mar 15, 2024',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
      spots: 3,
      delay: 200,
    },
    {
      title: 'Clean Water Project',
      location: 'Dhaka, Bangladesh',
      date: 'Ongoing - Flexible Dates',
      image: 'https://images.unsplash.com/photo-1594389723805-9cccf48bc513?q=80&w=800&auto=format&fit=crop',
      spots: 8,
      delay: 300,
    },
  ];

  return (
    <div ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`inline-block py-1 px-3 bg-ngo-blue/10 text-ngo-blue rounded-full text-sm font-medium mb-4 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get Involved
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Become a <span className="text-gradient">Volunteer</span> Today
          </h2>
          <p className={`text-lg text-muted-foreground transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Join our global community of volunteers making a tangible difference in the lives of others. We offer various opportunities to match your skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <VolunteerOpportunity key={index} {...opportunity} />
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 delay-400 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="/volunteer" className="inline-flex items-center bg-ngo-blue hover:bg-ngo-blue-dark text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            <Users className="w-5 h-5 mr-2" />
            View All Opportunities
          </a>
        </div>
      </div>
    </div>
  );
};

export default VolunteerSection;
