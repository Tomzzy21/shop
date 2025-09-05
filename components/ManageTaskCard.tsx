
import React from 'react';
import { TaskIcon } from './Icons';

const ManageTaskCard: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-xl w-64 border-2 border-gray-900">
      <div className="mb-2">
        <div className="bg-[#E9E9F7] inline-block p-2 rounded-full">
          <TaskIcon className="w-5 h-5 text-[#0A2640]" />
        </div>
      </div>
      <h3 className="text-base font-bold text-[#0A2640] mb-1">Manage your Task</h3>
      <p className="text-xs text-gray-600 leading-relaxed">
        Stay Organized and On Top of Your Tasks: The Ultimate Task Management Solution
      </p>
    </div>
  );
};

export default ManageTaskCard;