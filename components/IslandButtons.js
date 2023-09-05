import React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from '../AppStyles.js';  // Make sure this path is correct

const islandFlags = [
  require('../assets/flags/vc.png'),
  require('../assets/flags/bb.png'),
  require('../assets/flags/tt.png'),
  require('../assets/flags/lc.png'),
  require('../assets/flags/dm_enhanced.png'),
  require('../assets/flags/gd.png'),
  require('../assets/flags/jm.png'),
  require('../assets/flags/an.png'),
];

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

export default IslandButtons;
