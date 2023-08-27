import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { Provider, IconButton, Menu } from 'react-native-paper';
import styles from './AppStyles';
import { FloatingAction } from "react-native-floating-action";

const backgroundImage = require('./assets/caribbeanMap.png');
const islandFlags = [
  require('./assets/flags/vc.png'),
  require('./assets/flags/bb.png'),
  require('./assets/flags/tt.png'),
  require('./assets/flags/lc.png'),
  require('./assets/flags/dm_enhanced.png'),
  require('./assets/flags/gd.png'),
  require('./assets/flags/jm.png'),
  require('./assets/flags/an.png'),
];

const IconAction = ({ icon, action }) => (
  <IconButton
    icon={icon}
    size={40}
    onPress={action}
    style={styles.iconButton}
  />
);

const onSettingsPressed = () => { console.log("Navigating to settings screen..."); };

const MenuButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => setVisible(!visible);

  const handlePress = (item) => {
    console.log(`Selected menu item: ${item}`);
    toggleMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={toggleMenu}
      anchor={<IconAction icon="menu" action={toggleMenu} />}
    >
      {/* ...menu items... */    <><Menu.Item onPress={() => handlePress('Home / Dashboard')} title="Home / Dashboard" /><Menu.Item onPress={() => handlePress('Profile / Account')} title="Profile / Account" /><Menu.Item onPress={() => handlePress('Settings')} title="Settings" /><Menu.Item onPress={() => handlePress('Notifications')} title="Notifications" /><Menu.Item onPress={() => handlePress('Help & Support')} title="Help & Support" /><Menu.Item onPress={() => handlePress('About')} title="About" /><Menu.Item onPress={() => handlePress('Features / Scan Tickets / Search')} title="Features / Scan Tickets / Search" /><Menu.Item onPress={() => handlePress('Social')} title="Social" /><Menu.Item onPress={() => handlePress('Logout / Sign Out')} title="Logout / Sign Out" /><Menu.Item onPress={() => handlePress('Tutorials / Walkthrough')} title="Tutorials / Walkthrough" /></> }
    </Menu>
  );
};

function Header({ loggedIn }) {
  return (
    <SafeAreaView style={styles.headerSafeArea}>
      <View style={styles.header}>
        <MenuButton />
        <IconAction icon="account" action={() => onAccountPressed(loggedIn)} />
        <IconAction icon="cog-outline" action={onSettingsPressed} />
      </View>
    </SafeAreaView>
  );
}

function IslandButtons() {
  return (
    <ScrollView contentContainerStyle={styles.islandButtons}>
      {islandFlags.map((flag, index) => (
        <TouchableOpacity key={`island-${index}`} style={styles.button}>
          <Image source={flag} style={styles.buttonImage} resizeMode="contain" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Provider>
      <StatusBar backgroundColor="#00ffff" barStyle="dark-content" />
      <ImageBackground source={backgroundImage} style={styles.container}>
        <Header loggedIn={loggedIn} />
        <IslandButtons />
      </ImageBackground>
      <FloatingAction
        position="left"
        onPressMain={() => console.log("FAB pressed")}
      />
    </Provider>
  );
}

function onAccountPressed(loggedIn) {
  if (loggedIn) {
    console.log("Navigating to profile page...");
  } else {
    console.log("Navigating to login screen...");
  }
}

export default App;
