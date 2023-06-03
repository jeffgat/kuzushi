import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseProvider, VStack } from 'native-base';
import { Stack } from 'expo-router';
import { theme } from '@/theme';

type Props = {};

const StackLayout = (props: Props) => {
    return (
        <NativeBaseProvider theme={theme}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="(tabs)" />
            </Stack>
        </NativeBaseProvider>
    );
};

export default StackLayout;
