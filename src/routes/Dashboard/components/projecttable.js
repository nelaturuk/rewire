import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, amount, percentage, dividend, date) {
  return { name, amount, percentage, dividend, date };
}

const rows = [
  createData('Eco Adventures', 159, 6.0, 4.0, "2019/03/19"),
  createData('Biome Body', 237, 9.0, 4.3, "2019/02/19"),
  createData('Earth Cycles', 262, 16.0, 6.0, "2018/10/09"),
  createData('Green Society', 305, 3.7, 4.3, "2018/02/27"),
  createData('Urban Jungle', 356, 16.0, 3.9, "2019/03/18"),
];

function ProjectTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project name</TableCell>
            <TableCell align="right">Invested Amount</TableCell>
            <TableCell align="right">Ownership Percentage&nbsp;(%)</TableCell>
            <TableCell align="right">Dividend Since Inception</TableCell>
            <TableCell align="right">Inception Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
              <TableCell align="right">{row.dividend}</TableCell>
              <TableCell align="right" className="text-secondary">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProjectTable;