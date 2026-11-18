import React from 'react';
import Hero from '../../components/Hero/Hero';
import IntroText from '../../components/IntroText/IntroText';
import SignIn from '../SignIn/SignIn';

function MyProfile() {
  
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <SignIn />;
  }

  return (
    <IntroText
      pretitle={'Welcome'}
      title={'My Profile'}
      subtitle={'this is where you manage your profile'}
    />
  );
}

export default MyProfile;
