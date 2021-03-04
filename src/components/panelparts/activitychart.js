import React from 'react'
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid,  } from 'recharts'

class ActivityChart extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = { }

        //This binding is necessary to make `this` work in the callback
        //this.register = this.register.bind(this)
    }

    componentDidMount()
    {
        //console.log(this.props.data)
    }

    render() {
        const lineList = []
        for (const [index, value] of this.props.lineKeys.entries())
        {
            lineList.push(<Line type="monotone" key={index} dataKey={value} stroke={this.props.lineKeyColors[index]} name={this.props.lineKeyLabels[index]} />)
        }

        return (
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={this.props.data}
                    margin={{
                        top: 5,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {lineList}
                </LineChart>
            </div>
        )
    }
}

export default ActivityChart