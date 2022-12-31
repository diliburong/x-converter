import React, { PropsWithChildren } from 'react';
import { Box, useColorModeValue, useDisclosure } from '@chakra-ui/react';

import { SideNavBarContent } from './SideNavBarContent';

export type SideNavBarProps = PropsWithChildren;

export const SideNavBar = ({ children }: SideNavBarProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
            <SideNavBarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }}></SideNavBarContent>
            <Box ml={{ base: 0, md: 60 }} p='4'>
                {children}
            </Box>
        </Box>
    );
};
