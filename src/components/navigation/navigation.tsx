import { FC } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from 'redux/store/root-saga.store';
import { Logout } from 'components/auth/logout';

const userNotAuthenticated = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="nav-item nav-link">
      home
    </Link>
    <Link to="/sign-in" className="nav-item nav-link ml-auto">
      sign-in
    </Link>
    <Link to="/sign-up" className="nav-item nav-link ml-auto">
      sign-up
    </Link>
  </nav>
);

const userIsAuthenticated = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="nav-item nav-link">
      home
    </Link>
    <Link to="/list-of-users" className="nav-item nav-link">
      list-of-users
    </Link>
    <Logout />
  </nav>
);

const NavBar: FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const Content = isAuthenticated ? userIsAuthenticated : userNotAuthenticated;

  return <>{Content}</>;
};

export default withRouter(NavBar);
