import React, { PropTypes } from 'react';

// styles
import styles from './Button.css';

const Button = ({ onClick, children }) => (
  <button className={styles.btn} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
};


export default Button;
