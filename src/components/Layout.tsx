import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      // The banner is 40px tall, so we'll consider the header sticky after scrolling past that.
      setIsScrolled(scrollPosition > 40); 
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

  const handleFindAdvisorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const baseKwd = 'header_cta';
    const kwd = isMobile ? `mobile_${baseKwd}` : baseKwd;
    const forwardingQueryString = getForwardingParams();
    const destinationUrl = `https://compare.financialadvisor.net/financial-advisor-match/?kwd=${kwd}&${forwardingQueryString}`;
    window.location.href = destinationUrl;
  };

  return (
    <>
      {!isScrolled && (
        <div className="bg-gray-800 text-white py-2 text-center text-sm font-semibold tracking-widest">
          ADVERTORIAL
        </div>
      )}
      <Header onFindAdvisorClick={handleFindAdvisorClick} isScrolled={isScrolled} />
      <Outlet />
    </>
  );
};

export default Layout;
