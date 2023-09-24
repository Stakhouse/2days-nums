import React from 'react';
import { TouchableOpacity, Image, ScrollView, View, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.islandButtons}>
        {islandFlags.map((flag, index) => (
          <TouchableOpacity key={`island-${index}`} style={styles.button}>
            <Image source={flag} style={styles.buttonImage} resizeMode="cover" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  islandButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    margin: 5,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
  },
});

export default IslandButtons;
