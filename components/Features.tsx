import React from 'react';

// Data for the feature cards based on the provided image
const featuresData = [
  {
    number: '01',
    title: 'Dashboard Insights',
    description: "Get a clear, real-time overview of your business's financial health with our intuitive and customizable dashboard.",
    barColor: '#f5c542',
    titleColor: '#d4a21c',
    barPosition: 'top',
  },
  {
    number: '02',
    title: 'Expense Tracking',
    description: 'Effortlessly track every expense. Connect your accounts and let our smart system categorize your spending automatically.',
    barColor: '#8c9bab',
    titleColor: '#6e7a88',
    barPosition: 'bottom',
  },
  {
    number: '03',
    title: 'Invoice Management',
    description: 'Create, send, and manage professional invoices in minutes. Get paid faster with automated reminders and online payments.',
    barColor: '#8bc53f',
    titleColor: '#6a9b2e',
    barPosition: 'top',
  },
  {
    number: '04',
    title: 'Financial Reports',
    description: 'Generate essential reports like P&L, Balance Sheets, and Cash Flow statements to make data-driven decisions.',
    barColor: '#30c1a6',
    titleColor: '#24907b',
    barPosition: 'bottom',
  },
  {
    number: '05',
    title: 'Tax Preparation',
    description: 'Simplify tax season. We organize your financials, making it easy for you or your accountant to file accurately and on time.',
    barColor: '#4d82c2',
    titleColor: '#3a6394',
    barPosition: 'top',
  },
] as const;

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  barColor: string;
  titleColor: string;
  barPosition: 'top' | 'bottom';
  blurEdge?: 'top' | 'bottom';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, barColor, titleColor, barPosition, blurEdge }) => {
  const Bar = () => (
    <div 
      className="h-2" 
      style={{ backgroundColor: barColor }} 
    />
  );
  
  const Content = () => (
    <div className="p-6 flex-grow flex flex-col">
      <span className="text-4xl font-bold text-gray-400">{number}</span>
      <h3 className="font-semibold text-sm mt-2 mb-1 uppercase tracking-wider" style={{ color: titleColor }}>{title}</h3>
      <hr className="w-10 border-t" style={{borderColor: titleColor}}/>
      <p className="text-xs text-gray-600 mt-4 leading-relaxed">
        {description}
      </p>
    </div>
  );
  
  let blurClass = '';
  if (blurEdge === 'bottom') {
    blurClass = 'mask-gradient-bottom';
  } else if (blurEdge === 'top') {
    blurClass = 'mask-gradient-top';
  }

  return (
    <div className={`bg-white flex flex-col rounded-lg shadow-md overflow-hidden w-56 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${blurClass}`}>
      {barPosition === 'top' ? (
        <>
          <Bar />
          <Content />
        </>
      ) : (
        <>
          <Content />
          <Bar /> 
        </>
      )}
    </div>
  );
};


const Features: React.FC = () => {
  return (
    <section className="py-24 font-poppins bg-[#F3F4F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2640] mb-6">
            Everything You Need for Financial Peace of Mind
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We combine modern technology with expert human bookkeepers to deliver a service you can rely on.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-6">
          {featuresData.map((feature, index) => {
            const isStaggered = index === 1 || index === 3;
            const blurEdge = feature.barPosition === 'top' ? 'bottom' : 'top';
            return (
              <div key={index} className={`flex-shrink-0 ${isStaggered ? 'lg:mt-8' : ''}`}>
                <FeatureCard {...feature} blurEdge={blurEdge} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;