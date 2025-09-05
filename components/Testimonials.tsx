
import React, { useState, useEffect, useRef } from 'react';
import { QuoteIcon, TrustpilotStarIcon, RatingStarIcon, ArrowSlimLeftIcon, ArrowSlimRightIcon } from './Icons';
import '../globals.css';

const testimonialsData = [
  {
    name: 'Karan',
    avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    time: '1 week ago',
    rating: 5,
    text: 'My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.',
  },
  {
    name: 'Catherine',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    time: '10 days ago',
    rating: 5,
    text: 'I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.',
  },
  {
    name: 'Peter',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
    time: '2 weeks ago',
    rating: 5,
    text: 'Visited to EO store. Product particularly welds, looked great. My wife and I took a small test ride in the parking lot area. We bought it with customization after the staff went over all the options. Very satisfied.',
  },
];

// Reusable typing animation hook
const useTypingEffect = (text: string, speed: number = 30, isVisible: boolean) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText('');
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
        setTimeout(() => setIsTyping(false), 500); // Hide cursor after a delay
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed, isVisible]);

  return { displayedText, isTyping };
};


const Rating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <RatingStarIcon key={index} className={`w-5 h-5 ${index < rating ? 'text-green-500' : 'text-gray-300'}`} />
    ))}
  </div>
);

const TestimonialCard: React.FC<typeof testimonialsData[0] & { isVisible: boolean }> = ({ name, rating, text, isVisible }) => {
    const { displayedText, isTyping } = useTypingEffect(text, 30, isVisible);

    return (
        <div className="flex-shrink-0 w-full sm:w-[300px]">
            <div className="bg-white p-6 rounded-xl shadow-lg relative h-full">
                <p className="text-gray-700 text-sm leading-relaxed font-mono" style={{ minHeight: '120px'}}>
                    {displayedText}
                    {isTyping && <span className="blinking-cursor">|</span>}
                </p>
                <Rating rating={rating} />
                {/* Speech bubble pointer */}
                <div className="absolute bottom-[-9px] left-12 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" style={{filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))'}} />
            </div>
            <div className="mt-6 pl-4">
                <p className="font-bold text-gray-800">{name}</p>
            </div>
        </div>
    );
};

const AnimatedTestimonialCardWrapper: React.FC<typeof testimonialsData[0]> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.8 }
        );
        const currentRef = ref.current;
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
        <div ref={ref}>
            <TestimonialCard {...props} isVisible={isVisible} />
        </div>
    );
};


const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50/70 font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <QuoteIcon className="w-12 h-9 text-gray-300 mx-auto mb-4" />
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2640] mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
          
          {/* Navigation Buttons - Only show on mobile */}
          <div className="flex items-center justify-center gap-4 sm:hidden">
            <button aria-label="Previous testimonial" className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
              <ArrowSlimLeftIcon className="w-5 h-5" />
            </button>
            <div className="w-20 h-0.5 bg-gray-300 rounded-full"></div>
            <button aria-label="Next testimonial" className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
              <ArrowSlimRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide snap-x snap-mandatory sm:snap-none">
            <div className="flex space-x-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 sm:space-x-0 w-full">
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="w-[85vw] sm:w-full flex-shrink-0 snap-center sm:snap-none">
                  <AnimatedTestimonialCardWrapper {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;