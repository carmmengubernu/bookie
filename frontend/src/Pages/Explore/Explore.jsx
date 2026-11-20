import React from 'react';
import IntroText from '../../components/IntroText/IntroText';
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterChip from '../../components/Filter/FilterChip/FilterChip';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Pagination from '../../components/Pagination/Pagination';

function Explore() {
  return (
    <>
      <IntroText
        pretitle={'the recipe collection'}
        title={'Find something delicious'}
        subtitle={'Fresh ideas for every craving, season and kind of day.'}
      />
      <div className='flex flex-col gap-6 bg-surface p-6 rounded-xl'>
        <SearchBar
          label={'Search recipes'}
          placeholder={'Recipe name or ingredient'}
          buttonText={'Search'}
        />
        <div className='flex flex-wrap gap-2'>
          <FilterChip
            link={'/'}
            label={'All recipes'}
          />
          <FilterChip
            link={'/'}
            label={'Breakfast'}
          />
          <FilterChip
            link={'/'}
            label={'Dinner'}
          />
          <FilterChip
            link={'/'}
            label={'Baking'}
          />
          <FilterChip
            link={'/'}
            label={'Vegetarian'}
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pagination'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
      <Pagination />
    </>
  );
}

export default Explore;
