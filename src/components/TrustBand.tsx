import React from 'react';
import { useInView } from 'react-intersection-observer';
import featuredLogos from '../assets/featured-logos.png';

const TrustBand: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-8 bg-[#D2E4E5] border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className={`transition duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-center text-m text-secondary-600 font-bold tracking-wider mb-6">
            AS FEATURED ON
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {/* Using grayscale logos for consistency */}
            {/*
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Forbes</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Wall Street Journal</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Bloomberg</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">CNBC</span>
            </div>
            <div className="flex items-center grayscale opacity-70 hover:opacity-100 transition duration-300">
              <span className="font-serif font-bold text-xl md:text-2xl text-secondary-800">Financial Times</span>
            </div>
            */}
            <img src={featuredLogos} alt="Featured financial firms"
              className="mx-auto mt-8 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBand;