import React from 'react';
import IntroText from '../IntroText/IntroText';
import { Link } from 'react-router-dom';

function QuickCategories() {
  return (
    <div>
      <IntroText>
        <p>Follow your cravings</p>
      </IntroText>
      <div className='flex gap-2'>
        <a
          href='http://'
          className='flex justify-center button button--success w-fit'>
          All recipes
        </a>
        <a
          href='http://'
          className='flex justify-center button button--secondary w-fit'>
          Breakfast
        </a>
        <a
          href='http://'
          className='flex justify-center button button--secondary w-fit'>
          Dinner
        </a>
        <a
          href='http://'
          className='flex justify-center button button--secondary w-fit'>
          Baking
        </a>
        <a
          href='http://'
          className='flex justify-center button button--secondary w-fit'>
          Vegetarian
        </a>
      </div>
    </div>
  );
}

export default QuickCategories;
