
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedImage from '../components/AnimatedImage';

const About = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us | HopeForward - Our Mission & Vision';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 bg-gradient-to-b from-ngo-blue/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient">HopeForward</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our mission, vision, and the impact we're making around the world.
            </p>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <span className="inline-block py-1 px-3 bg-ngo-blue/10 text-ngo-blue rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Creating Meaningful Change Since 2008
              </h2>
              <p className="text-muted-foreground mb-6">
                HopeForward was founded with a simple yet powerful vision: to create a world where everyone has access to the resources, opportunities, and support they need to thrive. What began as a small initiative to provide clean water to rural communities has grown into a global organization operating in 36 countries.
              </p>
              <p className="text-muted-foreground mb-6">
                Our approach is built on the belief that sustainable change comes from within communities. We work alongside local leaders and organizations to develop solutions that address the unique challenges of each region we serve.
              </p>
              <p className="text-muted-foreground">
                Over the past 15 years, we've expanded our programs to include education, healthcare, emergency relief, and economic development initiatives, always guided by our core values of compassion, integrity, and innovation.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
                alt="HopeForward volunteers working in a community"
                className="rounded-2xl shadow-xl"
                animation="scale"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block py-1 px-3 bg-ngo-accent/10 text-ngo-accent rounded-full text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Guided by Purpose and Principle
              </h2>
              <p className="text-muted-foreground">
                These core values drive every decision we make and guide our work across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Compassion',
                  description: 'We approach our work with empathy and understanding, recognizing the dignity and worth of every individual.'
                },
                {
                  title: 'Integrity',
                  description: 'We hold ourselves to the highest ethical standards, ensuring transparency and accountability in all our operations.'
                },
                {
                  title: 'Innovation',
                  description: 'We continuously seek creative solutions to complex challenges, embracing new ideas and approaches.'
                }
              ].map((value, index) => (
                <div key={index} className="glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-display font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team Section (Placeholder) */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block py-1 px-3 bg-ngo-blue/10 text-ngo-blue rounded-full text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Dedicated to Making a Difference
              </h2>
              <p className="text-muted-foreground">
                Meet the passionate individuals leading our mission around the world.
              </p>
            </div>
            
            <div className="text-center py-12">
              <p className="text-muted-foreground italic">Team member profiles coming soon...</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
