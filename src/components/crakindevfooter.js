import React from 'react'
import { Box, Center, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { CrakinIcon, GithubIcon, TwitterIcon } from './icons/icons'

class CrakinDevFooter extends React.Component {

    constructor(props)
    {
        super(props)

        this.github = this.github.bind(this)
        this.twitter = this.twitter.bind(this)
    }

    

    github = (e) => {

    }

    twitter = (e) => {

    }

    render() {
        return (
            <div className="footer">
                <Box w='100%' bg='gray.900'>
                    <Center>
                        <VStack spacing={1} p={3}>
                            <CrakinIcon w='30px' h='30px'/>
                            <Text>2021 | CrakinDev</Text>
                            <HStack>
                                <IconButton
                                    onclick={ this.github }
                                    mx={1}
                                    variant="ghost"
                                    colorScheme="teal"
                                    aria-label="Github"
                                    icon={<GithubIcon />}/>
                                <IconButton
                                    onclick={ this.twitter }
                                    mx={1}
                                    variant="ghost"
                                    colorScheme="teal"
                                    aria-label="Twitter"
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