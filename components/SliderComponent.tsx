import { TabActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Alert, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Updated SliderProps interface
interface SliderProps {
  images?: string[];
  autoplay?: boolean;
  itemWidth?: number;
  loop?: boolean;
}

const SliderComponent: React.FC<SliderProps> = (props) => {
  const [images, setImages] = useState([
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any'
  ]);

  const { width: viewportWidth } = Dimensions.get('window');

  const onImagePress = () => {
    Alert.alert('Coming soon!');
  };

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View>
        <Text onPress={onImagePress}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        data={props.images || images}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={props.itemWidth || viewportWidth - 60}
        autoplay={props.autoplay || true}
        loop={props.loop || true}
      />
    </View>
  );
};

export default SliderComponent;
