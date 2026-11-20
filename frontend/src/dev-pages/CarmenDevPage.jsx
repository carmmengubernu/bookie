import React from 'react';
import Button from '../components/Button/Button';
import Logo from '../components/Logo/Logo';
import PromoCard from '../components/PromoCard/PromoCard';
import Hero from '../components/Hero/Hero';
import IntroText from '../components/IntroText/IntroText';
import NotFound from '../components/NotFound/NotFound';

function CarmenDevPage() {
  return (
    <div className='w-full flex flex-col gap-8 p-8 bg-canvas max-w-section mx-auto '>
      <h1 className='text-coral-hero'>Carmen Dev Page</h1>
      <Logo />
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default CarmenDevPage;
