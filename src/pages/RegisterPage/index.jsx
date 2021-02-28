import React from 'react'
import { getUserDetails } from '../../utils/api'
import { Box, Center, Image } from '@chakra-ui/react'

import { RegisterBox } from '../../components/RegisterBox'

export function RegisterPage(props)
{
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    const { history } = props

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    // React.useEffect( () => {
    //     getUserDetails()
    //         .then(({ data }) => {
    //             console.log(data)
    //             setUser(data)
    //             setLoading(false)
    //         })
    //         .catch((err) => {
    //             history.push('/')
    //             setLoading(false)
    //         })
    // }, [])
    //return !loading && (
    return (
        <div>
            <Center>
                <Box w='350px' p={3} borderWidth={1} borderRadius={8} boxShadow="lg" my={3}>
                    <Image src='./xan_hydra_sm.png' w='200px' h='142px' mx='auto' my={1}/>
                    <RegisterBox/>
                </Box>
            </Center>
        </div>
    )
}