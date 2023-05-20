import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Avatar = (props) => {
  return (
    <View style={styles.left}>
<Image style={styles.image} source={props.source} accessibilityLabel={props.alt}/>
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    left: {
        width: '30%'
    },
    image: {
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
})