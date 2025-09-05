import React from 'react';
import { ArrowRightIcon } from './Icons';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2640] mb-6">Get Started in 3 Simple Steps</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We make professional bookkeeping incredibly easy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 Card */}
          <div className="bg-[#F0F9F8] rounded-3xl p-8 flex flex-col items-start shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center">
              <img 
                src="/step1.png" 
                alt="A person booking a call on a calendar interface" 
                className="h-full w-auto object-contain" 
              />
            </div>
            <span className="text-sm font-bold text-gray-500 mb-2">Step 1</span>
            <h3 className="text-2xl font-bold text-[#0A2640] mb-4">Schedule a Free Consultation</h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              Click the button below to book a quick, 15-minute call. We'll learn about your business, assess your needs, and recommend the perfect plan.
            </p>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-[#0A2640] bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 ring-1 ring-gray-300">
              Book a Free Call
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Step 2 Card */}
          <div className="bg-[#F7F6FF] rounded-3xl p-8 flex flex-col items-start shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center">
              <img 
                src="/step2.png" 
                alt="Connecting accounts illustration" 
                className="h-full w-auto object-contain" 
              />
            </div>
            <span className="text-sm font-bold text-gray-500 mb-2">Step 2</span>
            <h3 className="text-2xl font-bold text-[#0A2640] mb-4">Securely Connect Your Accounts</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              We'll help you set up and securely link your business bank accounts and payment platforms to our system. The process is fast, encrypted, and read-only.
            </p>
          </div>

          {/* Step 3 Card */}
          <div className="bg-[#FFF8F0] rounded-3xl p-8 flex flex-col items-start shadow-lg border border-gray-200/50 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-white flex items-center justify-center">
              <img 
                src="/step3.png" 
                alt="Relaxing with completed bookkeeping" 
                className="h-full w-auto object-contain" 
              />
            </div>
            <span className="text-sm font-bold text-gray-500 mb-2">Step 3</span>
            <h3 className="text-2xl font-bold text-[#0A2640] mb-4">Relax. Your Bookkeeping is Done.</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              We take it from here. Your dedicated bookkeeper categorizes your transactions and prepares your financial reports. You get more time and complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;