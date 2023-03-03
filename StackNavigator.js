import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chapters from './screens/Chapters';
import Introduction from './chapters/Introduction';
import SelfWorth from './chapters/SelfWorth';
import Positude from './chapters/Positude';
import Etiquette from './chapters/Etiquette';
import Health from './chapters/Health';
import Physical from './chapters/PhysicalActivityAndNutrition';
import YourBody from './chapters/YourBody';
import DatingAndSex from './chapters/DatingAndSex';
import Safety from './chapters/Safety';
import Closing from './chapters/Closing';
import Hotlines from './screens/Hotlines';
import Websites from './screens/Websites';
import Chat from './chapters/Chat';


const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}  >
      <Stack.Screen name="chapters" component={Chapters} />
      <Stack.Screen name="introduction" component={Introduction} />
      <Stack.Screen name="self-worth" component={SelfWorth} />
      <Stack.Screen name="positude" component={Positude} />
      <Stack.Screen name="etiquette" component={Etiquette} />
      <Stack.Screen name="health-and-hygiene" component={Health} />
      <Stack.Screen name="physical-activity-and-nutrition" component={Physical} />
      <Stack.Screen name="your-body" component={YourBody} />
      <Stack.Screen name="dating-and-sex" component={DatingAndSex} />
      <Stack.Screen name="safety" component={Safety} />
      <Stack.Screen name="closing" component={Closing} />
      <Stack.Screen name="hotlines" component={Hotlines} />
      <Stack.Screen name="websites" component={Websites} />
      <Stack.Screen name="chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default StackNavigator;