import React from 'react';
import { Incident } from '../types';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  if (incidents.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
        <p className="text-gray-500">No incidents match your current filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;