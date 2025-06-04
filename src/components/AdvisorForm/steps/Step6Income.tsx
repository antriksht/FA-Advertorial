import React from 'react';
import { DollarSign } from 'lucide-react';

interface Step6IncomeProps {
  value: string;
  onChange: (value: string) => void;
}

const Step6Income: React.FC<Step6IncomeProps> = ({ value, onChange }) => {
  const options = [
    { id: 'under-50k', label: 'Under $50,000' },
    { id: '50k-100k', label: '$50,000 - $100,000' },
    { id: '100k-150k', label: '$100,000 - $150,000' },
    { id: '150k-250k', label: '$150,000 - $250,000' },
    { id: '250k-500k', label: '$250,000 - $500,000' },
    { id: 'over-500k', label: 'Over $500,000' }
  ];

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <DollarSign className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">What's your annual household income?</h3>
      <p className="text-secondary-600 mb-8">This helps us match you with advisors who typically work with clients in your income bracket.</p>
      
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
            <span className="text-lg font-medium">{option.label}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs text-secondary-500">
        We keep your financial information completely confidential and secure.
      </p>
    </div>
  );
};

export default Step6Income;