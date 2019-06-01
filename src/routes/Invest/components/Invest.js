import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { increment, doubleAsync } from '../modules/invest'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

export class Invest extends Component {
  state = {
    value: 0,
  };


  constructor(props) {
    super(props);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Tabs onChange={this.handleChange} value={value}>
            <Tab label="Dashboard" />
            <Tab label="Projects" />
            <Tab label="My Page" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>

        </TabContainer>}
        {value === 1 && <TabContainer>

        </TabContainer>}
        {value === 2 && <TabContainer>

          
        </TabContainer>}
      </div>
    )
  }
}

Invest.propTypes = {

}

const mapDispatchToProps = {
  increment: () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  web3Wrap: state.web3Wrap
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Invest))
