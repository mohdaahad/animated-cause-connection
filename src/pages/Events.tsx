
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/events/EventCard';
import EventModal from '../components/events/EventModal';
import { upcomingEvents, pastEvents } from '../components/events/EventsData';

const Events = () => {
  const [showPast, setShowPast] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  useEffect(() => {
    // Set page title
    document.title = 'Events | HopeForward - Join Our Community';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our <span className="text-ngo-accent">Events</span></h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Join us at our upcoming events and be part of our mission to create positive change in our communities.
            </p>
          </section>
          
          {/* Featured Events */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-8">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents
                .filter(event => event.featured)
                .map(event => (
                  <EventCard 
                    key={event.id}
                    {...event} 
                    onViewDetails={setSelectedEvent}
                  />
                ))
              }
            </div>
          </section>
          
          {/* Event Tabs */}
          <section className="mb-16 animate-on-scroll">
            <div className="border-b border-border mb-8">
              <div className="flex space-x-8">
                <button
                  className={`pb-4 font-medium text-lg relative ${
                    !showPast 
                      ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-ngo-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setShowPast(false)}
                >
                  Upcoming Events
                </button>
                <button
                  className={`pb-4 font-medium text-lg relative ${
                    showPast 
                      ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-ngo-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setShowPast(true)}
                >
                  Past Events
                </button>
              </div>
            </div>
            
            {!showPast ? (
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map(event => (
                  <EventCard 
                    key={event.id}
                    {...event} 
                    onViewDetails={setSelectedEvent}
                  />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {pastEvents.map(event => (
                  <EventCard 
                    key={event.id}
                    {...event}
                    isPast={true}
                  />
                ))}
              </div>
            )}
          </section>
          
          {/* Call to Action */}
          <section className="animate-on-scroll bg-muted/50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join us at our events and be part of the movement to create positive change in our communities. 
              Whether you attend, volunteer, or sponsor, your participation makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/volunteer" className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium">
                Volunteer at Events
              </a>
              <a href="/contact" className="bg-white hover:bg-gray-50 text-ngo-accent border border-ngo-accent px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium">
                Sponsor an Event
              </a>
            </div>
          </section>
        </div>
      </main>
      
      {/* Event Details Modal */}
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
      
      <Footer />
    </div>
  );
};

export default Events;
