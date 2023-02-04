import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Swiper from 'react-native-web-swiper';

const score = [
    {
        id: '1',
        heading: `Calculate Your Self-Worth`,
        summary: `I behave the way others expect me to so that they will like me.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '2',
        heading: `Calculate Your Self-Worth`,
        summary: `I don’t think I’m on equal grounds with others and have difficulties developing positive relationships.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '3',
        heading: `Calculate Your Self-Worth`,
        summary: `I rarely trust myself nor feel strong enough to handle things on my own.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '4',
        heading: `Calculate Your Self-Worth`,
        summary: `I don’t take compliments very well because I think the person isn’t being truthful.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '5',
        heading: `Calculate Your Self-Worth`,
        summary: `I am afraid of being judged by others.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '6',
        heading: `Calculate Your Self-Worth`,
        summary: `I often feel inferior to others.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '7',
        heading: `Calculate Your Self-Worth`,
        summary: `I let other people set the standards for my life.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '8',
        heading: `Calculate Your Self-Worth`,
        summary: `I find it hard to forgive myself for making mistakes.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '9',
        heading: `Calculate Your Self-Worth`,
        summary: `I feel a sense of failure when my grades are lower than those of my peers.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
    {
        id: '10',
        heading: `Calculate Your Self-Worth`,
        summary: `I wish I was more like other people—I feel so different.`,
        options: [
            { label: '1 - Not at all true', value: 1 },
            { label: '2 - Slightly true', value: 2 },
            { label: '3 - Unsure', value: 3 },
            { label: '4 - Mostly true', value: 4 },
            { label: '5 - True', value: 5 }
        ]
    },
]

const Chat = () => {

    const [total, setTotal] = useState('0');
    const [currentScore, setCurrentScore] = useState('');

    const handleScoreChange = (value) => {
        setCurrentScore(value);
        setTotal(total + parseInt(value));
    }

    const slide = score;

    return (
        <Swiper>
        {slide.options ?
            <View style={styles.radioForm}>
                <Text style={styles.paragraph}>{slide.summary}</Text>
                

                <Text>Enter Score 1-5</Text>
                <TextInput onChangeText={handleScoreChange} placeholder="score 1-5" keyboardType="numeric" />
                <Text>Your total: {total}</Text>
            </View> : null}
        </Swiper>
    )
};

const styles = StyleSheet.create({});

export default Chat;

