import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'tomato'
  }
});

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    );
  }
}


export default LoginScreen;