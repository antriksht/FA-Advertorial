import React, { useState } from 'react';
import logo from '../assets/fa-logo.png';

interface HeaderProps {
  onFindAdvisorClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ onFindAdvisorClick, isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      style={{ top: isScrolled ? '0' : '40px' }} // Adjust top position based on scroll
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="FinancialAdvisor.net logo" className="h-6 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('why-advisor')} 
              className="text-secondary-700 hover:text-brand font-medium transition duration-300"
            >
              Why an Advisor
            </button>
            <button 
              onClick={() => scrollToSection('advisor-value')} 
              className="text-secondary-700 hover:text-brand font-medium transition duration-300"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-secondary-700 hover:text-brand font-medium transition duration-300"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('faqs')} 
              className="text-secondary-700 hover:text-brand font-medium transition duration-300"
            >
              FAQs
            </button>
            <button
              onClick={onFindAdvisorClick}
              className="cta-button py-2 px-5 shadow-sm"
            >
              Find My Advisor
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
<button
  onClick={onFindAdvisorClick}
  className="hidden md:block cta-button mr-4 py-2 px-4 text-sm shadow-sm"
>
  Find Advisor
</button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary-800 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('why-advisor')} 
                className="text-secondary-700 hover:text-primary-700 font-medium transition py-2"
              >
                Why an Advisor
              </button>
              <button 
                onClick={() => scrollToSection('advisor-value')} 
                className="text-secondary-700 hover:text-primary-700 font-medium transition py-2"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-secondary-700 hover:text-primary-700 font-medium transition py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('faqs')} 
                className="text-secondary-700 hover:text-primary-700 font-medium transition py-2"
              >
                FAQs
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
