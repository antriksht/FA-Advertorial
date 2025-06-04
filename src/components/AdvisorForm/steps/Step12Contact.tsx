import React from 'react';
import { User, Phone } from 'lucide-react';

interface Step12ContactProps {
  name: string;
  phone: string;
  agreeToTerms: boolean;
  onChange: (data: {name?: string; phone?: string; agreeToTerms?: boolean}) => void;
  validation: {
    phone: boolean;
    agreeToTerms: boolean;
  };
}

const Step12Contact: React.FC<Step12ContactProps> = ({ name, phone, agreeToTerms, onChange, validation }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <User className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Almost there!</h3>
      <p className="text-secondary-600 mb-6">Share a few more details so advisors can reach out to you.</p>
      
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-sm font-medium text-secondary-700 mb-2">
            Your Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition duration-200"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-left text-sm font-medium text-secondary-700 mb-2">
            Your Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-500" />
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              placeholder="(555) 123-4567"
              className={`w-full pl-10 pr-4 py-3 border ${
                validation.phone || phone === '' ? 'border-gray-300 focus:border-primary-500' : 'border-red-500'
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition duration-200`}
            />
          </div>
          {!validation.phone && phone !== '' && (
            <p className="mt-2 text-sm text-red-600 text-left">Please enter a valid US phone number.</p>
          )}
          <p className="mt-2 text-xs text-secondary-500 text-left">
            Advisors may call or text you to schedule a consultation.
          </p>
        </div>
        
        <div className="flex items-start mb-2">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => onChange({ agreeToTerms: e.target.checked })}
              className={`h-5 w-5 rounded border ${
                validation.agreeToTerms ? 'border-gray-300' : 'border-red-500'
              } focus:ring-primary-500 text-primary-600 transition duration-200`}
            />
          </div>
          <label htmlFor="terms" className="ml-3 text-sm text-left">
            <span className={`text-secondary-700 ${!validation.agreeToTerms ? 'text-red-600' : ''}`}>
              I agree to the <a href="#" className="text-primary-600 hover:text-primary-800">Terms of Service</a> and <a href="#" className="text-primary-600 hover:text-primary-800">Privacy Policy</a>
            </span>
          </label>
        </div>
        {!validation.agreeToTerms && (
          <p className="mt-1 text-sm text-red-600 text-left">Please agree to the terms to continue.</p>
        )}
      </div>
    </div>
  );
};

export default Step12Contact;