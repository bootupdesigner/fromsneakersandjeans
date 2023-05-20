import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import referenceButton from '../../assets/images/references.png';
import chapterTitle from '../../assets/images/privacyTitle.png';
import backButton from '../../assets/images/backButton.png';
import privacyThumbnail from '../../assets/images/icon.png';

import StopPlay from '../../assets/stopPlay';

const menu = [
   /* {
        id: 1,
        resource: 'About The Author',
        source: '/about-the-author'
    }, */
    {
        id: 2,
        resource: 'Hotlines',
        source: '/hotlines'
    },
    {
        id: 3,
        resource: 'Privacy Policy',
        source: '/privacy-policy'
    },
    {
        id: 4,
        resource: 'References',
        source: '/references'
    },
    {
        id: 5,
        resource: 'Websites',
        source: '/websites'
    },
]

const information = () => {
    const router = useRouter();

    const chapterTitleAlt = 'information title';

    const pageList = menu;

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

                    <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => {
                        router.push(href = '/references')
                    }} >
                        <Image style={styles.navImages} source={referenceButton} accessibilityLabel='visit references and citations page' />
                    </TouchableOpacity>

                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >

                    <View style={styles.content}>

                        <View style={styles.left}>
                            <Image style={styles.image} source={privacyThumbnail} accessibilityLabel='help websites Candi' />
                        </View>

                        <View style={styles.center}>
                            <ScrollView>
                                {menu.map((page, index) => (
                                    <View style={styles.bordered} key={index}>
                                        <Link style={styles.links} href={page.source}>{page.resource}</Link>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.right}>
                            <StopPlay />
                        </View>
                    </View>
                </Swiper>
            </ImageBackground>
        </View>
    )
}

export default information;


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
    boldUnderline: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold'
    },
    links: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
    bordered: {
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 5
    }
});