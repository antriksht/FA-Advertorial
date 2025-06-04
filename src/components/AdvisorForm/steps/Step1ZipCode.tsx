import React from 'react';
import { MapPin } from 'lucide-react';

interface Step1ZipCodeProps {
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
}

const Step1ZipCode: React.FC<Step1ZipCodeProps> = ({ value, onChange, isValid }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <MapPin className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Where are you located?</h3>
      <p className="text-secondary-600 mb-6">We'll match you with advisors based on your location.</p>
      
      <div className="max-w-xs mx-auto">
        <label htmlFor="zipCode" className="block text-left text-sm font-medium text-secondary-700 mb-2">
          Your ZIP Code
        </label>
        <input
          type="text"
          id="zipCode"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter ZIP code"
          className={`w-full px-4 py-3 border ${
            isValid ? 'border-gray-300 focus:border-primary-500' : 'border-red-500'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition duration-200`}
          maxLength={10}
        />
        {!isValid && (
          <p className="mt-2 text-sm text-red-600 text-left">Please enter a valid 5-digit ZIP code.</p>
        )}
        <p className="mt-2 text-xs text-secondary-500 text-left">
          We use this to find advisors licensed in your state.
        </p>
      </div>
    </div>
  );
};

export default Step1ZipCode;