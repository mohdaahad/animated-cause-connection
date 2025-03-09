
import React from 'react';

interface EventModalProps {
  event: {
    id: number;
    title: string;
    date: string;
    time?: string;
    location: string;
    description: string;
    image: string;
  } | null;
  onClose: () => void;
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

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative h-64 sm:h-80">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(event.date)}
            </div>
            {event.time && (
              <div className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {event.time}
              </div>
            )}
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>
          </div>
          <p className="text-muted-foreground mb-6">{event.description}</p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What to Bring</h3>
              <ul className="text-sm space-y-1">
                <li>• Personal identification</li>
                <li>• Comfortable clothing</li>
                <li>• Water bottle</li>
              </ul>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Contact</h3>
              <p className="text-sm">For more information about this event, please contact us at <span className="text-ngo-accent">events@hopeforward.org</span> or call us at <span className="text-ngo-accent">(555) 123-4567</span>.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium flex-1">
              Register Now
            </button>
            <button 
              onClick={onClose}
              className="bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-lg transition-all duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
