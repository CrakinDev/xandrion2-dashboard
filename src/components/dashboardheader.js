import React from 'react'
import { RiRefreshFill } from "react-icons/ri";
import { Box, Center, HStack, IconButton, Image, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { CrakinIcon, GithubIcon, TwitterIcon } from './icons/icons'

class DashboardHeader extends React.Component {
    constructor(props)
    {
        super(props)
    }

    render() {
        let embs = []
        this.props.emblems.forEach(emb => {
            console.log("Embs")
            embs.push(<Image w={'32px'} h={'32px'} src={`https://www.bungie.net${emb}`}></Image>)
        });
        return (
            <div>
                <Box w='100%' bg='gray.900'>
                    <HStack>
                        <Text fontSize='4xl' ml={6}>Dashboard</Text>
                        {embs}
                    </HStack>
                </Box>
            </div>
        )
    }
}

export default DashboardHeader