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
      title: "Poor Diversification",
      description: "Tech stocks fell hard in 2024, and investors with all their money in one area saw big losses. Spreading your money out helps reduce that risk."
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-red-500" />,
      title: "No Estate Plan",
      description: "67% of Americans still don’t have a will in 2025. Without one, families can face delays and legal problems after a death."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Emotion-Driven Investing",
      description: "When markets drop, many people panic and sell. But markets often bounce back—selling too soon can lock in losses."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Undefined Goals",
      description: "37% of adults tapped emergency savings last year. Clear objectives help keep plans on track."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-red-500" />,
      title: "Tax Inefficiencies",
      description: "Missing out on tax-advantaged strategies can cost thousands in unnecessary payments over your lifetime."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Financial Stress",
      description: "Not having a plan or clear direction with money creates constant worry—and makes it harder to feel secure about the future."
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
