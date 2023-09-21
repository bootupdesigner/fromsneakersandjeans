import { View, Text, Pressable, ScrollView, Modal, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import StyleSheet from 'react-native-media-query';

import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import playButton from '../../assets/images/playButton.png';
import chapterTitle from '../../assets/images/chapter-3-title.png'
import pinkPosiImage from '../../assets/images/pinkPosi.png'
import Thumbnail from '../../assets/images/chapter-3-thumbnail.png';

import appSlides from '../../assets/slides/appSlides';

import StopPlay from '../../assets//stopPlay';
import Heading from '../../assets/heading';
import BulletPoints from '../../assets/bulletPoints';
import NumberList from '../../assets/numberList';
import WordDefinition from '../../assets/wordDefinition';
import Paragraphs from '../../assets/paragraphs';
import BulletsBoldHeading from '../../assets/bulletsBoldHeading';
import BoldUnderlineHeading from '../../assets/boldUnderlineHeading';
import Avatar from '../../assets/Avatar';

const positude = () => {
    const chapterTitleAlt = 'positude chapter';

    const router = useRouter();
    const nextChapter = () => router.push(href = 'chapters/etiquette');

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const slides = appSlides.positudeSlides;

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
                                <Avatar source={Thumbnail} alt={slide.imageAlt} />

                                <View style={styles.center} dataSet={{ media: ids.center }}>
                                    <ScrollView showsVerticalScrollIndicator={false}>

                                        {slide.heading ? <BoldUnderlineHeading slide={slide} /> : null}

                                        {slide.summary ?
                                            slide.summary.map((paragraph, index) => <Paragraphs key={index} paragraph={paragraph} />) : null}

                                        {slide.bullets ?
                                            slide.bullets.map((point, index) => {
                                                return (
                                                    <View key={index}>
                                                        {point.heading ? <BulletsBoldHeading point={point} /> : null}

                                                        {point.bullet ? point.bullet.map((paragraph, index) => <BulletPoints key={index} paragraph={paragraph} />) : null}

                                                        {point.summary ? point.summary.map((paragraph, index) => <Paragraphs key={index} paragraph={paragraph} />) : null}
                                                    </View>

                                                )
                                            }) : null}

                                        {slide.numberList ?
                                            slide.numberList.map((point, index) => (
                                                <View key={index}>
                                                    {point.word ? <WordDefinition point={point} /> : null}

                                                    {point.bullet ? point.bullet.map((paragraph, id) =>
                                                        <NumberList key={id} paragraph={paragraph} number={point} />
                                                    ) : null}
                                                </View>
                                            )) : null}

                                    </ScrollView>
                                </View>

                                <View style={styles.right}>
                                    <StopPlay />
                                    {slide.pinkPosi ?
                                        <Pressable onPress={() => setModalVisible(true)}>
                                            <Image style={styles.navImages} source={pinkPosiImage} accessibilityLabel='visit next chapter' />
                                        </Pressable> : null}
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
    underline: {
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    boldUnderline: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold'
    },
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2
    },
    row: {
        flexDirection: 'row',
        width: '80%'
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35
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
    image: {
        resizeMode: 'contain',
        height: 250,
        width: '100%'
    },
    listen: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0)',
        margin: 5,
    },
    playOptions: {
        width: 24,
        height: 24
    },
    list: {
        flexDirection: 'row',
    },
    bullets: {
        marginVertical: 5
    },
    bulletNumbers: {
        marginVertical: 5,
        fontSize: 16
    },
    listData: {
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 5
    },
});

export default positude;