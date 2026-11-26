import React from 'react';
import { useState } from 'react';

function Ingredient(props) {
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      <label className='flex gap-2 label'>
        <input
          type='checkbox'
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        {props.ingredient && <p>{props.ingredient}</p>}
      </label>
    </div>
  );
}

export default Ingredient;
