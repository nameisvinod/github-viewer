import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2'

const options={
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI
}
export default class DoughnutChart extends Component {
    render() {
        return (
            <Doughnut 
                options={options} 
                data={this.props.data}
            />
        )
    }
}

