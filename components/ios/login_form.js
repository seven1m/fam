'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

var LoginForm = React.createClass({
  getInitialState() {
    return {
      email: null,
      password: null,
      error: null
    };
  },

  render() {
    return (
      <View style={styles.container}>
        {this.renderError()}
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

  renderError() {
    if (this.state.error) {
      return (
        <Text style={{color: 'red'}}>{this.getErrorMessage()}</Text>
      );
    }
  },

  handleLogin() {
    Session.login(
      this.state.email,
      this.state.password,
      function(error, token) {
        if (error) {
          this.setState({error});
        } else {
          this.props.onLoggedIn(null, token);
        }
      }.bind(this)
    );
  },

  getErrorMessage() {
    return this.state.error;
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
