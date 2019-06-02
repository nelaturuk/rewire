import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { increment, doubleAsync } from '../modules/invest'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SolarJSON from '../../../tokens/solar.json';
import TranzJSON from '../../../tokens/tranz.json';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tx from 'ethereumjs-tx';
import * as Utils from 'web3-utils';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export class Invest extends Component {
  state = {
    solar: 0,
    tranz: 0,
    showTable: 'block',
    showForm: 'none',
    showInvestments: 'none',
    solarTokenAdd: '0x63667Fb85C2c1b52D6f4401990Ce27eFB16Ab05d',
    tranzTokenAdd: '0x20A802FbdCFb391B606b6078e30f9F47cE54851C',
    coinbase: '0xCfC1a1Dd9Dfc7c0EDb9d43f2a272BdF253514999',
    amount: 0,
    nonce: 0,
    gasLimit: Utils.toHex(3000000)
  }

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.getAccounts();
    web3.eth.getTransactionCount(this.state.coinbase, (err, txCount) => {
      this.setState({ nonce: txCount })
      console.log(this.state.nonce);
    });
  }

  getAccounts = () => {
    this.props.web3Wrap.web3.eth.getAccounts().then(res => {
      this.setState({ account: res[0], approved: res[2] })
      let coinbase = "0xCfC1a1Dd9Dfc7c0EDb9d43f2a272BdF253514999";
      let contract = web3.eth.contract(SolarJSON).at(this.state.solarTokenAdd);

      //Get solar tokens
      contract.balanceOf(coinbase, (error, balance) => {
        // Get decimals
        contract.decimals((error, decimals) => {
          // calculate a balance
          balance = balance.div(10 ** decimals);
          this.setState({ solar: balance.toString() })

        });
      });

      contract = web3.eth.contract(TranzJSON).at(this.state.tranzTokenAdd);
      //Get tranz tokens
      contract.balanceOf(coinbase, (error, balance) => {
        // Get decimals
        contract.decimals((error, decimals) => {
          // calculate a balance
          balance = balance.div(10 ** decimals);
          this.setState({ tranz: balance.toString() })
        });
      });
    });

    web3.eth.getTransactionCount(this.state.coinbase, function (err, txcount) {
      this.setState({ nonce: Utils.toHex(txcount + 1) })
    });
  }

  handleInvest = () => {
    this.setState({ showForm: 'block', showTable: 'none' });
  }

  handleInvestAmmount = (value) => {
    this.setState({ amount: 10 });
  }

  handleTransfer = () => {
    web3.eth.sendTransaction({
      to: this.state.coinbase,
      from: this.state.account,
      value: web3.toWei(0.1, "ether")
    }, function (err, transactionHash) {
      if (!err) {
        console.log(transactionHash);
      }
    });
    let coinbase = "0xCfC1a1Dd9Dfc7c0EDb9d43f2a272BdF253514999";
    let contract = web3.eth.contract(SolarJSON).at(this.state.solarTokenAdd);

    //Get solar tokens
    contract.transferFrom(coinbase, this.state.account, 1, (error, tx) => {
      console.log(tx)
    });
    this.setState({showForm:'none', showTable: 'none', showInvestments: 'block'});
  }

  render() {
    const { classes } = this.props;
    const { showTable, showForm, showInvestments } = this.state;

    return (
      <div>
        <div style={{ display: showTable }}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Project</TableCell>
                  <TableCell align="right">Token</TableCell>
                  <TableCell align="right">Available Shares</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Solar Token */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Community solar: McNab-Braeside</b>
                  </TableCell>
                  <TableCell align="right">SOLAR</TableCell>
                  <TableCell align="right">{this.state.solar}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={this.handleInvest}>
                      Invest
                  </Button>
                  </TableCell>
                </TableRow>

                {/* Tranz Token */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Smart city transportation project</b>
                  </TableCell>
                  <TableCell align="right">TRANZ</TableCell>
                  <TableCell align="right">{this.state.tranz}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" >
                      Invest
                  </Button>
                  </TableCell>
                </TableRow>

                {/* Medication Token */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Automatic Medication fulfillment infrastructure </b>
                  </TableCell>
                  <TableCell align="right">MED</TableCell>
                  <TableCell align="right">300</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" disabled >
                      Coming Soon
                  </Button>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </Paper>
        </div>
        <div style={{ display: showForm }}>
          <form noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="project"
              label="Project"
              name="project"
              autoComplete="project"
              autoFocus
              value="Community solar: McNab-Braeside"
              disabled
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="availableShares"
              label="Available Shares"
              name="availableshares"
              autoComplete="availableshares"
              autoFocus
              value={this.state.solar}
              disabled
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="investamount"
              label="Amount to Invest (in ETH)"
              name="investamount"
              autoComplete="0 ETH"
              autoFocus
              onChange={this.handleInvestAmmount}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleTransfer}
            >
              Buy Shares
          </Button>

          </form>
        </div>
        <div style={{ display: showInvestments }}>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Invest));
