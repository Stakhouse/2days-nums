import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../AppStyles'; // Adjust this path to where your styles are located

// Define TypeScript interface for future props
interface LoginScreenProps {
  // Future props can be defined here
}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter your username"
      />
    </View>
  );
};

export default LoginScreen;
