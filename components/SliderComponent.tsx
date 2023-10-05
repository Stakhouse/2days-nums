import { TabActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Alert, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

// Updated SliderProps interface
interface SliderProps {
  images?: string[];
  autoplay?: boolean;
  loop?: boolean;
}

const SliderComponent: React.FC<SliderProps> = (props) => {
  const [images, setImages] = useState([
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any'
  ]);

  const onImagePress = () => {
    Alert.alert('Coming soon!');
  };

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        autoplay={props.autoplay || true}
        loop={props.loop || true}
      >
        {(props.images || images).map((item, index) => (
          <View key={index} style={{ flex: 1 }}>
            <Text onPress={onImagePress}>{item}</Text>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default SliderComponent;
