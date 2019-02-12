import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import * as ROUTES from 'src/constants/ROUTES';

const styles = {
    menu: {
        backgroundColor: '#5f697a',
        height: 50
    },
    item: {
        color: '#FFFFFF'
    }
};

const NavBar = ({ path }) => (
  <Menu style={styles.menu}>
    <Menu.Menu>
      <Menu.Item onClick={() => browserHistory.push(ROUTES.HOME)}>
      </Menu.Item>
      <Menu.Item sstyle={styles.item} active={path === ROUTES.STATISTIC} onClick={() => browserHistory.push(ROUTES.STATISTIC)}>
         Statistic
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item style={styles.item} active={path === ROUTES.SIGNUP} onClick={() => browserHistory.push(ROUTES.SIGNUP)}>
        Sign Up
      </Menu.Item>
      <Menu.Item style={styles.item} active={path === ROUTES.LOGIN} onClick={() => browserHistory.push(ROUTES.LOGIN)}>
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
