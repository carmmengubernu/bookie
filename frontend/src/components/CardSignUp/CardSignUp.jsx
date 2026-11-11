import React from 'react';

function CardSignUp(props) {
  return (
    <div
      className={`${props.cardBackground} p-10 rounded-3xl max-w-122 flex flex-col gap-6`}>
      {props.title && <h1>{props.title}</h1>}
      {props.description && <p>{props.description}</p>}
      {props.imgSrc && (
        <img
          src={props.imgSrc}
          alt={props.altText}
          className='w-full h-[160px] md:max-w-[424px] md:h-[360px] rounded-2xl object-cover'
        />
      )}
      {props.note && <p className='label text-button-success'>{props.note}</p>}
    </div>
  );
}

export default CardSignUp;
