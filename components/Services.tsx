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
const ProcessCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto md:mx-0 transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
    {/* Tag hole */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-6 h-6 bg-gray-50 border-2 border-white rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-gray-500 rounded-full shadow-inner"></div>
      </div>
    </div>
    <div className="pt-6">
      <p className="text-gray-400 font-bold text-lg mb-2">{number}</p>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
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
    // Defines the visual order of cards for the zig-zag layout with 5 items
    const displayOrder = [0, 1, 2, 3, 4];

    return (
        <section className="py-12 md:py-24 font-poppins bg-white" style={{
            backgroundImage: `
                linear-gradient(rgba(237, 242, 247, 0.8) 0.5px, transparent 0.5px),
                linear-gradient(90deg, rgba(237, 242, 247, 0.8) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '20px 20px',
        }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="max-w-xl mb-12 md:mb-24 relative px-4">
                    <span className="inline-block py-1 px-4 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-full mb-4">
                        Our Services
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-5 leading-tight">
                        Everything You Need for Financial Peace of Mind
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        We combine modern technology with expert human bookkeepers to deliver a service you can rely on.
                    </p>
                    <div className="absolute top-4 md:top-8 -right-4 md:-right-8 transform hidden lg:block">
                        <SquigglyArrowIcon />
                    </div>
                </div>

                {/* Process Steps Section */}
                <div className="relative max-w-6xl mx-auto px-4">
                    {/* SVG Connecting Line for Desktop */}
                    <div className="absolute top-0 left-0 w-full h-full -z-1 hidden md:block" aria-hidden="true">
                        <svg width="100%" height="100%" viewBox="0 0 800 1000" preserveAspectRatio="none">
                            <path
                                d="M 700 50 C 700 100 700 100 700 150 C 750 250 50 300 150 400 C 250 500 550 450 650 550 C 750 650 50 600 150 750 C 250 900 300 900 400 920"
                                fill="none"
                                stroke="#CBD5E0"
                                strokeWidth={2}
                                strokeDasharray="8 8"
                            />
                        </svg>
                    </div>

                    {/* Cards Grid - Mobile First */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20">
                        {displayOrder.map((dataIndex, index) => {
                            const data = processData[dataIndex];
                            return (
                                <div 
                                    key={dataIndex} 
                                    className={`${index % 2 === 0 ? 'md:mt-0 lg:mt-20' : ''} ${index === displayOrder.length - 1 ? 'md:col-span-2' : ''}`}
                                >
                                    <AnimatedCardWrapper delay={index * 200}>
                                        <ProcessCard {...data} />
                                    </AnimatedCardWrapper>
                                </div>
                            );
                        })}
                    </div>

                    {/* "Ready to be delivered!" Text */}
                    <div className="hidden md:block absolute bottom-[-2rem] right-[5%] lg:right-[15%] transform -rotate-6">
                        <p className="text-base md:text-lg font-semibold text-gray-600">
                            · Ready to be delivered!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;