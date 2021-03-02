import { Box, Divider, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import ActivityStat from './activitystat'

class ActivityPart extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = { }

        //This binding is necessary to make `this` work in the callback
        //this.register = this.register.bind(this)
    }

    componentDidMount()
    {
        // API Call setup
        //console.log(this.props.data)
    }

    render() {
        return (
            <Box borderWidth={1} borderRadius={8} boxShadow="lg" my={2} pt={2} pb={2} pl={4} pr={4}>
                <SimpleGrid columns={2} spacing={10}>
                    <Text>{this.props.data.name}</Text>
                    <Text align='right'>{new Date(this.props.data.timestamp).toLocaleString()}</Text>
                </SimpleGrid>
                <Divider my={1}/>
                <Wrap spacing={10}>
                    <WrapItem><ActivityStat title='Kills' value={this.props.data.kills} /></WrapItem>
                    <WrapItem><ActivityStat title='Deaths' value={this.props.data.deaths} /></WrapItem>
                    <WrapItem><ActivityStat title='Assists' value={this.props.data.assists} /></WrapItem>
                    <WrapItem><ActivityStat title='K/D Ratio' value={this.props.data.kdr} decimal /></WrapItem>
                    <WrapItem><ActivityStat title='K/D/A Ratio' value={this.props.data.kdar} decimal /></WrapItem>
                    <WrapItem><ActivityStat title='Score' value={this.props.data.score} /></WrapItem>
                    <WrapItem><ActivityStat title='Duration' value={new Date(this.props.data.activityDurationSeconds * 1000).toISOString().substr(11, 8)} /></WrapItem>
                </Wrap>
            </Box>
        )
    }
}

export default ActivityPart