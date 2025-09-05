
import React from 'react';
import { BriefcaseIcon } from './Icons';

const ManageProjectsCard: React.FC = () => {
  return (
    <div className="bg-[#F0F9F8] p-3 rounded-2xl shadow-lg w-48">
      <div className="mb-2">
        <div className="bg-[#D1E8E4] inline-block p-[6px] rounded-full">
          <BriefcaseIcon className="w-4 h-4 text-[#0A2640]" />
        </div>
      </div>
      <h3 className="text-sm font-bold text-[#0A2640] mb-1">Manage your Projects</h3>
      <p className="text-xs text-gray-600 leading-relaxed">
        Streamline Your Team's Productivity: Powerful Project Management Made Simple
      </p>
    </div>
  );
};
export default ManageProjectsCard;