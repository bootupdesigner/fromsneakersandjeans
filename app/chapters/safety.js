import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Pressable, ImageBackground, Modal, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Divider } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import playButton from '../../assets/images/playButton.png';
import pinkPosiImage from '../../assets/images/pinkPosi.png'
import chapterTitle from '../../assets/images/chapter-9-title.png'

import appSlides from '../../assets/slides/appSlides';

import StopPlay from '../../assets//stopPlay';
import Heading from '../../assets/heading';
import Avatar from '../../assets/Avatar';

const safety = () => {
    const router = useRouter();
    const nextChapter = () => router.push(href = '/chapters/closing');
    const chapterTitleAlt = 'chapter nine, safety';

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const slides = appSlides.safetySlides;

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
                            <Avatar source={slide.image} alt={slide.imageAlt} />
                            
                                <View style={styles.center} dataSet={{ media: ids.center }}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {slide.heading ? <Text style={styles.boldUnderline}>{slide.heading}</Text> : null}

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
                                                    {point.bullet ?
                                                        <View style={styles.row}>
                                                            <TouchableOpacity style={styles.listen} onPress={() => { speakText(point.bullet) }}>
                                                                <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                            </TouchableOpacity>

                                                            <View style={styles.list}>
                                                                <Text style={styles.bulletNumbers}>{point.id}.</Text>
                                                                <Text style={styles.listData}>{point.bullet}</Text>
                                                            </View>
                                                        </View>
                                                        : null}
                                                </View>
                                            )) : null}

                                        {slide.bullets ?
                                            slide.bullets.map((point, index) => {
                                                return (
                                                    <View key={index}>
                                                        {point.heading ? <Text style={styles.bold}>{point.heading}</Text> : null}

                                                        {point.bullet ? point.bullet.map((paragraph, index) => {
                                                            return (
                                                                <View style={styles.row} key={index}>
                                                                    <View style={styles.row}>
                                                                        <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                            <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                                        </TouchableOpacity>
                                                                        <View style={styles.row}>
                                                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                                                            <Text style={styles.listData}>{paragraph}</Text>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            )
                                                        }) : null}

                                                        {point.summary ? point.summary.map((paragraph, index) => (
                                                            <View style={styles.row} key={index} >
                                                                <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                    <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                                </TouchableOpacity>
                                                                <Text style={styles.paragraph}>{paragraph}</Text>
                                                            </View>
                                                        )) : null}
                                                    </View>
                                                )
                                            }) : null}

                                        {slide.note ? <Text style={styles.bold}>{slide.note}</Text> : null}

                                        {slide.term ? slide.term.map((point, index) => (
                                            <View key={index}>
                                                <View style={styles.row}>
                                                    {point.word ? <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                        <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                    </TouchableOpacity> : null}
                                                    {point.word ? <Text style={styles.paragraph}><Text style={styles.bold}>{point.word} </Text>{point.definition}</Text> : null}
                                                </View>
                                                {point.note ? <Text style={styles.boldCenter}>{point.note}</Text> : null}

                                            </View>
                                        )) : null}

                                        {slide.paragraph ?
                                            slide.paragraph.map((paragraph, index) => (
                                                <View style={styles.row} key={index}>
                                                    <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                        <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                    </TouchableOpacity>
                                                    <Text key={index} style={styles.paragraph}>{paragraph}</Text>
                                                </View>
                                            )) : null}
                                        {slide.reference ?
                                            slide.reference.map((ref, id) => (
                                                <View key={id}>
                                                    <View>
                                                        < Divider style={{ height: 2 }} />
                                                    </View>
                                                    <View>
                                                        <Link href='/references' style={styles.ref}>{ref.id}. {ref.cite}</Link>
                                                    </View>
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
}

const {ids, styles} = StyleSheet.create(
    {
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
        ref: {
            fontSize: 12,
            fontStyle: 'italic',
            color: 'blue'
        },
        navImages: {
            height: 80,
            width: 80,
            backgroundColor: 'rgba(255,255,255,0)'
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
        listen: {
            flexDirection: 'row',
            margin: 5,
            paddingVertical: 3
        },
        playOptions: {
            width: 24,
            height: 24
        },
        row: {
            flexDirection: 'row',
            width: '80%'
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
        boldCenter: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 0,
            marginBottom: 2,
            textAlign: 'center'
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
            marginVertical: 5
        },
        bullets: {
            marginVertical: 5
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
        content: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            marginBottom: 35
        },
    }
);

export default safety;