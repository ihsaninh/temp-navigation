import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Splash extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Login'
          }
        ]
      });
    }, 2000);
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>ini halaman splash</Text>
      </View>
    );
  }
}

export default Splash;
