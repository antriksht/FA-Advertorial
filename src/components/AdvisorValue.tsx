import React from 'react';
import { LineChart, ShieldCheck, Target, Lightbulb } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AdvisorValue: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Target className="h-10 w-10 text-primary-500" />,
      title: "Personalized Strategy",
      description: "Receive a tailored financial plan based on your unique life stage, goals, and risk tolerance."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary-500" />,
      title: "Tax & Retirement Optimization",
      description: "Maximize tax advantages and ensure your retirement strategy aligns with your long-term vision."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary-500" />,
      title: "Expert Market Guidance",
      description: "Navigate market uncertainty with professional insights and evidence-based investment approaches."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary-500" />,
      title: "Fiduciary Approach",
      description: "Work with advisors legally obligated to put your financial interests first in every recommendation."
    }
  ];

  return (
    <section 
      id="advisor-value"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`transition duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              How a Vetted Advisor Adds Value
            </h2>
            <p className="text-lg text-secondary-700">
              The right financial advisor can be the difference between hoping for financial security and confidently building it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex 
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mr-5 mt-1">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-16 bg-primary-700 text-white p-8 md:p-10 rounded-xl max-w-4xl mx-auto 
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
            style={{ transitionDelay: '400ms' }}
          >
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-white">The Advisor Advantage</h3>
              <p className="text-primary-100">Studies show that working with a financial advisor can potentially add 1.5% to 4% in net returns annually over time.*</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-300 mb-2">67%</p>
                <p className="text-sm text-primary-100">of advised investors feel more confident about their financial future</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-300 mb-2">2.5x</p>
                <p className="text-sm text-primary-100">higher retirement savings for those with advisors over 15+ years</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-300 mb-2">78%</p>
                <p className="text-sm text-primary-100">of advised clients feel better prepared for market volatility</p>
              </div>
            </div>
            <p className="text-xs text-primary-200 mt-6 text-center">*Based on industry research on the value of financial advice. Individual results may vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorValue;
