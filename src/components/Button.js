import React from 'react';

// styles
import styles from './Button.css';

const Button = () => {
  const onClick = () => alert('Clicked');
  return (
    <button className={styles.btn} onClick={onClick}>Click</button>
  )
};

export default Button;
