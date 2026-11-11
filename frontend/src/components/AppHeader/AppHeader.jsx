import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <div className=' hidden md:flex items-center justify-between border-b border-border p-6 text-button-default-disabled-text  bg-surface'>
      <p className='label'>Your everyday cooking companion</p>
      <div className='flex flex-row gap-4 items-center'>
        <p className='px-6 py-3 font-body text-label rounded-lg border-2 bg-surface border-button-secondary text-button-secondary-text'>
          Hello,Maya
        </p>
        <Link
          to='/my-profile'
          className='active cursor-pointer'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'>
              <path
                d='M18.0003 20.0005C18.0003 18.409 17.3681 16.8828 16.2428 15.7575C15.1175 14.6322 13.5912 14 11.9998 14M11.9998 14C10.4084 14 8.88215 14.6322 7.75684 15.7575C6.63154 16.8828 5.99934 18.409 5.99934 20.0005M11.9998 14C14.2091 14 16.0001 12.209 16.0001 9.99966C16.0001 7.79035 14.2091 5.99934 11.9998 5.99934C9.79051 5.99934 7.9995 7.79035 7.9995 9.99966C7.9995 12.209 9.79051 14 11.9998 14ZM22.0006 11.9998C22.0006 17.5231 17.5231 22.0006 11.9998 22.0006C6.47653 22.0006 1.99902 17.5231 1.99902 11.9998C1.99902 6.47653 6.47653 1.99902 11.9998 1.99902C17.5231 1.99902 22.0006 6.47653 22.0006 11.9998Z'
                stroke-width='1.7'
                stroke-linecap='round'
                stroke='#26332C'
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;
