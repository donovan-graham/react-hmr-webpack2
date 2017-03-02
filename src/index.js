import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';

import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer, syncHistoryWithStore } from 'react-router-redux';

import { AppContainer } from 'react-hot-loader';



import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = [routerMiddleware(browserHistory), sagaMiddleware];
const rootReducer = combineReducers({
  routing: routerReducer,
});
const rootSagas = [];

const store = {
  ...createStore(
    rootReducer,
    // initialState,
    compose(applyMiddleware(...rootMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  ),
  runSaga: sagaMiddleware.run,
};

rootSagas.map(store.runSaga);

const history = syncHistoryWithStore(browserHistory, store);





const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};


render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });

  // module.hot.accept('./rootReducer', () => {
  //   store.replaceReducer(rootReducer);
  // });

}
