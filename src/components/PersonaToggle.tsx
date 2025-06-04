import React from 'react';

interface PersonaToggleProps {
  active: 'samantha' | 'arin';
  onChange: (persona: 'samantha' | 'arin') => void;
}

const PersonaToggle: React.FC<PersonaToggleProps> = ({ active, onChange }) => {
  return (
    <div className="flex gap-4 items-center justify-center text-sm">
      <button
        onClick={() => onChange('samantha')}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${active === 'samantha' ? 'bg-purple-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
      >
        Samantha
      </button>
      <button
        onClick={() => onChange('arin')}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${active === 'arin' ? 'bg-fuchsia-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
      >
        Arin
      </button>
    </div>
  );
};

export default PersonaToggle;
