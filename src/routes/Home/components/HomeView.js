import React, { Component } from 'react'
import { connect } from 'react-redux'
import { web3Connect } from '../../../store/web3Reducer'
import './HomeView.scss'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


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
        <div style={{float:'left', width: '50%'}}><img
          width="350px"
          alt='This is a duck, because Redux!'
          src={'https://source.unsplash.com/random'} /></div>
        <div style={{width:'50%', float: 'right'}}><form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>

        </form></div>
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
