import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform, TouchableOpacity, StyleSheet, FlatList, Pressable, ImageBackground, Modal, Image, TextInput } from 'react-native';

import { DataTable } from 'react-native-paper';
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import RadioForm from 'react-native-simple-radio-button';
import { useRouter } from 'expo-router';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import Next from '../../assets/images/nextButton.png';
import Back from '../../assets/images/backButton.png';
import playButton from '../../assets/images/playButton.png';
import stopButton from '../../assets/images/stopButton.png';
import Thumbnail from '../../assets/images/chapter-2-thumbnail.png'
import pinkPosiImage from '../../assets/images/pinkPosi.png'
import chapterTitle from '../../assets/images/chapter-2-title.png'

import appSlides from '../../assets/slides/appSlides';

const selfworth = () => {
    const router = useRouter();

    const thumbnail_alt = 'things to remember thumbnail';

    const chapterTitleAlt = 'chapter three, positude';


    const slides = appSlides.selfWorthSlides;

    const [form, setForm] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
    });

    const [total, setTotal] = useState(0);
    useEffect(() => {
        const sum = Object.values(form).reduce((acc, curr) => {
            const value = Number(curr) || 0;
            return acc + value;
        }, 0);
        setTotal(sum);
    }, [form]);

    const speakText = (text) => {
        const firstSlide = (text);
        Speech.speak(firstSlide);
    };

    const stopPlay = () => {
        Speech.stop();
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

    const inputElement = (data, index) => (
        <TextInput keyboardType="numeric" placeholder="1-5" />
    )

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
                    <TouchableOpacity onPress={() => router.push(href='/chapters')} >
                        <Image style={styles.navImages} source={Back} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => router.push(href='chapters/positude')} >
                        <Image style={styles.navImages} source={Next} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>
                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >
                    {slides.map((slide, id) => {
                        return (
                            <View key={id} style={styles.content}>
                                <View style={styles.left}>
                                    <Image style={styles.image} source={Thumbnail} accessibilityLabel={thumbnail_alt} />
                                </View>

                                <View style={styles.center}>
                                    <ScrollView>
                                        {slide.heading ? <Text style={styles.boldUnderline}>{slide.heading}</Text> : null}

                                        {slide.bullets ? slide.bullets.map((point, index) => (
                                            <View key={index}>
                                                {point.heading ? <Text style={styles.bold}>{point.heading}</Text> : null}

                                                {point.bullet ? point.bullet.map((paragraph, index) => {
                                                    return (
                                                        <View style={styles.row} key={index}>
                                                            <View style={styles.row}>
                                                                <TouchableOpacity style={styles.listen} onPress={() => { speakText(paragraph) }}>
                                                                    <Image style={styles.playOptions} source={playButton} accessibilityLabel='play button' />
                                                                </TouchableOpacity>
                                                                <View style={styles.list}>
                                                                    <Text style={styles.bullets}>{'\u2022'}</Text>
                                                                    <Text style={styles.listData}>{paragraph}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    )
                                                }) : null}

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
                                                                <TextInput style={{ width: '20%' }} placeholder='1-5' keyboardType='numeric' />
                                                            </View>
                                                        ))}
                                                    </View>
                                                ))}
                                            </View> : null}

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

const styles = ({
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
        marginBottom: 35
    },
    head: {
        flex: 1,
        width: '100%'
    },
});

export default selfworth;