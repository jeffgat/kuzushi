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
import { useRouter } from 'expo-router';
import { type ILinearGradientProps } from 'native-base/lib/typescript/components/primitives/Box/types';
import {
    type ColorType,
    type ResponsiveValue,
} from 'native-base/lib/typescript/components/types';

interface SubmissionModalProps {
    showModal: boolean;
    setShowModal: (_: boolean) => void;
    modalBg?: ResponsiveValue<ColorType | ILinearGradientProps>;
}

const ModalItem = ({ name, descrip }: any) => (
    <Flex
        direction="row"
        align="center"
        justify="space-between"
        w="full"
        h="20"
        bg="neutral.700"
        rounded="md"
        shadow={1}
        // borderWidth={1}
        // borderColor="rust.200"
    >
        <Flex direction="row" align="center" justify="center" h="100%">
            <Box ml={4}>
                <Text
                    color="neutral.50"
                    fontSize={16}
                    fontWeight={800}
                    textTransform="uppercase">
                    {name}
                </Text>
                <Text color="neutral.200">{descrip}</Text>
            </Box>
        </Flex>
        {/* <Box pr={4}>
          <Ionicons name="information-circle" size={24} color="white" />
      </Box> */}
    </Flex>
);

const SubmissionModal = ({
    showModal,
    setShowModal,
    modalBg = {
        linearGradient: {
            colors: ['neutral.800', 'neutral.900'],
            start: [0, 0],
            end: [0, 1],
        },
    },
}: SubmissionModalProps) => {
    return (
        <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            animationPreset="slide"
            // _slide={{ duration: 400 }}
            size="full"
            borderColor="red">
            <Modal.Content
                borderColor="red"
                bg={modalBg}
                marginBottom={0}
                marginTop="auto"
                h="full">
                <Modal.CloseButton />
                <Modal.Header bg="transparent" borderBottomColor="neutral.600">
                    <Text color="neutral.50" fontSize="lg" fontWeight={700}>
                        Add submission
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <VStack space={4} alignItems="center">
                        <ModalItem
                            name="Chokes / Strangles"
                            descrip="RNC, d'arce, gullotine, etc."
                        />
                        <ModalItem name="Leg locks" descrip="Heel hook, knee bar, etc." />
                        <ModalItem
                            name="Arm / Shoulder locks"
                            descrip="Arm bar, kimura, etc"
                        />
                        <ModalItem name="Other" descrip="All other subs" />
                    </VStack>
                </Modal.Body>
                <Modal.Footer
                    bg="transparent"
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
    );
};

export default SubmissionModal;
