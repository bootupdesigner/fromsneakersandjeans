import { View, Image, ImageBackground, TouchableOpacity, Linking, Text, ScrollView } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import referenceButton from '../../assets/images/references.png';
import chapterTitle from '../../assets/images/aboutTheAuthor.png';
import backButton from '../../assets/images/backButton.png';
import privacyThumbnail from '../../assets/images/informationIcon.png';
import candiMeridith from '../../assets/images/candiMeridith.jpg'
import StopPlay from '../../assets//stopPlay';
import Paragraphs from '../../assets/paragraphs';
import playButton from '../../assets/images/playButton.png';

const paragraph = `Candi Meridith, MPH is a motivational speaker and public health educator. She has been in the fields of health education and public speaking for over 20 years. With a Master of Public Health degree in Health Promotion and Disease Prevention and a Bachelor of Science degree in Psychology, Candi believes that having the conversation is the first step toward growing into a better person, and she hopes "From Sneakers & Jeans" will encourage you to talk. www.PinkPosGirls.com`;

const AboutTheAuthor = () => {
    const router = useRouter();

    const chapterTitleAlt = 'About The Author Candi';
    const openLink = () => {
        Linking.openURL('https://www.PinkPosGirls.com');
    }
    const PosiLink = () => {
        let story = paragraph;
        let newStory = story.replace(
            `www.PinkPosGirls.com`,
            '[PinkPosGirls.com]'
        );
        return <Text>{newStory}</Text>;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        router.push('/chapters')
                    }}>
                        <Image style={styles.navImages} source={backButton} accessibilityLabel='back to chapters' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} dataSet={{ media: ids.titleImages }} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => {
                        router.push('/references')
                    }} >
                        <Image style={styles.navImages} source={referenceButton} accessibilityLabel='visit references and citations page' />
                    </TouchableOpacity>

                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >

                    <View style={styles.content}>

                        <View style={styles.left}>
                            <Image style={styles.image} source={privacyThumbnail} accessibilityLabel='help websites Candi' />
                        </View>

                        <View style={styles.center}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ fontSize: 16, fontWeight: "500", textAlign: 'center' }}>Candi Meridith, MPH</Text>
                                    <Image style={styles.image} source={candiMeridith} accessibilityLabel="Candi Meridith MPH" />

                                    <View style={styles.row} >
                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(props.paragraph) }}>
                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                        </TouchableOpacity>
                                        <Text style={{ textAlign: "center" }}>
                                            {paragraph.split('www.PinkPosGirls.com').map((part, index) => {
                                                if (index % 2 === 0) {
                                                    return <Text key={index}>{part}</Text>;
                                                } else {
                                                    return <Text key={index} onPress={openLink} style={{ color: 'blue' }}>www.PinkPosGirls.com</Text>;
                                                }
                                            })}
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.right}>
                            <StopPlay />
                        </View>
                    </View>
                </Swiper>
            </ImageBackground>
        </View>
    )
}


const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 0
    },
    backgroundImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
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
    image: {
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
    left: {
        width: '30%'
    },
    center: {
        width: '50%',
        justifyContent: 'center',
        '@media (min-height: 320px) and (max-height: 480px)': {
            height: '100%',
            justifyContent: 'center',
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            height: '80%',
            justifyContent: 'center',
        },
        '@media (min-height: 769px) and (max-height: 1024px)': {
            height: '70%',
            justifyContent: 'center',
        },
        '@media (min-height: 1025px) and (max-height: 1200px)': {
            height: '50%',
            justifyContent: 'center',
        }
    },
    right: {
        alignItems: 'center',
        width: '20%',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 5
    },
    listen: {
        flexDirection: 'row',
        margin: 5,
        paddingVertical: 3
    }, playOptions: {
        width: 24,
        height: 24
    },
    row: {
        flexDirection: 'row',
        width: '80%'
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
    links: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
});

export default AboutTheAuthor

