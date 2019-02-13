import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from './modules/';

const styles = {
    children: {
        width: 1440,
        margin: 'auto'
    }
};


const App = ({ children, location }) => (
  <div>
    <NavBar path={location.pathname} />
    <div style={styles.children}>
        {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default App;
