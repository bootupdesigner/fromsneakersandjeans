import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, FlatList, Pressable, ImageBackground, Modal, Image, TextInput } from 'react-native';
import StyleSheet from 'react-native-media-query'
import { DataTable } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import RadioForm from 'react-native-simple-radio-button';
import { useRouter } from 'expo-router';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import playButton from '../../assets/images/playButton.png';
import Thumbnail from '../../assets/images/chapter-2-thumbnail.png'
import pinkPosiImage from '../../assets/images/pinkPosi.png'
import chapterTitle from '../../assets/images/chapter-2-title.png'

import appSlides from '../../assets/slides/appSlides';

import StopPlay from '../../assets//stopPlay';
import Heading from '../../assets/heading';
import BulletPoints from '../../assets/bulletPoints';
import NumberList from '../../assets/numberList';
import BulletsBoldHeading from '../../assets/bulletsBoldHeading';

const selfworth = () => {

    const router = useRouter();

    const thumbnail_alt = 'things to remember thumbnail';

    const chapterTitleAlt = 'chapter three, positude';


    const slides = appSlides.selfWorthSlides;

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

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


    const nextChapter = () => router.push(href = 'chapters/positude')

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
                                    <Image style={styles.image} source={Thumbnail} accessibilityLabel={thumbnail_alt} />
                                </View>

                                <View style={styles.center} dataSet={{ media: ids.center }}>
                                    <ScrollView>
                                        {slide.heading ? <Text style={styles.boldUnderline}>{slide.heading}</Text> : null}

                                        {slide.bullets ? slide.bullets.map((point, index) => (
                                            <View key={index}>
                                                {point.heading ? <BulletsBoldHeading point={point} /> : null}

                                                {point.bullet ? point.bullet.map((paragraph, index) =>
                                                    <BulletPoints key={index} paragraph={paragraph} />
                                                ) : null}

                                                {point.paragraph ?
                                                    point.paragraph.map((paragraph, index) => (
                                                        <View key={index} style={styles.row}>
                                                            <View>
                                                                <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                    <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Text style={styles.paragraph}>{paragraph}</Text>
                                                        </View>
                                                    )) : null}
                                            </View>
                                        )) : null}
                                        {slide.table ?
                                            <View style={{ borderWidth: 1, borderStyle: 'solid' }}>
                                                {slide.table.map((table, index) => (
                                                    <View key={index}>
                                                        <Text style={{ borderBottomWidth: 1, borderStyle: 'solid', fontWeight: 'bold', backgroundColor: 'rgb(236,0,140)' }}>{table.tableHead}</Text>
                                                        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderStyle: 'solid' }}>
                                                            <Text style={{ width: '80%', fontWeight: 'bold' }}>Statement</Text>
                                                            <Text style={{ width: '20%', fontWeight: 'bold' }}>Number</Text>
                                                        </View>

                                                        {table.tableData.map((question, index) => (
                                                            <View key={index} style={{ flexDirection: 'row', borderBottomWidth: 1, borderStyle: 'solid' }}>
                                                                <Text style={{ width: '80%', borderRightWidth: 1, paddingHorizontal: 3 }}>{question}</Text>
                                                                <TextInput style={{ width: '20%' }} placeholder='1-5' keyboardType='numeric' returnKeyType='done' />
                                                            </View>
                                                        ))}
                                                    </View>
                                                ))}
                                            </View> : null}

                                        {slide.numberList ? slide.numberList.map((point, index) => {
                                            return (
                                                <View key={index}>
                                                    {point.bullet.map((paragraph, id) => {
                                                        return (<NumberList key={id} paragraph={paragraph} number={point} />)
                                                    })}
                                                </View>
                                            )
                                        }) : null}


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
        </View >
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
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 2
    },
    boldUnderline: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        width: '80%'
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
    radioForm: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
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
    head: {
        flex: 1,
        width: '100%'
    },
});

export default selfworth;