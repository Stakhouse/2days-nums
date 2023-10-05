import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import IconAction from './IconAction';  // Removed .js extension

// Define TypeScript interface for future props
interface MenuButtonProps {
  isVisible: boolean;
  toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isVisible, toggleMenu }) => {
  const [visible, setVisible] = useState(isVisible);

  const handlePress = (item: string) => {
    toggleMenu();
    console.log(`Selected menu item: ${item}`);
  };

  return (
    <Menu
      visible={visible}
      onDismiss={toggleMenu}
      anchor={<IconAction icon="menu" action={toggleMenu} />}
    >
      {/* Your menu items here */}
    </Menu>
  );
};

export default MenuButton;
