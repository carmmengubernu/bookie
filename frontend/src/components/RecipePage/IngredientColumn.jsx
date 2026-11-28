import React from 'react';
import Ingredient from './Ingredient';
import { useState } from 'react';

const ORIGINAL_SERVINGS = 2;

function IngredientColumn(props) {
  const [servings, setServings] = useState(ORIGINAL_SERVINGS);
  const multiplier = servings / ORIGINAL_SERVINGS;

  return (
    <div className='flex flex-col bg-surface rounded-xl md:max-w-88 w-full h-full border border-border p-6 gap-6'>
      <h4>Ingredients</h4>
      {props.recipeIngredients?.length > 0 && (
        <>
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
          <p className='caption text-muted-text'>
            Tap an ingredients as you go.
          </p>
        </>
      )}
      <div className='flex flex-col gap-6'>
        {props.recipeIngredients?.map((ingredient) => (
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
