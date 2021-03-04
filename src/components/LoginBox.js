import { Button, Icon, Stack, Text, Heading } from '@chakra-ui/react'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LoginBox extends Component {
    constructor(props)
    {
        super(props)
        this.state = { loading: false, redirect: false }

        //This binding is necessary to make `this` work in the callback
        this.login = this.login.bind(this)
    }

    login = (e) => {
        console.log("Login Function")
        e.preventDefault()
        window.location.href = `${process.env.REACT_APP_XANDRION_API_HOST}}/api/auth/discord`
    }

    render() {
        const { redirect } = this.state;

        if (redirect)
        {
            return <Redirect to={`/dashboard/${this.state.bungieAcct}`}/>;
        }
        else
        {
            return (
                <form onSubmit={this.login}>
                    <div style={{ textAlign:"center" }}>
                        <Stack spacing={3}>
                            <div>
                                <Heading mb={0} fontSize="4xl">Xandrion</Heading>
                                <Text mb={4} fontSize="sm">A Destiny 2 Discord Bot</Text>
                            </div>
                            <Button
                                type='submit'
                                variant='solid'
                                _hover={{ boxShadow: 'md' }}
                                _active={{ boxShadow: 'lg' }}>
                                Login
                            </Button>
                        </Stack>
                    </div>
                </form>
            )
        }
    }
}

export default LoginBox