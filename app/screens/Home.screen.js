import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Home extends Component {
  onPress = () => {
    this.props.navigation.navigate('Merchant');
  };

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>ini halaman Home</Text>
        <Button title="Ke halaman lain" onPress={this.onPress} />
      </View>
    );
  }
}

export default Home;
