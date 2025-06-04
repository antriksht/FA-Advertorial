import React from 'react';
import { Users } from 'lucide-react';

interface Step8CurrentAdvisorProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
}

const Step8CurrentAdvisor: React.FC<Step8CurrentAdvisorProps> = ({ value, onChange }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <Users className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Do you currently work with a financial advisor?</h3>
      <p className="text-secondary-600 mb-8">We'll help you find an advisor who offers the services or expertise you're looking for.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
        <button
          onClick={() => onChange(true)}
          className={`py-4 px-6 rounded-lg border-2 transition duration-200 flex flex-col items-center justify-center ${
            value === true
              ? 'border-primary-600 bg-primary-50 text-primary-800'
              : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50'
          }`}
        >
          <span className="text-xl font-medium mb-1">Yes</span>
          <span className="text-sm text-secondary-600">I currently have an advisor</span>
        </button>
        
        <button
          onClick={() => onChange(false)}
          className={`py-4 px-6 rounded-lg border-2 transition duration-200 flex flex-col items-center justify-center ${
            value === false
              ? 'border-primary-600 bg-primary-50 text-primary-800'
              : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50'
          }`}
        >
          <span className="text-xl font-medium mb-1">No</span>
          <span className="text-sm text-secondary-600">No advisor currently</span>
        </button>
      </div>
    </div>
  );
};

export default Step8CurrentAdvisor;