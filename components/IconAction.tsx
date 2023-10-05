import React from 'react';
import { IconButton } from 'react-native-paper';
import styles from '../src/AppStyles';  // Path already correct

// Define TypeScript interface for props
interface IconActionProps {
  icon: string;
  action: () => void;
}

const IconAction: React.FC<IconActionProps> = ({ icon, action }) => (
  <IconButton
    icon={icon}
    size={40}
    onPress={action}
    style={styles.iconButton}
  />
);

export default IconAction;
