import React from 'react';

function FilterChip(props) {
  return (
    <a
      href={props.link}
      className='button button--chip'>
      {props.label}
    </a>
  );
}

export default FilterChip;
