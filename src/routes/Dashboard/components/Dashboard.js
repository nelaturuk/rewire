import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomChart from './customchart';
import ProjectTable from './projecttable';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.areaChart = {
            options: {
                fill : {
                    colors: ['#bdc758', '#bdc758', '#bdc758']
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    colors: ['#4caf50']
                },
                xaxis: {
                    label:'',
                    type: 'datetime',
                    categories: ["2018-05-19T00:00:00", "2018-06-19T01:30:00", "2018-07-19T02:30:00",
                        "2018-08-19T03:30:00", "2018-09-19T04:30:00", "2018-10-19T05:30:00",
                        "2018-11-19T06:30:00", "2018-12-19T06:30:00", "2019-01-19T06:30:00", "2019-02-19T06:30:00",
                        "2019-03-19T06:30:00", "2019-04-19T06:30:00", "2019-05-19T06:30:00"
                    ],
                },
                yaxis :{
                    show: true,
                    label:'kWh'
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            },
            series: [{
                name: 'Energy generation',
                data: [31, 40, 28, 51, 42, 109, 100, 72, 80, 60, 120, 59, 60]
            }],
        }

        this.radialChart = {
            options: {
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    colors: ['#bdc758', '#bdc758', '#bdc758'],
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: [' ']
            },
            series: [67],
        }

    }

    render() {

        const style = { "padding": "120px 0" }

        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Paper>
                            <Typography variant="h6" component="h1" className="pt-3">
                                Potential Bill Reduction
                            </Typography>
                            <CustomChart
                                data={this.radialChart}
                                type="radialBar"
                                height="350">
                            </CustomChart>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className="h-100">
                            <Typography variant="h6" component="h1" className="pt-3">
                                Current Month Dividend
                            </Typography>
                            <Typography variant="h3" component="p" style={style}>
                                23.3 ETH
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className="h-100">
                            <Typography variant="h6" component="h1" className="pt-3">
                                Total Investment Value 
                            </Typography>
                            <Typography variant="h3" component="p" style={style}>
                                104.8 ETH
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <CustomChart
                            data={this.areaChart}
                            type="area"
                            height="350">
                        </CustomChart>
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectTable></ProjectTable>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Dashboard;