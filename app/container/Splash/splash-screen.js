import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'purple'
  }
});

class SplashScreen extends Component {

  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('Login')
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Beebuck</Text>
      </View>
    );
  }
}


export default SplashScreen;