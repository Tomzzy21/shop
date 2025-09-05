
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-2xl shadow-gray-300/40 border border-gray-200/80 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
