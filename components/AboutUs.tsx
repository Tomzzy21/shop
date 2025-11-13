import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-24 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div>
            <img
              src="/group-photo.jpg"
              alt="The Bookkeeping Practice NG Team"
              className="rounded-2xl shadow-2xl w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A2640] leading-tight">
              Your Partner in Financial Clarity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Bookkeeping Practice-Ng was founded to help small businesses implement systems for effective cashflow management and decision making. We educate, inspire and direct you in the best way to optimize your business for profitability.
            </p>
            
            {/* Goal Section */}
            <div className="bg-gray-50/80 p-6 rounded-xl border border-gray-200/60">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                Our Goal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                We are here to help business owners reach their goals financially. Our primary aim is for every client to be able to make better business decisions and grow financially, because we understand that accounting is critical to the success of every small business.
                </p>
            </div>

            <p className="text-gray-600 leading-relaxed font-semibold">
              Your business may be starting small today, but together we'll ensure it doesn't stay small. Let's create something great together.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
