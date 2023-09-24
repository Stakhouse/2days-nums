import React, { useState } from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import styles from '../AppStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IslandButtons from '../components/IslandButtons';
import { FloatingAction } from "react-native-floating-action";
import SliderComponent from '../components/SliderComponent';

const backgroundImage = require('../assets/caribbeanMap.png');

type RootStackParamList = {
  HomeScreen: undefined;
  // Add other screen names and their params here
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
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
      <FloatingAction
        position="left"
        left={20}
        bottom={20}
        onPressMain={() => {}}
        showBackground={false}
        color="#00ffff"
        floatingIcon={<Icon name="qrcode-scan" size={24} color="white" />}
      />
    </View>
  );
};

export default HomeScreen;
