import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>
        <NavLink exact to="/blue">Blue only</NavLink>
        <NavLink to="/blue/indigo">Add indigo</NavLink>

        <Route path="/blue/indigo" component={indigo} />
      </div>
    );
  }
};

export default Blue;
