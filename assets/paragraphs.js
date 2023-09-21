import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Speech from 'expo-speech';

import playButton from './images/playButton.png';


const Paragraphs = (props) => {

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

  return (
    <View style={styles.row} >
        <TouchableOpacity style={styles.listen} onPress={() => { speakText(props.paragraph) }}>
            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
        </TouchableOpacity>
        <Text style={styles.paragraph}>{props.paragraph}</Text>
    </View>
  )
}

export default Paragraphs

const styles = StyleSheet.create({
    playOptions: {
        width: 24,
        height: 24
    },
    row: {
        flexDirection: 'row',
        width:'80%'
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 2,
    },
    listen: {
        flexDirection: 'row',
        margin: 5,
        paddingVertical: 3
    },
})