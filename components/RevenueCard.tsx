
import React from 'react';
import Card from './Card';
import { PlusIcon } from './Icons';

const RevenueCard: React.FC = () => {
  return (
    <Card>
      <h3 className="text-sm font-semibold text-gray-500 mb-2">Total Revenue</h3>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#D2E862] flex items-center justify-center">
           <PlusIcon className="w-4 h-4 text-[#0A2640]" />
        </div>
        <p className="text-3xl font-bold text-[#0A2640]">4.32k</p>
      </div>
    </Card>
  );
};

export default RevenueCard;
