import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const NavBar = ({ path }) => (
  <Menu >
    <Menu.Menu>
      <Menu.Item onClick={() => browserHistory.push('/')}>
      </Menu.Item>
      <Menu.Item active={path === '/stats'} onClick={() => browserHistory.push('/stats')}>
         Statistic
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item active={path === '/signup'} onClick={() => browserHistory.push('/signup')}>
        Sign Up
      </Menu.Item>
      <Menu.Item active={path === '/login'} onClick={() => browserHistory.push('/login')}>
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
}

export default NavBar;
