import React from 'react';
import {
    VStack,
    Text,
    Center,
    Heading,
    Skeleton,
    Box,
    Button,
    Input,
    Link,
} from 'native-base';
import { useRouter } from 'expo-router';

type Props = {};

const Login = (props: Props) => {
    const router = useRouter();
    return (
        <VStack bg="neutral.800" width="100%" height="100%">
            <Center>
                <Button onPress={() => router.push('/home')} size="sm">
                    dev: home
                </Button>
                <VStack pt={8} alignItems="center">
                    <Heading color="neutral.100">Login to your account</Heading>
                    {/* <Text color="neutral.300">
                        This will be used to save your metrics
                    </Text> */}
                </VStack>
                <Box mt={2}>
                    <Link
                        onPress={() => router.push('/register')}
                        _text={{
                            fontSize: 'md',
                            color: 'blue.400',
                        }}
                        isUnderlined
                        _hover={{
                            _text: {
                                color: 'blue.500',
                            },
                        }}>
                        Don't have an account?
                    </Link>
                </Box>
                <VStack
                    mt={8}
                    w="90%"
                    maxW="400"
                    space={4}
                    rounded="md">
                    <Box>
                        <Input
                            placeholder="Email"
                            w="100%"
                            bg="neutral.900"
                            borderColor="transparent"
                            h="48px"
                        />
                        <Text color="red.300" pt="2" pl="2">
                            * Helper / Error Text here
                        </Text>
                    </Box>
                    <Box>
                        <Input
                            placeholder="Password"
                            w="100%"
                            bg="neutral.900"
                            borderColor="transparent"
                            h="48px"
                        />
                        <Text color="red.300" pt="2" pl="2">
                            * Helper / Error Text here
                        </Text>
                    </Box>
                    <Button>Login</Button>
                </VStack>
            </Center>
        </VStack>
    );
};

export default Login;
