import React from 'react';
import AdvisorForm from '../components/AdvisorForm/AdvisorForm';
import { DollarSign } from 'lucide-react';

const LogoHeader: React.FC = () => (
  <header className="py-4 shadow-md bg-white">
    <div className="container mx-auto px-4 flex items-center">
      <DollarSign className="h-8 w-8 text-primary-700" />
      <span className="ml-2 text-xl font-serif font-bold text-primary-800">FinancialAdvisor.net</span>
    </div>
  </header>
);

const FindAdvisorPage: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white text-secondary-900">
    <LogoHeader />
    <main className="flex-grow">
      <AdvisorForm visible={true} />
    </main>
    <footer className="bg-secondary-900 text-white py-8 text-sm">
      <div className="container mx-auto px-4 space-y-4">
        <div className="flex justify-center space-x-2">
          <a href="#" className="underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="underline">Terms &amp; Conditions</a>
        </div>
        <p className="text-center max-w-4xl mx-auto">
          FinancialAdvisor.net is a wholly-owned brand of the Respond.com Inc. ("Respond") family. Respond is registered with the U.S. Securities and Exchange Commission as an investment adviser, and operates through various subsidiaries and brands that provide financial education. FinancialAdvisor.net matches and refers investors to qualified financial professionals that have elected to participate in our matching platform. FinancialAdvisor.net, Respond, and Respond's other subsidiaries and brands do not manage investor assets or otherwise render investment or financial planning advice beyond the referral of investors to qualified financial professionals. By using this website, you agree to our terms and conditions.
        </p>
        <p className="text-center">© 2025 FinancialAdvisor.net. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
);

export default FindAdvisorPage;
