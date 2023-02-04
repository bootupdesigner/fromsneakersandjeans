import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useState } from 'react';

import StackNavigator from './StackNavigator';

import tour1 from './images/tour1.png';
import tour2 from './images/tour2.png';
import tour3 from './images/tour3.png';
import tour4 from './images/tour4.png';
import tour5 from './images/tour5.png';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: tour1,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Description.\nSay something cool',
    image: tour2,
    backgroundColor: '#59b2ab',
  },
  {
    key: 3,
    title: 'Title 3',
    text: 'Description.\nSay something cool',
    image: tour3,
    backgroundColor: '#59b2ab',
  },
  {
    key: 4,
    title: 'Title 4',
    text: 'Description.\nSay something cool',
    image: tour4,
    backgroundColor: '#59b2ab',
  },
  {
    key: 5,
    title: 'Title 5',
    text: 'Description.\nSay something cool',
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
      <AppIntroSlider data={slides} renderItem={RenderItem} onDone={onDone} showSkipButton={true} onSkip={onSkip} />
    )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
slide:{
  flex:1,
  alignItems: 'center',
  backgroundColor: '#rgb(236,0,140)'

},
  image: {
    resizeMethod: 'auto',
    resizeMode: 'contain',
    height:300,
    width: '100%'
  },

})