/*

simple boilerplates with Redux-saga.
One root saga watcher that listens to multiple watchers, each
corresponding to different actions and their side effects.
In this app, 2 differnt api calls

*/

import React from 'react';
import {Provider} from 'react-redux';
import Main from './src/pages/Main/index.js';
import {sagaStore} from './src/store/index.js';

const App = () => {
  return (
    <Provider store={sagaStore}>
      <Main />
    </Provider>
  );
};

export default App;
