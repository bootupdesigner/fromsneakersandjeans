import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Image, Modal, Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';

import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../images/sneakers_app_background.jpg';
import Next from '../images/nextButton.png';
import Back from '../images/backButton.png';
import playButton from '../images/playButton.png';
import stopButton from '../images/stopButton.png';

import pinkPosiImage from '../images/pinkPosi.png'
import introSlides from './introSlides';
import introPosi from '../images/introPosi.png'

const Introduction = ({ navigation }) => {

    const Navigation = useNavigation();

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const stopPlay = () => {
        Speech.stop();
    };

    const slides = introSlides;

    const [modalVisible, setModalVisible] = useState(false);


    const [currentSlide, setCurrentSlide] = useState(slides[0])

    const updateModal = () => {
        return (
            <ImageBackground source={currentSlide.pinkPosi} style={styles.posiAffirm} accessibilityLabel='visit next chapter'>

                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={styles.textStyle}>&#120; close</Text>
                </Pressable>
            </ImageBackground>
        )
    }

    useEffect(() => {
        updateModal()
    }, [setCurrentSlide])

    return (
        <SafeAreaView style={styles.container}>
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

                    {slides.map((slide, index) => (
                        <Image key={index} style={styles.titleImages} source={slide.titleImage} accessibilityLabel={slide.chapterTitleAlt} />
                    ))}

                    <TouchableOpacity onPress={() => navigation.navigate('self-worth')} >
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
                                    <TouchableOpacity style={styles.listen} onPress={stopPlay}>
                                        <Image style={styles.playOptions} source={stopButton} accessibilityLabel='stop button' />
                                    </TouchableOpacity>

                                    <Pressable onPress={() => setModalVisible(true)}>
                                        <Image style={styles.navImages} source={pinkPosiImage} accessibilityLabel='visit next chapter' />
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>

            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = ({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 0
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
        backgroudColor: 'rgba(255,255,255,0)'
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
        marginBottom:35
    },
    row: {
        flexDirection: 'row',
        width: '80%'
    },
    image: {
        resizeMethod: 'auto',
        resizeMode: 'contain',
        height: 250,
        width: '100%'
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
    posiAffirm: {
        flex: 1,
        height: '100%',
        width:'80%',
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
});

export default Introduction;