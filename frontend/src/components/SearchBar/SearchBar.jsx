import React from 'react';
import Button from '../Button/Button';

function SearchBar(props) {
  return (
    <div className='flex flex-col  gap-2'>
      {props.label && (
        <label
          for='SearchBar'
          className='label'>
          {props.label}
        </label>
      )}
      <div className='flex flex-col  gap-2  lg:flex-row lg:gap-4 '>
        <input
          name='SearchBar'
          type='text'
          placeholder={props.placeholder ? props.placeholder : 'Search'}
          className=' p-3 bg-surface border border-border rounded-lg w-full'
        />
        <Button
          style={'default'}
          text={props.buttonText ? props.buttonText : 'Search'}
        />
      </div>
    </div>
  );
}

export default SearchBar;
