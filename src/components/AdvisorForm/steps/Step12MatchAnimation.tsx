import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface Step12MatchAnimationProps {
  onComplete: () => void;
}

const Step12MatchAnimation: React.FC<Step12MatchAnimationProps> = ({ onComplete }) => {
  const [matched, setMatched] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setMatched(true), 3000);
    const timer2 = setTimeout(onComplete, 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: '150px' }}>
      {!matched ? (
        <>
          <div className="flex space-x-2 mb-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg blur-sm animate-pulse"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg blur-sm animate-pulse"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg blur-sm animate-pulse"></div>
          </div>
          <p className="text-secondary-700">Matching you with advisors...</p>
        </>
      ) : (
        <h3 className="text-2xl font-semibold text-primary-900 flex items-center">
          <CheckCircle className="h-8 w-8 text-primary-600 mr-2" />
          Advisors Matched
        </h3>
      )}
    </div>
  );
};

export default Step12MatchAnimation;
