import React from 'react';

function IngredientsCard(props) {
  return (
    <div
      className={`${props.cardBackground || 'bg-surface'} p-8 rounded-3xl border border-border flex flex-col gap-6`}>
      <div className='flex flex-col gap-6'>
        {props.title && <h2>{props.title}</h2>}
        {props.description && (
          <p className='text-muted-text'>{props.description}</p>
        )}
      </div>

      {props.items && (
        <div className='flex flex-col gap-4'>
          {props.items.map((item) => (
            <div key={item} className='flex flex-col gap-2'>
              <label className='label text-ink'>{item}</label>
              <div className='flex items-center gap-3'>
                <input
                  type='text'
                  placeholder={props.placeholder}
                  className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus'
                />
                <button
                  type='button'
                  className='p-2 text-muted-text hover:text-button-delete transition cursor-pointer'>
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={1.8}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {props.buttonText && (
        <div>
          <button
            type='button'
            className='px-4 py-2.5 rounded-xl bg-surface border border-border label text-button-secondary-text hover:bg-canvas transition cursor-pointer'>
            {props.buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default IngredientsCard;