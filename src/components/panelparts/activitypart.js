import React from 'react'

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
        console.log(this.props.data)
    }

    render() {
        return (
            <p>Activity Part</p>
        )
    }
}

export default ActivityPart