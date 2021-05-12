import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Paper from './Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2} sm={3}>
          
        </Grid>
        <Grid item xs={8} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              first tile
            </Grid>
            <Grid item xs={4} sm={4}>
              Scond tile
            </Grid>
            <Grid item xs={4} sm={4}>
              third tile
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={3}>
          
        </Grid>
      </Grid>
      <Paper />
    </div>
  );
}