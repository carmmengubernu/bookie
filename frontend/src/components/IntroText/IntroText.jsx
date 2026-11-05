import React from 'react';

function IntroText(props) {
  return (
    <div className='flex flex-col gap-2'>
      {props.pretitle && (
        <span className='pre-title  text-button-default'>{props.pretitle}</span>
      )}
      {props.title && <h1>{props.title}</h1>}
      {props.subtitle && <p className='text-muted-text'>{props.subtitle}</p>}
    </div>
  );
}

export default IntroText;
