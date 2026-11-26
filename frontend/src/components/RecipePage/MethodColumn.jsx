import React from 'react';
import InstructionStep from './InstructionStep';

export const mockInstructionStep = [
  {
    id: 1,
    instructionHeading: 'Roast tomatoes',
    instruction:
      'Heat the oven to 200°C. Toss tomatoes, garlic and olive oil in a baking dish. Roast for 20 minutes until soft and blistered.',
  },
  {
    id: 2,
    instructionHeading: 'Cook the pasta',
    instruction:
      'Bring a large pot of salted water to a boil. Cook rigatoni according to the pack, about 10 minutes. Reserve 100 ml pasta water, then drain.',
  },
  {
    id: 3,
    instructionHeading: 'Bring it together',
    instruction:
      'Crush the roasted tomatoes with a fork. Toss with the pasta and a splash of reserved water until glossy. Season with salt and pepper.',
  },
  {
    id: 4,
    instructionHeading: 'Finish & enjoy',
    instruction:
      'Tear over the basil and add grated parmesan. Divide between two bowls and serve while warm.',
  },
];

function MethodColumn() {
  return (
    <div className='flex flex-col gap-6'>
      <h2>Let's get cooking</h2>
      <div className='flex flex-col gap-6'>
        {mockInstructionStep.map((step, index) => (
          <InstructionStep
            key={step.id}
            index={step.id}
            {...step}
          />
        ))}
      </div>
    </div>
  );
}

export default MethodColumn;
