import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground, Image, Modal, Pressable, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import playButton from '../../assets/images/playButton.png';
import Thumbnail from '../../assets/images/chapter-1-thumbnail.png';
import chapterTitle from '../../assets/images/chapter-1-title.png'

import pinkPosiImage from '../../assets/images/pinkPosi.png'
import introPosi from '../../assets/images/introPosi.png';
import appSlides from '../../assets/slides/appSlides';

import StopPlay from '../../assets//stopPlay';
import Heading from '../../assets/heading';

const introduction = () => {

    const router = useRouter();

    const nextChapter = () => router.push(href = "/chapters/selfworth");
    const chapterTitleAlt = 'chapter 2 self-worth';

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const slides = appSlides.introSlides;

    const [modalVisible, setModalVisible] = useState(false);


    const [currentSlide, setCurrentSlide] = useState(slides[0])

    const updateModal = () => {
        return (
            <View>
                <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.bold}>&#120; close</Text>
                    <Image source={currentSlide.pinkPosi} style={styles.posiAffirm} accessibilityLabel='pink posi affirmation' />

                </Pressable>
            </View>
        )
    }

    useEffect(() => {
        updateModal()
    }, [setCurrentSlide])

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                supportedOrientations={["landscape"]}>

                <View style={styles.modalView}>
                    {updateModal()}
                </View>

            </Modal>

            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <Heading nextChapter={nextChapter} chapterTitle={chapterTitle} titleAlt={chapterTitleAlt} />

                {/* beginning of swiper view */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >

                    {slides.map((slide, id) => {
                        return (

                            <View key={id} style={styles.content}>
                                <View style={styles.left}>
                                    <Image style={styles.image} source={Thumbnail} accessibilityLabel={slide.imageAlt} />
                                </View>
                                <View style={styles.center} dataSet={{ media: ids.center }}>
                                    <ScrollView>
                                        {slide.summary ?
                                            slide.summary.map((paragraph, index) => (
                                                <View style={styles.row} key={index}>

                                                    <View>
                                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Text style={styles.paragraph}>{paragraph}</Text>
                                                </View>
                                            )) : null}

                                        {slide.quote ?
                                            slide.quote.map((paragraph, index) => (
                                                <View style={styles.row} key={index}>

                                                    <View>
                                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                        </TouchableOpacity>
                                                    </View>
                                                    <Text key={index} style={styles.boldCenter}>{paragraph}</Text>
                                                </View>
                                            )) : null}

                                    </ScrollView>
                                </View>

                                <View style={styles.right}>
                                    <StopPlay />

                                    <Pressable onPress={() => setModalVisible(true)}>
                                        <Image style={styles.navImages} source={pinkPosiImage} accessibilityLabel='visit next chapter' />
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>
            </ImageBackground>
        </View>
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
    navImages: {
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255,255,255,0)'
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 2,
    },
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2
    },
    boldCenter: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2,
        textAlign: 'center'
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
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35
    },
    row: {
        flexDirection: 'row',
        width: '80%'
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
    posiAffirm: {
        flex: 1,
        height: '100%',
        width: 600,
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
        elevation: 5,
        justifyContent: 'center',
    },
});

export default introduction;