import React from 'react';
import Button from '../Button/Button';

function SignInForm() {
  const inputClasses = "label w-full px-4 py-3 rounded-xl border border-gray-200 text-ink placeholder:text-muted-text bg-white focus:outline-none focus:border-gray-400";

  return (
    <div className="w-full max-w-md flex flex-col justify-center gap-6">
      
      <div>
        <h2>Welcome back, cook.</h2>
        <p className="text-muted-text">
          Log in to open your personal cookbook.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        
        <div className="flex flex-col gap-1.5">
          <label className="text-ink">Email address</label>
          <input
            type="email"
            placeholder="maya.chen@email.com"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-ink">Password</label>
          <input
            type="password"
            placeholder="••••••••••••"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="remember"
              className="className=w-4 h-4 rounded border-border accent-button-default cursor-pointer"
            />
            <label htmlFor="remember" className="caption text-muted-text cursor-pointer">
              Remember me
            </label>
          </div>

          <a href="#forgot" className="caption text-button-default hover:underline">
            Forgot password?
          </a>
        </div>

        <Button 
          type="submit"
          style="default" 
          text="Log in" 
        />

        <div className="flex flex-col gap-2">
          <span className="caption text-muted-text">New to the kitchen?</span>
          <Button 
            type="button"
            style="secondary" 
            text="Create an account" 
          />
        </div>

        <p className="caption text-muted-text">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </form>
    </div>
  );
}

export default SignInForm;
