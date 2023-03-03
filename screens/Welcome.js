import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const Welcome = ({ navigation }) => {
    const Navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to From Sneakers and Jeans</Text>
            <Button title="Click Me" onPress={() => navigation.navigate('chapters')} />
            <Button title="test" onPress={() => navigation.navigate('chat')} />
        </View>
    )
};

export default Welcome;