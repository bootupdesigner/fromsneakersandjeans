import { View, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import StyleSheet from 'react-native-media-query';
import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation'
import { StatusBar } from 'expo-status-bar';
import { useRouter, Link } from "expo-router";

import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useState } from 'react';

import backgroundImage from '../../assets/images/overlay_background.png';

import StopPlay from '../../assets//stopPlay';

import chapterSlides from '../../assets/slides/chapterSlides';

import websitesButton from '../../assets/images/websites.png'
import hotlinesButton from '../../assets/images/hotlines.png'
import chapterTitle from '../../assets/images/chaptersTitle.png'

import tour1 from '../../assets/images/tour1.png';
import tour5 from '../../assets/images/tour2.png';
import tour4 from '../../assets/images/tour3.png';
import tour3 from '../../assets/images/tour4.png';
import tour2 from '../../assets/images/tour5.png';

const tourSlides = [
    {
        key: 1,
        title: 'HEY, GIRL, HEY',
        text: 'Take a Tour with Teen Candi',
        image: tour1,
        backgroundColor: '#ff0099',
    },
    {
        key: 2,
        title: `Let's Start Somethin'`,
        text: `Use the play and stop buttons to read for you \nwhen you're doing other things or you're just too tired`,
        image: tour2,
        backgroundColor: '#ff0099',
    },
    {
        key: 3,
        title: `Saw Somethin' Good`,
        text: `Use the next and back buttons \nto jump back and forth a chapter`,
        image: tour3,
        backgroundColor: '#ff0099',
    },
    {
        key: 4,
        title: `PINK POSITUDE`,
        text: `Click the Pink Pos cloud whenever you see it to \nCHANGE THE WAY YOU THINK ABOUT YOU`,
        image: tour4,
        backgroundColor: '#ff0099',
    },
    {
        key: 5,
        title: `Take Care Of You`,
        text: `It's never over! \nUse these buttons to find the right help for your situation`,
        image: tour5,
        backgroundColor: '#ff0099',
    },
]


const chapters = () => {

    const screenOrientation = ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    const [showRealApp, setShowRealApp] = useState(false);
    const router = useRouter();

    const onDone = () => {
        setShowRealApp(true);
    };

    const onSkip = () => {
        setShowRealApp(true);
    };

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.tourSlide}>
                <StatusBar hidden={true} />
                <Text style={styles.title} dataSet={{ media: ids.title }}>{item.title}</Text>
                <Image style={styles.tourImage} dataSet={{ media: ids.tourImage }} source={item.image} />
                <Text style={styles.text} dataSet={{ media: ids.text }}>{item.text}</Text>
            </View>
        );
    };
    const chapterTitleAlt = 'chapters title';

    const slides = chapterSlides;

    return (
        <>
            {showRealApp ? (
                <View style={styles.container}>

                    <StatusBar hidden={true} />
                    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                        {/* page header and navigation */}
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                router.push(href = '/hotlines')
                            }} >
                                <Image style={styles.navImages} source={hotlinesButton} accessibilityLabel='visit informational hotlines' />
                            </TouchableOpacity>

                            <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                            <TouchableOpacity onPress={() => {
                                router.push(href = '/websites')
                            }} >
                                <Image style={styles.navImages} source={websitesButton} accessibilityLabel='visit informational websites' />
                            </TouchableOpacity>

                        </View>
                        {/* end of page header and navigation */}

                        <Swiper showsPagination={false} showsButtons={true} loop={false}>

                            {slides.map((slide, id) => {
                                return (
                                    <View key={id} style={styles.content}>
                                        <View style={styles.left} media={{media: ids.left}}>
                                            <Image style={styles.image} source={slide.thumbnail} accessibilityLabel={slide.thumbnail_alt} />
                                        </View>

                                        <TouchableOpacity style={styles.center} media={{media: ids.center}} onPress={() => router.push({ pathname: slide.page })} >
                                            <Text style={styles.h1}>Chapter {slide.id}</Text>
                                            <Image style={styles.descriptionTitle} dataSet={{media: ids.descriptionTitle}} source={slide.title} accessibilityLabel={slide.chapterTitleAlt} />
                                            <Text style={styles.paragraph}>{slide.description}</Text>
                                        </TouchableOpacity>

                                        <View style={styles.right}>
                                            <StopPlay />
                                        </View>
                                    </View>
                                )
                            })}
                        </Swiper>
                        <View style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}>
                            <Link style={styles.paragraph} href="/information">Information</Link>
                        </View>
                    </ImageBackground>
                </View >
            ) : (
                <AppIntroSlider style={{ backgroundColor: '#ff0099' }} data={tourSlides} renderItem={RenderItem} onDone={onDone} showSkipButton={true} onSkip={onSkip} />
            )}
        </>
    )
};


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
    h1: {
        fontWeight: 'bold',
        fontSize: 32,
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
    descriptionTitle: {
        height: '30%',
        width: '100%'
    },
    image: {
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
    h2Centered: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 5
    },
    bold: {
        fontSize: 16,
        marginVertical: 5,
        fontWeight: "bold",
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
    left: {
        width: '30%',
        '@media (min-height: 769px) and (max-height: 1024px)': {
           width:'15%'
        },
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        '@media (min-height: 769px) and (max-height: 1024px)': {
           width:'70%'
        },
    },
    right: {
        alignItems: 'center',
        width: '15%',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    tourSlide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    tourImage: {
        marginVertical: 5,
        paddingVertical: 5,
        height: 200,
        width: 200,
        resizeMode: 'contain',
        '@media (orientation:portrait) and (max-width: 480px)': {
            marginVertical: 5,
            paddingVertical: 5,
            height: 200,
            width: 200,
            resizeMode: 'contain',
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            marginVertical: 5,
            paddingVertical: 5,
            height: 350,
            width: 350,
            resizeMode: 'contain',
        },
        '@media (min-height:769px) and (max-height:1024px)': {
            marginVertical: 5,
            paddingVertical: 5,
            height: 600,
            width: 600,
            resizeMode: 'contain',
        },
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#ffffff',
        textShadowColor: "#000000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        '@media (min-height: 320px) and (max-height: 480px)': {
            marginVertical: 5
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            marginVertical: 10
        },
        '@media (min-height: 769px) and (max-height: 1024px)': {
            marginVertical: 5
        },
        '@media (min-height: 1025px) and (max-height: 1200px)': {
            marginVertical: 20
        }
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
        textShadowColor: "#000000",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
        marginVertical: 5,
        '@media (min-height: 320px) and (max-height: 480px)': {
            marginVertical: 5
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            marginVertical: 5
        },
        '@media (min-height: 769px) and (max-height: 1024px)': {
            marginVertical: 5
        },
    }
});

export default chapters;