import React from 'react';
import { IconButton } from 'react-native-paper';
import styles from '../AppStyles';  // Make sure the path is correct

const IconAction = ({ icon, action }) => (
  <IconButton
    icon={icon}
    size={40}
    onPress={action}
    style={styles.iconButton}
  />
);

export default IconAction;
