import React from 'react';
import Ingredient from './Ingredient';
import { useState } from 'react';

const ORIGINAL_SERVINGS = 2;

export const mockIngredient = [
  {
    id: 1,
    quantity: 200,
    quantityType: 'g',
    quantityName: 'rigatoni',
  },
  {
    id: 2,
    quantity: 400,
    quantityType: 'g',
    quantityName: 'tomatoes',
  },
  {
    id: 3,
    quantity: 2,
    quantityType: 'tbsp',
    quantityName: 'oil',
  },
  {
    id: 4,
    quantity: 1 / 2,
    quantityType: 'tsp',
    quantityName: 'salt',
  },
  {
    id: 5,
    quantity: 1 / 4,
    quantityType: 'tsp',
    quantityName: 'pepper',
  },
  {
    id: 6,
    quantity: 2,
    quantityType: '',
    quantityName: 'garlic cloves',
  },
];

function IngredientColumn(props) {
  const [servings, setServings] = useState(ORIGINAL_SERVINGS);
  const multiplier = servings / ORIGINAL_SERVINGS;

  return (
    <div className='flex flex-col bg-surface rounded-xl md:max-w-88 w-full h-full border border-border p-6 gap-6'>
      <h4>Ingredients</h4>
      <div className='flex justify-between items-center'>
        <p className='label text-muted-text'>Servings</p>
        <div className='flex items-center gap-3 border border-border rounded-xl'>
          <button
            onClick={() => setServings((s) => Math.max(1, s - 1))}
            className=' px-3 py-2'>
            −
          </button>
          <p>{servings}</p>
          <button
            onClick={() => setServings((s) => s + 1)}
            className='px-3 py-2'>
            +
          </button>
        </div>
      </div>
      <p className='caption text-muted-text'>Tap an ingredients as you go.</p>
      <div className='flex flex-col gap-6'>
        {mockIngredient.map((ingredient) => (
          <Ingredient
            key={ingredient.id}
            {...ingredient}
            multiplier={multiplier}
          />
        ))}
      </div>
    </div>
  );
}

export default IngredientColumn;
