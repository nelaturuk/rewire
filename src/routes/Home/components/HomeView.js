import React, { Component } from 'react'
import { connect } from 'react-redux'
import { web3Connect } from '../../../store/web3Reducer'
import './HomeView.scss'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { browserHistory } from 'react-router';
import LandingImage from '../assets/landing.jpg'



export class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.web3Connect();
  }

  handleClick = (e) => {
    e.preventDefault();
    browserHistory.push('/invest');
  }

  render() {
    return (
      <img
          alt='This is a duck, because Redux!'
          src={LandingImage}
          width="1450px" 
          onClick={this.handleClick}/>
    );
  }
}

// HomeView.propTypes = {
//   web3Connect: PropTypes.func.isRequired
// }

const mapStateToProps = (state) => ({
  web3Wrap: state.web3Wrap
})

const mapDispatchToProps = {
  web3Connect
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
