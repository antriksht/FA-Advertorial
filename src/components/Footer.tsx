import React from 'react';
import logo from '../assets/fa-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F6F7] text-secondary-700 py-12">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        
        <img src={logo} alt="FinancialAdvisor.net logo" className="h-4 w-auto mx-auto mb-8" />

        <div className="mb-8">
          <a href="https://www.financialadvisor.net/privacy-policy" className="text-secondary-600 hover:text-secondary-800 transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="mx-2 text-secondary-400">|</span>
          <a href="https://www.financialadvisor.net/terms-condition" className="text-secondary-600 hover:text-secondary-800 transition-colors duration-300">
            Terms & Conditions
          </a>
        </div>

        <p className="text-sm text-secondary-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          FinancialAdvisor.net is a wholly-owned brand of the Respond.com Inc. ("Respond") family. 
          Respond is registered with the U.S. Securities and Exchange Commission as an investment adviser, 
          and operates through various subsidiaries and brands that provide financial education. 
          WiserAdvisor matches and refers investors to qualified financial professionals that have elected 
          to participate in our matching platform. WiserAdvisor, Respond, and Respond's other subsidiaries 
          and brands do not manage investor assets or otherwise render investment or financial planning advice 
          beyond the referral of investors to qualified financial professionals. By using this website, 
          you agree to our terms and conditions.
        </p>

        <div className="border-t border-gray-300 w-4/5 mx-auto my-8"></div>

        <p className="text-sm text-secondary-500">
          © 2025 Financialadvisor.net . All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;