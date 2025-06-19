import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-sm text-secondary-300 space-y-6 mb-6">
          <div className="flex flex-wrap justify-center space-x-4 font-semibold text-accent-400">
            <a href="https://www.financialadvisor.net/privacy-policy" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="https://www.financialadvisor.net/terms-condition" className="hover:underline">Terms & Conditions</a>
          </div>

          <p>
            FinancialAdvisor.net is a wholly-owned brand of the Respond.com Inc. ("Respond") family.
            Respond is registered with the U.S. Securities and Exchange Commission as an investment adviser,
            and operates through various subsidiaries and brands that provide financial education.
            FinancialAdvisor.net matches and refers investors to qualified financial professionals that have
            elected to participate in our matching platform. FinancialAdvisor.net, Respond, and Respond's
            other subsidiaries and brands do not manage investor assets or otherwise render investment or
            financial planning advice beyond the referral of investors to qualified financial professionals.
            By using this website, you agree to our terms and conditions.
          </p>
        </div>

        <div className="border-t border-secondary-700 pt-4 text-center text-secondary-400 text-xs">
          &copy; 2025 FinancialAdvisor.net. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
