import { StyleSheet, Text } from 'react-native'
import React from 'react'

const BulletsBoldHeading = (props) => {
  return (
    <Text style={styles.bold}>{props.point.heading}</Text> 
  )
}

export default BulletsBoldHeading

const styles = StyleSheet.create({
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2
    },
})