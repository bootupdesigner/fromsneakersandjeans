import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Pressable, ImageBackground, Modal, Image } from 'react-native';

import { useRouter, Link } from 'expo-router';
import { Divider } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import Next from '../../assets/images/nextButton.png';
import Back from '../../assets/images/backButton.png';
import playButton from '../../assets/images/playButton.png';
import pinkPosiImage from '../../assets/images/pinkPosi.png'
import chapterTitle from '../../assets/images/chapter-9-title.png'

import appSlides from '../../assets/slides/appSlides';

import StopPlay from '../../assets/stopPlay';

const safety = () => {
    const router = useRouter();

    const chapterTitleAlt = 'chapter nine, safety';

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const stopPlay = () => {
        Speech.stop();
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
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push(href = '/chapters')} >
                        <Image style={styles.navImages} source={Back} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => router.push(href = '/chapters/closing')} >
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
                                                <View style={styles.row} key={id}>
                                                    <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                        <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                    </TouchableOpacity>

                                                    <View style={styles.list}>
                                                        <Text style={styles.bulletNumbers}>{point.id}.</Text>
                                                        <Text style={styles.listData}>{point.bullet}</Text>
                                                    </View>
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
                                                            < Divider style={{height: 2}}/>
                                                        </View>
                                                        <View>
                                                                <Link href='/references' style={styles.ref}>{ref.id}. {ref.cite}</Link>
                                                        </View>
                                                    </View>
                                                )) : null}

                                    </ScrollView>
                                </View>

                                <View style={styles.right}>
                                    <StopPlay/>
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

const styles = StyleSheet.create(
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
        ref:{
            fontSize: 12,
            fontStyle:'italic',
            color: 'blue'
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
    }
);

export default safety;