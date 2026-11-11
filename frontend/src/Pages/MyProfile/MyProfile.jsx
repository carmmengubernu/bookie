import React from 'react';
import Hero from '../../components/Hero/Hero';
import IntroText from '../../components/IntroText/IntroText';

function MyProfile() {
  return (
    <>
      <IntroText
        pretitle={'Welcome'}
        title={'My Profile'}
        subtitle={'this is where you manage your profile'}
      />
    </>
  );
}

export default MyProfile;
