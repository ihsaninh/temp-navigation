import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ForgotPassword extends Component {
  state = {
    name: ''
  };

  componentDidMount() {
    const { route } = this.props;
    const { name } = route.params;
    this.setState({
      name
    });
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}

export default ForgotPassword;
