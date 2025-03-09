
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set page title
    document.title = 'Contact Us | HopeForward - Get in Touch';
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 bg-gradient-to-b from-ngo-blue/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions or want to get involved? We're here to help.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-10">
                Whether you have a question about our programs, donations, volunteer opportunities, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-ngo-blue/10 p-3 rounded-xl mr-4">
                    <MapPin className="text-ngo-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Hope Street, New York, NY 10001, United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ngo-blue/10 p-3 rounded-xl mr-4">
                    <Mail className="text-ngo-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@hopeforward.org" className="hover:text-ngo-blue transition-colors">
                        info@hopeforward.org
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:support@hopeforward.org" className="hover:text-ngo-blue transition-colors">
                        support@hopeforward.org
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-ngo-blue/10 p-3 rounded-xl mr-4">
                    <Phone className="text-ngo-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+12345678900" className="hover:text-ngo-blue transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
                <p className="text-muted-foreground">
                  <span className="font-medium">Monday-Friday:</span> 9:00 AM - 5:00 PM (EST)
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Saturday-Sunday:</span> Closed
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-ngo-accent hover:bg-ngo-accent-dark text-white" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-20">
            <div className="overflow-hidden rounded-2xl h-[400px] bg-muted">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-muted-foreground italic">Interactive map coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
