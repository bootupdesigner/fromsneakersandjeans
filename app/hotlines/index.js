import { View, Image, ImageBackground, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';
import Popover from 'react-native-popover-view';
import { Link, useRouter } from "expo-router";
import Swiper from 'react-native-web-swiper';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import websitesButton from '../../assets/images/websites.png';
import chapterTitle from '../../assets/images/hotlinesTitle.png';
import backButton from '../../assets/images/backButton.png';
import hotlinesThumbnail from '../../assets/images/hotlinesThumbnail.png';

import StopPlay from '../../assets//stopPlay';

import hotlineSlides from '../../assets/slides/hotlineSlides';

const hotlines = () => {
    const chapterTitleAlt = 'hotlines title';

    const router = useRouter();

    const slides = hotlineSlides;

    const popover1 = () => {
        const firstSlide = (hotlines[1].notes);
        Speech.speak(firstSlide);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        router.push(href = '/chapters')
                    }}>
                        <Image style={styles.navImages} source={backButton} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} dataSet={{media: ids.titleImages}} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => {
                        router.push(href = '/websites')
                    }} >
                        <Image style={styles.navImages} source={websitesButton} accessibilityLabel='visit informational websites' />
                    </TouchableOpacity>

                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} showsButtons={true} loop={false} >
                    {slides.map((slide, id) => {
                        return (
                            <View key={id} style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={styles.h2Center}>{slide.help}</Text>

                                    {slide.notes ?
                                        <Popover
                                            from={(
                                                <TouchableOpacity>
                                                    <Ionicons style={styles.list_buttons} name="alert-circle-outline" size={24} />
                                                </TouchableOpacity>
                                            )}>
                                            <Text style={styles.popoverParagraph}>{slide.notes}</Text>
                                        </Popover> : null}

                                </View>
                                <View style={styles.content}>

                                    <View style={styles.left}>
                                        <Image style={styles.image} source={hotlinesThumbnail} accessibilityLabel='help hotlines Candi' />
                                    </View>

                                    <View style={styles.center}>
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            {slide.contacts ?
                                                slide.contacts.map((contact, id) => (
                                                    <View key={id} style={styles.separator}>
                                                        <Text style={styles.bold}>{contact.group}</Text>
                                                        {contact.about_group.map((contact, index) => (
                                                            <View key={index}>
                                                                <Text style={styles.paragraph}>{contact}</Text>
                                                            </View>

                                                        ))}

                                                    </View>
                                                )) :
                                                null}
                                        </ScrollView>
                                    </View>
                                    <View style={styles.right}>
                                        <StopPlay />
                                    </View>
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
    )
}


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
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35
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
    h2Center: {
        flexDirection: 'row',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
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

    popoverParagraph: {
        flexDirection: 'row',
        width: 300,
        padding: 10,
        borderStyle: 'solid',
        borderColor: 'rgb(249,190,202)',
        borderWidth: 2,
        borderRadius: 3,
        fontSize: 16
    },
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderStyle: 'solid'
    }
});

export default hotlines;