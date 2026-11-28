import React from 'react';

function InstructionsCard(props) {
  return (
    <div
      className={`${props.cardBackground || 'bg-surface'} p-8 rounded-3xl border border-border flex flex-col gap-6`}>
      <div className='flex flex-col gap-6'>
        {props.title && <h2>{props.title}</h2>}
        {props.description && (
          <p className='text-muted-text'>{props.description}</p>
        )}
      </div>

      {props.steps && (
        <div className='flex flex-col gap-6'>
          {props.steps.map((step) => (
            <div key={step} className='flex flex-col gap-2'>
              <span className='label text-button-default'>{step}</span>

              {props.fieldLabel && (
                <label className='label text-ink'>{props.fieldLabel}</label>
              )}
              <textarea
                rows={4}
                placeholder={props.placeholder}
                className='w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-muted-text focus:outline-none focus:border-focus resize-none'
              />
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

export default InstructionsCard;