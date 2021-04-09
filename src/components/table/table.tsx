import { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner } from 'components/common/spinner';
import { requestGetListWithUsers } from 'redux/actions/list-of-users.action';
import { RootState } from 'redux/store/root-saga.store';
import { emptyListJSX } from './list/empty-list';
import { List } from './list/list';

const Table: FC = () => {
  const dispatch = useDispatch();

  useEffect((): any => dispatch(requestGetListWithUsers()), [dispatch]);

  const { loading, payload } = useSelector((state: RootState) => state.list);

  const tableJSX = (
    <>
      <h1 className="display-2">Current list of users</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <List list={payload} />
        </tbody>
      </table>
    </>
  );

  const content = payload.length > 0 ? tableJSX : emptyListJSX;
  const requestProcessing = loading ? <Spinner /> : content;

  return <>{requestProcessing}</>;
};

export { Table };
