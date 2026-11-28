import React from 'react';

function RecipePhotoCard(props) {
  return (
    <div
      className={`${props.cardBackground || 'bg-surface'} p-8 rounded-3xl border border-border flex flex-col gap-5`}>
      {props.title && <h2>{props.title}</h2>}

      <div className='w-full h-[210px] rounded-2xl border border-dashed border-button-default/50 bg-coral-subtle flex flex-col items-center justify-center p-6 text-center gap-3 cursor-pointer'>
        <svg
          className='w-8 h-8 text-button-default'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={1.6}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4v-5'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 16l4.5-4.5a2 2 0 012.8 0L15 16m-2-2l1.5-1.5a2 2 0 012.8 0L21 16M19 3v6m-3-3h6'
          />
        </svg>
        {props.dropText && (
          <p className='text-[14px] leading-[20px] text-ink'>
            {props.dropText}
          </p>
        )}
      </div>

      {props.buttonText && (
        <button
          type='button'
          className='w-full py-2.5 px-4 rounded-xl bg-surface border border-border label text-button-secondary-text hover:bg-canvas transition cursor-pointer'>
          {props.buttonText}
        </button>
      )}

      {props.note && <p className='caption text-muted-text'>{props.note}</p>}
    </div>
  );
}

export default RecipePhotoCard;