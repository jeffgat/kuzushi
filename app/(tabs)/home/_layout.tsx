import React from 'react';
import { Stack } from 'expo-router';

type Props = {};

const StackLayout = (props: Props) => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2C3138',
                },
                headerTintColor: '#DEE3EC',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="index" options={{ headerTitle: 'Today' }} />
        </Stack>
    );
};

export default StackLayout;
