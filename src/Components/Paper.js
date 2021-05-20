import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const useStylesPaper = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();
  const classes1 = useStylesTypography();
  const paperClass = useStylesPaper();

 
    const [apiData, setApiData] = useState();
  
    useEffect( () => {
      async function fetchData(){
        const url = "https://covid19.mathdro.id/api";
        //const {apiResponse} = await fetch(url);
        const response = await axios.get(url);
        setApiData(response);
        console.log(response);
        console.log(apiData);
        //console.log(response.data.confirmed.value)
  
      }
      fetchData();
    },[])




  return (
    <div className={classes.root, classes1.root, paperClass.root}>
      <Grid container spacing={3}>
            <Grid item xs={4} sm={4} className={classes.root}>
              <Paper className={paperClass.paper} elevation={3}>
           
                <Typography variant="h4" gutterBottom className={classes1.root} style={{color: "blue"}}>
                  {apiData && apiData.data && apiData.data.confirmed && apiData.data.confirmed.value}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={classes1.root} style={{color: "blue"}}>
                  Confirmed Cases
                </Typography>

              </Paper>
              
            </Grid>
            <Grid item xs={4} sm={4} className={classes.root}>
              <Paper className={paperClass.paper} elevation={3} >
              
                <Typography variant="h4" gutterBottom className={classes1.root} style={{color: "red"}}>
                  {apiData && apiData.data && apiData.data.deaths && apiData.data.deaths.value}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={classes1.root} style={{color: "red"}}>
                  Deaths
                </Typography>
              
              </Paper>
            </Grid>
            <Grid item xs={4} sm={4} className={classes.root}>
              <Paper className={paperClass.paper} elevation={3}>
     
                <Typography variant="h4" gutterBottom className={classes1.root} style={{color: "green"}}>
                  {apiData && apiData.data && apiData.data.recovered && apiData.data.recovered.value}
                </Typography>
                <Typography variant="subtitle2" gutterBottom className={classes1.root} style={{color: "green"}}>
                  Recovered
                </Typography>

              </Paper>

            </Grid>
      </Grid>
    </div>
  );
}