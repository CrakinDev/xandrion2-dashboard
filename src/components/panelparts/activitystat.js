import { Box, Divider } from '@chakra-ui/react'
import React from 'react'

class ActivityStat extends React.Component {
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
    }

    render() {
        return (
            <div>
                <h1><b>{this.props.title}</b></h1>
                { this.props.decimal ? <p>{this.props.value.toFixed(2)}</p> : <p>{this.props.value}</p> }
            </div>
        )
    }
}

export default ActivityStat