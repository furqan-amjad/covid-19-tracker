import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Paper from './Paper';
import {useEffect, useState} from 'react';

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

  const [apiData, setApiData] = useState();

  useEffect( () => {
    async function fetchData(){
      const url = "https://covid19.mathdro.id/api";
      const url1 = "https://randomuser.me/api/";
      const apiResponse = await fetch(url1);
      //console.log(apiResponse);
      const apiResponseData = await apiResponse.json();
      console.log(apiResponseData);
      setApiData(apiResponseData);
    }
    fetchData();
  },[])


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={2} sm={3}>
          Transparent Grid
        </Grid>

        <Grid item xs={8} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={4} sm={4}>
              <Paper>
                {apiData.results.Array.email}                
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper />
            </Grid>
            <Grid item xs={4} sm={4}>
              <Paper />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} sm={3}>
          Transparent Grid
        </Grid>

      </Grid>
      
    </div>
  );
}