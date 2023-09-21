import { StyleSheet, Text } from 'react-native'
import React from 'react'

const BoldUnderlineHeading = (props) => {


    return (
        <Text style={styles.boldUnderline}>{props.slide.heading}</Text>
    )
}

export default BoldUnderlineHeading

const styles = StyleSheet.create({
    boldUnderline: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold'
    },
})