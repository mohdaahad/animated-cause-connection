
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock data for events
const upcomingEvents = [
  {
    id: 1,
    title: "Annual Charity Gala",
    date: "2023-12-15",
    time: "7:00 PM - 10:00 PM",
    location: "Grand Hotel, Downtown",
    description: "Join us for an evening of celebration and fundraising as we highlight our achievements and raise funds for our upcoming initiatives.",
    image: "https://images.unsplash.com/photo-1511795409834-c3e0da7861ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Community Clean-up Drive",
    date: "2023-11-18",
    time: "9:00 AM - 12:00 PM",
    location: "Riverside Park",
    description: "Join our volunteers in cleaning up the riverside park area. All cleaning supplies will be provided. Please wear comfortable clothing.",
    image: "https://images.unsplash.com/photo-1560780552-ba54683cb263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Education Workshop",
    date: "2023-11-25",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center",
    description: "A workshop for parents and educators focusing on supporting children's education in low-resource environments.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Health and Wellness Fair",
    date: "2023-12-02",
    time: "10:00 AM - 3:00 PM",
    location: "City Park Pavilion",
    description: "Free health screenings, fitness demonstrations, nutrition advice, and more at our annual wellness fair.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Youth Leadership Summit",
    date: "2023-12-09",
    time: "9:00 AM - 5:00 PM",
    location: "Lincoln High School",
    description: "A day-long summit for high school students interested in developing leadership skills and community engagement.",
    image: "https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    featured: false
  }
];

// Mock data for past events
const pastEvents = [
  {
    id: 101,
    title: "Fundraising Concert",
    date: "2023-10-20",
    location: "Central Park Amphitheater",
    description: "An evening of music and community support that raised over $50,000 for our educational programs.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: 102,
    title: "Back to School Drive",
    date: "2023-09-15",
    location: "Multiple City Locations",
    description: "Distributed school supplies and backpacks to over 1,000 children in need.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2422&q=80"
  },
  {
    id: 103,
    title: "Volunteer Appreciation Dinner",
    date: "2023-08-28",
    location: "Harbor Restaurant",
    description: "Recognized and celebrated our dedicated volunteers who contribute their time and skills to our mission.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80"
  }
];

const Events = () => {
  const [showPast, setShowPast] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);
  
  useEffect(() => {
    // Set page title
    document.title = 'Events | HopeForward - Join Our Community';
  }, []);

  // Calculate days remaining until event
  const calculateDaysRemaining = (eventDate: string) => {
    const today = new Date();
    const date = new Date(eventDate);
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
              {upcomingEvents.filter(event => event.featured).map(event => (
                <div 
                  key={event.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="bg-white/90 hover:bg-white text-foreground font-medium py-2 px-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
                      >
                        View Details
                      </button>
                    </div>
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-ngo-accent text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                      {calculateDaysRemaining(event.date) > 0 
                        ? `${calculateDaysRemaining(event.date)} days left` 
                        : 'Today!'}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{formatDate(event.date)} • {event.time}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ngo-accent transition-colors duration-200">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}
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
                  <div 
                    key={event.id}
                    className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{formatDate(event.date)}</div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-ngo-accent transition-colors duration-200">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>
                      <button 
                        onClick={() => setSelectedEvent(event)}
                        className="text-ngo-accent hover:text-ngo-accent-dark text-sm font-medium"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {pastEvents.map(event => (
                  <div 
                    key={event.id}
                    className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 z-10"></div>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{formatDate(event.date)}</div>
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{event.location}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                    </div>
                  </div>
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
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative h-64 sm:h-80">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(selectedEvent.date)}
                </div>
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedEvent.time}
                </div>
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedEvent.location}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{selectedEvent.description}</p>
              
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
                  onClick={() => setSelectedEvent(null)}
                  className="bg-muted hover:bg-muted/80 text-foreground px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Events;
