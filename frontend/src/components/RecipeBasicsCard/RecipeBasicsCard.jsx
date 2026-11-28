import React from 'react';

function RecipeBasicsCard(props) {
  return (
    <div
      className={`${props.cardBackground || 'bg-surface'} p-8 rounded-3xl border border-border flex flex-col gap-6`}>
      {props.title && <h2>{props.title}</h2>}

      {props.nameLabel && (
        <div className='flex flex-col gap-2'>
          <label className='label text-ink'>
            {props.nameLabel} <span className='text-button-default'>*</span>
          </label>
          <input
            type='text'
            placeholder={props.namePlaceholder}
            className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus'
          />
        </div>
      )}

      {props.descriptionLabel && (
        <div className='flex flex-col gap-2'>
          <label className='label text-ink'>
            {props.descriptionLabel}
          </label>
          <textarea
            rows={4}
            placeholder={props.descriptionPlaceholder}
            className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus resize-none'
          />
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {props.categoryLabel && (
          <div className='flex flex-col gap-2'>
            <label className='label text-ink'>
              {props.categoryLabel}{' '}
              <span className='text-button-default'>*</span>
            </label>
            <select className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-muted-text focus:outline-none focus:border-focus'>
              {props.categoryPlaceholder && (
                <option value=''>{props.categoryPlaceholder}</option>
              )}
              {props.categories &&
                props.categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>
        )}

        {props.difficultyLabel && (
          <div className='flex flex-col gap-2'>
            <label className='label text-ink'>
              {props.difficultyLabel}
            </label>
            <select className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-muted-text focus:outline-none focus:border-focus'>
              {props.difficultyPlaceholder && (
                <option value=''>{props.difficultyPlaceholder}</option>
              )}
              {props.difficulties &&
                props.difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {props.prepLabel && (
          <div className='flex flex-col gap-2'>
            <label className='label text-ink'>
              {props.prepLabel} <span className='text-button-default'>*</span>
            </label>
            <input
              type='number'
              placeholder={props.prepPlaceholder}
              className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus'
            />
          </div>
        )}

        {props.cookLabel && (
          <div className='flex flex-col gap-2'>
            <label className='label text-ink'>
              {props.cookLabel} <span className='text-button-default'>*</span>
            </label>
            <input
              type='number'
              placeholder={props.cookPlaceholder}
              className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus'
            />
          </div>
        )}

        {props.servingsLabel && (
          <div className='flex flex-col gap-2'>
            <label className='label text-ink'>
              {props.servingsLabel}{' '}
              <span className='text-button-default'>*</span>
            </label>
            <input
              type='number'
              placeholder={props.servingsPlaceholder}
              className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeBasicsCard;