import { AppRegistry } from 'react-native';
import App from './src/navigator';
import { Provider } from 'react-redux';
import store from './src/store';
import React, { Component } from 'react';

const Quejapp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent('quejapp', () => Quejapp);
