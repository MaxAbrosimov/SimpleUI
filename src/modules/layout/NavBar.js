import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import * as ROUTES from 'src/constants/ROUTES';
import './styles.css';
import 'src/styles.css';
import {WHITE} from "src/constants/COLORS";

const renderMenuItem = (route, path) => (
    <Menu.Item
        name={route.name}
        style={{color: WHITE}}
        active={path === route.path}
        onClick={() => browserHistory.push(route)}
    />
);

const NavBar = ({ path }) => (
    <Menu className="NavBar Main-Color">
        <Menu.Menu>
            {renderMenuItem(ROUTES.HOME, path)}
        </Menu.Menu>
        <Menu.Menu >
            {renderMenuItem(ROUTES.DEMO, path)}
            {renderMenuItem(ROUTES.STATISTIC, path)}
        </Menu.Menu>
        <Menu.Menu position="right">
            {renderMenuItem(ROUTES.SIGNUP, path)}
            {renderMenuItem(ROUTES.LOGIN, path)}
        </Menu.Menu>
    </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
