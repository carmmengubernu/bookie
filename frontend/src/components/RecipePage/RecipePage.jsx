import React from 'react';
import RecipeOverview from './RecipeOverview';
import { useParams, Link } from 'react-router-dom';
import { mockRecipes } from '../../Pages/Explore/Explore';

function RecipePage() {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => String(r.id) === id);

  return (
    <div>
      <RecipeOverview {...recipe} />
    </div>
  );
}

export default RecipePage;
