import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    const {handleChange, handleSubmit} = this.props;
    return (
      <View style={styles.Container}>
        <StatusBar barStyle="light-content" backgroundColor="#772ea2" />
        <TextInput
          name="username"
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={e => handleChange(e, 'username')}
        />
        <TextInput
          name="pasword"
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          style={styles.input}
          onChangeText={e => handleChange(e, 'password')}
          returnKeyType="go"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 18,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
