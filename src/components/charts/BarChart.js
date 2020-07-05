import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true
        }]
    }
}

export default class BarChart extends Component {
    render() {
        return ( 
            <Bar 
                options = { options } 
                data = { this.props.data }
            />
        )
    }
}