import React, { PropTypes } from 'react';
import { Provider } from 'react-redux'

import { Router, IndexRoute, Route } from 'react-router';

// components
import Layout from 'components/layout';
import About from 'components/about';
import Home from 'components/home';

const App = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
