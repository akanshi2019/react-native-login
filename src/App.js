import React, {Component} from 'react';
import AppNavigator from './container';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={Store}>
          <AppNavigator />
        </Provider>
      </>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
