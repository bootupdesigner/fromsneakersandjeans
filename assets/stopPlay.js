import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Speech from 'expo-speech';

import stopButton from './images/stopButton.png';


const StopPlay = () => {

    const stopPlay = () => {
        Speech.stop();
    };

    return (
            <TouchableOpacity style={styles.listen} onPress={stopPlay}>
                <Image style={styles.playOptions} source={stopButton} accessibilityLabel='stop button' />
            </TouchableOpacity>

    )
}

export default StopPlay

const styles = StyleSheet.create({
    right: {
        alignItems: 'center',
        width: '20%',
    },
    listen: {
        flexDirection: 'row',
        margin: 5,
        paddingVertical: 3
    },
    playOptions: {
        width: 24,
        height: 24
    },
})