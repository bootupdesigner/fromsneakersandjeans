import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Swiper from 'react-native-web-swiper';

const score =
{
    id: '1',
    heading: `Calculate Your Self-Worth`,
    summary: [
        `I behave the way others expect me to so that they will like me.`,
        `I don’t think I’m on equal grounds with others and have difficulties developing positive relationships.`,
        `I rarely trust myself nor feel strong enough to handle things on my own.`,
        `I don’t take compliments very well because I think the person isn’t being truthful.`,
        `I am afraid of being judged by others.`,
        `I often feel inferior to others.`,
        `I let other people set the standards for my life.`,
        `I find it hard to forgive myself for making mistakes.`,
        `I feel a sense of failure when my grades are lower than those of my peers.`,
        `I wish I was more like other people—I feel so different.`,
    ],
};


const Chat = () => {

    const [form, setForm] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
    });

    const [total, setTotal] = useState(0);
    useEffect(() => {
        const sum = Object.values(form).reduce((acc, curr) => {
            // Parse the input value as a number, or use 0 if it's not a valid number
            const value = Number(curr) || 0;
            return acc + value;
        }, 0);
        setTotal(sum);
    }, [form])

    return (
        <Swiper style={styles.radioForm}>
            <View>
                <Text style={styles.paragraph}>{score.summary[1]}</Text>


                <Text>Enter Score 1-5</Text>
                <TextInput onChangeText={(text) => setForm({ ...form, question2: text })} placeholder="score 1-5" keyboardType="numeric" />
            </View>
            <View>
                <Text style={styles.paragraph}>{score.summary[2]}</Text>


                <Text>Enter Score 1-5</Text>
                <TextInput onChangeText={(text) => setForm({ ...form, question3: text })} placeholder="score 1-5" keyboardType="numeric" />
            </View>
            <View>
                <Text style={styles.paragraph}>{score.summary[3]}</Text>


                <Text>Enter Score 1-5</Text>
                <TextInput onChangeText={(text) => setForm({ ...form, question4: text })} placeholder="score 1-5" keyboardType="numeric" />
            </View>
            <View>
                <Text style={styles.paragraph}>{score.summary[4]}</Text>


                <Text>Enter Score 1-5</Text>
                <TextInput onChangeText={(text) => setForm({ ...form, question5: text })} placeholder="score 1-5" keyboardType="numeric" />
            </View>
            <View>
                <Text style={styles.paragraph}>{score.summary[5]}</Text>


                <Text>Enter Score 1-5</Text>
                <TextInput onChangeText={(text) => setForm({ ...form, question6: text })} placeholder="score 1-5" keyboardType="numeric" />
            </View>

            <View>
                <Text>Your total: {total}</Text>
            </View>
        </Swiper>
    )
};

const styles = StyleSheet.create({});

export default Chat;

