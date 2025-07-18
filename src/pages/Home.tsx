import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TrustBand from '../components/TrustBand';
import CostOfNoAdvice from '../components/CostOfNoAdvice';
import AdvisorValue from '../components/AdvisorValue';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Faqs from '../components/Faqs';
import ZipCodeBar from '../components/ZipCodeBar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const getForwardingParams = () => {
    const params = new URLSearchParams(window.location.search);
    const forwardingParams: { [key: string]: string } = {};
    params.forEach((value, key) => {
      if (key.startsWith('utm_') || key === 'gclid' || key === 'msclkid') {
        forwardingParams[key] = value;
      }
    });
    return new URLSearchParams(forwardingParams).toString();
  };

  const handleFindAdvisorClick = (baseKwd: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const kwd = isMobile ? `mobile_${baseKwd}` : baseKwd;
    const forwardingQueryString = getForwardingParams();
    const destinationUrl = `https://compare.financialadvisor.net/financial-advisor-match/?kwd=${kwd}&${forwardingQueryString}`;
    window.location.href = destinationUrl;
  };

  return (
    <div className="min-h-screen bg-white text-secondary-900">
      <main>
        <Hero onFindAdvisorClick={handleFindAdvisorClick('hero_cta')} />
        <TrustBand />
        <CostOfNoAdvice />
        <AdvisorValue />
        <HowItWorks />
        <CtaBanner onFindAdvisorClick={handleFindAdvisorClick('cta_banner')} />
        <Testimonials />
        <Faqs />
        <ZipCodeBar />
      </main>
      <Footer />
      <ScrollToTop />

      {showFloatingCta && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white bg-opacity-95 shadow-lg border-t border-gray-200 md:hidden animate-fade-in z-50">
          <button
            onClick={handleFindAdvisorClick('floating_cta')}
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
