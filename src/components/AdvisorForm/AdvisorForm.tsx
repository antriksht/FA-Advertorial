import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Step1ZipCode from './steps/Step1ZipCode';
import Step2LocalAdvisor from './steps/Step2LocalAdvisor';
import Step3RetirementHorizon from './steps/Step3RetirementHorizon';
import Step4HomeOwnership from './steps/Step4HomeOwnership';
import Step5BusinessOwnership from './steps/Step5BusinessOwnership';
import Step6Income from './steps/Step6Income';
import Step7PortfolioSize from './steps/Step7PortfolioSize';
import Step8CurrentAdvisor from './steps/Step8CurrentAdvisor';
import Step9SwitchReason from './steps/Step9SwitchReason';
import Step10Services from './steps/Step10Services';
import Step11Email from './steps/Step11Email';
import Step12MatchAnimation from './steps/Step12MatchAnimation';
import Step12Contact from './steps/Step12Contact';
import Step13Additional from './steps/Step13Additional';
import SuccessScreen from './steps/SuccessScreen';
import FormProgress from './FormProgress';
import { FormData } from './types';

interface AdvisorFormProps {
  visible: boolean;
}

const AdvisorForm: React.FC<AdvisorFormProps> = ({ visible }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    zipCode: '',
    needLocalAdvisor: null,
    retirementHorizon: '',
    homeOwnership: null,
    businessOwnership: null,
    income: '',
    portfolioSize: '',
    hasAdvisor: null,
    switchReason: '',
    services: [],
    email: '',
    name: '',
    phone: '',
    agreeToTerms: false,
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validation, setValidation] = useState({
    zipCode: true,
    email: true,
    phone: true,
    agreeToTerms: true,
  });

  const totalSteps = 14;

  useEffect(() => {
    if (currentStep > 0 && currentStep <= totalSteps) {
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_step',
          formName: 'advisor_match',
          formStep: currentStep,
          formStepName: `step_${currentStep}`
        });
      } catch (error) {
        console.error('Error pushing to dataLayer:', error);
      }
    }
  }, [currentStep]);

  const validateCurrentStep = (): boolean => {
    let isValid = true;
    const newValidation = { ...validation };
    
    if (currentStep === 1) {
      const zipRegex = /^\d{5}(-\d{4})?$/;
      newValidation.zipCode = zipRegex.test(formData.zipCode);
      isValid = newValidation.zipCode;
    } else if (currentStep === 2) {
      isValid = formData.needLocalAdvisor !== null;
    } else if (currentStep === 3) {
      isValid = formData.retirementHorizon !== '';
    } else if (currentStep === 4) {
      isValid = formData.homeOwnership !== null;
    } else if (currentStep === 5) {
      isValid = formData.businessOwnership !== null;
    } else if (currentStep === 6) {
      isValid = formData.income !== '';
    } else if (currentStep === 7) {
      isValid = formData.portfolioSize !== '';
    } else if (currentStep === 8) {
      isValid = formData.hasAdvisor !== null;
    } else if (currentStep === 9) {
      isValid = formData.switchReason !== '' || formData.hasAdvisor === false;
    } else if (currentStep === 10) {
      isValid = formData.services.length > 0;
    } else if (currentStep === 11) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newValidation.email = emailRegex.test(formData.email);
      isValid = newValidation.email;
    } else if (currentStep === 13) {
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      newValidation.phone = phoneRegex.test(formData.phone);
      newValidation.agreeToTerms = formData.agreeToTerms;
      isValid = newValidation.phone && newValidation.agreeToTerms;
    }
    
    setValidation(newValidation);
    return isValid;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps) {
        let nextStep = currentStep + 1;
        if (currentStep === 8 && formData.hasAdvisor === false) {
          nextStep = 10; // skip step 9 when user has no advisor
        }
        setCurrentStep(nextStep);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      let prevStep = currentStep - 1;

      // Skip the animation step when going back from the phone step
      if (currentStep === 13) {
        prevStep = 11;
      } else if (prevStep === 9 && formData.hasAdvisor === false) {
        // Also skip step 9 when navigating backwards
        prevStep = 8;
      }

      setCurrentStep(prevStep);
    }
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !/^\d{5}(-\d{4})?$/.test(formData.zipCode);
      case 2:
        return formData.needLocalAdvisor === null;
      case 3:
        return formData.retirementHorizon === '';
      case 4:
        return formData.homeOwnership === null;
      case 5:
        return formData.businessOwnership === null;
      case 6:
        return formData.income === '';
      case 7:
        return formData.portfolioSize === '';
      case 8:
        return formData.hasAdvisor === null;
      case 9:
        return formData.hasAdvisor ? formData.switchReason === '' : false;
      case 10:
        return formData.services.length === 0;
      case 11:
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      case 13:
        return (
          !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone) ||
          !formData.agreeToTerms
        );
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        formName: 'advisor_match',
        formData: formData
      });
    } catch (error) {
      console.error('Error pushing to dataLayer:', error);
    }
    
    setIsSubmitted(true);
  };

  const updateFormData = (data: Partial<FormData>) => {
    let autoStep: number | null = null;
    setFormData(prevData => {
      const newData = { ...prevData, ...data };

      // Auto-advance for MCQ steps, excluding steps with text inputs
      if (
        currentStep !== 1 &&
        currentStep !== 10 &&
        currentStep !== 11 &&
        currentStep !== 12 &&
        currentStep !== 13 &&
        currentStep !== 14
      ) {
        if (
          (currentStep === 2 && newData.needLocalAdvisor !== null) ||
          (currentStep === 3 && newData.retirementHorizon !== '') ||
          (currentStep === 4 && newData.homeOwnership !== null) ||
          (currentStep === 5 && newData.businessOwnership !== null) ||
          (currentStep === 6 && newData.income !== '') ||
          (currentStep === 7 && newData.portfolioSize !== '') ||
          (currentStep === 8 && newData.hasAdvisor !== null) ||
          (currentStep === 9 && newData.switchReason !== '')
        ) {
          autoStep = currentStep + 1;
          if (currentStep === 8 && newData.hasAdvisor === false) {
            autoStep = 10;
          }
        }
      }

      return newData;
    });

    if (autoStep) {
      setTimeout(() => setCurrentStep(autoStep as number), 300);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1ZipCode 
            value={formData.zipCode} 
            onChange={(zipCode) => updateFormData({ zipCode })}
            isValid={validation.zipCode}
          />
        );
      case 2:
        return (
          <Step2LocalAdvisor 
            value={formData.needLocalAdvisor} 
            onChange={(needLocalAdvisor) => updateFormData({ needLocalAdvisor })}
          />
        );
      case 3:
        return (
          <Step3RetirementHorizon 
            value={formData.retirementHorizon} 
            onChange={(retirementHorizon) => updateFormData({ retirementHorizon })}
          />
        );
      case 4:
        return (
          <Step4HomeOwnership 
            value={formData.homeOwnership} 
            onChange={(homeOwnership) => updateFormData({ homeOwnership })}
          />
        );
      case 5:
        return (
          <Step5BusinessOwnership 
            value={formData.businessOwnership} 
            onChange={(businessOwnership) => updateFormData({ businessOwnership })}
          />
        );
      case 6:
        return (
          <Step6Income 
            value={formData.income} 
            onChange={(income) => updateFormData({ income })}
          />
        );
      case 7:
        return (
          <Step7PortfolioSize 
            value={formData.portfolioSize} 
            onChange={(portfolioSize) => updateFormData({ portfolioSize })}
          />
        );
      case 8:
        return (
          <Step8CurrentAdvisor 
            value={formData.hasAdvisor} 
            onChange={(hasAdvisor) => updateFormData({ hasAdvisor })}
          />
        );
      case 9:
        return formData.hasAdvisor ? (
          <Step9SwitchReason
            value={formData.switchReason}
            onChange={(switchReason) => updateFormData({ switchReason })}
          />
        ) : null;
      case 10:
        return (
          <Step10Services 
            value={formData.services} 
            onChange={(services) => updateFormData({ services })}
          />
        );
      case 11:
        return (
          <Step11Email
            value={formData.email}
            onChange={(email) => updateFormData({ email })}
            isValid={validation.email}
          />
        );
      case 12:
        return <Step12MatchAnimation onComplete={handleNext} />;
      case 13:
        return (
          <Step12Contact
            name={formData.name}
            phone={formData.phone}
            agreeToTerms={formData.agreeToTerms}
            onChange={(data) => updateFormData(data)}
            validation={validation}
          />
        );
      case 14:
        return (
          <Step13Additional
            value={formData.additionalInfo}
            onChange={(additionalInfo) => updateFormData({ additionalInfo })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          className={`max-w-3xl mx-auto transition duration-700 ${
            inView && visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {!isSubmitted ? (
            <>
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Find Your Financial Advisor
                </h2>
                <p className="text-lg text-secondary-700">
                  Answer a few questions to get matched with advisors who fit your unique needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
                
                <div className="mt-8 mb-10">
                  {renderCurrentStep()}
                </div>
                
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && currentStep !== 12 && (
                    <button
                      onClick={handlePrevious}
                      className="py-3 px-6 border border-gray-300 rounded-lg text-secondary-700 hover:bg-gray-50 transition duration-300 flex items-center"
                    >
                      <ChevronLeft className="mr-2 h-5 w-5" />
                      Back
                    </button>
                  )}
                  
                  {currentStep !== 12 && (
                    <div className={`ml-auto ${currentStep === 1 ? 'w-full' : ''}`}>
                      <button
                        onClick={handleNext}
                        disabled={isNextDisabled()}
                        className={`cta-button py-3 px-6 flex items-center justify-center ${
                          currentStep === 1 ? 'w-full' : ''
                        } ${isNextDisabled() ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {currentStep === totalSteps ? 'Submit' : 'Continue'}
                        {currentStep !== totalSteps && <ChevronRight className="ml-2 h-5 w-5" />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <SuccessScreen />
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvisorForm;