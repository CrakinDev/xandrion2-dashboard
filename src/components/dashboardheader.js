import React from 'react'
import { Box, HStack, Image, Text } from '@chakra-ui/react'

class DashboardHeader extends React.Component {

    render() {
        let embs = []
        this.props.emblems.forEach(emb => {
            embs.push(<Image key={embs.length} w={'32px'} h={'32px'} src={`https://www.bungie.net${emb}`}></Image>)
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