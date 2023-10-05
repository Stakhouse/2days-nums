import React from 'react';
import { View, Text } from 'react-native';
import styles from '../src/AppStyles';
import { Button, Switch } from 'react-native-paper';
import { launchImageLibrary, MediaType, Asset } from 'react-native-image-picker';  // Import MediaType
import Icon from 'react-native-vector-icons/FontAwesome';

const pickImage = () => {
  const options = {
    mediaType: 'photo' as MediaType,  // Set mediaType as MediaType
  };

  launchImageLibrary(options, (response) => {
    if (response.assets) {
      const asset: Asset = response.assets[0];
      if (asset.uri) {
        // Handle the chosen image URI here
      }
    }
  });
};

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={pickImage}>Change Profile Picture</Button>
      <Icon name="user-circle" size={100} color="#000" />
      <Button mode="outlined">Edit Profile</Button>
      <View style={styles.settingRow}>
        <Text>Enable Notifications</Text>
        <Switch value={true} onValueChange={() => {
          // Implement your switch handler here
        }} />
      </View>
      <Button mode="outlined">Change Password</Button>
      <Button mode="outlined">Change Email</Button>
      <Button mode="outlined">Logout</Button>
    </View>
  );
};

export default SettingsScreen;
