'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

var Session = require('../../session');

var LoginForm = React.createClass({
  getInitialState() {
    return {
      email: null,
      password: null
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            margin: 10,
            textAlign: 'center',
          }}
          ref='email'
          placeholder='email@example.com'
          keyboardType='email-address'
          onChange={(e) => this.setState({email: e.nativeEvent.text})}
          value={this.state.email} />
        <TextInput
          style={{
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            margin: 10,
            textAlign: 'center',
          }}
          ref='password'
          placeholder='password'
          password={true}
          onChange={(e) => this.setState({password: e.nativeEvent.text})}
          value={this.state.password} />
        <Text onPress={this.handleLogin}>sign in</Text>
      </View>
    );
  },

  handleLogin() {
    Session.login(
      this.state.email,
      this.state.password,
      this.props.onLoggedIn
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = LoginForm;
