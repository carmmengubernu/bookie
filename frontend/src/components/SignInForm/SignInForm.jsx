import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function SignInForm() {
  const inputClasses =
    'label w-full px-4 py-3 rounded-xl border border-gray-200 text-ink placeholder:text-muted-text bg-white focus:outline-none focus:border-gray-400';
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.email || !form.password) {
      setError('Please fill in al required fields.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }
      navigate('/my-profile');
    } catch (error) {
      setError('Could not connect to the server');
    }
  }

  return (
    <div className='w-full max-w-md flex flex-col justify-center gap-6'>
      <div className='flex flex-col gap-1.5'>
        <h2>Welcome back, cook.</h2>
        <p className='text-muted-text'>
          Log in to open your personal cookbook.
        </p>
      </div>

      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='email'
            className='text-ink'>
            Email address
          </label>
          <input
            id='email'
            type='email'
            placeholder='maya.chen@email.com'
            className={inputClasses}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-ink'>Password</label>
          <input
            type='password'
            placeholder='••••••••••••'
            className={inputClasses}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className='flex items-center justify-between'>
          <a
            href='#forgot'
            className='caption text-button-default hover:underline'>
            Forgot password?
          </a>
        </div>

        {error && <p className='text-red-500'>{error}</p>}

        <Button
          type='submit'
          style='default'
          text='Log in'
        />

        <div className='flex flex-col gap-2'>
          <span className='caption text-muted-text'>New to the kitchen?</span>
          <Button
            type='button'
            style='secondary'
            text='Create an account'
            onClick={() => navigate('/sign-up')}
          />
        </div>

        <p className='caption text-muted-text'>
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
