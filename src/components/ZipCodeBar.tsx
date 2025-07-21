import React, { useState, useEffect } from 'react';
import bgImage from '../assets/abstract_bg_zipCodeBanner.png';

interface ZipCodeBarProps {
  kwd?: string;
  buttonText?: string;
}

const ZipCodeBar: React.FC<ZipCodeBarProps> = ({ 
  kwd: baseKwd = 'ppc_zip_code_bar',
  buttonText = 'Find an Advisor' 
}) => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.trim() === '') {
      setError('Please enter a zip code.');
      return;
    }
    if (!/^[0-9]{5}$/.test(zipCode)) {
      setError('Provided zip code is invalid');
      return;
    }

    setError('');
    const kwd = isMobile ? `mobile_${baseKwd}` : baseKwd;
    const forwardingQueryString = getForwardingParams();
    const destinationUrl = `https://match.financialadvisor.net/?zip_code=${zipCode}&kwd=${kwd}&${forwardingQueryString}`;
    
    window.location.href = destinationUrl;
  };

  return (
    <div
      className="bg-primary-700 pb-10 pt-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: isMobile ? 'right top' : 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="w-full md:w-auto">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter your zip code"
              className="px-4 py-3 border border-gray-300 rounded-lg md:rounded-r-none md:border-r-0 w-full md:w-auto"
              minLength={5}
              pattern="^[0-9]{5}"
              title="Please enter a valid zip code"
            />
            <div style={{ textAlign: 'left', color: 'red', margin: '0px auto', maxWidth: '347px' }}>
              {error}
            </div>
          </div>
          <button
            type="submit"
            className="cta-button py-3 px-6 rounded-lg md:rounded-l-none w-full md:w-auto mt-2 md:mt-0"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ZipCodeBar;

