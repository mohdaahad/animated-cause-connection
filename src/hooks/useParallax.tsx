
import { useState, useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  startOffset?: number;
  easing?: string;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    startOffset = 0,
    easing = 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || !isInView) return;
      
      const elementTop = ref.current.getBoundingClientRect().top;
      const elementHeight = ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport (as a percentage)
      const centerOffset = (elementTop + elementHeight / 2 - windowHeight / 2) / windowHeight;
      
      // Scale the offset by speed
      setOffset(centerOffset * speed * 100 + startOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, startOffset, isInView]);

  const transform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  const style = {
    transform: transform(),
    transition: `transform 0.1s ${easing}`,
    willChange: 'transform',
  };

  return { ref, style, isInView };
};
