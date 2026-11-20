import React from 'react';
import IntroText from '../../components/IntroText/IntroText';
import LibraryMessage from '../../components/LibraryMessage/LibraryMessage';
import EmptyCard from '../../components/EmptyCard/EmptyCard';

function MyRecipes() {
  return (
    <>
      <IntroText
        pretitle={'Welcome'}
        title={'Your own little cookbook'}
        subtitle={'The recipes you love, all in one happy place.'}
      />
      <LibraryMessage />
      <EmptyCard />
    </>
  );
}

export default MyRecipes;
