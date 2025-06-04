import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface HeroProps {
  onFindAdvisorClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hero: React.FC<HeroProps> = ({ onFindAdvisorClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 -z-10"></div>
      <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center transition duration-1000 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 leading-tight mb-6">
              Your Financial Goals Deserve the Right Advisor
            </h1>
            <p className="text-lg md:text-xl text-secondary-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              We match you with vetted advisors based on your unique financial needs and goals. Take the first step toward financial confidence today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onFindAdvisorClick}
                className="py-4 px-8 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition duration-300 shadow-md flex items-center justify-center group"
              >
                Find My Financial Advisor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.getElementById('why-advisor')?.scrollIntoView({ behavior: 'smooth' })}
                className="py-4 px-8 border border-primary-500 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract decorative element */}
      <div className="hidden lg:block absolute -bottom-10 right-0 w-64 h-64 bg-accent-50 rounded-full z-0 opacity-70"></div>
    </section>
  );
};

export default Hero;