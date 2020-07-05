import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'

const options={
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    responsive: true,
    aspectRatio: 1,
}

export default class LineChart extends Component {
    render() {
        return (
            <Line 
                options = { options } 
                data={this.props.data}
            />
        )
    }
}
