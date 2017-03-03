import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import Home from './component';

const mapStateToProps = ({ counter: { value } }) => ({
  counter: value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUp() {
    console.log("up ...");
    dispatch({ type: 'INCREMENT' });
  },
  onDown() {
    console.log("down ...");
    dispatch({ type: 'DECREMENT' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
