import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";

import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import hotlinesButton from '../../assets/images/hotlines.png';
import chapterTitle from '../../assets/images/websitesTitle.png';
import backButton from '../../assets/images/backButton.png';
import websitesThumbnail from '../../assets/images/websitesThumbnail.png';
import stopButton from '../../assets/images/stopButton.png';


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

    const stopPlay = () => {
        Speech.stop();
    };
    
    const slides = websites;

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>
                        <TouchableOpacity onPress={() => {
                            router.push(href='/chapters')}}>
                        <Image style={styles.navImages} source={backButton} accessibilityLabel='back to chapters' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => {
                            router.push(href='/hotlines')}} >
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
                            <TouchableOpacity style={styles.listen} onPress={stopPlay}>
                                <Image style={styles.playOptions} source={stopButton} accessibilityLabel='stop button' />
                            </TouchableOpacity>
                        </View>
                    </View>

                </Swiper>
                <View style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}>
                    <Link style={styles.paragraph} href="/privacypolicy">Privacy Policy</Link>
                </View>
            </ImageBackground>
        </View>
    )
}


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
    image: {
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
    borderStyle:'solid'
    }
});

export default websites;