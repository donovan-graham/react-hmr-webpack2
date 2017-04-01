import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// components
import Home from './component';
import { increment, decrement } from '../../root/action';

const mapStateToProps = ({ counter: { value } }) => ({
  counter: value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUp() {
    dispatch(increment());
  },
  onDown() {
    dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
