import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Login extends Component {
  onPress = () => {
    const { navigation } = this.props;
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'MainTab'
        }
      ]
    });

    // navigation.navigate('ForgotPassword', {
    //   name: 'Ihsan Nurul Habib'
    // });
  };

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>ini halaman login</Text>
        <Button title="Login bro" onPress={this.onPress} />
      </View>
    );
  }
}

export default Login;
