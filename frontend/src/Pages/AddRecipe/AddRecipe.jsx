import React from 'react';
import RecipeBasicsCard from '../../components/RecipeBasicsCard/RecipeBasicsCard';
import IngredientsCard from '../../components/IngredientsCard/IngredientsCard';
import InstructionsCard from '../../components/InstructionsCard/InstructionsCard';
import RecipePhotoCard from '../../components/RecipePhotoCard/RecipePhotoCard';
import CardSignUp from '../../components/CardSignUp/CardSignUp';

function AddRecipe() {
  return (
    <div className='w-full max-w-section mx-auto px-4 md:px-8 py-8 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <span className='pre-title text-button-default'>ADD RECIPE</span>
        <h1>Something worth sharing</h1>
        <p className='text-muted-text'>
          Add a recipe to your personal cookbook. Make it yours.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-start'>
        <div className='lg:col-span-2 flex flex-col gap-6'>
          <RecipeBasicsCard
            cardBackground='bg-surface'
            title='The basics'
            nameLabel='Recipe name'
            namePlaceholder='Give your recipe a delicious name'
            descriptionLabel='Description'
            descriptionPlaceholder='Tell us what makes this recipe special'
            categoryLabel='Category'
            categoryPlaceholder='Choose category'
            categories={['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Baking']}
            difficultyLabel='Difficulty'
            difficultyPlaceholder='Choose level'
            difficulties={['Easy', 'Medium', 'Hard']}
            prepLabel='Prep (min)'
            prepPlaceholder='10'
            cookLabel='Cook (min)'
            cookPlaceholder='20'
            servingsLabel='Servings'
            servingsPlaceholder='2'
          />

          <IngredientsCard
            cardBackground='bg-surface'
            title='Ingredients'
            description='One ingredient per row. Include the amount and unit.'
            items={['Ingredient 1', 'Ingredient 2']}
            placeholder='e.g. 200 g rigatoni'
            buttonText='+ Add ingredient'
          />

          <InstructionsCard
            cardBackground='bg-surface'
            title='Instructions'
            description='Break it down into simple, easy-to-follow steps.'
            steps={['Step 1', 'Step 2']}
            fieldLabel='Instruction'
            placeholder='Describe this step...'
            buttonText='+ Add step'
          />
        </div>

        <div className='flex flex-col gap-6'>
          <RecipePhotoCard
            cardBackground='bg-surface'
            title='Recipe photo'
            dropText='Drop a delicious photo here'
            buttonText='Upload photo'
            note='JPG, PNG or WebP · Max 10 MB. A landscape photo works best.'
          />

          <div className='bg-surface p-8 rounded-3xl border border-border flex flex-col gap-4'>
            <h3 className='text-ink'>A recipe worth sharing</h3>
            <p className='text-muted-text'>
            Use your own photo, list every ingredient and give your recipe a quick read before publishing.
            </p>
            <p className='caption text-muted-text pt-1'>Fields marked * are required.</p>
          </div>

        </div>
      </div>

      <div className='flex flex-wrap items-center justify-end gap-3'>
        <button
          type='button'
          className='px-5 py-2.5 rounded-xl bg-surface border border-border label text-button-secondary-text hover:bg-canvas transition cursor-pointer'>
          Cancel
        </button>
        <button
          type='button'
          className='px-5 py-2.5 rounded-xl bg-surface border border-border label text-button-secondary-text hover:bg-canvas transition cursor-pointer'>
          Save as draft
        </button>
        <button
          type='button'
          className='px-5 py-2.5 rounded-xl bg-button-default hover:bg-button-default-hover text-surface label transition cursor-pointer'>
          Publish recipe
        </button>
      </div>
    </div>
  );
}

export default AddRecipe;