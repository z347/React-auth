import { FC } from 'react';

import { NavBar } from 'components/navigation';

const Title = {
  marginTop: '15%',
  marginBottom: '5%',
};

const NotFoundPage: FC = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className="container">
      <h1 className="display-2" style={Title}>
        Page not found
      </h1>
    </main>
  </>
);

export default NotFoundPage;
