
import { useState, useRef, useEffect } from 'react';
import { Heart, DollarSign } from 'lucide-react';

const DonationSection = () => {
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isFormActive, setIsFormActive] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const predefinedAmounts = [25, 50, 100, 250];
  const goalAmount = 50000;
  const currentAmount = 32750;
  const progressPercentage = Math.min((currentAmount / goalAmount) * 100, 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && progressRef.current) {
      progressRef.current.style.width = `${progressPercentage}%`;
    }
  }, [isVisible, progressPercentage]);

  const handleDonationChange = (amount: number) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount(value === '' ? 0 : parseInt(value, 10));
    }
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormActive(true);
    
    // Simulate animation
    setTimeout(() => {
      setIsFormActive(false);
    }, 1500);

    // Here you would typically handle the donation process
    console.log(`Processing donation of $${donationAmount}`);
  };

  return (
    <div ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block py-1 px-3 bg-ngo-accent/10 text-ngo-accent rounded-full text-sm font-medium mb-4">
              Make a Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
              Your Donation <span className="text-gradient-accent">Changes</span> Lives
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your generosity can transform lives and communities. Every contribution, no matter the size, helps us provide education, healthcare, clean water, and emergency relief to those in need.
            </p>
            
            {/* Progress bar */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm">Fundraising Progress</span>
                <span className="text-sm font-medium">${currentAmount.toLocaleString()} of ${goalAmount.toLocaleString()}</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  ref={progressRef} 
                  className="h-full bg-gradient-to-r from-ngo-blue to-ngo-accent rounded-full transition-all duration-1500 ease-out" 
                  style={{ width: isVisible ? `${progressPercentage}%` : '0%' }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#donation-form" className="bg-ngo-accent hover:bg-ngo-accent-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </a>
              <a href="/programs" className="bg-white hover:bg-secondary text-foreground border border-muted px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Learn About Our Programs
              </a>
            </div>
          </div>
          
          {/* Donation Form */}
          <div 
            id="donation-form" 
            className={`glass-card p-8 rounded-2xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-ngo-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-ngo-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Donate Today</h3>
              <p className="text-muted-foreground">Choose an amount to donate</p>
            </div>
            
            <form onSubmit={handleDonate} className={`transition-all duration-300 ${isFormActive ? 'opacity-50' : 'opacity-100'}`}>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                      donationAmount === amount && customAmount === '' 
                        ? 'bg-ngo-accent text-white'
                        : 'bg-secondary hover:bg-secondary/80 text-foreground'
                    }`}
                    onClick={() => handleDonationChange(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              
              <div className="mb-6">
                <label htmlFor="custom-amount" className="block text-sm font-medium mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="text"
                    id="custom-amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-ngo-blue"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-ngo-accent hover:bg-ngo-accent-dark text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate ${donationAmount}
              </button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                All donations are tax deductible. You'll receive a receipt via email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
