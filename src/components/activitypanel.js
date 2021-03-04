import React from 'react'
import { getActivityData } from '../utils/api'
import ActivityPart from './panelparts/activitypart'
import { Center, Fade, Spinner, Text, Wrap, WrapItem } from '@chakra-ui/react'
import ActivityChart from './panelparts/activitychart'

class ActivityPanel extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = { activityData: null, specificActivities: null }

        //This binding is necessary to make `this` work in the callback
        //this.setupActivityData = this.setupActivityData.bind(this)
    }

    componentDidMount()
    {
        getActivityData(this.props.bungieAcct, this.props.activity)
        .then((res) => {
            console.log("Res Data Exists")
            this.setState({ activityData: res.data })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if(this.state.activityData == null)
        {
            return (
                <div>
                    <Center>
                        <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
                    </Center>
                    <Center my={3}>
                        <p>Fetching Activities</p>
                    </Center>
                </div>
            )
        }
        else if(this.state.activityData.length === 0)
        {
            return (
                <div>
                    <Center my={3}>
                        <p>No Data</p>
                    </Center>
                </div>
            )
        }
        else
        {
            const activitiesList = []
            let charts = []
            for (const [index, value] of this.state.activityData.entries())
            {
                activitiesList.push(<Center><ActivityPart key={index} data={value} /></Center>)
            }

            switch(parseInt(this.props.activity))
            {
                
                case 3:
                case 4:
                    charts = [
                        <WrapItem><ActivityChart key={0} style={ `height='200px'` } data={this.state.activityData} lineKeys={['kills', 'deaths', 'assists']} lineKeyColors={['#82ca9d', '#EE0000', '#8884d8']} lineKeyLabels={["Kills", "Deaths", "Assists"]}/></WrapItem>,
                        <WrapItem><ActivityChart key={1} style={ `height='200px'` } data={this.state.activityData} lineKeys={['kdr', 'kdar', 'efficiency']} lineKeyColors={['#82ca9d', '#EE0000', '#8884d8']} lineKeyLabels={["K/D", "K/D/A", "Efficiency"]}/></WrapItem>,
                        <WrapItem><ActivityChart key={2} style={ `height='200px'` } data={this.state.activityData} lineKeys={['activityDurationSeconds']} lineKeyColors={['#82ca9d']} lineKeyLabels={["Duration (s)"]}/></WrapItem>
                    ]
                    break

                default:
                    charts = [
                        <WrapItem><ActivityChart key={0} style={ `height='200px'` } data={this.state.activityData} lineKeys={['kills', 'deaths', 'assists']} lineKeyColors={['#82ca9d', '#EE0000', '#8884d8']} lineKeyLabels={["Kills", "Deaths", "Assists"]}/></WrapItem>,
                        <WrapItem><ActivityChart key={1} style={ `height='200px'` } data={this.state.activityData} lineKeys={['kdr', 'kdar', 'efficiency']} lineKeyColors={['#82ca9d', '#EE0000', '#8884d8']} lineKeyLabels={["K/D", "K/D/A", "Efficiency"]}/></WrapItem>,
                        <WrapItem><ActivityChart key={2} style={ `height='200px'` } data={this.state.activityData} lineKeys={['score']} lineKeyColors={['#82ca9d']} lineKeyLabels={["Score"]}/></WrapItem>
                    ]
                    break
            }

            return (
                <Fade in>
                    <Wrap spacing={3} justify="center">
                        { charts }
                    </Wrap>
                    <Center>
                        <Text fontSize="2xl" my={3}>Activities List</Text>
                    </Center>
                    { activitiesList }
                </Fade>
            )
        }
    }
}

export default ActivityPanel