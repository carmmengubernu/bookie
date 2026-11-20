import React from 'react';
import Button from '../Button/Button';

function Pagination() {
  return (
    <div className='flex justify-center items-center gap-2'>
      <Button
        style={'pagination '}
        text={'<'}
      />

      <Button
        style={'pagination button--pagination-active'}
        text={'1'}
      />
      <Button
        style={'pagination'}
        text={'2'}
      />
      <Button
        style={'pagination'}
        text={'3'}
      />
      <Button
        style={'pagination'}
        text={'>'}
      />
    </div>
  );
}

export default Pagination;
