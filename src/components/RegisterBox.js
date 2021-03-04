import { Button, Input, InputGroup, FormControl, Icon, Stack, Select, InputLeftAddon, Heading } from '@chakra-ui/react'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getBungieUserDetails } from '../utils/api'

class RegisterBox extends Component {
    constructor(props)
    {
        super(props)
        this.state = { name: '', platform: 0, loading: false, redirect: false, bungieAcct: ''}

        //This binding is necessary to make `this` work in the callback
        this.register = this.register.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePlatformChange = this.handlePlatformChange.bind(this)
    }

    handleNameChange = function(e)
    {
        this.setState({name: e.target.value});
    }

    handlePlatformChange =  function(e)
    {
        this.setState({platform: e.target.value});
    }

    register = (e) => {
        e.preventDefault()
        this.setState({loading: true})
        let { name, platform } = this.state

        console.log(JSON.stringify({
            NAME: name,
            PLATFORM: platform
        }))

        getBungieUserDetails(name, platform, `${this.props.discordId}`, this.props.toast)
        .then((res) => {
            if(res.status === 200)
            {
                console.log("Guardian Data found")
                this.props.toast({
                    title: "Guardian Found",
                    description: "Guardian data has now been registered.",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                })

                this.setState({ bungieAcct: res.data.bungieAcct })
                this.setState({ redirect: true })
            }
            else
            {
                this.props.toast({
                    title: "Guardian Not Found",
                    description: "Guardian data was not found.",
                    status: "fail",
                    duration: 9000,
                    isClosable: true,
                })

                this.setState({ loading: false })
            }
        })
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
                <form onSubmit={this.register}>
                    <div style={{ textAlign:"center" }}>
                        <Stack spacing={3}>
                            <Heading mb={4} fontSize="4xl">Bot Registration</Heading>
                            <FormControl isRequired>
                                <InputGroup>
                                    <InputLeftAddon children={<Icon name='info' />}/>
                                    <Input type='name' name="name" value={this.state.name} onChange={this.handleNameChange} placeholder='Account Name' aria-label='Account Name'/>
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <InputLeftAddon children={<Icon name='SettingsIcon' />}/>
                                    <Select placeholder="Select platform" name="platform" value={this.state.platform} onChange={this.handlePlatformChange} aria-label='Platform'>
                                        <option value="1">Xbox</option>
                                        <option value="2">PSN</option>
                                        <option value="3">Steam</option>
                                        <option value="5">Stadia</option>
                                    </Select>
                                </InputGroup>
                            </FormControl>
                            <Button
                                isLoading={this.state.loading}
                                type='submit'
                                variant='solid'
                                _hover={{ boxShadow: 'md' }}
                                _active={{ boxShadow: 'lg' }}>
                                Submit
                            </Button>
                        </Stack>
                    </div>
                </form>
            )
        }
    }
}

export default RegisterBox