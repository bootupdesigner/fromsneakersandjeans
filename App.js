import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useState } from 'react';

import StackNavigator from './StackNavigator';

import tour1 from './images/tour1.png';
import tour5 from './images/tour2.png';
import tour4 from './images/tour3.png';
import tour3 from './images/tour4.png';
import tour2 from './images/tour5.png';

const slides = [
  {
    key: 1,
    title: 'HEY, GIRL, HEY',
    text: 'Take a Tour with Teen Candi',
    image: tour1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: `Let's Start Somethin'`,
    text: `Use the play and stop buttons to read for you \nwhen you're doing other things or you're just too tired`,
    image: tour2,
    backgroundColor: '#59b2ab',
  },
  {
    key: 3,
    title: `Saw Somethin' Good`,
    text: `Use the next and back buttons \nto jump back and forth a chapter`,
    image: tour3,
    backgroundColor: '#59b2ab',
  },
  {
    key: 4,
    title: `PINK POSITUDE`,
    text: `Click the Pink Pos cloud whenever you see it to \nCHANGE THE WAY YOU THINK ABOUT YOU`,
    image: tour4,
    backgroundColor: '#59b2ab',
  },
  {
    key: 5,
    title: `Take Care Of You`,
    text: `It's never over! \nUse these buttons to find the right help for your situation`,
    image: tour5,
    backgroundColor: '#59b2ab',
  },
]

export default function App() {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View style={styles.slide}>

        <StatusBar hidden={true} />
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return (
    <>
      {showRealApp ? (
        <SafeAreaProvider>
          <StatusBar hidden={true} />
          <NavigationContainer style={styles.container}>
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      ) : (
        <AppIntroSlider style={{backgroundColor: 'rgb(236,0,140)'}} data={slides} renderItem={RenderItem} onDone={onDone} showSkipButton={true} onSkip={onSkip} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  slide: {
    flex: 1,
    height: '100%',
    alignItems: 'center',

  },
  image: {
    resizeMethod: 'auto',
    resizeMode: 'contain',
    height: 220,
    width: '100%'
  },
  title:{
    fontWeight: 'bold',
    fontSize: 32
  },
  text:{
    flex:1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }

})