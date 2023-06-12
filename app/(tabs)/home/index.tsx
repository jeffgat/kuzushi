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
} from 'native-base';
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';

// types
type Props = {};

const ModalItem = () => (
    <Flex
        direction="row"
        align="center"
        justify="space-between"
        w="full"
        h="20"
        bg="blue.300"
        rounded="md"
        shadow={2}>
        <Flex direction="row" align="center" justify="center" h="100%">
            <Box w={16} h="100%" bg="rust.100" />

            <Box ml={4}>
                <Text color="neutral.50" fontSize={20} fontWeight={600}>
                    Gullotine
                </Text>
                <Text color="neutral.50">Item description</Text>
            </Box>
        </Flex>
        <Box pr={4}>
            <Ionicons name="information-circle" size={24} color="white" />
        </Box>
    </Flex>
);

// constants
const MODAL_BG = 'neutral.800';

const Home = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <VStack bg="neutral.800" width="100%" height="100%">
            <Center>
                <VStack pt={8} alignItems="center">
                    <Heading color="neutral.100">Kuzushi</Heading>
                    <Text color="neutral.300">Log your jits performance over time.</Text>
                </VStack>
                <Center mt={4}>
                    <Text color="neutral.300">Open modal to add submission</Text>
                    <Button
                        bg="rust.400"
                        mt={2}
                        _pressed={{
                            bg: 'rust.600',
                        }}
                        onPress={() => setShowModal(true)}
                        endIcon={
                            <Icon as={Entypo} name="chevron-right" size="sm" ml={-1} />
                        }>
                        <Text fontWeight={600} color="white">
                            Add
                        </Text>
                    </Button>
                    <Modal
                        isOpen={showModal}
                        onClose={() => setShowModal(false)}
                        animationPreset="slide"
                        // _slide={{ duration: 400 }}
                        size="full"
                        borderColor="red">
                        <Modal.Content
                            borderColor="red"
                            bg={MODAL_BG}
                            marginBottom={0}
                            marginTop="auto"
                            h="full">
                            <Modal.CloseButton />
                            <Modal.Header bg={MODAL_BG} borderBottomColor="neutral.600">
                                <Text color="neutral.50" fontSize="lg" fontWeight={700}>
                                    Add submission
                                </Text>
                            </Modal.Header>
                            <Modal.Body>
                                {/* <FormControl>
                                    <FormControl.Label>
                                        <Text color="neutral.100">Name</Text>
                                    </FormControl.Label>
                                    <Input />
                                </FormControl>
                                <FormControl mt="3">
                                    <Text color="neutral.100">Email</Text>
                                    <Input />
                                </FormControl> */}
                                <VStack space={4} alignItems="center">
                                    <ModalItem />
                                    <ModalItem />
                                    <ModalItem />
                                </VStack>
                                ;
                            </Modal.Body>
                            <Modal.Footer
                                bg={MODAL_BG}
                                borderTopColor="neutral.600"
                                safeAreaBottom
                                safeAreaX>
                                <Button.Group space={2}>
                                    <Button
                                        variant="outline"
                                        borderColor="rust.400"
                                        onPress={() => {
                                            setShowModal(false);
                                        }}>
                                        <Text color="rust.400">Cancel</Text>
                                    </Button>
                                    <Button
                                        bg="rust.400"
                                        onPress={() => {
                                            setShowModal(false);
                                        }}>
                                        Save
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Center>
                ;
            </Center>
        </VStack>
    );
};

export default Home;
