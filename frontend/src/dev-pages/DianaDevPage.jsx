import React from 'react';
import Button from '../components/Button/Button';
import Logo from '../components/Logo/Logo';
import PromoCard from '../components/PromoCard/PromoCard';
import Hero from '../components/Hero/Hero';
import IntroText from '../components/IntroText/IntroText';
import NotFound from '../components/NotFound/NotFound';
import CardSignUp from '../components/CardSignUp/CardSignUp';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import SignInForm from '../components/SignInForm/SignInForm';

function DianaDevPage() {
  return (
    <div className='w-full flex flex-col gap-8 p-8 bg-canvas max-w-section mx-auto '>
      <h1 className='text-coral-hero'>Diana Dev Page</h1>
      <Logo />
      <div className='flex gap-10'>
        <div>
          <CardSignUp
            cardBackground={'bg-border'}
            title={'A place for your favorite flavors.'}
            description={
              'Collect recipes you’ll make again. Share the ones everyone asks you for. Welcome to Bookie.'
            }
            imgSrc={'/public/BolSalata.jpg'}
            altText='Bol Salata'
            note={'One free account. Endless delicious possibilities.'}
          />
        </div>
        <div>
          <CardSignUp
            cardBackground={'bg-coral-subtle'}
            title={'Your kitchen. Your kind of cooking.'}
            description={
              'Save the keepers, share your creations and make every day a little more delicious.'
            }
            imgSrc={'/public/clatite.jpg'}
            altText='Clatite'
          />
        </div>
      </div>

      <div>
        <RegistrationForm/>
      </div>

      <div>
        <SignInForm />
    </div>
    </div>
  );
}

export default DianaDevPage;
