import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBand from './components/TrustBand';
import CostOfNoAdvice from './components/CostOfNoAdvice';
import AdvisorValue from './components/AdvisorValue';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import AdvisorForm from './components/AdvisorForm/AdvisorForm';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.5;
      
      if (scrollPosition > triggerPosition) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFindAdvisorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formSection = document.getElementById('advisor-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
      setFormVisible(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-secondary-900">
      <Header onFindAdvisorClick={handleFindAdvisorClick} />
      <main>
        <Hero onFindAdvisorClick={handleFindAdvisorClick} />
        <TrustBand />
        <CostOfNoAdvice />
        <AdvisorValue />
        <HowItWorks />
        <div id="advisor-form" className="scroll-mt-20">
          <AdvisorForm visible={formVisible} />
        </div>
        <Testimonials />
        <CtaBanner onFindAdvisorClick={handleFindAdvisorClick} />
        <Faqs />
      </main>
      <Footer />
      <ScrollToTop />
      
      {/* Floating CTA for mobile */}
      {showFloatingCta && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white bg-opacity-95 shadow-lg border-t border-gray-200 md:hidden animate-fade-in z-50">
          <button 
            onClick={handleFindAdvisorClick}
            className="w-full py-4 px-6 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition duration-300 shadow-md flex items-center justify-center"
          >
            Find My Financial Advisor
          </button>
        </div>
      )}
    </div>
  );
}

export default App;