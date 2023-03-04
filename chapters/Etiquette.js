import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground, Pressable, Modal, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../images/sneakers_app_background.jpg';
import Next from '../images/nextButton.png';
import Back from '../images/backButton.png';
import playButton from '../images/playButton.png';
import stopButton from '../images/stopButton.png';
import chapterTitle from '../images/chapter-4-title.png'
import pinkPosiImage from '../images/pinkPosi.png'

import Slides from './etiquetteSlides'

const Etiquette = ({ navigation }) => {
    const chapterTitleAlt = 'etiquette chapter';

    const Navigation = useNavigation();

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const stopPlay = () => {
        Speech.stop();
    };

    const slides = Slides;

    const [modalVisible, setModalVisible] = useState(false);


    const [currentSlide, setCurrentSlide] = useState(slides[0])

    const updateModal = () => {
        return (
            <ImageBackground source={currentSlide.pinkPosi} style={styles.posiAffirm} accessibilityLabel='visit next chapter'>

                <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.bold}>&#120; close</Text>
                </Pressable>
            </ImageBackground>
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
                visible={modalVisible}>

                <View style={styles.modalView}>
                    {updateModal()}
                </View>

            </Modal>

            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.navigate('chapters')} >
                        <Image style={styles.navImages} source={Back} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => navigation.navigate('health-and-hygiene')} >
                        <Image style={styles.navImages} source={Next} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>
                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >
                    {slides.map((slide, id) => {
                        return (
                            <View key={id} style={styles.content}>
                                <View style={styles.left}>
                                    <Image style={styles.image} source={slide.image} accessibilityLabel={slide.imageAlt} />
                                </View>

                                <View style={styles.center}>
                                    <ScrollView>
                                        {slide.quote ? slide.quote.map((quote, index) => (
                                            <Text key={index} style={styles.boldItalic}>{quote}</Text>
                                        )) : null}

                                        {slide.summary ? slide.summary.map((paragraph, index) => (
                                            <View style={styles.row} key={index}>
                                                <View>
                                                    <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                        <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                    </TouchableOpacity>
                                                </View>
                                                {paragraph ? <Text style={styles.paragraph}>{paragraph}</Text> : null}
                                            </View>
                                        )) : null}


                                        {slide.heading ? <Text style={styles.boldUnderline}>{slide.heading}</Text> : null}

                                        {slide.numberList ?
                                            slide.numberList.map((point, id) => (
                                                <View style={styles.row} key={id}>
                                                    <TouchableOpacity style={styles.listen} onPress={() => { speakText(point.id + point.bullet) }}>
                                                        <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                    </TouchableOpacity>

                                                    <View style={styles.list}>
                                                        <Text style={styles.bulletNumbers}>{point.id}.</Text>
                                                        <Text style={styles.listData}>{point.bullet}</Text>

                                                    </View>
                                                </View>
                                            )) : null}

                                        {slide.bullets ? slide.bullets.map((point, id) => {
                                            return (
                                                <View key={id}>


                                                    {point.summary ? point.summary.map((paragraph, index) => (
                                                        <View style={styles.row} key={index}>
                                                            <View>
                                                                <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                    <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text style={styles.paragraph} key={index}>{paragraph}</Text>
                                                        </View>
                                                    )) : null}

                                                    {point.title ? <Text style={styles.bold}>{point.title}</Text> : null}

                                                    {point.bullet ? point.bullet.map((paragraph, index) => {
                                                        return (
                                                            <View style={styles.row} key={index}>

                                                                <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                    <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                                </TouchableOpacity>
                                                                <View style={styles.list}>
                                                                    <Text style={styles.bullets}>{'\u2022'}</Text>
                                                                    <Text style={styles.listData}>{paragraph}</Text>
                                                                </View>
                                                            </View>
                                                        )
                                                    }) : null}
                                                    {point.tableSetting ?
                                                        <Image style={styles.image} source={point.tableSetting} accessibilityLabel={point.tableSettingAlt} />
                                                        : null}
                                                    {point.paragraph ? point.paragraph.map((paragraph, index) => (
                                                        <View style={styles.row} key={index}>
                                                            <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                            </TouchableOpacity>
                                                            <Text key={index} style={styles.paragraph}>{paragraph}</Text>
                                                        </View>
                                                    )) : null}
                                                </View>
                                            )
                                        }) : null}
                                    </ScrollView>
                                </View>

                                <View style={styles.right}>
                                    <TouchableOpacity style={styles.listen} onPress={stopPlay}>
                                        <Image style={styles.playOptions} source={stopButton} accessibilityLabel='stop button' />
                                    </TouchableOpacity>
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
        </View >
    )
};

const styles = StyleSheet.create({
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
        height: 80,
        width: '50%',
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
    boldItalic: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    boldUnderline: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        resizeMethod: 'auto',
        resizeMode: 'contain',
        height: 250,
        width: '100%'
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
    listen: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0)',
        margin: 5,
    },
    playOptions: {
        width: 24,
        height: 24
    },
    row: {
        flexDirection: 'row',
        width: '80%'
    },
    posiAffirm: {
        flex: 1,
        height: '100%',
        width: '80%',
        resizeMethod: 'auto',
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
        flex: 1,
        width: '50%',
        height: '100%'
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
        marginBottom:35
    },
});

export default Etiquette;