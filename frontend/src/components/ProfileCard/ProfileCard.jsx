import React from 'react';
import Button from "../Button/Button";

function ProfileCard({
  fullName = 'Maya Chen',
  role = 'Home cook',
  location = 'London, UK',
  memberSince = 'October 2026',
  onChangePhoto,
}) {
  const initials = fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col gap-5">

      <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
        <span className="font-heading text-2xl text-button-default">
          {initials}
        </span>
      </div>

      <div className="flex flex-col gap-6">
        <h2>{fullName}</h2>
        <p className="body text-muted-text">
          {role} · {location}
        </p>
        <span className="caption text-muted-text">
          Cooking with Bookie since {memberSince}
        </span>
      </div>

      <div className="pt-1">
        <Button
          type="button"
          style="secondary"
          text="Change photo"
          onClick={onChangePhoto || (() => {})}
        />
      </div>
    </div>
  );
}

export default ProfileCard;