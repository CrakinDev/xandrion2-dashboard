import { Button, Input, InputGroup, FormControl, Icon, Stack, Select, InputLeftAddon, Heading, Center, useColorMode } from '@chakra-ui/react'

export function RegisterBox() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <form action='submit'>
            <div style={{ textAlign:"center" }}>
                <Stack spacing={3}>
                    <Heading mb={4} fontSize="4xl">Bot Registration</Heading>
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
                        _hover={{ boxShadow: 'md' }}
                        _active={{ boxShadow: 'lg' }}>
                        Submit
                    </Button>
                </Stack>
            </div>
        </form>
    )
}