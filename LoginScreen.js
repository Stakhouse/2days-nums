import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => { /* Login Logic Here */ }} />
    </View>
  );
};

export default LoginScreen;
