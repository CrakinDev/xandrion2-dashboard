import React from 'react'
import { Button } from '@chakra-ui/react'
import { getUserDetails } from '../../utils/api'
import CrakinDevFooter from '../../components/crakindevfooter'

export function LandingPage(props)
{
    const { history } = props
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)

    const login = () => window.location.href = `${process.env.REACT_APP_XANDRION_API}api/auth/discord`

    React.useEffect( () => {
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
            <h1>Xandrion</h1>
            <Button
                onClick={ login }
                colorScheme="blue">Login
            </Button>
            <CrakinDevFooter />
        </div> 
    ) 
}