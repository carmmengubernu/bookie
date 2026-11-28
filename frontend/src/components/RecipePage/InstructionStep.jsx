import React from 'react';

function InstructionStep(props) {
  return (
    <div className='flex gap-4 bg-surface p-6 rounded-xl'>
      <p className='bg-coral-subtle text-button-default p-[7.5px] rounded-lg w-8 h-8 flex items-center justify-center text-[14px] font-bold'>
        {props.index}
      </p>
      <div className='flex flex-col gap-2'>
        {props.instructionHeading && (
          <p className='font-heading text-[20px]'>{props.instructionHeading}</p>
        )}
        {props.instruction && (
          <p className='label text-muted-text'>{props.instruction}</p>
        )}
      </div>
    </div>
  );
}

export default InstructionStep;
