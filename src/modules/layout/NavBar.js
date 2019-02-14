import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import * as ROUTES from 'src/constants/ROUTES';
import './styles.css';
import 'src/styles.css';

const NavBar = ({ path }) => (
    <Menu className="NavBar Main-Color">
        <Menu.Menu>
            <Menu.Item onClick={() => browserHistory.push(ROUTES.HOME)}/>
        </Menu.Menu>
        <Menu.Menu >
            <Menu.Item active={path === ROUTES.DEMO} onClick={() => browserHistory.push(ROUTES.DEMO)}>
                <span className="Text-White">Demo</span>
            </Menu.Item>
            <Menu.Item active={path === ROUTES.STATISTIC} onClick={() => browserHistory.push(ROUTES.STATISTIC)}>
                <span className="Text-White">Statistic</span>
            </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
            <Menu.Item active={path === ROUTES.SIGNUP} onClick={() => browserHistory.push(ROUTES.SIGNUP)}>
                <span className="Text-White">Sign Up</span>
            </Menu.Item>
            <Menu.Item active={path === ROUTES.LOGIN} onClick={() => browserHistory.push(ROUTES.LOGIN)}>
                <span className="Text-White">Login</span>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
