import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Stack } from 'expo-router';
import { config, theme } from '@/theme';

type Props = {};

const StackLayout = (props: Props) => {
    return (
        <NativeBaseProvider theme={theme} config={config}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="(auth)" />
            </Stack>
        </NativeBaseProvider>
    );
};

export default StackLayout;
