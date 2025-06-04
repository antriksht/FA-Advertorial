import React from 'react';
import { Wallet } from 'lucide-react';

interface Step7PortfolioSizeProps {
  value: string;
  onChange: (value: string) => void;
}

const Step7PortfolioSize: React.FC<Step7PortfolioSizeProps> = ({ value, onChange }) => {
  const options = [
    { id: 'under-100k', label: 'Under $100,000' },
    { id: '100k-250k', label: '$100,000 - $250,000' },
    { id: '250k-500k', label: '$250,000 - $500,000' },
    { id: '500k-1m', label: '$500,000 - $1 million' },
    { id: '1m-3m', label: '$1 million - $3 million' },
    { id: 'over-3m', label: 'Over $3 million' }
  ];

  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <Wallet className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">What's your investment portfolio size?</h3>
      <p className="text-secondary-600 mb-8">Include retirement accounts, investments, and other assets you'd like advice on.</p>
      
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
        Different advisors specialize in various portfolio sizes. This helps us find the right match.
      </p>
    </div>
  );
};

export default Step7PortfolioSize;