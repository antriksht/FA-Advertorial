import React from 'react';
import { MessageSquare } from 'lucide-react';

interface Step13AdditionalProps {
  value: string;
  onChange: (value: string) => void;
}

const Step13Additional: React.FC<Step13AdditionalProps> = ({ value, onChange }) => {
  return (
    <div className="text-center">
      <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <MessageSquare className="h-8 w-8 text-primary-600" />
      </div>
      <h3 className="text-2xl font-semibold text-primary-900 mb-4">Anything else we should know?</h3>
      <p className="text-secondary-600 mb-6">Share any additional details that might help us find the perfect advisor match for you.</p>
      
      <div className="max-w-md mx-auto">
        <label htmlFor="additionalInfo" className="block text-left text-sm font-medium text-secondary-700 mb-2">
          Additional Information (Optional)
        </label>
        <textarea
          id="additionalInfo"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Specific needs, concerns, or preferences you'd like your advisor to know about..."
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition duration-200 resize-none"
        />
        <p className="mt-2 text-xs text-secondary-500 text-left">
          This information helps advisors tailor their approach to your specific situation.
        </p>
      </div>
    </div>
  );
};

export default Step13Additional;