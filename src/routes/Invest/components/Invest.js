import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { increment, doubleAsync } from '../modules/invest'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export class Invest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        hello invest
        <Button variant="contained" color="primary">
          Hello World
    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Invest)
