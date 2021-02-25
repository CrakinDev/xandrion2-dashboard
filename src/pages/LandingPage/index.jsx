import React from 'react'
import { Button } from '@chakra-ui/react'

export function LandingPage(props)
{
    const login = () => window.location.href = "http://localhost:8080/api/auth/discord"
    return(
        <div>
            <h1>Xandrion</h1>
            <Button
            onClick={ login }
            colorScheme="blue">Login</Button>
        </div> 
    ) 
}