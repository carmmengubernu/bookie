import React from 'react';
import IntroText from '../IntroText/IntroText';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

function FeaturedGrid() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center justify-between'>
        <IntroText title={'A few favorites'} />
        <Link
          to='/explore'
          className='label text-button-default'>
          View all →
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}

export default FeaturedGrid;
