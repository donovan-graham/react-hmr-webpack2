import React, { PropTypes } from 'react';
import Button from 'components/button';
import Heading from 'components/heading';

const Home = ({ counter, onUp, onDown }) => (
  <div>
    <Heading>Home</Heading>
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
