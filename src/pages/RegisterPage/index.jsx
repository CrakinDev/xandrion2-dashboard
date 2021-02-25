import React from 'react'
import { getUserDetails } from '../../utils/api'
import { Button, Input, InputGroup, FormControl, Icon, Stack, Select, InputLeftAddon } from '@chakra-ui/react'

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
            <h1>Register Page</h1>
            <form action='submit'>
                <Stack spacing={3}>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name='info' />}/>
                            <Input type='name' placeholder='Account Name' aria-label='Account Name'/>
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <InputGroup>
                            <InputLeftAddon children={<Icon name='SettingsIcon' />}/>
                            <Select placeholder="Select platform" aria-label='Platform'>
                                <option value="option1">Xbox</option>
                                <option value="option2">PSN</option>
                                <option value="option3">Steam</option>
                                <option value="option3">Stadia</option>
                            </Select>
                        </InputGroup>
                    </FormControl>
                    <Button
                        type='submit'
                        variant='solid'
                        colorScheme='blue'
                        _hover={{ boxShadow: 'md' }}
                        _active={{ boxShadow: 'lg' }}>
                        Submit
                    </Button>
                </Stack>
            </form>
        </div>
    )
}