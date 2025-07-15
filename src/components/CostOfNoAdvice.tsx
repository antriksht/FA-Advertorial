import React from 'react';
import { FileText, TrendingDown, Frown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCane } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const CostOfNoAdvice: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const costs = [
    {
      icon: <TrendingDown className="h-8 w-8 text-primary-800" />,
      title: "Poor Investment Decisions",
      description: "Without expert guidance, many individuals make emotionally-driven investment choices, often buying high and selling low."
    },
    {
      icon: <FontAwesomeIcon icon={faPersonCane} className="h-8 w-8 text-primary-800" />,
      title: "Missed Retirement Goals",
      description: "Inadequate planning leads to insufficient savings and unrealistic expectations about retirement lifestyle."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary-800" />,
      title: "Tax Inefficiencies",
      description: "Missing out on tax-advantaged strategies can cost thousands in unnecessary tax payments over a lifetime."
    },
    {
      icon: <Frown className="h-8 w-8 text-primary-800" />,
      title: "Financial Stress",
      description: "Uncertainty about one's financial future creates ongoing anxiety and impacts quality of life."
    }
  ];

  return (
    <section 
      id="why-advisor"
      ref={ref}
      className="py-16 md:py-24 bg-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`transition duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-inter text-3xl md:text-4xl font-medium text-primary-800 mb-6">
              The Hidden Cost of No Professional Advice
            </h2>
            <p className="font-inter text-lg md:text-m text-secondary-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Many Americans navigate complex financial decisions without expert guidance.
              <br />
              Here's what that could be costing you:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {costs.map((cost, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300 
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#D2E4E5] rounded-full mb-4 mx-auto">
                  {cost.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#424444] mb-3 text-center">
                  {cost.title}
                </h3>
                <p className="text-secondary-600 text-center">
                  {cost.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[80px] h-0.5 w-full" style={{backgroundColor: '#E5E7EB'}}></div>
    </section>
  );
};

export default CostOfNoAdvice;