import React from 'react';
import Button from '../Button/Button';

function NotFound() {
  return (
    <div className='py-8 md:py-18 px-4 bg-coral-subtle flex flex-col gap-6 items-center rounded-xl'>
      <div className='border-12 rounded-full border-button-default/40 bg-surface'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='184'
          height='184'
          viewBox='0 0 184 184'
          fill='none'>
          <path
            d='M68 65.3313V83.9995C68 86.933 70.4 89.3332 73.3333 89.3332H78.6667M78.6667 89.3332H84C85.4145 89.3332 86.771 88.7713 87.7712 87.771C88.7714 86.7707 89.3333 85.4141 89.3333 83.9995V65.3313M78.6667 89.3332V65.3313M78.6667 89.3332V118.669M116 100.001V65.3313C112.464 65.3313 109.072 66.7362 106.572 69.2369C104.071 71.7375 102.667 75.1292 102.667 78.6657V94.667C102.667 97.6005 105.067 100.001 108 100.001H116ZM116 100.001V118.669'
            stroke-width='1.7'
            stroke-linecap='round'
            stroke='#B13E36'
          />
        </svg>
      </div>
      <p className='pre-title  text-button-default'>Error 404</p>
      <h1>This page is off the menu.</h1>
      <p className='text-muted-text'>
        Looks like this link has gone a little stale. Let’s find you something
        fresh to cook instead.
      </p>
      <div className='flex flex-col gap-4 md:gap-2 md:flex-row w-full md:w-fit'>
        <a
          href='/'
          className='flex justify-center button button--default'>
          Back to Home
        </a>
        <a
          href='/'
          className='flex justify-center button button--secondary'>
          Explore recipes
        </a>
      </div>
    </div>
  );
}

export default NotFound;
