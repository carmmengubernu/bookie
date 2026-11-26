import React from 'react';
import RecipeOverview from './RecipeOverview';
import { useParams } from 'react-router-dom';
import { mockRecipes } from '../../mock-data/recipes';
import { Link } from 'react-router-dom';
import IngredientColumn from './IngredientColumn';
import MethodColumn from './MethodColumn';
import RecipeCard from '../RecipeCard/RecipeCard';

function RecipePage() {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => String(r.id) === id);

  return (
    <div className='flex flex-col gap-8'>
      <div>
        <RecipeOverview {...recipe} />
      </div>
      <div className='flex flex-col md:flex-row gap-8 '>
        <IngredientColumn recipeIngredients={recipe.recipeIngredients} />
        <MethodColumn recipeInstructionSteps={recipe.recipeInstructionSteps} />
      </div>
      <h2>More for your table</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pagination'>
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

export default RecipePage;
