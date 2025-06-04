import React from 'react';
import { ArrowRightLeft } from 'lucide-react';

interface Step9SwitchReasonProps {
  value: string;
  onChange: (value: string) => void;
}

const Step9SwitchReason: React.FC<Step9SwitchReasonProps> = ({ value, onChange }) => {
  const options = [
    { id: 'better-performance', label: 'Looking for better investment performance' },
    { id: 'more-services', label: 'Need more comprehensive services' },
    { id: 'retirement-focus', label: 'Want specialized retirement planning' },
    { id: 'poor-communication', label: 'Poor communication with current advisor' },
    { id: 'high-fees', label: 'Current advisor fees are too high' },
    { id: 'moved', label: 'Relocated to a new area' },
    { id: 'other', label: 'Other reason' }
  ];

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <ArrowRightLeft className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Why are you considering a new advisor?</h3>
      <p className="text-secondary-600 mb-8">Understanding your needs helps us find an advisor who can better serve you.</p>
      
      <div className="flex flex-col space-y-3 max-w-md mx-auto">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`py-4 px-6 rounded-lg border-2 transition duration-200 text-center ${
              value === option.id
                ? 'border-primary-600 bg-primary-50 text-primary-800'
                : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50'
            }`}
          >
            <span className="text-base font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step9SwitchReason;