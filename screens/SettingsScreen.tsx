import React from 'react';
import { View, Text } from 'react-native';
import styles from '../AppStyles';
import { Button, Switch } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const pickImage = () => {
  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    if (response.uri) {}
  });
};

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={pickImage}>Change Profile Picture</Button>
      <Icon name="user-circle" size={100} color="#000" />
      <Button mode="outlined">Edit Profile</Button>
      <View style={styles.settingRow}>
        <Text>Enable Notifications</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <Button mode="outlined">Change Password</Button>
      <Button mode="outlined">Change Email</Button>
      <Button mode="outlined">Logout</Button>
    </View>
  );
}
export default SettingsScreen;
