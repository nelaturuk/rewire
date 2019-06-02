import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class CustomChart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { data, type, height } = this.props;

        return (
            <div id="chart">
                <Chart options={ data.options } series={ data.series } type={ type } height={ height } />
            </div>
        );
    }
}

export default CustomChart;