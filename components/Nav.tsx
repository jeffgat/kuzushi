import { AntDesign } from '@expo/vector-icons';
import { Box, HStack, Center, Icon, Pressable, Text, VStack } from 'native-base';
import React from 'react';

type Props = {};

const Nav = (props: Props) => {
    const [selected, setSelected] = React.useState(1);
    return (
        <HStack bg="neutral.700" alignItems="center" safeAreaBottom>
            <Pressable
                // cursor="pointer"
                opacity={selected === 0 ? 1 : 0.5}
                py="3"
                flex={1}
                onPress={() => setSelected(0)}>
                <Center>
                    <Icon
                        mb="1"
                        as={<AntDesign name="home" />}
                        color="neutral.50"
                        size="lg"
                    />
                    <Text color="white" fontSize="12">
                        Home
                    </Text>
                </Center>
            </Pressable>
            <Pressable
                // cursor="pointer"
                opacity={selected === 1 ? 1 : 0.5}
                py="2"
                flex={1}
                onPress={() => setSelected(1)}>
                <Center>
                    <Icon
                        mb="1"
                        as={
                            <AntDesign
                                name="clockcircleo"
                                size={24}
                                color={selected === 0 ? 'neutral.200' : 'neutral.600'}
                            />
                        }
                        color="neutral.50"
                        size="lg"
                    />
                    <Text color="white" fontSize="12">
                        History
                    </Text>
                </Center>
            </Pressable>
            <Pressable
                // cursor="pointer"
                opacity={selected === 2 ? 1 : 0.6}
                py="2"
                flex={1}
                onPress={() => setSelected(2)}>
                <Center>
                    <Icon
                        mb="1"
                        as={<AntDesign name="book" size={24} />}
                        color="neutral.50"
                        size="lg"
                    />
                    <Text color="white" fontSize="12">
                        Notes
                    </Text>
                </Center>
            </Pressable>
            <Pressable
                // cursor="pointer"
                opacity={selected === 3 ? 1 : 0.5}
                py="2"
                flex={1}
                onPress={() => setSelected(3)}>
                <Center>
                    <Icon
                        mb="1"
                        as={<AntDesign name="setting" size={24} />}
                        color="neutral.50"
                        size="lg"
                    />
                    <Text color="white" fontSize="12">
                        Account
                    </Text>
                </Center>
            </Pressable>
        </HStack>
    );
};

export default Nav;
