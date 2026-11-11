import React from 'react';

function Hero() {
  return (
    <div className='py-6 lg:py-10 px-6 lg:px-8 bg-coral-hero flex flex-col lg:flex-row-reverse gap-8 items-center rounded-xl relative'>
      <span className='absolute top-0 left-0 z-1 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='184'
          height='144'
          viewBox='0 0 184 144'
          fill='none'>
          <circle
            cx='64'
            cy='24'
            r='120'
            fill='white'
            fill-opacity='0.12549'
          />
        </svg>
      </span>
      <div className='z-2 relative lg:max-w-lg sm:max-h-[400px] rounded-xl overflow-hidden '>
        <img
          src='/poza-hero.jpg'
          alt=''
          className='w-full h-full object-center'
        />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='pre-title text-ink text-center lg:text-left'>
          FRESH FROM THE BOOKIE KITCHEN
        </p>
        <h1>Good food. Great little moments.</h1>
        <p>
          Turn sweet roasted tomatoes into your new weeknight ritual. Simple
          ingredients, a bowlful of joy.
        </p>
        <a
          href='http://'
          className='flex justify-center button button--success w-full lg:w-fit'>
          Cook this recipe
        </a>
      </div>
    </div>
  );
}

export default Hero;
