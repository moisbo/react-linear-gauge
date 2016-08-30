import React, { Component } from 'react';
import LinearGauge from './LinearGauge';

export default class App extends Component {
    render() {
        return (
            <div>
                <h3>Linear Gauge</h3>
                <LinearGauge height="300px" width="60px" />
            </div>
        )
    }
}
