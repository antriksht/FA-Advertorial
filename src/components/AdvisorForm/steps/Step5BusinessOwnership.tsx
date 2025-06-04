import React from 'react';
import { Briefcase } from 'lucide-react';

interface Step5BusinessOwnershipProps {
  value: boolean | null;
  onChange: (value: boolean) => void;
}

const Step5BusinessOwnership: React.FC<Step5BusinessOwnershipProps> = ({ value, onChange }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <Briefcase className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Do you own a business?</h3>
      <p className="text-secondary-600 mb-8">Business ownership may require specialized financial and tax planning strategies.</p>
      
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
          <span className="text-sm text-secondary-600">I own a business</span>
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
          <span className="text-sm text-secondary-600">I don't own a business</span>
        </button>
      </div>
    </div>
  );
};

export default Step5BusinessOwnership;