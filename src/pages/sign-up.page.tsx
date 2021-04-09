import { FC } from 'react';

import { NavBar } from 'components/navigation';
import { SignUpForm } from 'components/auth/sign-up';

const SignUpPage: FC = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className="container">
      <SignUpForm />
    </main>
  </>
);

export default SignUpPage;
