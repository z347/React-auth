import { FC } from 'react';

import { NavBar } from 'components/navigation';
import { SignInForm } from 'components/auth/sign-in';

const SignInPage: FC = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className="container">
      <SignInForm />
    </main>
  </>
);

export default SignInPage;
