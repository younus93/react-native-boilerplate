import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import store from './store/index';
import AppNavigator from './router';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

