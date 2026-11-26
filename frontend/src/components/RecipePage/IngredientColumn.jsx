import React from 'react';
import Ingredient from './Ingredient';

export const mockIngredient = [
  {
    id: 1,
    ingredient: '200 g rigatoni',
  },
  {
    id: 2,
    ingredient: '400 g tomatoes',
  },
  {
    id: 3,
    ingredient: '2 tbsp oil',
  },
  {
    id: 4,
    ingredient: '2 garlic cloves',
  },
  {
    id: 5,
    ingredient: '1/2 tsp salt',
  },
  {
    id: 6,
    ingredient: '1/4 tsp pepper',
  },
];

function IngredientColumn() {
  return (
    <div className='flex flex-col bg-surface rounded-xl md:max-w-88 w-full h-full border border-border p-6 gap-6'>
      <h4>Ingredients</h4>
      <div className='flex justify-between items-center'>
        <p className='label text-muted-text'>Servings</p>
        <p className='border border-border p-[11.5px] rounded-xl'> - 2 + </p>
      </div>
      <p className='caption text-muted-text'>Tap an ingredients as you go.</p>
      <div className='flex flex-col gap-6'>
        {mockIngredient.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            {...ingredient}
          />
        ))}
      </div>
    </div>
  );
}

export default IngredientColumn;
