'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

var Session = require('./session');
var LoginForm = require('./components/ios/login_form');

var TOKEN_STORAGE_KEY = 'loginToken';

var Fam = React.createClass({
  componentDidMount() {
    Session.getToken((_err, token) => this.setState({loaded: true, token}));
  },

  getInitialState() {
    return {
      loaded: false,
      token: null
    };
  },

  render() {
    if (!this.state.loaded) return <View/>;
    if (this.state.token) {
      return (
        <View style={styles.container}>
          <Text>logged in</Text>
          <Text onPress={this.handleLogout}>log out</Text>
        </View>
      );
    } else if (this.state.loaded) {
      return <LoginForm onLoggedIn={this.handleLoggedIn}/>;
    }
  },

  handleLoggedIn(err, token) {
    console.log(arguments);
    if (err) throw err;
    this.setState({token});
  },

  handleLogout() {
    Session.logout(() => this.setState({token: null}));
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('Fam', () => Fam);
