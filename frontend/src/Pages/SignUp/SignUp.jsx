import React from 'react';
import CardSignUp from '../../components/CardSignUp/CardSignUp';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function SignUp() {
  return (
    <div className="min-h-full bg-canvas flex flex-col justify-between px-6 py-10 md:px-12">
      
      <div className="w-full max-w-[1128px] mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <CardSignUp
          cardBackground={'bg-green-subtle'}
          title={'A place for your favorite flavors.'}
          description={
            'Collect recipes you’ll make again. Share the ones everyone asks you for. Welcome to Bookie.'
          }
          imgSrc={'/BolSalata.jpg'}
          altText="Bol Salata"
          note={'One free account. Endless delicious possibilities.'}
        />

        <div className="w-full flex justify-center">
          <RegistrationForm />
        </div>
      </div>

      <div className="w-full max-w-[1128px] mx-auto pt-12 flex items-center justify-between">
        <span className="caption text-muted-text">
          Made for the joy of cooking.
        </span>
        <a href="#help" className="caption text-button-default hover:underline">
          Help ↗
        </a>
      </div>

    </div>
  );
}

export default SignUp;