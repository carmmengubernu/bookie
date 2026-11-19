import React, { useState } from 'react';

function PersonalDetails() {
  const [fullName, setFullName] = useState('Maya Chen');
  const [email, setEmail] = useState('maya.chen@email.com');
  const [about, setAbout] = useState(
    'Weeknight pasta enthusiast. Weekend baker. Always making a little extra for friends.'
  );
  const [location, setLocation] = useState('London, UK');

  const inputClasses =
    'label w-full px-4 py-3 rounded-xl border border-gray-200 text-ink placeholder:text-muted-text bg-white focus:outline-none focus:border-gray-400';

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
      <h2>Personal details</h2>

      <div className="flex flex-col gap-6">
        
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-ink">
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-ink">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClasses}
          />
          <span className="caption text-muted-text">
            Your email is private and never shown on recipes.
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="about" className="text-ink">
            About you
          </label>
          <textarea
            id="about"
            rows={4}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell others a little about how you cook..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="location" className="text-ink">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country"
            className={inputClasses}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;