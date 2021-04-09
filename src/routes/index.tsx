import React, { FC, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Spinner } from 'components/common/spinner';
import { RootState } from 'redux/store/root-saga.store';

const HomePage = React.lazy(() => import('../pages/home.page'));
const ListOfUsersPage = React.lazy(() => import('../pages/list-of-users.page'));
const SignInPage = React.lazy(() => import('../pages/sign-in.page'));
const SignUpPage = React.lazy(() => import('../pages/sign-up.page'));
const NotFoundPage = React.lazy(() => import('../pages/not-found.page'));

const publicContent: JSX.Element = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sign-up" component={SignUpPage} />
    <Route exact path="/sign-in" component={SignInPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

const privetContent: JSX.Element = (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/sign-up" component={SignUpPage} />
    <Route exact path="/sign-in" component={SignInPage} />
    <Route exact path="/list-of-users" component={ListOfUsersPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

const MainRouter: FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const Content = isAuthenticated ? privetContent : publicContent;

  return <Suspense fallback={Spinner}>{Content}</Suspense>;
};

export default withRouter(MainRouter);
