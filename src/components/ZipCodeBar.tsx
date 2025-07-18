import React, { useState } from 'react';

const ZipCodeBar: React.FC = () => {
  const [zipCode, setZipCode] = useState('');

  const handleFindAdvisorClick = () => {
    if (zipCode.trim() !== '') {
      window.location.href = `https://www.financialadvisor.net/match-advisors/search-by-zip?zip_code=${zipCode}&kwd=footer`;
    }
  };

  return (
    <div className="bg-gray-100 pb-0 pt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter your zip code"
          className="px-4 py-3 border border-gray-300 rounded-lg md:rounded-r-none md:border-r-0 w-full md:w-auto mb-4 md:mb-0"
        />
        <button
          onClick={handleFindAdvisorClick}
          className="cta-button py-3 px-6 rounded-lg md:rounded-l-none w-full md:w-auto"
        >
          Find an Advisor
        </button>
      </div>
    </div>
  );
};

export default ZipCodeBar;
