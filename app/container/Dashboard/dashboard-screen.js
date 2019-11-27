import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../Splash/home-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const Tabs = createAppContainer(createMaterialBottomTabNavigator(
  {
    Tab1: { screen: HomeScreen },
    Tab2: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Tab1',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {
      backgroundColor: '#694fad'
    },
  }
))

class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}


export default DashboardScreen;