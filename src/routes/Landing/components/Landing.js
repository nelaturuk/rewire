import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BackgroundImg from '../assets/img.png';
import Style from '../assets/style.scss';

class Landing extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            "background-image": `url(${BackgroundImg})`,
            "height": "500px"
        };

        const TypoStyle = {
            "color": "seagreen",
            "font-size": "58px"
        };

        const BoxStyle = {
            "background": "#8bc34a59"
        };

        return (
            <div>
                <Grid container>
                    <Grid item xs={12} style={style} className="d-flex justify-content-end">
                        <Grid item xs={4} className="h-100" style={BoxStyle}>
                            <Typography variant="h3" component="h3" className="font-weight-bold mt-5 pt-5" style={TypoStyle}>
                                REWIRE
                            </Typography>
                            <Typography variant="span" component="span" className="font-weight-bold mt-3 pt-3" >
                                Individuals can invest shares of green infrastructure projects on this platform to reduce their essential living cost in retirement
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Landing;