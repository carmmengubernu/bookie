import React from 'react';
import IntroText from '../../components/IntroText/IntroText';

function AddRecipe() {
  return (
    <>
      <IntroText
        pretitle={'add recipe'}
        title={'Something worth sharing'}
        subtitle={'Add a recipe to your personal cookbook. Make it yours.'}
      />
    </>
  );
}

export default AddRecipe;
