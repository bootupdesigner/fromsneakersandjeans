import { View, Image, ImageBackground, TouchableOpacity, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';
import Popover from 'react-native-popover-view';

import Swiper from 'react-native-web-swiper';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Speech from 'expo-speech';

import backgroundImage from '../images/sneakers_app_background.jpg';
import websitesButton from '../images/websites.png';
import chapterTitle from '../images/hotlinesTitle.png';
import backButton from '../images/backButton.png';
import hotlinesThumbnail from '../images/hotlinesThumbnail.png';
import stopButton from '../images/stopButton.png';

import hotlineSlides from '../screens/hotlineSlides';

const Hotlines = ({ navigation }) => {
    const chapterTitleAlt = 'hotlines title';

    const Navigation = useNavigation();

    const slides = hotlineSlides;

    const stopPlay = () => {
        Speech.stop();
    };

    const popover1 = () => {
        const firstSlide = (hotlines[1].notes);
        Speech.speak(firstSlide);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.navigate('chapters')} >
                        <Image style={styles.navImages} source={backButton} accessibilityLabel='visit next chapter' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => navigation.navigate('websites')} >
                        <Image style={styles.navImages} source={websitesButton} accessibilityLabel='visit informational websites' />
                    </TouchableOpacity>

                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} showsButtons={true} loop={false} >
                    {slides.map((slide, id) => {
                        return (
                            <View key={id} style={{flex:1}}>
                                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                                <Text style={styles.h2Center}>{slide.help}</Text>

                                {slide.notes ? 
                                <Popover
                                from={(
                                    <TouchableOpacity>
                                        <Ionicons style={styles.list_buttons} name="alert-circle-outline" size={24} />
                                    </TouchableOpacity>
                                )}>
                                <Text style={styles.popoverParagraph}>{slide.notes}</Text>
                            </Popover> : null }

                                </View>
                                <View style={styles.content}>

                                    <View style={styles.left}>
                                        <Image style={styles.image} source={hotlinesThumbnail} accessibilityLabel='help hotlines Candi' />
                                    </View>

                                    <View style={styles.center}>
                                        <ScrollView>
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
                                        <TouchableOpacity style={styles.listen} onPress={stopPlay}>
                                            <Image style={styles.playOptions} source={stopButton} accessibilityLabel='stop button' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>

            </ImageBackground>
        </View >
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
        marginBottom:35
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
    borderStyle:'solid'
    }
});

export default Hotlines;