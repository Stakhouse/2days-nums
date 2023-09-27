import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import IconAction from './IconAction.js';

function MenuButton() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => setVisible(!visible);

  const handlePress = (item: string) => { // Explicitly specify the type here
    toggleMenu();
    // Do something with the item, e.g., navigate to a different screen
    console.log(`Selected menu item: ${item}`);
  };

  return (
    <Menu
      visible={visible}
      onDismiss={toggleMenu}
      anchor={<IconAction icon="menu" action={toggleMenu} />}
    >
      <Menu.Item onPress={() => handlePress('Home / Dashboard')} title="Home / Dashboard" />
      <Menu.Item onPress={() => handlePress('Profile / Account')} title="Profile / Account" />
      <Menu.Item onPress={() => handlePress('Settings')} title="Settings" />
      <Menu.Item onPress={() => handlePress('Notifications')} title="Notifications" />
      <Menu.Item onPress={() => handlePress('Help & Support')} title="Help & Support" />
      <Menu.Item onPress={() => handlePress('About')} title="About" />
      <Menu.Item onPress={() => handlePress('Features / Scan Tickets / Search')} title="Features / Scan Tickets / Search" />
      <Menu.Item onPress={() => handlePress('Social')} title="Social" />
      <Menu.Item onPress={() => handlePress('Logout / Sign Out')} title="Logout / Sign Out" />
      <Menu.Item onPress={() => handlePress('Tutorials / Walkthrough')} title="Tutorials / Walkthrough" />
    </Menu>
  );
}

export default MenuButton;
