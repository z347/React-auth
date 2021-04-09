import { FC } from 'react';

import { NavBar } from 'components/navigation';

const Title = {
  marginTop: '15%',
  marginBottom: '5%',
};

const HomePage: FC = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className="container">
      <h1 className="display-2" style={Title}>
        Home page
      </h1>
    </main>
  </>
);

export default HomePage;
