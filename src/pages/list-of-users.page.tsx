import { FC } from 'react';

import { NavBar } from 'components/navigation';
import { Table } from 'components/table';

const ListOfUsersPage: FC = () => (
  <>
    <header>
      <NavBar />
    </header>
    <main className="container">
      <Table />
    </main>
  </>
);

export default ListOfUsersPage;
