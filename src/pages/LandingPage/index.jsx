import React from 'react'
import { Box, Button, Center, Image } from '@chakra-ui/react'
import { getUserDetails } from '../../utils/api'
import LoginBox from '../../components/LoginBox'
import CrakinDevFooter from '../../components/crakindevfooter'

const { colorMode, toggleColorMode } = useColorMode()

export function LandingPage(props)
{
    const { history } = props
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect( () => {
        if(colorMode !== "dark") toggleColorMode

        // Attempt to get user details from previous login
        getUserDetails()
            .then(({ data }) => {
                // If details exist and cookie is valid, push user straight to dashboard
                if(data[0].discordId && data[0].bungieAcct != null)
                {
                    setUser(data)
                    setLoading(false)
                    history.push(`/dashboard/${data[0].bungieAcct}`)
                }
                // Else force a re-login
                else
                {
                    setLoading(false)
                }
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return !loading && (
        <div>
             <Center mt={6}>
                <Box w='350px' p={3} borderWidth={1} borderRadius={8} boxShadow="lg" my={3}>
                    <Image src={'/images/xan_hydra_sm.png'}w='200px' h='142px' mx='auto' my={1} />
                    <LoginBox />
                </Box>
            </Center>
            <CrakinDevFooter />
        </div> 
    ) 
}