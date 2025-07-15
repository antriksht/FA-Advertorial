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
      answer: "Yes, our advisor matching service is completely free for consumers. We’re compensated by the financial advisors and firms in our network when a successful match is made through our platform. There’s no cost or obligation for the consumer."
    },
    {
      question: "What if I already have an advisor?",
      answer: "You're welcome to use our service to see if there might be a better fit for your current needs. Many clients find advisors who offer services their current advisor doesn't, or who specialize in specific areas relevant to their changing financial situation."
    },
    {
      question: "Will I be contacted directly?",
      answer: (
        <>
          Yes, we will contact you to verify your information so we can ensure the best advisor match. Once matched, the recommended 2 to 3 advisors will reach out directly by email or phone to introduce themselves.
          <br />
          <br />
          This is a great opportunity to ask questions, get to know them, and take advantage of the free initial consultation. There’s absolutely no obligation to hire anyone.
        </>
      )
    },
    {
      question: "How do you vet the advisors?",
      answer: "All advisors in our network go through a rigorous screening process, which includes credential verification, regulatory background checks, and a review of their compensation structure to ensure they are fee-only or fee-based. We work exclusively with licensed financial professionals who meet our standards."
    },
    {
      question: "What types of financial advisors are in your network?",
      answer: "Our network includes Certified Financial Planners (CFPs), Registered Investment Advisors (RIAs), wealth managers, retirement specialists, and other financial professionals who can address a wide range of financial planning, retirement, and investment needs."
    },
    {
      question: "Is there a minimum asset requirement to be matched?",
      answer: "Yes, the minimum asset requirement is $100,000. Our network includes advisors who work with clients across a wide range of financial situations—from individuals just beginning to build wealth to high-net-worth clients with more complex financial needs."
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
            <h2 className="font-inter text-3xl md:text-4xl font-medium text-primary-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg md:text-m text-secondary-600 max-w-3xl mx-auto mb-10 leading-relaxed">
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