import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Speech from 'expo-speech';

import playButton from './images/playButton.png';

const NumberList = (props) => {

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    return (
        <View style={styles.row}>
            <TouchableOpacity style={styles.listen} onPress={() => { speakText(props.paragraph) }}>
                <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
            </TouchableOpacity>

            <View style={styles.list}>
                <Text style={styles.bulletNumbers}>{props.number.id}.</Text>
                <Text style={styles.listData}>{props.paragraph}</Text>
            </View>
        </View>
    )
}

export default NumberList

const styles = StyleSheet.create({
    listData: {
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 5
    },
    bulletNumbers: {
        marginVertical: 5,
        fontSize: 16
    },
    playOptions: {
        width: 24,
        height: 24
    },
    row: {
        flexDirection: 'row',
    },
    list: {
        flexDirection: 'row',
        width: '80%'
    },
    listen: {
        flexDirection: 'row',
        margin: 5,
        paddingVertical: 3
    },
})