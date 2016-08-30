import React, { Component } from 'react';
import d3 from 'd3';

const fill = {
    fill: 'red'
}

export default class LinearGauge extends Component {
    static defaultProps = {
        width: '',
        height: ''
    }
    render() {
        return (
            <svg width={this.props.width} height={this.props.height}>
                <defs>
                    <linearGradient 
                        id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" spreadMethod="pad">
                        <stop offset="0%" stopColor="#c00" stopOpacity="1"></stop>
                        <stop offset="50%" stopColor="yellow" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="#0c0" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <g>
                    <rect x="0" y="0" width={this.props.width} height="100%" style={fill}></rect>
                </g>
            </svg>
        )
    }
}
