
import React from 'react';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image: string;
  isPast?: boolean;
  onViewDetails?: (event: any) => void;
}

// Format date to be more readable
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Calculate days remaining until event
const calculateDaysRemaining = (eventDate: string) => {
  const today = new Date();
  const date = new Date(eventDate);
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const EventCard: React.FC<EventCardProps> = ({ 
  id, 
  title, 
  date, 
  time, 
  location, 
  description, 
  image, 
  isPast = false,
  onViewDetails 
}) => {
  return (
    <div 
      key={id}
      className={`group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${isPast ? 'opacity-80 hover:opacity-100' : ''}`}
    >
      <div className="relative h-48 overflow-hidden">
        {isPast && <div className="absolute inset-0 bg-black/40 z-10"></div>}
        {!isPast && (
          <div className="absolute top-4 right-4 bg-ngo-accent text-white px-3 py-1 rounded-full text-sm font-medium z-20">
            {calculateDaysRemaining(date) > 0 
              ? `${calculateDaysRemaining(date)} days left` 
              : 'Today!'}
          </div>
        )}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {!isPast && onViewDetails && (
          <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => onViewDetails({id, title, date, time, location, description, image})}
              className="bg-white/90 hover:bg-white text-foreground font-medium py-2 px-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
            >
              View Details
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{formatDate(date)}</div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-ngo-accent transition-colors duration-200">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        {!isPast && onViewDetails && (
          <button 
            onClick={() => onViewDetails({id, title, date, time, location, description, image})}
            className="text-ngo-accent hover:text-ngo-accent-dark text-sm font-medium"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
