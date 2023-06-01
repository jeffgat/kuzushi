import React, { ReactNode } from 'react';
import Nav from './Nav';
import { Box, VStack } from 'native-base';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <VStack
            display="flex"
            justifyContent="flex-end"
            bg="neutral.800"
            width="100%"
            height="100%"
            safeAreaTop>
            <Box flexGrow={1}>{children}</Box>
            <Nav />
        </VStack>
    );
};

export default Layout;
