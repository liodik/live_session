import React from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import User from './User';

const Users = ({ match }) => {
  return (
    <BrowserRouter>
      <div className="page__content">
        <h1>users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to={`${match.path}/github`}>Github</Link>
          </li>
          <li className="navigation__item">
            <Link to={`${match.path}/facebook`}>Facebook</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={match.path}>
            <span>Select a user please</span>
          </Route>
          <Route path={`${match.path}/:userId`} component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Users;
