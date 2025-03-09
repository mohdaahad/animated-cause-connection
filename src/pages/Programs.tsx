
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Our Programs | HopeForward - Making a Difference';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our <span className="text-ngo-accent">Programs</span></h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Discover how we're making a real difference in communities through our various initiatives and programs.
            </p>
          </section>
          
          <section className="mb-16 animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Education For All</h2>
                <p className="mb-4">
                  Our flagship education program provides access to quality education for children in underserved communities. We believe education is the cornerstone of community development and personal growth.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Scholarship programs for talented students</li>
                  <li>After-school learning centers in 12 communities</li>
                  <li>Teacher training and professional development</li>
                  <li>Digital literacy programs for children and adults</li>
                </ul>
                <p className="font-medium">
                  Impact: Over 5,000 children reached annually through educational initiatives.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2422&q=80" 
                  alt="Children in a classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                  alt="Healthcare workers with patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">Community Health Initiative</h2>
                <p className="mb-4">
                  Our Community Health Initiative works to improve access to essential healthcare services and promote preventive care in underserved areas.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Mobile health clinics serving remote communities</li>
                  <li>Free health screenings and vaccinations</li>
                  <li>Maternal and child health programs</li>
                  <li>Health education and disease prevention</li>
                </ul>
                <p className="font-medium">
                  Impact: Provided essential healthcare services to over 10,000 individuals last year.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Economic Empowerment</h2>
                <p className="mb-4">
                  Our Economic Empowerment program aims to create sustainable livelihoods and financial independence for families through skills training, microfinance, and entrepreneurship support.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>Vocational training and skills development</li>
                  <li>Microloans for small business startups</li>
                  <li>Women's economic empowerment initiatives</li>
                  <li>Financial literacy and business management training</li>
                </ul>
                <p className="font-medium">
                  Impact: Helped establish over 500 small businesses and created 1,200+ jobs in local communities.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                  alt="Small business owner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-8 text-center">Program Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Clean Water Initiative",
                  description: "Providing access to clean, safe drinking water through community-based water systems and sanitation education.",
                  icon: "💧",
                  impact: "20 communities now have access to clean water"
                },
                {
                  title: "Youth Leadership Academy",
                  description: "Developing the next generation of community leaders through mentorship, skills training, and service projects.",
                  icon: "⭐",
                  impact: "300+ youth trained in leadership skills"
                },
                {
                  title: "Emergency Relief",
                  description: "Responding rapidly to natural disasters and humanitarian crises with essential supplies and support services.",
                  icon: "🚑",
                  impact: "Assisted 5,000+ individuals during crises"
                }
              ].map((program, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <p className="text-sm font-medium text-ngo-accent">{program.impact}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="animate-on-scroll bg-muted/50 p-8 rounded-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Get Involved</h2>
              <p className="text-muted-foreground">Join us in our mission to create positive change</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <h3 className="text-xl font-semibold mb-3">Volunteer With Us</h3>
                <p className="mb-4 text-muted-foreground">Contribute your time and skills to make a real difference in our programs.</p>
                <a href="/volunteer" className="inline-block bg-ngo-accent hover:bg-ngo-accent-dark text-white px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium">
                  Become a Volunteer
                </a>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <h3 className="text-xl font-semibold mb-3">Support Our Work</h3>
                <p className="mb-4 text-muted-foreground">Your donation helps sustain and expand our programs to reach more communities.</p>
                <a href="/donate" className="inline-block bg-ngo-accent hover:bg-ngo-accent-dark text-white px-5 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium">
                  Donate Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
