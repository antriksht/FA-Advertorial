import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface CtaBannerProps {
  onFindAdvisorClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ onFindAdvisorClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 bg-primary-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-800 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-700 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Leave Your Financial Future to Chance
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Connect with a trusted financial professional who can help you achieve your goals and build lasting wealth.
          </p>
          <button
            onClick={onFindAdvisorClick}
            className="cta-button py-4 px-8 inline-flex items-center group"
          >
            Get Matched Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;