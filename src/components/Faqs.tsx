import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Faqs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this a free service?",
      answer: "Yes, our matching service is completely free for consumers. We are compensated by the financial advisors in our network when they acquire new clients through our platform."
    },
    {
      question: "What if I already have an advisor?",
      answer: "You're welcome to use our service to see if there might be a better fit for your current needs. Many clients find advisors who offer services their current advisor doesn't, or who specialize in specific areas relevant to their changing financial situation."
    },
    {
      question: "Will I be contacted directly?",
      answer: "After completing the matching process, the advisors we recommend may reach out to you directly via email or phone to introduce themselves. You're under no obligation to speak with them or use their services."
    },
    {
      question: "How do you vet the advisors?",
      answer: "Our advisors undergo a thorough screening process, including verification of credentials, regulatory record checks, and an evaluation of their experience and areas of expertise. We only work with licensed financial professionals who meet our standards."
    },
    {
      question: "What types of financial advisors are in your network?",
      answer: "Our network includes Certified Financial Planners (CFPs), Registered Investment Advisors (RIAs), wealth managers, retirement specialists, and other financial professionals who can address a wide range of financial planning and investment needs."
    },
    {
      question: "Is there a minimum asset requirement to be matched?",
      answer: "We work with individuals at all stages of their financial journey, including those just starting to build their wealth. While many of our advisors prefer clients with portfolios of $250,000 or more, you're welcome to use our service regardless of your current asset level."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faqs"
      ref={ref}
      className="py-16 md:py-24 bg-white scroll-mt-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`transition duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-700">
              Get answers to common questions about our advisor matching service.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`mb-4 border-b border-gray-200 pb-4 transition duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                >
                  <span className="text-xl font-medium text-primary-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary-700" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="py-3 text-secondary-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;