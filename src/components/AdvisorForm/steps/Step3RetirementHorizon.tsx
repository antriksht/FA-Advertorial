import React from 'react';
import { Clock } from 'lucide-react';

interface Step3RetirementHorizonProps {
  value: string;
  onChange: (value: string) => void;
}

const Step3RetirementHorizon: React.FC<Step3RetirementHorizonProps> = ({ value, onChange }) => {
  const options = [
    { id: 'already-retired', label: 'Already Retired', description: 'I need help managing retirement' },
    { id: '0-5-years', label: 'Within 5 Years', description: 'Retirement is approaching soon' },
    { id: '5-10-years', label: '5-10 Years', description: 'Actively planning for retirement' },
    { id: '10-20-years', label: '10-20 Years', description: 'Building wealth for future retirement' },
    { id: '20-plus-years', label: '20+ Years', description: 'Early stages of retirement planning' }
  ];

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <Clock className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">When do you plan to retire?</h3>
      <p className="text-secondary-600 mb-8">Your retirement timeline helps us match you with advisors specialized in your life stage.</p>
      
      <div className="flex flex-col space-y-3 max-w-md mx-auto">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`py-4 px-6 rounded-lg border-2 transition duration-200 flex flex-col items-center justify-center ${
              value === option.id
                ? 'border-primary-600 bg-primary-50 text-primary-800'
                : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50'
            }`}
          >
            <span className="text-lg font-medium mb-1">{option.label}</span>
            <span className="text-sm text-secondary-600">{option.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step3RetirementHorizon;