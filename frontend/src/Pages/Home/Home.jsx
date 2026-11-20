import React from 'react';
import Hero from '../../components/Hero/Hero';
import AppHeader from '../../components/AppHeader/AppHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import FeaturedGrid from '../../components/FeaturedGrid/FeaturedGrid';
import QuickCategories from '../../components/QuickCategories/QuickCategories';
import IntroText from '../../components/IntroText/IntroText';

function Home() {
  return (
    <>
      {/* <IntroText
        title={'What sounds good today?'}
        subtitle={'A little inspiration for your everyday table.'}
      /> */}
      <Hero />
      <SearchBar
        label={'Find your next favorite'}
        placeholder={'Try “tomato”, “pasta” or “a quick dinner”'}
        buttonText={'Search Recipe'}
      />
      <FeaturedGrid />
      <QuickCategories />
    </>
  );
}

export default Home;
