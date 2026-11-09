import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PromoCard from '../PromoCard/PromoCard';
import MainNavigation from '../MainNavigation/MainNavigation';

function Aside() {
  return (
    <aside className='flex flex-col gap-8 p-6 max-w-[232px] bg-surface'>
      <Logo />
      <MainNavigation />
      <PromoCard />
    </aside>
  );
}

export default Aside;
