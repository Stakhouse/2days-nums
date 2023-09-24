import React, { useState } from 'react';
import { View, Text, Alert, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface SliderProps {
  // Define your prop types here
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

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text onPress={onImagePress}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth - 60}
        autoplay
        loop
      />
    </View>
  );
};

export default SliderComponent;
