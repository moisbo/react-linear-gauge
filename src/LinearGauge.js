import React, { Component } from 'react';

const pointer = {
    fill: 'black',
    stroke: 'purple',
    strokeWidth: 1
}

export default class LinearGauge extends Component {
     defaultProps = {
        GWidth: 100,
        GHeight: 300,
        width: 0,
        height: 0,
        value: 0,
        max:100,
        min:0
    }

    calcPos(){
        var resultPos = (-this.props.value + this.props.max) * this.props.GHeight/this.props.max;
        console.log(`val:${this.props.value}, resultPos: ${resultPos}`);
        return resultPos
    }

    render() {
        return (
            <svg width={this.props.GWidth} height={this.props.GHeight}>
                <defs>
                    <linearGradient 
                        id="gradient" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad">
                        <stop offset="0%" stopColor="#c00" stopOpacity="1"></stop>
                        <stop offset="50%" stopColor="yellow" stopOpacity="1"></stop>
                        <stop offset="100%" stopColor="#0c0" stopOpacity="1"></stop>
                    </linearGradient>
                </defs>
                <g>
                    <rect x="0" y="0" width={this.props.width} height="100%" fill="url(#gradient)"></rect>
                </g>
                <g>
                    <line x1={this.props.width} y1={this.calcPos()} x2="0" y2={this.calcPos()} strokeWidth="3" stroke="black"></line>
                </g>
                <g>
                    <circle cx={this.props.width/2} cy={this.calcPos()} r="10"></circle>
                </g>
            </svg>
        )
    }
}
