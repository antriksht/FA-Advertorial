import React from 'react';
import { useInView } from 'react-intersection-observer';

const TrustBand: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-8 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className={`transition duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-center text-sm text-secondary-500 uppercase font-medium tracking-wider mb-6">
            Our Advisors Have Been Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {/* Using grayscale logos for consistency */}
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">The Washington Post</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">CBS</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Washington Business Journal</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Wall Street Journal</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">ABC</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Yahoo!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;