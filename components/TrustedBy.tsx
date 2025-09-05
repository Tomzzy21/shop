import React from 'react';
import {
  TechStartupIcon,
  ECommerceIcon,
  ConsultingIcon,
  RestaurantIcon,
  RetailIcon,
} from './Icons';

const trustedByData = [
  { icon: TechStartupIcon, name: 'Tech Startup' },
  { icon: ECommerceIcon, name: 'E-commerce Store' },
  { icon: ConsultingIcon, name: 'Consulting Firm' },
  { icon: RestaurantIcon, name: 'Restaurant/Cafe' },
  { icon: RetailIcon, name: 'Retail Business' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 mb-8">
            As featured and trusted by:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-12 gap-y-6">
            {trustedByData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors" role="listitem">
                <item.icon className="h-6 w-6" aria-hidden="true" />
                <span className="font-semibold text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;