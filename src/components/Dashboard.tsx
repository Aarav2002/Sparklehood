import React, { useState, useEffect } from 'react';
import { initialIncidents } from '../data/mockData';
import { Incident, SeverityFilter, SortDirection } from '../types';
import FilterControls from './FilterControls';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import { AlertCircle, Plus, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filteredIncidents, setFilteredIncidents] = useState<Incident[]>(initialIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('All');
  const [sortDirection, setSortDirection] = useState<SortDirection>('newest');
  const [showForm, setShowForm] = useState(false);

  const highSeverityCount = incidents.filter(i => i.severity === 'High').length;

  useEffect(() => {
    let result = [...incidents];
    
    if (severityFilter !== 'All') {
      result = result.filter((incident) => incident.severity === severityFilter);
    }
    
    result.sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortDirection === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredIncidents(result);
  }, [incidents, severityFilter, sortDirection]);

  const handleAddIncident = (newIncident: Omit<Incident, 'id' | 'reported_at'>) => {
    const incidentToAdd: Incident = {
      ...newIncident,
      id: Math.max(0, ...incidents.map((i) => i.id)) + 1,
      reported_at: new Date().toISOString()
    };
    
    setIncidents((prev) => [...prev, incidentToAdd]);
    setShowForm(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <AlertCircle className="mr-3 text-blue-600" size={32} />
            AI Safety Incident Dashboard
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Monitor and manage AI safety incidents across your organization
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
          {highSeverityCount > 0 && (
            <div className="flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-lg border border-red-100">
              <AlertTriangle className="mr-2" size={16} />
              <span className="text-sm font-medium">
                {highSeverityCount} High Severity {highSeverityCount === 1 ? 'Incident' : 'Incidents'}
              </span>
            </div>
          )}
          
          <button
            onClick={() => setShowForm(true)}
            className="button-primary px-4 py-2 rounded-lg shadow-sm inline-flex items-center"
          >
            <Plus size={18} className="mr-1.5" />
            Report New Incident
          </button>
        </div>
      </div>

      {showForm && (
        <div className="mb-8 animate-slideIn">
          <IncidentForm
            onSubmit={handleAddIncident}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      <FilterControls
        severityFilter={severityFilter}
        sortDirection={sortDirection}
        onChangeSeverity={setSeverityFilter}
        onChangeSort={setSortDirection}
        totalIncidents={incidents.length}
        filteredCount={filteredIncidents.length}
      />

      <div className="animate-scaleIn">
        <IncidentList incidents={filteredIncidents} />
      </div>
    </div>
  );
};

export default Dashboard;