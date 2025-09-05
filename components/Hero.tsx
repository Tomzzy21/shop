import React from 'react';

interface DoodleProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Doodle = ({ className = '', children, style = {} }: DoodleProps) => (
  <div 
    className={`absolute -z-10 opacity-30 hover:opacity-50 transition-all duration-300 ${className}`}
    style={style}
  >
    {children}
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-16 font-poppins overflow-hidden">
      {/* Larger, more visible doodles */}
      {/* Top Section */}
      <Doodle className="top-20 left-4 sm:left-10">
        <svg width="30" height="30" viewBox="0 0 100 100" className="text-[#0A2640] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M50,30 L50,70 M30,50 L70,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </Doodle>
      
      <Doodle className="top-10 right-4 sm:right-10">
        <svg width="25" height="25" viewBox="0 0 100 100" className="text-[#0A2640] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]">
          <path d="M20,50 Q50,20 80,50 T140,50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </Doodle>
      
      {/* Left and Right of Title */}
      <Doodle className="top-1/4 left-5 -translate-y-1/2">
        <svg width="35" height="35" viewBox="0 0 100 100" className="text-[#0A2640]">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </Doodle>
      
      <Doodle className="top-1/4 right-5 -translate-y-1/2">
        <svg width="45" height="45" viewBox="0 0 100 100" className="text-[#0A2640]">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5,5" />
        </svg>
      </Doodle>
      
      {/* Around Subtitle */}
      <Doodle className="top-1/2 left-1/4 -translate-y-1/2">
        <svg width="30" height="30" viewBox="0 0 100 100" className="text-[#0A2640]">
          <path d="M50,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      </Doodle>
      
      <Doodle className="top-1/2 right-1/4 -translate-y-1/2">
        <svg width="35" height="35" viewBox="0 0 100 100" className="text-[#0A2640]">
          <path d="M50,20 L80,50 L50,80 L20,50 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </Doodle>
      
      {/* Around Button */}
      <Doodle className="top-3/4 left-1/4 -translate-y-1/2">
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#0A2640]">
          <path d="M20,50 Q50,80 80,50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </Doodle>
      
      <Doodle className="top-3/4 right-1/4 -translate-y-1/2">
        <svg width="30" height="30" viewBox="0 0 100 100" className="text-[#0A2640]">
          <circle cx="50" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M40,60 L60,60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35,75 L65,75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </Doodle>
      
      {/* Bottom Section */}
      <Doodle className="bottom-20 left-10">
        <svg width="45" height="45" viewBox="0 0 100 100" className="text-[#0A2640]">
          <path d="M20,50 Q50,10 80,50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </Doodle>
      
      <Doodle className="bottom-10 right-10">
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#0A2640]">
          <rect x="25" y="25" width="50" height="50" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <line x1="40" y1="25" x2="40" y2="75" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </Doodle>
      
      {/* Dynamic Doodles - Reduced to 40 for better mobile performance */}
      {[...Array(40)].map((_, i) => {
        // More size variation (15-45px)
        const size = 15 + (i % 7) * 4;
        // More rotation variation
        const rotation = i * 9;
        // Higher base opacity
        const opacity = 0.15 + (i % 7) * 0.03;
        // Staggered animations
        const animationDelay = `${(i % 6) * 0.2}s`;
        // More animations (2 out of 3)
        const isAnimated = i % 3 !== 0;
        
        // More position variations
        const positionClasses = [
          // Top section
          `top-[${5 + (i * 1) % 15}%] left-[${5 + (i * 2) % 25}%]`,
          `top-[${5 + (i * 2) % 15}%] right-[${5 + (i * 3) % 25}%]`,
          // Middle section
          `top-[${30 + (i * 3) % 20}%] left-[${10 + (i * 2) % 20}%]`,
          `top-[${30 + (i * 4) % 20}%] right-[${10 + (i * 3) % 20}%]`,
          // Bottom section
          `bottom-[${10 + (i * 2) % 15}%] left-[${5 + (i * 4) % 25}%]`,
          `bottom-[${5 + (i * 3) % 15}%] right-[${5 + (i * 2) % 25}%]`,
          // Diagonal patterns
          `top-[${10 + (i * 2) % 20}%] left-[${20 + (i * 3) % 30}%]`,
          `top-[${15 + (i * 3) % 20}%] right-[${15 + (i * 2) % 30}%]`,
          // More spread out positions
          `top-[${20 + (i * 4) % 30}%] left-[${30 + (i * 2) % 20}%]`,
          `top-[${25 + (i * 5) % 30}%] right-[${25 + (i * 3) % 25}%]`
        ];
        
        const position = positionClasses[i % positionClasses.length];
        
        // More shape variations
        const shapes = [
          // Basic shapes
          <circle key="circle" cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1.8" />,
          <path key="cross" d="M20,50 L80,50 M50,20 L50,80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
          <rect key="square" x="20" y="20" width="60" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />,
          // Triangles and polygons
          <path key="triangle" d="M50,15 L85,85 L15,85 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
          <path key="diamond" d="M50,15 L85,50 L50,85 L15,50 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
          <path key="hexagon" d="M30,50 L50,15 L70,50 L70,50 L50,85 L30,50 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
          <path key="pentagon" d="M50,10 L80,40 L65,85 L35,85 L20,40 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
          // Stars and decorative
          <path key="star" d="M50,5 L65,40 L100,40 L70,60 L85,95 L50,75 L15,95 L30,60 L0,40 L35,40 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />,
          <path key="star2" d="M50,10 L60,30 L80,35 L65,50 L70,75 L50,65 L30,75 L35,50 L20,35 L40,30 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />,
          <path key="heart" d="M50,20 Q60,0 80,10 Q100,30 50,70 Q0,30 20,10 Q40,0 50,20 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />,
          <path key="moon" d="M30,50 A30,30 0 1,1 70,50 A15,15 0 0,0 30,50 Z" fill="none" stroke="currentColor" strokeWidth="2" />,
          // Document and chart shapes
          <path key="doc" d="M25,15 L75,15 L85,35 L85,85 L15,85 L15,25 Z M75,35 L55,35 L55,15" fill="none" stroke="currentColor" strokeWidth="2" />,
          <path key="chart" d="M20,80 L20,40 L40,60 L60,30 L80,50 L80,80 Z M20,80 L80,80" fill="none" stroke="currentColor" strokeWidth="2" />,
          // Abstract shapes
          <path key="spiral" d="M50,10 C70,10 90,30 90,50 C90,70 70,80 50,80 C30,80 10,60 10,40 C10,20 30,20 50,30 C60,35 65,45 60,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
          <path key="bracket" d="M30,20 L50,20 Q60,20 60,30 L60,70 Q60,80 50,80 L30,80 M70,20 L90,20 M70,80 L90,80" fill="none" stroke="currentColor" strokeWidth="2" />
        ];
        
        return (
          <div key={`doodle-${i}`}>
            <Doodle 
              className={`${position} ${isAnimated ? 'animate-float' : ''} block`}
              style={{
                animationDelay: isAnimated ? animationDelay : '0s',
                opacity: `calc(${opacity} * 0.7)`,
                zIndex: -10 - (i % 5),
                transform: 'scale(0.9)'
              }}
            >
              <svg 
                width={size} 
                height={size} 
                viewBox="0 0 100 100" 
                className="text-[#0A2640]"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: 'all 0.3s ease'
                }}
              >
                {shapes[i % shapes.length]}
              </svg>
            </Doodle>
          </div>
        );
      })}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2640] leading-tight">
          Effortless Bookkeeping for Nigerian Businesses
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-relaxed">
          Stop drowning in spreadsheets and chasing receipts. Get accurate, tax-ready financials every month, so you can focus on what you do best: growing your business.
        </p>
        <div className="mt-10 flex justify-center">
          <a 
            href="#" 
            className="px-8 py-4 text-lg font-bold text-white bg-[#0A2640] rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105 relative z-20"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;