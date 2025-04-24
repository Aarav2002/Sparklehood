import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, AlertTriangle } from 'lucide-react';
import { Incident } from '../types';
import SeverityBadge from './SeverityBadge';
import { formatDate } from '../utils/formatters';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="hover-card bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            {incident.severity === 'High' && (
              <AlertTriangle className="flex-shrink-0 text-red-500 mt-1" size={20} />
            )}
            <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
          </div>
          <div className="flex items-center gap-4">
            <SeverityBadge severity={incident.severity} />
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1.5" />
              {formatDate(incident.reported_at)}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <button
            onClick={toggleExpand}
            className="button-secondary px-3 py-1.5 rounded-lg text-sm inline-flex items-center"
          >
            {isExpanded ? (
              <>
                <span>Hide details</span>
                <ChevronUp size={16} className="ml-1.5" />
              </>
            ) : (
              <>
                <span>View details</span>
                <ChevronDown size={16} className="ml-1.5" />
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <p className="text-gray-700 leading-relaxed">{incident.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncidentItem;