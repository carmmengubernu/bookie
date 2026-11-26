import React from 'react';
import InstructionStep from './InstructionStep';

function MethodColumn(props) {
  return (
    <div className='flex flex-col gap-6'>
      <h2>Let's get cooking</h2>
      <div className='flex flex-col gap-6'>
        {props.recipeInstructionSteps?.map((step, index) => (
          <InstructionStep
            key={step.id}
            index={index + 1}
            {...step}
          />
        ))}
      </div>
    </div>
  );
}

export default MethodColumn;
