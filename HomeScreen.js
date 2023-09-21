import React from 'react';
import { View } from 'react-native';
import SliderComponent from '../components/SliderComponent';
import IslandButton from '../components/IslandButton';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <SliderComponent />
      <IslandButton />
    </View>
  );
}