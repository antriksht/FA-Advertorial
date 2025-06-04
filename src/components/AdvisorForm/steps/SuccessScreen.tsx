import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const SuccessScreen: React.FC = () => {
  return (
    <div className="py-8 px-4">
      <div className="text-center animate-fade-in">
        <div className="mx-auto w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="h-10 w-10 text-primary-600" />
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
          Excellent! Your Matches Are On The Way
        </h2>
        
        <div className="max-w-lg mx-auto mb-8">
          <p className="text-lg text-secondary-700 mb-6">
            We're reviewing your profile and will be matching you with financial advisors 
            who specialize in your specific needs.
          </p>
          
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-xl text-primary-800 mb-3">What's Next?</h3>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center min-w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-medium mr-3 mt-0.5">1</span>
                <span>You'll receive an email with your advisor matches within 24 hours.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center min-w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-medium mr-3 mt-0.5">2</span>
                <span>Your matched advisors may reach out to introduce themselves.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center min-w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-medium mr-3 mt-0.5">3</span>
                <span>Schedule complimentary consultations with any advisors you're interested in.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="#"
              className="py-3 px-6 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition duration-300 shadow-md flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Consultation
            </a>
            <a
              href="#"
              className="py-3 px-6 border border-primary-600 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition duration-300"
            >
              Learn More About Our Process
            </a>
          </div>
        </div>
        
        <p className="text-sm text-secondary-500 mt-6">
          Have questions? Email us at support@advisormatch.com or call (555) 123-4567
        </p>
      </div>
    </div>
  );
};

export default SuccessScreen;