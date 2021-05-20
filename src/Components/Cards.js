import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from './Paper';
import Header from './Header';
import paper from '@material-ui/core/Paper';



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
      <Header />
      <Grid container spacing={3}>

        <Grid item xs={2} sm={3}>
        </Grid>

        <Grid item xs={8} sm={6}>
          <Paper/>
        </Grid>

        <Grid item xs={2} sm={3}>
        </Grid>

      </Grid>
      
    </div>
  );
}