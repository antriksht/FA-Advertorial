import React from 'react';
import { ClipboardList, Users, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const HowItWorks: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-accent-500" />,
      title: "Answer a Few Questions",
      description: "Tell us about your financial goals, current situation, and what you're looking for in an advisor.",
      color: "bg-accent-100"
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: "Get Matched with a Professional",
      description: "We match you with 2 to 3 vetted financial advisors tailored to your specific financial needs.",
      color: "bg-primary-100"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-secondary-700" />,
      title: "Start Planning Your Financial Future",
      description: "Schedule a no-obligation call with the advisors to discuss your goals and begin your journey to financial success.",
      color: "bg-secondary-100"
    }
  ];

  return (
    <section 
      id="how-it-works"
      ref={ref}
      className="py-16 md:py-24 bg-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`transition duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              How Our Match Works
            </h2>
            <p className="text-lg text-secondary-700">
              Finding the right financial advisor should be simple.
              Our three-step process makes it quick and easy.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`transition duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col items-center text-center">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-6`}>
                      {step.icon}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-700 text-white font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">{step.title}</h3>
                    <p className="text-secondary-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-16 text-center transition duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-secondary-700 font-medium max-w-2xl mx-auto">
              Our service is completely free, and there's never any obligation to hire an advisor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;