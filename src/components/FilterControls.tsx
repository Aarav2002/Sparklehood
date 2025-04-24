import React from 'react';
import { SeverityFilter, SortDirection } from '../types';
import { ArrowUpDown, Filter, ListFilter } from 'lucide-react';

interface FilterControlsProps {
  severityFilter: SeverityFilter;
  sortDirection: SortDirection;
  onChangeSeverity: (filter: SeverityFilter) => void;
  onChangeSort: (direction: SortDirection) => void;
  totalIncidents: number;
  filteredCount: number;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  severityFilter,
  sortDirection,
  onChangeSeverity,
  onChangeSort,
  totalIncidents,
  filteredCount
}) => {
  const severityOptions: SeverityFilter[] = ['All', 'Low', 'Medium', 'High'];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex items-center gap-2">
          <ListFilter size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">
            Showing {filteredCount} of {totalIncidents} incidents
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-grow">
          <div className="flex items-center gap-3">
            <Filter size={16} className="text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {severityOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => onChangeSeverity(option)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    severityFilter === option
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:ml-auto">
            <ArrowUpDown size={16} className="text-gray-500" />
            <div className="flex gap-2">
              <button
                onClick={() => onChangeSort('newest')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  sortDirection === 'newest'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Newest First
              </button>
              <button
                onClick={() => onChangeSort('oldest')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  sortDirection === 'oldest'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Oldest First
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;