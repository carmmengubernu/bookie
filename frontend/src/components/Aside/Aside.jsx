import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PromoCard from '../PromoCard/PromoCard';
import MainNavigation from '../MainNavigation/MainNavigation';

function Aside() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHandleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <aside className='z-10 sticky top-0 md:h-screen flex flex-col gap-8 p-6 md:max-w-[232px] bg-surface'>
      <div className='flex justify-between'>
        <Logo />
        <div className='flex gap-4 items-center'>
          <Link
            to='/my-profile'
            className='activemd:hidden cursor-pointer'>
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
          <button
            type='button'
            className='md:hidden cursor-pointer'
            onClick={onHandleClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'>
              <path
                d='M4.00098 4.99902H19.9994M4.00098 11.9998H19.9994M4.00098 19.0006H19.9994'
                stroke-width='1.7'
                stroke-linecap='round'
                stroke='#26332C'
              />
            </svg>
          </button>
        </div>
      </div>
      <MainNavigation isMenuOpen={isMenuOpen} />
      <div className='hidden md:block'>
        <PromoCard />
      </div>
    </aside>
  );
}

export default Aside;
