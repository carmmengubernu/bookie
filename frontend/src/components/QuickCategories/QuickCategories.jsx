import React from 'react';
import IntroText from '../IntroText/IntroText';
import { Link } from 'react-router-dom';
import FilterChip from '../Filter/FilterChip/FilterChip';

function QuickCategories() {
  return (
    <div className='flex flex-col gap-8'>
      <IntroText title={'Follow your cravings'} />
      <div className='flex flex-wrap gap-2'>
        <FilterChip
          link={'/'}
          label={'All recipes'}
        />
        <FilterChip
          link={'/'}
          label={'Breakfast'}
        />
        <FilterChip
          link={'/'}
          label={'Dinner'}
        />
        <FilterChip
          link={'/'}
          label={'Baking'}
        />
        <FilterChip
          link={'/'}
          label={'Vegetarian'}
        />
      </div>
    </div>
  );
}

export default QuickCategories;
