import React from "react";
import Button from "../Button/Button";

function RegistrationForm() {
  const inputClasses =
    "label w-full px-4 py-3 rounded-xl border border-gray-200 text-ink placeholder:text-muted-text bg-white focus:outline-none focus:border-gray-400";
  return (
    <div className="w-full max-w-md flex flex-col justify-center gap-6">
      <div>
        <h2>Come on in.</h2>
        <p className="text-muted-text">Your personal cookbook starts here.</p>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-ink">Full name *</label>
          <input type="text" placeholder="Your name" className={inputClasses} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-ink">Email address *</label>
          <input
            type="email"
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-ink">Password *</label>
          <input
            type="password"
            placeholder="Create a password"
            className={inputClasses}
          />
          <span className="caption text-muted-text">
            Use at least 8 characters, with a number and a letter.
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-ink">Confirm password *</label>
          <input
            type="password"
            placeholder="Enter your password again"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center gap-3 my-2">
          <input type="checkbox" id="terms" className="text-muted-text" />
          <label htmlFor="terms" className="caption text-muted-text">
            I agree to Bookie's Terms of Service and Privacy Policy.
          </label>
        </div>

        <Button type="submit" style="default" text="Create account" />

        <Button
          type="button"
          style="secondary"
          text="Already a member? Log in"
        />
      </form>
    </div>
  );
}

export default RegistrationForm;
