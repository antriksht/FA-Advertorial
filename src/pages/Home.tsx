import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBand from '../components/TrustBand';
import CostOfNoAdvice from '../components/CostOfNoAdvice';
import AdvisorValue from '../components/AdvisorValue';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Faqs from '../components/Faqs';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AdvertorialBanner from '../components/AdvertorialBanner';
import USMap from '../components/USMap';

const Home: React.FC = () => {
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const navigate = useNavigate();

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
    navigate('/find-advisor');
  };

  return (
    <div className="min-h-screen bg-white text-secondary-900">
      <AdvertorialBanner />
      <Header onFindAdvisorClick={handleFindAdvisorClick} />
      <main>
        <Hero onFindAdvisorClick={handleFindAdvisorClick} />
        <TrustBand />
        <CostOfNoAdvice />
        <AdvisorValue />
        <HowItWorks />
        <Testimonials />
        <CtaBanner onFindAdvisorClick={handleFindAdvisorClick} />
        <Faqs />        
      </main>
      <Footer />
      <ScrollToTop />

      {showFloatingCta && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white bg-opacity-95 shadow-lg border-t border-gray-200 md:hidden animate-fade-in z-50">
          <button
            onClick={handleFindAdvisorClick}
            className="cta-button w-full py-4 px-6 flex items-center justify-center"
          >
            Find My Financial Advisor
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
