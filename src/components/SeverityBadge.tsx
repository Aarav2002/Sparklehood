import React from 'react';

interface SeverityBadgeProps {
  severity: 'Low' | 'Medium' | 'High';
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getBadgeClasses = () => {
    switch (severity) {
      case 'Low':
        return 'bg-green-50 text-green-700 border-green-100 ring-green-600/20';
      case 'Medium':
        return 'bg-yellow-50 text-yellow-700 border-yellow-100 ring-yellow-600/20';
      case 'High':
        return 'bg-red-50 text-red-700 border-red-100 ring-red-600/20';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-100 ring-gray-600/20';
    }
  };

  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium 
        border shadow-sm ring-1 ring-inset transition-colors
        ${getBadgeClasses()}
      `}
    >
      {severity}
    </span>
  );
};

export default SeverityBadge;