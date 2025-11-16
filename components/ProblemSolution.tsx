import React, { useState, useEffect, useRef } from 'react';

// Data for the problem-solution pairs
const problemSolutionData = [
  {
    problem: { 
      title: 'Financial Disorganization', 
      text: 'Many businesses struggle with disorganized financial records, making it difficult to track expenses, revenue, and overall financial health.' 
    },
    solution: { 
      title: 'Organized Bookkeeping', 
      text: 'We implement systematic bookkeeping processes that keep your financial records accurate, up-to-date, and easily accessible for better decision-making.' 
    }
  },
  {
    problem: { 
      title: 'Tax Compliance Headaches', 
      text: 'Staying compliant with ever-changing tax regulations can be overwhelming and time-consuming for business owners.' 
    },
    solution: { 
      title: 'Expert Tax Guidance', 
      text: 'Our team stays current with tax laws to ensure your business remains compliant while maximizing available deductions and credits.' 
    }
  },
  {
    problem: { 
      title: 'Cash Flow Uncertainty', 
      text: 'Many businesses struggle with unpredictable cash flow, making it challenging to plan for growth and manage expenses.' 
    },
    solution: { 
      title: 'Cash Flow Management', 
      text: 'We provide detailed cash flow analysis and forecasting to help you maintain healthy finances and make informed business decisions.' 
    }
  },
  {
    problem: { 
      title: 'Time-Consuming Processes', 
      text: 'Manual data entry and reconciliation take valuable time away from focusing on core business activities.' 
    },
    solution: { 
      title: 'Efficient Automation', 
      text: 'We leverage modern accounting software to automate repetitive tasks, saving you time and reducing the risk of human error.' 
    }
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
    <div ref={ref} className="relative flex flex-col lg:flex-row items-start justify-center gap-x-8 xl:gap-x-32 gap-y-8 lg:gap-y-16 w-full">
      {/* Connecting Line SVG - Only show on larger screens */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 lg:w-96 h-40 lg:h-56 hidden lg:block z-0 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {SVGLine}
      </div>

      {/* Problem Column */}
      <div className={`flex flex-col items-start gap-4 z-10 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}>
        <ProblemHeader />
        <InfoCard title={problem.title} text={problem.text} />
      </div>

      {/* Solution Column */}
      <div
        className={`flex flex-col items-end lg:items-start gap-4 z-10 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:mt-48 fade-in-on-scroll ${isVisible ? 'is-visible' : ''}`}
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
    <section className="py-16 lg:py-24 font-poppins bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#0A2640] mb-12 lg:mb-24">Problem and Solution</h2>

        <div className="flex flex-col gap-y-12 lg:gap-y-16">
          {problemSolutionData.map((pair, index) => (
            <div key={index} className="w-full">
              <ProblemSolutionPair 
                problem={pair.problem}
                solution={pair.solution}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;