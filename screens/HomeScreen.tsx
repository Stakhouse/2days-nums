import React, { useState } from 'react';
import { View, ImageBackground, StatusBar, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IslandButtons from '../components/IslandButtons';
import { FloatingAction } from "react-native-floating-action";
import SliderComponent from '../components/SliderComponent';

const backgroundImage = require('../assets/caribbeanMap.png');

type RootStackParamList = {
  HomeScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

type Props = {
  navigation?: HomeScreenNavigationProp;  // Made optional
  route?: HomeScreenRouteProp;  // Made optional
};

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
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
      <View style={styles.floatingButton}>
        <FloatingAction
          position="left"
          onPressMain={() => {}}
          showBackground={false}
          color="#00ffff"
          floatingIcon={<Icon name="qrcode-scan" size={24} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
});

export default HomeScreen;
