import React from 'react';
import IntroText from '../../components/IntroText/IntroText';
import CardSignUp from '../../components/CardSignUp/CardSignUp';

function SignIn() {
  return (
    <>
      <IntroText
        pretitle={'Welcome'}
        title={'My Profile'}
        subtitle={'this is where you manage your profile'}
      />
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
    </>
  );
}

export default SignIn;
