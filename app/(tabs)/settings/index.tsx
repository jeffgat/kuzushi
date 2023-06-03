import React from 'react';
import { VStack, Center, Heading, Skeleton, Text } from 'native-base';

type Props = {};

const Settings = (props: Props) => {
    return (
        <VStack bg="neutral.800" width="100%" height="100%">
            <Center>
                <VStack pt={8} alignItems="center">
                    <Heading color="neutral.100">Settings</Heading>
                    <Text color="neutral.300">(Coming soon)</Text>
                </VStack>
                <VStack
                    mt={8}
                    w="90%"
                    maxW="400"
                    borderWidth="1"
                    space={8}
                    overflow="hidden"
                    rounded="md"
                    _dark={{
                        borderColor: 'neutral.500',
                    }}
                    _light={{
                        borderColor: 'neutral.200',
                    }}>
                    <Skeleton h="40" startColor="neutral.600" />
                    <Skeleton.Text px="4" startColor="neutral.600" />
                    <Skeleton px="4" my="4" rounded="md" startColor="neutral.600" />
                </VStack>
            </Center>
        </VStack>
    );
};

export default Settings;
