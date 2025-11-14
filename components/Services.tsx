import React, { useState, useEffect, useRef } from 'react';

// Data for the process steps from the image
const processData = [
  {
    number: '01',
    title: 'Dedicated Bookkeeper',
    description: "Get a dedicated finance professional who understands the specifics of your business and Nigerian tax laws. They're a part of your team, without the cost of a full-time hire.",
  },
  {
    number: '02',
    title: 'Accurate Monthly Reports',
    description: 'Receive clear, easy-to-understand financial statements every month, including your Profit & Loss, Balance Sheet, and Cash Flow Statement. Make decisions based on data, not guesswork.',
  },
  {
    number: '03',
    title: 'Seamless Receipt & Invoice Capture',
    description: "Simply snap a photo of a receipt with your phone or forward an invoice to a dedicated email. We'll handle the coding, categorization, and storage for you.",
  },
  {
    number: '04',
    title: 'Tax-Ready Financials',
    description: 'Breeze through tax season. We provide your accountant with perfectly organized, accurate financial records, making VAT, WHT, and Company Income Tax filings simple and stress-free.',
  },
  {
    number: '05',
    title: 'Secure Cloud Platform',
    description: 'Access your financial data anytime, anywhere. We use bank-level security to ensure your sensitive information is always safe and secure.',
  },
];

// Reusable component for the process cards, styled as tags
const ProcessCard: React.FC<{ number: string; title: string; description: string; }> = ({ number, title, description }) => (
  <div className="relative bg-white p-6 rounded-2xl shadow-lg w-64 sm:w-72 flex-shrink-0 transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
          <span className="text-gray-600 font-bold">{number}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// The squiggly arrow icon from the image
const SquigglyArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="46" height="18" viewBox="0 0 46 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1 1C7.33333 4.16667 19.3 12.4 28.5 12.5C37.7 12.6 42.5 9 45 1" stroke="#2D3748" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 1L41 5.5" stroke="#2D3748" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 1L38.5 2" stroke="#2D3748" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 17C7.33333 13.8333 19.3 5.6 28.5 5.5C37.7 5.4 42.5 9 45 17" stroke="#2D3748" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 17L41 12.5" stroke="#2D3748" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M45 17L38.5 16" stroke="#2D3748" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const AnimatedCardWrapper: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.3, 
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const Services: React.FC = () => {
    return (
        <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">How We Work</h2>
                    <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                        Our streamlined process ensures your books are always accurate and up-to-date.
                    </p>
                </div>

                <div className="relative w-full">
                    {/* Process cards with horizontal scrolling */}
                    <div className="relative">
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex space-x-6 w-max min-w-full">
                        {processData.map((step, index) => (
                            <div key={step.number} className="flex-shrink-0">
                                <AnimatedCardWrapper delay={index * 0.2}>
                                    <ProcessCard {...step} />
                                </AnimatedCardWrapper>
                            </div>
                        ))}
                            </div>
                        </div>
                    </div>

                    {/* "Ready to be delivered!" Text */}
                    <div className="text-center mt-8">
                        <p className="text-base sm:text-lg font-semibold text-gray-600">
                            · Ready to be delivered! ·
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;