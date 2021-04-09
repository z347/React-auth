import { MouseEvent, FC } from 'react';
import { useDispatch } from 'react-redux';

import { requestDeleteOneUserFromList } from 'redux/actions/delete-user.action';
import { requestGetListWithUsers } from 'redux/actions/list-of-users.action';
import { ListType } from 'redux/types/list-of-users.types';

type PropTypes = {
  list: ListType;
};

const List: FC<PropTypes> = ({ list }: PropTypes) => {
  const dispatch = useDispatch();

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // await - must be for correct work
    await dispatch(requestDeleteOneUserFromList(event.currentTarget.value));
    await dispatch(requestGetListWithUsers());
  };

  const listJSX = list.map((item, index) => (
    <tr key={item._id}>
      <th scope="row">{index + 1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <button onClick={handleClick} type="submit" className="btn btn-danger" value={item._id}>
          Delete user
        </button>
      </td>
    </tr>
  ));

  return <>{listJSX}</>;
};

export { List };
