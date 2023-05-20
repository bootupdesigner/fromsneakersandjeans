import { Stack } from 'expo-router';

export default () => {
    return (
        <Stack>
            <Stack.Screen name="chapters" options={{ headerShown: false }} />
            <Stack.Screen name="hotlines" options={{ headerShown: false }} />
            <Stack.Screen name="websites" options={{ headerShown: false }} />
            <Stack.Screen name="privacy-policy" options={{ headerShown: false }} />
            <Stack.Screen name="references" options={{ headerShown: false }} />
            <Stack.Screen name="information" options={{ headerShown: false }} />
        </Stack>
    )
}