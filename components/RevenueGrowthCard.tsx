
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const data = [
  { name: 'A', value: 40, color: '#C8B6E2' },
  { name: 'B', value: 85, color: '#A9D1F7' },
  { name: 'C', value: 35, color: '#D8C8E8' },
  { name: 'D', value: 70, color: '#5C85E7' },
  { name: 'E', value: 20, color: '#B5DAF8' },
  { name: 'F', value: 65, color: '#C8B6E2' },
];

const RevenueGrowthCard: React.FC = () => {
  return (
    <div className="bg-white/50 backdrop-blur-lg p-4 rounded-2xl shadow-2xl shadow-gray-300/30 border border-white/30 w-56">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-bold text-[#0A2640]">Revenue Growth</h3>
        <p className="text-sm text-gray-600">Daily</p>
      </div>
      <div className="h-28 -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} className="opacity-80" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGrowthCard;
