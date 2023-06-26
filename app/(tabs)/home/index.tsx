import React, { useState } from 'react';
import {
    Box,
    Center,
    Heading,
    VStack,
    Text,
    Input,
    Modal,
    Button,
    FormControl,
    Icon,
    Flex,
    View,
    IconButton,
} from 'native-base';
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import SubmissionModal from '@/components/SubmissionModal';

// types
type Props = {};

const Stats = () => {
    return (
        <Center mt={4}>
            <Text fontSize={20} fontWeight={600} color="white">
                Stats
            </Text>
            <Text color="neutral.300">No stats to display yet. Add a submission.</Text>
        </Center>
    );
};

const Home = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    return (
        <VStack bg="neutral.800" width="100%" height="100%">
            <IconButton
                position="absolute"
                bottom={4}
                right={4}
                bg="rust.400"
                rounded="full"
                onPress={() => setShowModal(true)}
                icon={<Icon as={Entypo} name="plus" size={6} />}
                _icon={{
                    color: 'white',
                }}
                _hover={{
                    bg: 'rust.500',
                }}
                _pressed={{
                    bg: 'rust.600',
                }}
            />
            <Center>
                <Button onPress={() => router.push('/register')} size="sm">
                    dev: register
                </Button>
                <VStack pt={8} alignItems="center">
                    <Heading color="neutral.100" size="xl">
                        Kuzushi
                    </Heading>
                    <Text color="neutral.300" fontSize={16}>
                        Log your jits performance over time.
                    </Text>
                </VStack>
                <Stats />

                <SubmissionModal showModal={showModal} setShowModal={setShowModal} />
            </Center>
        </VStack>
    );
};

export default Home;
