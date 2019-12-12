import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import {TREE} from '../../config/images';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.loginData.loginStatus === 'success' &&
      nextProps.loginData.user &&
      nextProps.loginData.user.token
    ) {
      this.props.navigation.navigate('Splash');
    }
  }

  handleSubmit = () => {
    const {username, password} = this.state;
    if (username !== '' && password !== '') {
      const body = {
        username: username,
        password: password,
      };
      this.props.dispatch({
        type: 'DO_LOGIN',
        payload: {
          body,
        },
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={TREE} style={styles.logo} />
          <Text style={styles.title}>An app made for User Signin.</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.formContainer}>
            <LoginForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: 360,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    marginBottom: 10,
    width: 220,
    opacity: 0.9,
  },
});

const mapStateToProps = state => ({
  loginData: state.login,
});

export default connect(mapStateToProps)(Login);
