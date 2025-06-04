import React from 'react';
import { CheckSquare, SquareIcon } from 'lucide-react';

interface Step10ServicesProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const Step10Services: React.FC<Step10ServicesProps> = ({ value, onChange }) => {
  const options = [
    { id: 'retirement-planning', label: 'Retirement Planning' },
    { id: 'investment-management', label: 'Investment Management' },
    { id: 'tax-planning', label: 'Tax Planning & Optimization' },
    { id: 'estate-planning', label: 'Estate Planning' },
    { id: 'college-planning', label: 'College Savings Planning' },
    { id: 'insurance-review', label: 'Insurance Review & Planning' },
    { id: 'business-planning', label: 'Business Financial Planning' },
    { id: 'debt-management', label: 'Debt Management Strategies' }
  ];

  const toggleService = (id: string) => {
    if (value.includes(id)) {
      onChange(value.filter(item => item !== id));
    } else {
      onChange([...value, id]);
    }
  };

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <CheckSquare className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">What services do you need?</h3>
      <p className="text-secondary-600 mb-8">Select all the financial services you're interested in receiving.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
        {options.map((option) => {
          const isSelected = value.includes(option.id);
          return (
            <button
              key={option.id}
              onClick={() => toggleService(option.id)}
              className={`py-3 px-4 rounded-lg border-2 transition duration-200 flex items-center ${
                isSelected
                  ? 'border-primary-600 bg-primary-50 text-primary-800'
                  : 'border-gray-300 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              {isSelected ? (
                <CheckSquare className="h-5 w-5 mr-3 text-primary-600 flex-shrink-0" />
              ) : (
                <SquareIcon className="h-5 w-5 mr-3 text-secondary-500 flex-shrink-0" />
              )}
              <span className="text-base font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-secondary-500">
        Select all that apply. We'll match you with advisors specializing in these areas.
      </p>
    </div>
  );
};

export default Step10Services;