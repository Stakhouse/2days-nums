import React, { useState } from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import styles from '../AppStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IslandButtons from '../components/IslandButtons.js';
import { FloatingAction } from "react-native-floating-action";
import SliderComponent from '../components/SliderComponent.js'; // Make sure to import the correct component
const backgroundImage = require('../assets/caribbeanMap.png');

function HomeScreen({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#00ffff" barStyle="dark-content" />
      <View style={{ flex: 0.5 }}>
        <SliderComponent />
      </View>
      <ImageBackground source={backgroundImage} style={{ flex: 0.5 }}>
        <IslandButtons />
      </ImageBackground>
      <FloatingAction
        position="left"
        left={20}
        bottom={20}
        onPressMain={() => {
          console.log("FAB pressed");
        }}
        showBackground={false}
        color="#00ffff"
        floatingIcon={<Icon name="qrcode-scan" size={24} color="white" />}
      />
    </View>
  );
}

export default HomeScreen;
