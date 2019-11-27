import * as React from 'react';
import { 
  Text, View, StyleSheet, TouchableHighlight, 
  TextInput, StatusBar, Alert, KeyboardAvoidingView, ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import { loginUser } from '../../action/userAction/action';
import colours from '../../styles/theme';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  /* Implemented to handle login */ 
  handleLogin = () => {
    this.props.loginUser({
      email: this.state.email, 
      password: this.state.password 
    }, (action) => {
      if(action === 'login') {
        this.props.navigation.navigate('Dashboard')
      } else {
        Alert.alert('Invalid credential!')
      }
    })
  }

  handleSignup = () => {
    //Todo navigate to sign-up screen
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstHalf}>
        </View>
        <View style={styles.secondHalf}>
          <View style={[styles.card, styles.loginContent]}>
          <Text style={styles.loginHeader}>Login</Text>
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.inputStyle}
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
                autoCapitalize = 'none'
                placeholder={'Email'}>
              </TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.inputStyle, {marginBottom: 20}]} 
                placeholder={'Password'}
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}
                secureTextEntry={true}>
              </TextInput>
            </View>
           </View>
          <View style={styles.loginButtonContainer}>
            <TouchableHighlight 
              style={styles.loginButton} 
              underlayColor ={colours.secondaryColor}
              onPress={this.handleLogin}
            >
              <Text style={styles.loginText}> Login </Text>
            </TouchableHighlight>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <Text style={styles.signupLink} onPress={this.handleSignup}>Click here</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  firstHalf: {
    backgroundColor: colours.primaryColor,
    flex: 2
  },
  secondHalf: {
    backgroundColor: 'white',
    flex: 3
  },
  card: {
    backgroundColor: 'white',
    marginTop: -40,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 4,
    borderRadius: 10
  },
  loginContent: {
    flex: 3,
    justifyContent: 'center'
  },
  loginButtonContainer: {
    flex: 2
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: colours.primaryColor,
    padding: 16,
    marginHorizontal: 40,
    borderRadius: 50,
    marginTop: -25,
    elevation: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  signupText: {
    color: '#adadad'
  },
  signupLink: {
    color: '#969696',
    fontWeight: 'bold',
    marginLeft: 2
  },
  inputContainer:{
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  inputStyle:{
    height: 43, 
    borderColor: '#adadad', 
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20
  },
  loginHeader: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5
  }
});

function mapStateToProps (state) {
  return {
    userData: state.user.userData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loginUser: (data, cb) => dispatch(loginUser(data, cb))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
