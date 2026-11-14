import React from 'react';
import Hero from '../../components/Hero/Hero';
import AppHeader from '../../components/AppHeader/AppHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import FeaturedGrid from '../../components/FeaturedGrid/FeaturedGrid';
import QuickCategories from '../../components/QuickCategories/QuickCategories';

function Home() {
  return (
    <>
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
