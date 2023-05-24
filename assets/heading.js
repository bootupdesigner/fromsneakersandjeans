import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import StyleSheet from 'react-native-media-query';

import Next from './images/nextButton.png';
import Back from './images/backButton.png';

const Heading = (props) => {

    const router = useRouter();

  return (
    <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push(href = '/chapters')} >
                        <Image style={styles.navImages} source={Back} accessibilityLabel='visit chapters home' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} dataSet={{media: ids.titleImages}} source={props.chapterTitle} accessibilityLabel={props.titleAlt} />

                    <TouchableOpacity onPress={props.nextChapter} >
                        <Image style={styles.navImages} source={Next} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>
                </View>
  )
}

export default Heading;

const {ids, styles} = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 0
    },
    navImages: {
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255,255,255,0)'
    },
    titleImages: {
        backgroundColor: 'rgba(255,255,255,0)',
        marginVertical: 5,
        '@media (min-height: 320px) and (max-height: 480px)': {
            height: 80,
            width: '50%',
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            width: '50%',
        },
    },
})