import React from 'react'
import { Box, Center, HStack, IconButton, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { CrakinIcon, GithubIcon, TwitterIcon } from './icons/icons'

class CrakinDevFooter extends React.Component {
    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div>
                <Box w='100%' bg='gray.900'>
                    <Center>
                        <VStack spacing={1} p={3}>
                            <CrakinIcon w='30px' h='30px'/>
                            <Text>2021 | CrakinDev</Text>
                            <HStack>
                                <IconButton
                                    mx={1}
                                    variant="ghost"
                                    colorScheme="teal"
                                    aria-label="Send email"
                                    icon={<GithubIcon />}/>
                                <IconButton
                                    mx={1}
                                    variant="ghost"
                                    colorScheme="teal"
                                    aria-label="Send email"
                                    icon={<TwitterIcon />}/>
                            </HStack>
                        </VStack>
                    </Center>
                </Box>
            </div>
        )
    }
}

export default CrakinDevFooter