import React from 'react'
import { getUserDetails } from '../../utils/api'
import { Box, Center, Image, useToast } from '@chakra-ui/react'
import RegisterBox from '../../components/RegisterBox'
import { useParams } from 'react-router-dom'
import CrakinDevFooter from '../../components/crakindevfooter'


export function RegisterPage(props)
{
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    const { history } = props
    const { discordId } = useParams()

    const toast = useToast()

    // Ensures user has authenticated with Discord to protect route from unauthorized access
    React.useEffect( () => {
        getUserDetails()
            .then(({ data }) => {
                setUser(data)
                setLoading(false)
            })
            .catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])
    return !loading && (
    //return (
        <div>
            <Center>
                <Box w='350px' p={3} borderWidth={1} borderRadius={8} boxShadow="lg" my={3}>
                    <Image src={'/images/xan_hydra_sm.png'}w='200px' h='142px' mx='auto' my={1} />
                    <RegisterBox discordId={`${discordId}`} toast={toast}/>
                </Box>
            </Center>
            <CrakinDevFooter />
        </div>
    )
}