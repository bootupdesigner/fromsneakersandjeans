import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Pressable, ImageBackground, Modal, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import Avatar from '../../assets/Avatar';
import StopPlay from '../../assets/stopPlay';
import Heading from '../../assets/heading';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import playButton from '../../assets/images/playButton.png';
import pinkPosiImage from '../../assets/images/pinkPosi.png'
import chapterTitle from '../../assets/images/chapter-10-title.png'

import appSlides from '../../assets/slides/appSlides';

const closing = () => {
    const router = useRouter();
    const nextChapter = () => router.push(href = '/chapters/');

    const chapterTitleAlt = 'chapter ten, closing';

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const slides = appSlides.closingSlides;

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}

                <Heading nextChapter={nextChapter} chapterTitle={chapterTitle} titleAlt={chapterTitleAlt} />

{/* beginning of swiper view */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} showsButtons={true} loop={false} >
                    {slides.map((slide, id) => {
                        return (
                            <View key={id} style={styles.content}>
                                <Avatar source={slide.image} alt={slide.imageAlt} />
                                <View style={styles.center} dataSet={{ media: ids.center }}>
                                    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>

                                        {slide.intro ?
                                            slide.intro.map((paragraph, index) => (
                                                <View style={styles.row} key={index}>

                                                    <View>
                                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Text key={index} style={styles.bold}>{paragraph}</Text>
                                                </View>
                                            )) : null}

                                        {slide.summary ?
                                            slide.summary.map((paragraph, index) => (
                                                <View style={styles.row} key={index}>

                                                    <View>
                                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Text key={index} style={styles.paragraph}>{paragraph}</Text>
                                                </View>
                                            )) : null}

                                        {slide.numberList ?
                                            slide.numberList.map((point, id) => (
                                                <View key={id}>
                                                    <View style={styles.row}>
                                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(point.id + '' + point.bullet + '' + point.summary) }}>
                                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                        </TouchableOpacity>

                                                        <View style={styles.list}>
                                                            <Text style={styles.bulletNumbers}>{point.id}.</Text>
                                                            <Text style={styles.listData}>{point.bullet}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.row}>
                                                        <Text style={styles.paragraph}>{point.summary}</Text>
                                                    </View>
                                                </View>
                                            )) : null}
                                    </ScrollView>
                                </View>

                                <View style={styles.right}>
                                    <StopPlay />
                                </View>
                            </View>
                        )
                    })}
                </Swiper>
            </ImageBackground>
        </View>
    )
};

const {ids, styles} = StyleSheet.create({
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
    navImages: {
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255,255,255,0)'
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
    posiAffirm: {
        flex: 1,
        height: '100%',
        width: '80%',
        resizeMode: 'contain'
    },
    modalView: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
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
    h1: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 2,
    },
    image: {
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        width: '80%'
    },
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2
    },
    list: {
        flexDirection: 'row',
    },
    bulletNumbers: {
        marginVertical: 5,
        fontSize: 16
    },
    listData: {
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 5,
        fontWeight: 'bold'
    },
});

export default closing;

