import React from 'react';

function Button(props) {
  return (
    <button
      className={`button button--${props.style}`}
      type={props.type || 'button'}
      onClick={(e) => props?.onClick(e)}
      disabled={props.disabled}>
      {props.text}
    </button>
  );
}

export default Button;
