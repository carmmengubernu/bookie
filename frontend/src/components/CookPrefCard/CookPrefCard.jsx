import React, { useState } from 'react';

function CookPrefCard() {
  const preferenceOptions = [
    'Vegetarian',
    'Quick & easy',
    'Baking',
    'Dairy-free',
  ];

  const [selectedPrefs, setSelectedPrefs] = useState([
    'Vegetarian',
    'Quick & easy',
  ]);

  const togglePreference = (pref) => {
    if (selectedPrefs.includes(pref)) {
      setSelectedPrefs(selectedPrefs.filter((item) => item !== pref));
    } else {
      setSelectedPrefs([...selectedPrefs, pref]);
    }
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2>Your cooking preferences</h2>
        <p className="text-muted-text">
          We'll use these to bring you more of what you love.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {preferenceOptions.map((pref) => {
          const isSelected = selectedPrefs.includes(pref);

          return (
            <button
              key={pref}
              type="button"
              onClick={() => togglePreference(pref)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${
                isSelected
                 ? 'bg-button-success text-white border border-button-success'
                 : 'bg-white text-ink border border-gray-200 hover:border-gray-300'
            }`}
            >
              {pref}
            </button>
          );
        })}
      </div>

      <div className="bg-green-subtle rounded-xl p-4 flex items-start gap-3">
        <svg
          className="w-5 h-5 text-button-success shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-button-success">
            Recipe inspiration is on
          </span>
          <span className="caption text-muted-text">
            A fresh handful of recipes in your inbox every Sunday.
          </span>
        </div>
      </div>
    </div>
  );
}

export default CookPrefCard;