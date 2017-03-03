import React, { PropTypes } from 'react';

// components
import Button from 'components/button';

const Home = ({ counter, onUp, onDown }) => (
  <div>
    <h2>Home</h2>
    <div>Counter: {counter}</div>
    <Button onClick={onUp}>Up</Button>
    <Button onClick={onDown}>Down</Button>
  </div>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  onUp: PropTypes.func.isRequired,
  onDown: PropTypes.func.isRequired,
};

export default Home;
