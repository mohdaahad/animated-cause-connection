
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock data for volunteer opportunities
const volunteerOpportunities = [
  {
    id: 1,
    title: "Education Mentor",
    commitment: "2-4 hours/week",
    location: "Various Community Centers",
    description: "Work with children to improve reading skills, assist with homework, and provide encouragement and support for academic success.",
    skills: ["Teaching", "Patience", "Communication"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: 2,
    title: "Food Distribution Assistant",
    commitment: "3-6 hours/week",
    location: "Food Bank Warehouse",
    description: "Help sort, package, and distribute food to families in need. Tasks include inventory management, packing food boxes, and assisting with drive-through distribution.",
    skills: ["Organization", "Physical Stamina", "Teamwork"],
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: 3,
    title: "Healthcare Support Volunteer",
    commitment: "4-8 hours/week",
    location: "Mobile Health Clinics",
    description: "Assist healthcare professionals at mobile clinics by managing patient flow, helping with paperwork, and providing logistical support for medical services.",
    skills: ["Empathy", "Organization", "Healthcare Experience (a plus)"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80"
  },
  {
    id: 4,
    title: "Community Garden Coordinator",
    commitment: "5-10 hours/week",
    location: "Neighborhood Gardens",
    description: "Help maintain community gardens that provide fresh produce for local families. Responsibilities include planting, watering, organizing volunteers, and coordinating harvests.",
    skills: ["Gardening", "Leadership", "Planning"],
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80"
  },
  {
    id: 5,
    title: "Marketing & Social Media Volunteer",
    commitment: "3-6 hours/week (remote possible)",
    location: "Main Office & Remote",
    description: "Use your creative skills to help promote our programs, design graphics, write content, and manage social media to increase community awareness and engagement.",
    skills: ["Digital Marketing", "Graphic Design", "Writing"],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 6,
    title: "Event Support Staff",
    commitment: "As needed (4-6 hours per event)",
    location: "Various Locations",
    description: "Help set up, run, and clean up at fundraising events, awareness campaigns, and community gatherings. Perfect for those who can't commit to a regular schedule.",
    skills: ["Flexibility", "Customer Service", "Energy"],
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  }
];

// Mock data for volunteer testimonials
const testimonials = [
  {
    id: 1,
    quote: "Volunteering with HopeForward has been one of the most rewarding experiences of my life. I've developed new skills while making a real difference in my community.",
    name: "James Wilson",
    role: "Education Mentor since 2020",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
  },
  {
    id: 2,
    quote: "After retiring, I wanted to give back to my community. The food distribution program has given me purpose and connection to wonderful people who need support.",
    name: "Maria Gonzalez",
    role: "Food Distribution Volunteer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80"
  },
  {
    id: 3,
    quote: "As a marketing professional, I wanted to use my skills for good. HopeForward welcomed my expertise and I've been able to help increase their reach significantly.",
    name: "Alex Chen",
    role: "Marketing Volunteer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
  }
];

const Volunteer = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<typeof volunteerOpportunities[0] | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    availability: '',
    message: ''
  });
  
  useEffect(() => {
    // Set page title
    document.title = 'Volunteer | HopeForward - Make a Difference';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest in volunteering! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      experience: '',
      availability: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Volunteer With <span className="text-ngo-accent">Us</span></h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Join our community of dedicated volunteers who are making a real difference. 
              Your time and talents can help create lasting change in the lives of those we serve.
            </p>
          </section>
          
          {/* Why Volunteer Section */}
          <section className="mb-16 animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Volunteer With Us?</h2>
                <p className="mb-4">
                  Volunteering with HopeForward is a rewarding experience that allows you to make a meaningful impact in your community. Our volunteers are the heart of our organization, bringing energy, skills, and compassion to our programs.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Make a Real Difference",
                      description: "Your time directly helps those in need and creates positive change."
                    },
                    {
                      title: "Develop New Skills",
                      description: "Gain valuable experience and enhance your personal and professional skills."
                    },
                    {
                      title: "Build Community",
                      description: "Connect with like-minded individuals who share your passion for service."
                    },
                    {
                      title: "Flexible Opportunities",
                      description: "Find the right fit for your schedule, skills, and interests."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 text-ngo-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                  alt="Volunteers working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Volunteer Opportunities */}
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-8 text-center">Current Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {volunteerOpportunities.map(opportunity => (
                <div 
                  key={opportunity.id} 
                  className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={opportunity.image} 
                      alt={opportunity.title} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <span className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {opportunity.commitment}
                      </span>
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {opportunity.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{opportunity.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {opportunity.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-muted px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-5 mt-auto">
                    <button
                      onClick={() => setSelectedOpportunity(opportunity)}
                      className="w-full bg-ngo-accent/90 hover:bg-ngo-accent text-white py-2 rounded-md transition-colors duration-200"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="mb-16 animate-on-scroll bg-muted/30 py-12 px-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Volunteer Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map(testimonial => (
                <div 
                  key={testimonial.id}
                  className="bg-card p-6 rounded-lg shadow-md relative"
                >
                  <div className="mb-8">
                    <svg className="h-8 w-8 text-muted-foreground/40 absolute top-6 left-6" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.796 5.204c-1.142 0-2.152.198-3.032.594-.88.396-1.612.946-2.196 1.652-.584.704-1.026 1.54-1.326 2.508-.3.968-.452 2.022-.452 3.162 0 1.936.462 3.91 1.386 5.922.924 2.012 2.496 3.666 4.716 4.962-1.056-.968-1.87-2.024-2.442-3.168-.572-1.144-.858-2.448-.858-3.916 0-.616.066-1.17.198-1.66.132-.488.33-.924.594-1.308h3.696c.792 0 1.386-.198 1.782-.594.396-.396.594-.99.594-1.782v-3.96c0-.792-.198-1.386-.594-1.782-.396-.396-.99-.594-1.782-.594h-.284zm13.2 0c-1.144 0-2.154.198-3.036.594-.88.396-1.61.946-2.194 1.652-.584.704-1.026 1.54-1.326 2.508-.3.968-.452 2.022-.452 3.162 0 1.936.462 3.91 1.386 5.922.924 2.012 2.496 3.666 4.716 4.962-1.056-.968-1.872-2.024-2.442-3.168-.572-1.144-.858-2.448-.858-3.916 0-.616.066-1.17.198-1.66.132-.488.33-.924.594-1.308h3.696c.792 0 1.386-.198 1.782-.594.396-.396.594-.99.594-1.782v-3.96c0-.792-.198-1.386-.594-1.782-.396-.396-.99-.594-1.782-.594h-.282z" />
                    </svg>
                    <p className="text-muted-foreground italic relative z-10">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full overflow-hidden h-12 w-12 mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Volunteer Form */}
          <section className="animate-on-scroll" id="volunteer-form">
            <div className="bg-card shadow-lg rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-ngo-accent text-white p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="mb-6">
                    Fill out the form to express your interest in volunteering with us. 
                    Our volunteer coordinator will reach out to discuss opportunities 
                    that match your skills and availability.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>volunteer@hopeforward.org</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(555) 123-4567</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">Volunteer Application</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-white px-3 py-2"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-white px-3 py-2"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-white px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="interest">Area of Interest</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-white px-3 py-2"
                          required
                        >
                          <option value="">Select an option</option>
                          {volunteerOpportunities.map(op => (
                            <option key={op.id} value={op.title}>{op.title}</option>
                          ))}
                          <option value="Other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="experience">Previous Volunteer Experience</label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-white px-3 py-2"
                        >
                          <option value="">Select an option</option>
                          <option value="None">None</option>
                          <option value="Some">Some (1-2 years)</option>
                          <option value="Experienced">Experienced (3+ years)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="availability">Availability</label>
                        <select
                          id="availability"
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          className="w-full rounded-md border border-input bg-white px-3 py-2"
                          required
                        >
                          <option value="">Select an option</option>
                          <option value="Weekdays">Weekdays</option>
                          <option value="Weekends">Weekends</option>
                          <option value="Evenings">Evenings</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1" htmlFor="message">Why are you interested in volunteering?</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full rounded-md border border-input bg-white px-3 py-2"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-ngo-accent hover:bg-ngo-accent-dark text-white font-medium py-3 px-4 rounded-lg transition-all duration-200"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      {/* Opportunity Details Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative h-64">
              <button 
                onClick={() => setSelectedOpportunity(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedOpportunity.image} 
                alt={selectedOpportunity.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedOpportunity.title}</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedOpportunity.commitment}
                </div>
                <div className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-ngo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedOpportunity.location}
                </div>
              </div>
              
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="mb-4">{selectedOpportunity.description}</p>
              
              <h3 className="font-semibold mb-2">Skills & Qualifications</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedOpportunity.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-sm bg-muted/80 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg mb-6">
                <h3 className="font-semibold mb-2">Requirements</h3>
                <ul className="text-sm space-y-1">
                  <li>• Must be 18 years or older</li>
                  <li>• Complete a background check (for positions working with vulnerable populations)</li>
                  <li>• Attend an orientation session</li>
                  <li>• Commit to the time requirements listed</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#volunteer-form"
                  onClick={() => {
                    setSelectedOpportunity(null);
                    setFormData(prev => ({
                      ...prev,
                      interest: selectedOpportunity.title
                    }));
                    setTimeout(() => {
                      document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium flex-1 text-center"
                >
                  Apply Now
                </a>
                <button 
                  onClick={() => setSelectedOpportunity(null)}
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

export default Volunteer;
