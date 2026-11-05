import React from 'react';

function IntroText(props) {
  const { pretitle, title, subtitle } = props;
  return (
    <div className='flex flex-col gap-2'>
      {props.pretitle && (
        <span className='pre-title  text-button-default'>{pretitle}</span>
      )}
      {title && <h1>{title}</h1>}
      {subtitle && <p className='text-muted-text'>{subtitle}</p>}
    </div>
  );
}

export default IntroText;
