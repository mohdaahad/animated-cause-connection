
import { useState, useEffect, useRef } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
  aspectRatio?: string;
  priority?: boolean;
  animation?: 'fade' | 'scale' | 'slide' | 'none';
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  loadingClassName = 'bg-muted/50 animate-pulse',
  aspectRatio = 'aspect-video',
  priority = false,
  animation = 'fade',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
    }
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const getAnimationClass = () => {
    if (!isLoaded) return '';
    
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'scale':
        return 'animate-scale';
      case 'slide':
        return 'animate-slide-up';
      default:
        return '';
    }
  };

  return (
    <div className={`overflow-hidden relative ${aspectRatio} ${className}`}>
      {!isLoaded && (
        <div className={`absolute inset-0 ${loadingClassName}`} />
      )}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${getAnimationClass()} ${!isLoaded ? 'opacity-0' : ''}`}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default AnimatedImage;
