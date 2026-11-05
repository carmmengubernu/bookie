import React from 'react';

function Button(props) {
  const handleOnClick = () => {
    if (props.style === 'default') {
      alert('ai apasat buttonu default');
    } else {
      alert('ai apasat secondary');
    }
  };
  return (
    <button
      className={`button button--${props.style}`}
      type='button'
      onClick={handleOnClick}
      disabled={props.disabled}>
      {/* <Icon/> */}
      {props.text}
    </button>
  );
}

export default Button;
