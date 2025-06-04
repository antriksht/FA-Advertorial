import React from 'react';
import { Mail } from 'lucide-react';

interface Step11EmailProps {
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

const Step11Email: React.FC<Step11EmailProps> = ({ value, onChange, isValid }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <Mail className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">What's your email address?</h3>
      <p className="text-secondary-600 mb-6">We'll send your advisor matches to this email.</p>
      
      <div className="max-w-md mx-auto">
        <label htmlFor="email" className="block text-left text-sm font-medium text-secondary-700 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your email address"
          className={`w-full px-4 py-3 border ${
            isValid ? 'border-gray-300 focus:border-primary-500' : 'border-red-500'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition duration-200`}
        />
        {!isValid && value !== '' && (
          <p className="mt-2 text-sm text-red-600 text-left">Please enter a valid email address.</p>
        )}
        <p className="mt-2 text-xs text-secondary-500 text-left">
          We respect your privacy and will never share your email with third parties.
        </p>
      </div>
    </div>
  );
};

export default Step11Email;