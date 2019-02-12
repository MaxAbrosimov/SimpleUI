import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from './modules/';

const App = ({ children, location }) => (
  <div>
    <NavBar path={location.pathname} />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
}

export default App;
