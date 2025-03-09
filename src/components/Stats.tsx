
import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';
import { Users, GraduationCap, Globe, HeartHandshake } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem: React.FC<StatProps> = ({ icon, count, label, suffix = '', delay = 0 }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl glass-card transition-transform duration-300 hover:scale-105">
      <div className="text-ngo-blue mb-3 animate-pulse-slow">
        {icon}
      </div>
      <AnimatedCounter
        end={count}
        suffix={suffix}
        className="text-3xl md:text-4xl mb-2 text-foreground"
        delay={delay}
      />
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const stats = [
    {
      icon: <Users size={36} strokeWidth={1.5} />,
      count: 57000,
      label: 'People Helped',
      suffix: '+',
      delay: 0,
    },
    {
      icon: <GraduationCap size={36} strokeWidth={1.5} />,
      count: 120,
      label: 'Schools Built',
      delay: 200,
    },
    {
      icon: <Globe size={36} strokeWidth={1.5} />,
      count: 36,
      label: 'Countries',
      delay: 400,
    },
    {
      icon: <HeartHandshake size={36} strokeWidth={1.5} />,
      count: 2500,
      label: 'Volunteers',
      suffix: '+',
      delay: 600,
    },
  ];

  return (
    <div ref={sectionRef} className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-display font-bold text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-gradient">Our Impact</span> Around the World
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
