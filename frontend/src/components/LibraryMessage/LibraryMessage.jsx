import React from 'react';
import Button from '../Button/Button';

function LibraryMessage() {
  return (
    <div className='flex justify-between bg-green-subtle p-6 rounded-xl'>
      <div className='flex flex-col gap-2'>
        <p className='text-button-success font-bold'>
          Good taste, beautifully collected.
        </p>
        <p className='text-muted-text label'>0 recipes added to your kitchen</p>
      </div>
      <Button
        style={'success'}
        text={'+ Add a recipe'}
      />
    </div>
  );
}

export default LibraryMessage;
