import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutIsSuccess } from 'redux/actions/sign-in.action';

const Logout: FC = () => {
  const dispatch = useDispatch();

  const handleLogout = async (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(logoutIsSuccess());
  };

  return (
    <Link to="/" className="nav-item nav-link ml-auto" onClick={handleLogout}>
      logout
    </Link>
  );
};

export { Logout };
