import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PersonalDetailsCard from '../../components/PersonalDetails/PersonalDetails';
import CookPrefCard from '../../components/CookPrefCard/CookPrefCard';
import Button from '../../components/Button/Button';

function MyProfile() {
  const navigate = useNavigate();
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <SignIn />;
  }

  return (
    <div className='min-h-full bg-canvas flex flex-col justify-between px-6 py-10 md:px-12'>
      <div className='w-full max-w-[1128px] mx-auto flex flex-col gap-8'>
        <div>
          <h1>Hello, Maya.</h1>
          <p className='text-muted-text'>
            A little about you and the way you like to cook.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-start'>
          <div className='lg:col-span-1 flex flex-col gap-6'>
            <ProfileCard />
            <div className='bg-green-subtle rounded-2xl p-6 flex justify-between items-center gap-2'>
              <h2>1</h2>
              <span className='caption text-muted-text'>recipe shared</span>
            </div>
          </div>

          <div className='lg:col-span-2 flex flex-col gap-6'>
            <PersonalDetailsCard />
            <CookPrefCard />

            <div className='flex flex-wrap items-center gap-3 pt-1'>
              <Button
                type='button'
                style='default'
                text='Save changes'
                onClick={() => alert('Changes saved!')}
              />
              <Button
                type='button'
                style='secondary'
                text='Change password'
                onClick={() => alert('Change password')}
              />
              <Button
                type='button'
                style='secondary'
                text='Log out'
                onClick={() => navigate('/sign-in')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
