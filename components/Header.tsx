import React from 'react';
import { View } from 'react-native';
import styles from '../AppStyles.js';
import MenuButton from './MenuButton';
import IconAction from './IconAction';
import { SafeAreaView } from 'react-native-safe-area-context';

function Header({ loggedIn, navigation }) {
  return (
    <SafeAreaView style={styles.headerSafeArea} edges={['bottom']}>
      <View style={styles.header}>
        <MenuButton />
        <IconAction icon="account" action={() => onAccountPressed(loggedIn, navigation)} />
        <IconAction icon="cog-outline" action={() => onSettingsPressed(navigation)} />
      </View>
    </SafeAreaView>
  );
}

function onAccountPressed(loggedIn, navigation) {
  if (!loggedIn) {
    navigation.navigate('Login');
  }
}

function onSettingsPressed(navigation) {
  navigation.navigate('Settings');
}

export default Header;

