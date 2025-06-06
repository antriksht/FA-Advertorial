import React from 'react';
import { AlertTriangle, TrendingDown, PiggyBank, DollarSign } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const CostOfNoAdvice: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const costs = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: "Poor Investment Decisions",
      description: "Without expert guidance, many individuals make emotionally-driven investment choices, often buying high and selling low."
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-red-500" />,
      title: "Missed Retirement Goals",
      description: "Inadequate planning leads to insufficient savings and unrealistic expectations about retirement lifestyle."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Tax Inefficiencies",
      description: "Missing out on tax-advantaged strategies can cost thousands in unnecessary tax payments over your lifetime."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Financial Stress",
      description: "Uncertainty about your financial future creates ongoing anxiety and impacts your quality of life."
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              The Hidden Cost of No Professional Advice
            </h2>
            <p className="text-lg text-secondary-700">
              Many Americans navigate complex financial decisions without expert guidance.
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
                <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4 mx-auto">
                  {cost.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-3 text-center">
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
    </section>
  );
};

export default CostOfNoAdvice;