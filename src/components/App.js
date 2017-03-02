import React, { PropTypes } from 'react';
import { Provider } from 'react-redux'

import { Router, IndexRoute, Route, Link } from 'react-router';

// components
import Button from './Button';

// styles
import styles from './App.css';



const Layout = ({ children }) => (
  <div className={styles.layout}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};


const Home = () => (
  <div className={styles.app}>
    <h2>Hello</h2>
    <Button />
    <Button />
  </div>
);

const About = () => (
  <div className={styles.app}>
    <h2>About</h2>
  </div>
);


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
