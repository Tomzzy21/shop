
import React from 'react';
import Card from './Card';

const BalanceCard: React.FC = () => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-500">Balance</h3>
        <button className="px-3 py-1 text-xs font-semibold text-white bg-[#0A2640] rounded-full">Reserved</button>
      </div>
      <p className="text-3xl font-bold text-[#0A2640] mb-4">$60,124.00</p>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#B9FF66]"></span>
        <p className="text-xs font-semibold text-gray-600">Pine</p>
        <div className="flex-grow bg-gray-200 rounded-full h-1.5 ml-2">
          <div className="bg-[#B9FF66] h-1.5 rounded-full" style={{ width: '70%' }}></div>
        </div>
      </div>
    </Card>
  );
};

export default BalanceCard;
