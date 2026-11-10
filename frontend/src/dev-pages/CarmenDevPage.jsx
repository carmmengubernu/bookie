import React from 'react';
import Button from '../components/Button/Button';
import Logo from '../components/Logo/Logo';
import PromoCard from '../components/PromoCard/PromoCard';
import Hero from '../components/Hero/Hero';
import IntroText from '../components/IntroText/IntroText';
import NotFound from '../components/NotFound/NotFound';

function CarmenDevPage() {
  return (
    <div className='w-full flex flex-col gap-8 p-8 bg-canvas max-w-section mx-auto '>
      <h1 className='text-coral-hero'>Carmen Dev Page</h1>
      <Logo />
      <div>
        <Hero />
      </div>
      <div>
        <NotFound />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
        <Button
          style={'default'}
          icon={'home'}
          text={'home'}
        />
        <Button
          style={'secondary'}
          text={'secondary'}
        />

        <Button
          style={'default'}
          text={'disabled'}
          disabled
        />
        <Button
          style={'success'}
          text={'success'}
        />
        <Button
          style={'delete'}
          text={'delete'}
        />
      </div>
      <div>
        <h1>This is a H1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
        <h4>This is h4</h4>
        <p>
          this is body regular <a href='http://'>this is a link</a>{' '}
        </p>
        <p className='body-large'>
          this is body large <a href='http://'>this is a link</a>
        </p>
        <p className='caption'>this is caption</p>
        <p className='lable'>this is lable</p>
        <p className='pre-title'>This is a pre-title</p>
      </div>
      <div className='max-w-[184px]'>
        <PromoCard />
      </div>
      <div className='flex flex-col gap-6'>
        <IntroText
          pretitle={'THE RECIPE COLLECTION'}
          title={'Find something delicious'}
          subtitle={'Fresh ideas for every craving, season and kind of day.'}
        />
        <IntroText
          pretitle={'ADD RECIPE'}
          title={'Something worth sharing'}
          subtitle={'Add a recipe to your personal cookbook. Make it yours.'}
        />
        <IntroText
          title={'Your own little cookbook'}
          subtitle={'The recipes you love, all in one happy place.'}
        />
        <IntroText
          pretitle={'bla bla bla'}
          title={'titlu'}
          subtitle={'subtitlu'}
        />
      </div>
    </div>
  );
}

export default CarmenDevPage;
