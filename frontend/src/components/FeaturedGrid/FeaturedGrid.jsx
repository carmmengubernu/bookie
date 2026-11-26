import React from 'react';
import IntroText from '../IntroText/IntroText';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import { mockRecipes } from '../../mock-data/recipes';

function FeaturedGrid(props) {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center justify-between'>
        {<IntroText title={'A few favorites'} />}
        <Link
          to='/explore'
          className='label text-button-default'>
          View all →
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
        {mockRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            {...recipe}
            recipeUrl={`/recipe/${recipe.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedGrid;
