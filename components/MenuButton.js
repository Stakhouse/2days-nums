
import React, { useState } from 'react';
import { IconButton, Menu } from 'react-native-paper';
import styles from '../AppStyles.js';
import IconAction from '../components/IconAction.js';

function MenuButton() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => setVisible(!visible);

  const handlePress = (item) => {
    toggleMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={toggleMenu}
      anchor={<IconAction icon="menu" action={toggleMenu} />}
    >
      {/* ...menu items... */}
      {/* Removed console.log statements */}
    </Menu>
  );
}
export default MenuButton;
