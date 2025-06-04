import React from 'react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-100">
            Progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-primary-700">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
      </div>
      <div className="relative w-full">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-100">
          <div 
            style={{ width: `${progressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-500 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FormProgress;