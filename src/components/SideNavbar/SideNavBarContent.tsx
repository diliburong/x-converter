import React from 'react';
import { Box, Flex, useColorModeValue, Text, CloseButton } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi';
import type { IconType } from 'react-icons';

import { NavItem } from './NavItem';

interface LinkItemProps {
    name: string;
    icon: IconType;
}

const LinkItems: LinkItemProps[] = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favorite', icon: FiStar },
    { name: 'Settings', icon: FiSettings },
];

export interface SideNavBarContentProps extends BoxProps {
    onClose: () => void;
}

export const SideNavBarContent = ({ onClose, ...rest }: SideNavBarContentProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight='1px'
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos='fixed'
            h='full'
            {...rest}
        >
            <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
                <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};
