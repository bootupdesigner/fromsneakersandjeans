import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import hotlinesButton from '../../assets/images/hotlines.png';
import chapterTitle from '../../assets/images/websitesTitle.png';
import backButton from '../../assets/images/backButton.png';
import websitesThumbnail from '../../assets/images/websitesThumbnail.png';

import StopPlay from '../../assets/stopPlay';


const websites = () => {
    const chapterTitleAlt = 'websites title';

    const router = useRouter();

    const websites = [
        {
            support: "Teen Health",
            id: "1",
            website: [
                `Embrace Grace (unplanned pregnancy support): www.embracegrace.com`,
                `GirlsHealth: www.girlshealth.gov`,
                `Stopping School Violence: www.stoppingschoolviolence.com`,
                `Stop Bullying Now: www.stopbullyingnow.com`,
            ]
        },
        {
            support: "General Health",
            id: "2",
            website: [
                `American Diabetes Association: www.diabetes.org`,
                `American Heart Association: www.heart.org`,
                `Centers for Disease Control and Prevention: www.cdc.gov`,
                `HIV/AIDS Prevention: www.cdc.gov/hiv/default.html`,
                `Kaiser Permanente: www.kp.org`,
                `The Mayo Clinic: www.mayo.edu`,
                `National Sleep Foundation: www.sleepfoundation.org`,
                `Sexually Transmitted Disease Prevention: www.cdc.gov/std/`,
                `WebMD: www.webmd.com`
            ]
        },
        {
            support: "Mental Health",
            id: "3",
            website: [
                `National Institute of Mental Health: www.nimh.nih.gov`,
                `National Mental Health Information Center: www.mentalhealth.gov`,
                `Substance Abuse and Mental Health Services Administration: www.samhsa.gov`
            ]
        },
        {
            support: "Violence and Abuse",
            id: "4",
            website: [
                `National Domestic Violence Hotline: www.thehotline.org`,
                `National Sexual Violence Resource Center: www.nsvrc.org`
            ]
        }
    ];

    const slides = websites;

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        router.push(href = '/chapters')
                    }}>
                        <Image style={styles.navImages} source={backButton} accessibilityLabel='back to chapters' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} dataSet={{media: ids.titleImages}} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => {
                        router.push(href = '/hotlines')
                    }} >
                        <Image style={styles.navImages} source={hotlinesButton} accessibilityLabel='visit informational hotlines' />
                    </TouchableOpacity>

                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: false }} showsButtons={true} loop={false} >

                    <View style={styles.content}>

                        <View style={styles.left}>
                            <Image style={styles.image} source={websitesThumbnail} accessibilityLabel='help websites Candi' />
                        </View>

                        <View style={styles.center}>
                            <ScrollView>
                                {slides.map((slide, id) => {
                                    return (
                                        <View key={id} style={styles.separator}>
                                            <Text style={styles.bold}>{slide.support}</Text>
                                            {slide.website.map((contact, index) => (
                                                <View key={index}>
                                                    <Text style={styles.paragraph}>{contact}</Text>
                                                </View>

                                            ))}
                                        </View>
                                    )
                                })}
                            </ScrollView>
                        </View>

                        <View style={styles.right}>
                            <StopPlay />
                        </View>
                    </View>

                </Swiper>
                <View style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}>
                    <Link style={styles.paragraph} href="/information">Information</Link>
                </View>
            </ImageBackground>
        </View>
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
    paragraph: {
        fontSize: 16,
        marginVertical: 5
    },
    bold: {
        fontSize: 16,
        marginVertical: 5,
        fontWeight: "bold",
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
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderStyle: 'solid'
    }
});

export default websites;