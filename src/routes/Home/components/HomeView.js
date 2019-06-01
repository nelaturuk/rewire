import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { web3Connect } from '../../../store/web3Reducer'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.web3Connect();
  }

  render() {
    return (
      <div>
        <h4>Welcome!</h4>
        <div>Connected to Web3 :  {JSON.stringify(this.props.web3Wrap.isConnected)}</div>
        <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
      </div>
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
