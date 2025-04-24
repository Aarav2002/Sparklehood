import React, { useState } from 'react';
import { Incident } from '../types';
import { X, AlertTriangle } from 'lucide-react';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id' | 'reported_at'>) => void;
  onCancel: () => void;
}

const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Medium');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { title?: string; description?: string } = {};
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        title: title.trim(),
        description: description.trim(),
        severity
      });
      
      setTitle('');
      setDescription('');
      setSeverity('Medium');
      setErrors({});
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Report New Incident</h2>
        <button
          onClick={onCancel}
          className="p-1.5 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`input-base ${errors.title ? 'border-red-300' : ''}`}
            placeholder="Enter incident title"
          />
          {errors.title && (
            <div className="mt-1.5 flex items-center text-sm text-red-600">
              <AlertTriangle size={14} className="mr-1" />
              {errors.title}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className={`input-base ${errors.description ? 'border-red-300' : ''}`}
            placeholder="Provide details about the incident"
          />
          {errors.description && (
            <div className="mt-1.5 flex items-center text-sm text-red-600">
              <AlertTriangle size={14} className="mr-1" />
              {errors.description}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Severity
          </label>
          <div className="flex gap-6">
            {(['Low', 'Medium', 'High'] as const).map((level) => (
              <label key={level} className="relative flex items-center">
                <input
                  type="radio"
                  name="severity"
                  checked={severity === level}
                  onChange={() => setSeverity(level)}
                  className="sr-only peer"
                />
                <div className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
                  peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2
                  ${severity === level 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}
                `}>
                  {level}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="button-secondary px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="button-primary px-4 py-2 rounded-lg shadow-sm"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncidentForm;