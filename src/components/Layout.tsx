import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // The banner is 40px tall, so we'll consider the header sticky after scrolling past that.
      setIsScrolled(scrollPosition > 40); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleFindAdvisorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = 'https://compare.financialadvisor.net/financial-advisor-match/?src=';
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
