import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function SliderComponent() {
  const [images, setImages] = useState([
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any'
  ]);

  const onImagePress = () => {
    Alert.alert('Coming soon!');
  };

  return (
    <View style={{flex: 1}}>
      <SliderBox images={images} onCurrentImagePressed={onImagePress} autoplay circleLoop sliderBoxHeight={200} />
    </View>
  );
}