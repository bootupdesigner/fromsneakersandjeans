import { View, Image, ImageBackground, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';

import backgroundImage from '../images/overlay_background.jpg';
import stopButton from '../images/stopButton.png';

import chapterSlides from './chapterSlides';

import websitesButton from '../images/websites.png'
import hotlinesButton from '../images/hotlines.png'
import chapterTitle from '../images/chaptersTitle.png'


const Chapters = ({ navigation }) => {
  const chapterTitleAlt = 'chapters title';

  const Navigation = useNavigation();

  const stopPlay = () => {
    Speech.stop();
  };

  const slides = chapterSlides;

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        {/* page header and navigation */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('hotlines')} >
            <Image style={styles.navImages} source={hotlinesButton} accessibilityLabel='visit informational hotlines' />
          </TouchableOpacity>

          <Image style={styles.titleImages} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

          <TouchableOpacity onPress={() => navigation.navigate('websites')} >
            <Image style={styles.navImages} source={websitesButton} accessibilityLabel='visit informational websites' />
          </TouchableOpacity>

        </View>
        {/* end of page header and navigation */}

        <Swiper showsPagination={false} showsButtons={true} loop={false}>

          {slides.map((slide, id) => {
            return (
              <View key={id} style={styles.content}>
                <View style={styles.left}>
                  <Image style={styles.image} source={slide.thumbnail} accessibilityLabel={slide.thumbnail_alt} />
                </View>

                <TouchableOpacity style={styles.center} onPress={() => navigation.navigate(slide.page)} >
                    <Text style={styles.bold}>Chapter {slide.id}</Text>
                    <Image style={styles.descriptionTitle} source={slide.title} accessibilityLabel={slide.chapterTitleAlt} />
                    <Text style={styles.paragraph}>{slide.description}</Text>                  
                </TouchableOpacity>

                <View style={styles.right}>
                  <TouchableOpacity style={styles.listen} onPress={stopPlay}>
                    <Image style={styles.playOptions} source={stopButton} accessibilityLabel='stop button' />
                  </TouchableOpacity>

                </View>
              </View>
            )
          })}
        </Swiper>
      </ImageBackground>
    </View>
  )
};


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
  h1: {
    fontWeight: 'bold',
    fontSize: 32,
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
  descriptionTitle: {
    height:'30%',
    width:'100%'
  },
  image: {
    resizeMethod: 'auto',
    resizeMode: 'contain',
    height: 250,
    width: '100%'
  },
  h2Centered: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
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
  left: {
      width: '30%'
  },
  center: {
      flex: 1,
      justifyContent:'center',
      alignContent: 'center',
      alignItems: 'center',
      width: '50%',
      height: '100%',
  },
  right: {
      alignItems: 'center',
      width: '20%',
  },
  content: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
  },
});

export default Chapters;