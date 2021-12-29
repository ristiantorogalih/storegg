import Image from 'next/image';
import React from 'react';
import SignupForm from '../components/organisms/SignupForm/SignupForm';
import AppLogo from '../components/atoms/Logo/AppLogo';
export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <AppLogo width={60} height={60} alt="logo" />
          </div>
          <SignupForm />
        </form>
      </div>
    </section>
  );
}
