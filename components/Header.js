
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from '../AppStyles.js';  
import MenuButton from './MenuButton';  
import IconAction from './IconAction';  

function Header({ loggedIn, navigation }) {
  return (
    <SafeAreaView style={styles.headerSafeArea}>
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
  } else {
    console.log("Navigating to profile page...");
  }
}

function onSettingsPressed(navigation) {
  navigation.navigate('Settings');
}

export default Header;



