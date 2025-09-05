
import React from 'react';
import Card from './Card';

const GrowthCard: React.FC = () => {
  return (
    <Card className="flex flex-col gap-3">
        <button className="w-full text-left px-4 py-2 text-sm font-semibold text-white bg-[#0A2640] rounded-lg hover:bg-gray-800">
            Details
        </button>
      <div>
        <p className="text-3xl font-bold text-[#0A2640]">75%</p>
        <p className="text-xs text-gray-500">Member Growth</p>
      </div>
    </Card>
  );
};

export default GrowthCard;
