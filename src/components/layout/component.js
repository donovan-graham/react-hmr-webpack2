import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// styles
import styles from './style.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <div className={styles.app}>
      { children }
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
