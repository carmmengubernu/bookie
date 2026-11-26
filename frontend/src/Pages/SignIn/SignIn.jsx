import React, { useState } from 'react';
import CardSignUp from '../../components/CardSignUp/CardSignUp';
import SignInForm from '../../components/SignInForm/SignInForm';

function SignIn() {
  return (
    <div className='min-h-full bg-canvas flex flex-col justify-between px-6 py-10 md:px-12'>
      <div className='w-full max-w-[1128px] mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        <CardSignUp
          cardBackground={'bg-coral-subtle'}
          title={'Your kitchen. Your kind of cooking.'}
          description={
            'Save the keepers, share your creations and make every day a little more delicious.'
          }
          imgSrc={'/clatite.jpg'}
          altText='Clatite'
        />

        <div className='w-full flex justify-center'>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
