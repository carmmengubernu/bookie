import React from 'react';
import { useState } from 'react';

function Ingredient(props) {
  const [accepted, setAccepted] = useState(false);

  const multiplier = props.multiplier ?? 1;
  const amount = Number(props.quantity);
  const shownQuantity = Number.isFinite(amount)
    ? Math.round(amount * multiplier * 100) / 100
    : props.quantity;

  return (
    <div>
      <label className='flex gap-2 label'>
        <input
          type='checkbox'
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        {props.quantity && <p>{shownQuantity}</p>}
        {props.quantityType && <p>{props.quantityType}</p>}
        {props.quantityName && <p>{props.quantityName}</p>}
      </label>
    </div>
  );
}

export default Ingredient;
