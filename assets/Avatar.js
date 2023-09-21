import { View, Image } from 'react-native';
import React from 'react';
import StyleSheet from 'react-native-media-query';
const Avatar = (props) => {
  return (
    <View style={styles.left} media={{media: ids.left}}>
<Image style={styles.image} source={props.source} accessibilityLabel={props.alt}/>
    </View>
  )
}

export default Avatar

const {ids, styles} = StyleSheet.create({
  left: {
      width: '30%',
      '@media (min-height: 769px) and (max-height: 1024px)': {
         width:'15%'
      },
  },
    image: {
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
})