import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "Working with my matched advisor completely changed my retirement outlook. I finally feel confident about my financial future.",
      name: "Sarah J.",
      location: "Denver, CO",
      rating: 5
    },
    {
      quote: "The matching process was simple and spot-on. My advisor understood exactly what I needed for my small business and personal finances.",
      name: "Michael T.",
      location: "Austin, TX",
      rating: 5
    },
    {
      quote: "After years of DIY investing, I realized I needed professional help. My advisor has already saved me thousands in tax strategies alone.",
      name: "Rebecca L.",
      location: "Seattle, WA",
      rating: 5
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-primary-50"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`transition duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-secondary-700">
              Hear from people who found their perfect financial match through our service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <div className="mb-6 flex-grow">
                  <Quote className="h-8 w-8 text-primary-200 mb-2" />
                  <p className="text-secondary-700 italic">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-800">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-secondary-600 text-sm">
              *Individual results may vary. Testimonials are from actual clients who found advisors through our service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;