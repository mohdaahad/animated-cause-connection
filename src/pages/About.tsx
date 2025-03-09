
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us | HopeForward - Our Mission and Vision';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About <span className="text-ngo-accent">HopeForward</span></h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              We are dedicated to creating lasting change through compassionate action and community empowerment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  Founded in 2010, HopeForward began as a small group of volunteers committed to addressing immediate needs in underserved communities. What started as local food drives and educational support programs has grown into a comprehensive organization tackling systemic issues of poverty, education inequality, and healthcare access.
                </p>
                <p>
                  Over the years, we've expanded our reach to work with communities across the country, always staying true to our founding principles of dignity, respect, and sustainable solutions that empower rather than create dependency.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                  alt="Team of volunteers working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" 
                  alt="Our mission in action" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  At HopeForward, our mission is to break the cycle of poverty through sustainable development, education, and community engagement. We believe that lasting change comes from within communities when they are equipped with the right resources and support.
                </p>
                <p>
                  We work alongside community leaders to identify needs, build capacity, and implement programs that address immediate challenges while developing long-term solutions that enable self-sufficiency and prosperity.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-16 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Dignity & Respect",
                  description: "We recognize the inherent worth of every individual and treat all people with respect, regardless of their circumstances."
                },
                {
                  title: "Community Leadership",
                  description: "We believe that sustainable solutions must be community-driven and locally led."
                },
                {
                  title: "Transparency & Accountability",
                  description: "We are committed to ethical practices, open communication, and responsible stewardship of resources."
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Executive Director",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                },
                {
                  name: "Michael Chen",
                  role: "Programs Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                },
                {
                  name: "Amara Rodriguez",
                  role: "Community Outreach",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                },
                {
                  name: "David Okafor",
                  role: "Finance Manager",
                  image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="text-center"
                >
                  <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4 shadow-md transform hover:scale-105 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
