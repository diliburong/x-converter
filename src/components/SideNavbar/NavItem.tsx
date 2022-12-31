import React from 'react';
import { Flex, Icon, Link } from '@chakra-ui/react';
import type { FlexProps } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

export interface NavItemProps extends FlexProps {
    icon: IconType;
    children: string | number;
}

export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align='center'
                p='4'
                mx='4'
                borderRadius='lg'
                role='group'
                cursor='pointer'
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}
            >
                {Boolean(icon) && (
                    <Icon
                        mr='4'
                        fontSize='16'
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
