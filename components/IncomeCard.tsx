import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import Card from './Card';
import { ChevronDownIcon } from './Icons';

const data = [
    { name: 'M', value: 1800 },
    { name: 'T', value: 1500 },
    { name: 'W', value: 2400 },
    { name: 'T', value: 2100 },
    { name: 'F', value: 2890 }, // Highlighted point
    { name: 'S', value: 2300 },
    { name: 'S', value: 2600 },
  ];

const CustomizedDot: React.FC<any> = (props) => {
    const { cx, cy, payload } = props;
  
    if (payload.name === 'F') {
      return (
        <g>
          <circle cx={cx} cy={cy} r={5} stroke="#0A2640" strokeWidth={2} fill="white" />
          <foreignObject x={cx - 35} y={cy - 40} width={70} height={28}>
             {/* FIX: The 'xmlns' attribute is necessary for rendering HTML within an SVG <foreignObject> but is not recognized by React's TypeScript types for a div. */}
             {/* @ts-ignore */}
             <div xmlns="http://www.w3.org/1999/xhtml" className="bg-[#D2E862] text-[#0A2640] px-2 py-1 rounded-md text-xs font-bold shadow-lg text-center">
                $2,890
              </div>
          </foreignObject>
        </g>
      );
    }
    return null;
  };
  
const IncomeCard: React.FC = () => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-[#0A2640]">Income & Expenses</h3>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="h-32 -ml-4">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" horizontal={true} vertical={false} />
                <Tooltip content={<div/>} cursor={false} />
                <Line type="monotone" dataKey="value" stroke="#0A2640" strokeWidth={2} dot={<CustomizedDot />} activeDot={false} />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default IncomeCard;