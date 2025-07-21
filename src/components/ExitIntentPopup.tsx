import React, { useState, useEffect } from 'react';
import ZipCodeBar from './ZipCodeBar';
import { X } from 'lucide-react';
import faLogo from '../assets/fa-logo.png';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsVisible(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full relative text-center">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <X size={28} />
        </button>
        
        <img src={faLogo} alt="Financial Advisor Logo" className="h-6 mx-auto mb-6" />

        <p className="text-xs font-bold text-primary-700 tracking-wider mb-4">
          TRUSTED BY MILLIONS OF CONSUMERS TO FIND TOP ADVISORS SUITED TO THEIR NEEDS
        </p>
        
        <h2 className="text-4xl font-bold text-primary-900 mb-3">
          SET YOURSELF UP FOR FINANCIAL SUCCESS.
        </h2>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-secondary-700 font-medium mb-4">
            Get matched to vetted financial advisors and compare credentials, fees, and more for free.
          </p>
          <ZipCodeBar 
            kwd="exit_intent_popup_start_now" 
            buttonText="Find an Advisor" 
          />
        </div>
        
        <p className="text-xs text-secondary-500">
          Completely Private and Confidential
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;

