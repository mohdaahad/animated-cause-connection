
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    // Set page title
    document.title = 'Donate | HopeForward - Make a Difference Today';
  }, []);

  const handleAmountChange = (amount: number | string) => {
    setDonationAmount(amount);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setDonationAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to a payment processor
    console.log('Processing donation:', {
      amount: donationAmount,
      isMonthly,
      name,
      email
    });
    alert(`Thank you for your ${isMonthly ? 'monthly' : 'one-time'} donation of $${donationAmount}!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <section className="mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Support Our <span className="text-ngo-accent">Mission</span></h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
              Your donation helps us continue our work in communities that need it most. 
              Every contribution, no matter the size, makes a meaningful difference.
            </p>
          </section>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <section className="animate-on-scroll">
              <div className="bg-card rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Make a Donation</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Donation Type</label>
                    <div className="flex p-1 bg-muted rounded-lg w-full mb-2">
                      <button
                        type="button"
                        className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                          !isMonthly 
                            ? 'bg-white shadow text-foreground' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setIsMonthly(false)}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                          isMonthly 
                            ? 'bg-white shadow text-foreground' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setIsMonthly(true)}
                      >
                        Monthly
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {isMonthly 
                        ? 'You can cancel your monthly donation at any time.' 
                        : 'One-time donations help us respond to immediate needs.'}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Select Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {[25, 50, 100].map(amount => (
                        <button
                          key={amount}
                          type="button"
                          className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                            donationAmount === amount
                              ? 'bg-ngo-accent text-white' 
                              : 'bg-muted hover:bg-muted/80 text-foreground'
                          }`}
                          onClick={() => handleAmountChange(amount)}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative mt-3">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <input
                        type="text"
                        value={donationAmount}
                        onChange={handleCustomAmount}
                        placeholder="Other amount"
                        className="w-full rounded-md border border-input bg-white px-8 py-2"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-md border border-input bg-white px-3 py-2"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-md border border-input bg-white px-3 py-2"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-ngo-accent hover:bg-ngo-accent-dark text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Donate ${donationAmount} {isMonthly && 'Monthly'}
                  </button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    All donations are secure and encrypted. Your information is protected.
                  </p>
                </form>
              </div>
            </section>
            
            <section className="animate-on-scroll space-y-8">
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                <ul className="space-y-4">
                  {[
                    { amount: 25, impact: "Provides school supplies for 5 children" },
                    { amount: 50, impact: "Supplies clean water to a family for a month" },
                    { amount: 100, impact: "Funds a week of medical outreach services" },
                    { amount: 250, impact: "Supports vocational training for one individual" },
                    { amount: 500, impact: "Helps establish a community microbusiness" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-ngo-accent/20 text-ngo-accent font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3 shrink-0">
                        ${item.amount}
                      </span>
                      <span>{item.impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Other Ways to Give</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="mr-3 bg-ngo-accent/10 p-2 rounded-full">📱</div>
                    <div>
                      <h4 className="font-medium">Corporate Matching</h4>
                      <p className="text-sm text-muted-foreground">
                        Double your impact through employer matching programs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 bg-ngo-accent/10 p-2 rounded-full">🏆</div>
                    <div>
                      <h4 className="font-medium">Host a Fundraiser</h4>
                      <p className="text-sm text-muted-foreground">
                        Create your own campaign for birthdays or special events
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 bg-ngo-accent/10 p-2 rounded-full">📄</div>
                    <div>
                      <h4 className="font-medium">Legacy Giving</h4>
                      <p className="text-sm text-muted-foreground">
                        Include HopeForward in your estate planning
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          
          <section className="animate-on-scroll">
            <div className="bg-muted/30 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Donation Transparency</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're committed to full transparency in how we use your donations. 
                Every dollar is carefully allocated to maximize impact.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                  { percent: "75%", label: "Program Services", color: "bg-ngo-accent" },
                  { percent: "15%", label: "Administration", color: "bg-amber-400" },
                  { percent: "10%", label: "Fundraising", color: "bg-blue-400" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full bg-muted rounded-full h-4 mb-2">
                      <div 
                        className={`${item.color} h-4 rounded-full`}
                        style={{ width: item.percent }}
                      ></div>
                    </div>
                    <p className="font-medium">{item.percent}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
