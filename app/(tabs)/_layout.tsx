import React, { ReactNode } from 'react';
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#42474F',
                },
                tabBarInactiveTintColor: '#8C919A',
                tabBarActiveTintColor: '#FFF',
                tabBarIcon: ({ color, size }) => {
                    const icons: any = {
                        home: 'home',
                        history: 'clockcircleo',
                        notes: 'book',
                        settings: 'setting',
                    };

                    return (
                        <AntDesign name={icons[route.name]} color={color} size={size} />
                    );
                },
            })}>
            <Tabs.Screen name="home" options={{ headerShown: false }} />
            <Tabs.Screen name="history" options={{ headerShown: false }} />
            <Tabs.Screen name="notes" options={{ headerShown: false }} />
            <Tabs.Screen name="settings" options={{ headerShown: false }} />
        </Tabs>
    );
};

export default Layout;
