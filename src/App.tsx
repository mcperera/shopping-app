import React from 'react';
import {Provider} from 'react-redux';
import Routes from './navigations';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
