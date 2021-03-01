import React from 'react'
import { getActivityData } from '../utils/api'
import ActivityPart from './panelparts/activitypart'

class ActivityPanel extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = { activityData: {}, specificActivities: null }

        //This binding is necessary to make `this` work in the callback
        //this.setupActivityData = this.setupActivityData.bind(this)
    }

    componentDidMount()
    {
        getActivityData(this.props.bungieAcct, this.props.activity)
        .then((res) => {
            console.log(res.data)
            this.setState({ activityData: res.data} )
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if(!this.state.activityData.length)
        {
            return (
                <p>LOADING...</p>
            )
        }
        else
        {
            const activitiesList = []

            for (const [index, value] of this.state.activityData.entries())
            {
                activitiesList.push(<ActivityPart data={value}/>)
            }
            return (
                <div>
                    <p>Activity Panel</p>
                    {activitiesList}
                </div>
            )
        }
    }
}

export default ActivityPanel