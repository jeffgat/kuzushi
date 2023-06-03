import React from 'react';
import {
    Box,
    Center,
    Heading,
    VStack,
    Text,
    Skeleton,
    Checkbox,
    HStack,
    Icon,
    IconButton,
    Input,
    useToast,
} from 'native-base';
import { Feather, Entypo } from '@expo/vector-icons';

type Props = {};

const Home = (props: Props) => {
    const instState = [
        {
            title: 'Code',
            isCompleted: true,
        },
        {
            title: 'Meeting with team at 9',
            isCompleted: false,
        },
        {
            title: 'Check Emails',
            isCompleted: false,
        },
        {
            title: 'Write an article',
            isCompleted: false,
        },
    ];
    const [list, setList] = React.useState(instState);
    const [inputValue, setInputValue] = React.useState('');
    // const toast = useToast();

    const addItem = (title: string) => {
        // if (title === '') {
        //     toast.show({
        //         title: 'Please Enter Text',
        //         status: 'warning',
        //     });
        //     return;
        // }

        setList((prevList) => {
            return [
                ...prevList,
                {
                    title: title,
                    isCompleted: false,
                },
            ];
        });
    };

    const handleDelete = (index) => {
        setList((prevList) => {
            const temp = prevList.filter((_, itemI) => itemI !== index);
            return temp;
        });
    };

    const handleStatusChange = (index) => {
        setList((prevList) => {
            const newList = [...prevList];
            newList[index].isCompleted = !newList[index].isCompleted;
            return newList;
        });
    };

    return (
        <VStack bg="neutral.800" width="100%" height="100%">
            <Center>
                <VStack pt={8} alignItems="center">
                    <Heading color="neutral.100">Kuzushi</Heading>
                    <Text color="neutral.300">Log your jits performance over time.</Text>
                </VStack>
                <Box maxW="300" w="100%" mt={8}>
                    <Heading mb="2" size="md" color="neutral.50">
                        Todos
                    </Heading>
                    <VStack space={4}>
                        <HStack space={2}>
                            <Input
                                flex={1}
                                onChangeText={(v) => setInputValue(v)}
                                value={inputValue}
                                placeholder="Add Task"
                            />
                            <IconButton
                                borderRadius="sm"
                                variant="solid"
                                icon={
                                    <Icon
                                        as={Feather}
                                        name="plus"
                                        size="sm"
                                        color="neutral.50"
                                    />
                                }
                                onPress={() => {
                                    addItem(inputValue);
                                    setInputValue('');
                                }}
                            />
                        </HStack>
                        <VStack space={2}>
                            {list.map((item, itemI) => (
                                <HStack
                                    w="100%"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    key={item.title + itemI.toString()}>
                                    <Checkbox
                                        isChecked={item.isCompleted}
                                        onChange={() => handleStatusChange(itemI)}
                                        value={item.title}></Checkbox>
                                    <Text
                                        width="100%"
                                        flexShrink={1}
                                        textAlign="left"
                                        mx="2"
                                        strikeThrough={item.isCompleted}
                                        _light={{
                                            color: item.isCompleted
                                                ? 'neutral.400'
                                                : 'neutral.800',
                                        }}
                                        _dark={{
                                            color: item.isCompleted
                                                ? 'neutral.400'
                                                : 'neutral.50',
                                        }}
                                        onPress={() => handleStatusChange(itemI)}>
                                        {item.title}
                                    </Text>
                                    <IconButton
                                        size="sm"
                                        colorScheme="neutral"
                                        icon={
                                            <Icon
                                                as={Entypo}
                                                name="minus"
                                                size="xs"
                                                color="neutral.400"
                                            />
                                        }
                                        onPress={() => handleDelete(itemI)}
                                    />
                                </HStack>
                            ))}
                        </VStack>
                    </VStack>
                </Box>
            </Center>
        </VStack>
    );
};

export default Home;
