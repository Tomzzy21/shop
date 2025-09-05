import React, { useState, useEffect, useRef } from 'react';

// Data for the problem-solution pairs
const problemSolutionData = [
  {
    problem: { title: 'Complex Analytics', text: 'Users struggled to understand complex credit score analytics and insights.' },
    solution: { title: 'Simplified Insights', text: 'We simplified data presentation, making credit information clear and easily understandable.' }
  },
  {
    problem: { title: 'Disjointed Communication', text: 'Teams were using multiple apps for communication, leading to missed messages and confusion.' },
    solution: { title: 'Centralized Collaboration', text: 'Our platform provides a single, unified hub for all team communication and collaboration.' }
  },
  {
    problem: { title: 'Manual Invoicing', text: 'Creating and tracking invoices manually was time-consuming and prone to human error.' },
    solution: { title: 'Automated Billing', text: 'We introduced an automated billing system that generates and sends invoices seamlessly.' }
  },
  {
    problem: { title: 'Inefficient Onboarding', text: 'New employees faced a steep learning curve with a scattered and inconsistent onboarding process.' },
    solution: { title: 'Streamlined Workflows', text: 'A guided, step-by-step onboarding workflow ensures new hires are productive from day one.' }
  }
];

// Reusable components for cards
const ProblemHeader: React.FC = () => (
  <div className="bg-white shadow-md rounded-full px-5 py-2.5 flex items-center justify-between w-64 self-start border border-gray-200/80">
    <span className="font-semibold text-gray-800">Problem</span>
    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
      <span className="font-bold text-black text-sm">!</span>
    </div>
  </div>
);

const SolutionHeader: React.FC = () => (
  <div className="bg-gradient-to-r from-[#2B63C2] to-[#23A9C8] text-white shadow-lg rounded-full px-5 py-2.5 flex items-center justify-between w-64 self-end">
    <span className="font-semibold">Solution</span>
    <div className="w-6 h-6 rounded-full bg-[#91E7B4] flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
);

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => (
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl shadow-gray-300/40 border border-gray-200/80 w-full min-h-[180px]">
    <h3 className="font-bold text-xl text-[#0A2640] mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{text}</p>
  </div>
);

interface ProblemSolutionPairProps {
  problem: { title: string; text: string };
  solution: { title: string; text: string };
}

const ProblemSolutionPair: React.FC<ProblemSolutionPairProps> = ({ problem, solution }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether the element is intersecting
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Trigger when 60% of the element is visible
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

  const solutionMargin = 'md:mt-48';

  const SVGLine = (
    <svg width="100%" height="100%" viewBox="-32 0 384 224" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-28.5 2.5 C 120 2.5, 200 221.5, 348.5 221.5" stroke="#0A2640" strokeWidth={1.5}/>
      <circle cx={-28.5} cy={2.5} r={2.5} fill="#0A2640" />
      <circle cx={348.5} cy={221.5} r={2.5} fill="#0A2640" />
    </svg>
  );

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-start justify-center gap-x-32 gap-y-16">
      {/* Connecting Line SVG */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-56 hidden md:block z-0 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {SVGLine}
      </div>

      {/* Problem Column */}
      <div className={`flex flex-col items-start gap-4 z-10 w-full max-w-sm md:w-auto mx-auto fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <ProblemHeader />
        <InfoCard title={problem.title} text={problem.text} />
      </div>

      {/* Solution Column */}
      <div
        className={`flex flex-col items-end gap-4 z-10 w-full max-w-sm md:w-auto mx-auto ${solutionMargin} fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
        style={{ transitionDelay: '400ms' }}
      >
        <InfoCard title={solution.title} text={solution.text} />
        <SolutionHeader />
      </div>
    </div>
  );
};

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 font-poppins bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-8 hidden md:block">
            <span className="bg-[#D2E862]/80 text-gray-800 text-sm font-semibold px-4 py-1.5 rounded-full">6 Section</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#0A2640] mb-24">Problem and Solution</h2>

        <div className="flex flex-col gap-y-16 md:gap-y-0">
          {problemSolutionData.map((pair, index) => (
            <ProblemSolutionPair 
              key={index}
              problem={pair.problem}
              solution={pair.solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;