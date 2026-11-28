import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function RegistrationForm() {
  const [form, setForm] = useState({ full_name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const inputClasses =
    'label w-full px-4 py-3 rounded-xl border border-gray-200 text-ink placeholder:text-muted-text bg-white focus:outline-none focus:border-gray-400';

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.full_name || !form.email || !form.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (
      form.password.length < 8 ||
      !/\d/.test(form.password) ||
      !/[a-zA-Z]/.test(form.password)
    ) {
      setError(
        'Password must have at least 8 characters, with a number and a letter.',
      );
      return;
    }
    if (form.password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!accepted) {
      setError('You must accept the Terms of Service.');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }
      navigate('/sign-in');
    } catch {
      setError('Could not connect to the server.');
    }
  }

  return (
    <div className='w-full max-w-md flex flex-col justify-center gap-6'>
      <div className='flex flex-col gap-1.5'>
        <h2>Come on in.</h2>
        <p className='text-muted-text'>Your personal cookbook starts here.</p>
      </div>
      <form
        className='flex flex-col gap-5'
        onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1.5'>
          <label className='text-ink'>Full name *</label>
          <input
            type='text'
            placeholder='Your name'
            className={inputClasses}
            value={form.full_name}
            onChange={(e) => setForm({ ...form, full_name: e.target.value })}
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label
            htmlFor='email'
            className='text-ink'>
            Email address *
          </label>
          <input
            id='email'
            type='email'
            placeholder='you@example.com'
            className={inputClasses}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-ink'>Location *</label>
          <input
            type='location'
            placeholder='Your location'
            className={inputClasses}
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-ink'>Password *</label>
          <input
            type='password'
            placeholder='Create a password'
            className={inputClasses}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span className='caption text-muted-text'>
            Use at least 8 characters, with a number and a letter.
          </span>
        </div>

        <div className='flex flex-col gap-1.5'>
          <label className='text-ink'>Confirm password *</label>
          <input
            type='password'
            placeholder='Enter your password again'
            className={inputClasses}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className='flex items-center gap-3 my-2'>
          <input
            type='checkbox'
            id='terms'
            className='text-muted-text'
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label
            htmlFor='terms'
            className='caption text-muted-text'>
            I agree to Bookie's{' '}
            <a
              href='/privacy-policy'
              target='_blank'
              className='underline'>
              Terms of Service and Privacy Policy.
            </a>
          </label>
        </div>

        {error && <p className='text-red-500'>{error}</p>}

        <Button
          type='submit'
          style='default'
          text='Create account'
        />

        <Button
          type='button'
          style='secondary'
          text='Already a member? Log in'
          onClick={() => navigate('/sign-in')}
        />
      </form>
    </div>
  );
}

export default RegistrationForm;
