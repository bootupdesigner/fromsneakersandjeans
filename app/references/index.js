import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import privacyButton from '../../assets/images/privacy.png';
import chapterTitle from '../../assets/images/refTitle.png';
import backButton from '../../assets/images/backButton.png';
import privacyThumbnail from '../../assets/images/informationIcon.png';

import StopPlay from '../../assets/stopPlay';

const refs = [
  {
    id: 1,
    title: `PublicHealth Health Guides | Teens 11 to 19`,
    cite: `https://www.publichealth.org/public-awareness/preventive-care-schedule/teens/`
  },
  {
    id: 2,
    title: `Timing and stages of puberty | girlshealth.gov`,
    cite: `https://www.girlshealth.gov/body/puberty/timing.html`
  },
  {
    id: 3,
    title: `NIMH » Depression (nih.gov)`,
    cite: `https://www.nimh.nih.gov/health/publications/depression`
  },
  {
    id: 4,
    title: `MyPlate Community Toolkit`,
    cite: `https://www.google.com/url?sa=t&source=web&rct=j&url=https://letsmove.obamawhitehouse.archives.gov/sites/letsmove.gov/files/MyPlateCommunityToolkit.pdf&ved=2ahUKEwjNsqzWis_-AhWymWoFHUfECXgQFnoECCsQAQ&usg=AOvVaw35J1X_-DkLCMVGWZf81_Na`
  },
  {
    id: 5,
    title: `Breasts and Bras (for Kids) - Nemours KidsHealth`,
    cite: `https://kidshealth.org/en/kids/breasts-bras.html`
  },
  {
    id: 6,
    title: `Dating | girlshealth.gov`,
    cite: `https://www.girlshealth.gov/relationships/dating/index.html`
  },
  {
    id: 7,
    title: `Bullying | girlshealth.gov`,
    cite: `https://www.girlshealth.gov/bullying/index.html`
  },
  {
    id: 8,
    title: `Preventing Teen Dating Violence | CDC`,
    cite: `https://www.cdc.gov/injury/features/dating-violence/index.html`
  },
]
const references = () => {
  const router = useRouter();

  const chapterTitleAlt = 'references';
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
            router.push(href = '/privacy-policy')
          }} >
            <Image style={styles.navImages} source={privacyButton} accessibilityLabel='visit privacy policy' />
          </TouchableOpacity>

        </View>
        {/* end of page header and navigation */}

        <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >

          <View style={styles.content}>

            <View style={styles.left}>
              <Image style={styles.image} source={privacyThumbnail} accessibilityLabel='help websites Candi' />
            </View>

            <View style={styles.center} dataSet={{ media: ids.center }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {refs.map((ref, id) => {
                  return (
                    <View key={id}>
                      <Link href={ref.cite} style={styles.bold}>{ref.id}. {ref.title}</Link>
                      <Link href={ref.cite} style={styles.refs}>{ref.cite}</Link>
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

export default references;

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
    height: 200,
    width: '100%',
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
  paragraph: {
    fontSize: 16,
    marginVertical: 5
  },
  bold: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: "bold",
  },
  refs: {
    fontSize: 12,
    fontStyle: 'italic'
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
})