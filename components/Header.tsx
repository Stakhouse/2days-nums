import React from 'react';
import { View } from 'react-native';
import styles from '../src/AppStyles';
import MenuButton from './MenuButton';
import IconAction from './IconAction';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define TypeScript interface for props
interface HeaderProps {
  loggedIn?: boolean;
  navigation: any; // You can replace 'any' with the specific type for navigation
}

const Header: React.FC<HeaderProps> = ({ loggedIn, navigation }) => {
  return (
    <SafeAreaView style={styles.headerSafeArea} edges={['bottom']}>
      <View style={styles.header}>
        <MenuButton />
        <IconAction icon="account" action={() => onAccountPressed(loggedIn, navigation)} />
        <IconAction icon="cog-outline" action={() => onSettingsPressed(navigation)} />
      </View>
    </SafeAreaView>
  );
};

const onAccountPressed = (loggedIn?: boolean, navigation?: any) => {
  if (!loggedIn) {
    navigation?.navigate('Login');
  }
};

const onSettingsPressed = (navigation: any) => {
  navigation.navigate('Settings');
};

export default Header;
