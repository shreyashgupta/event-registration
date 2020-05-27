import React from 'react';
import './event-registration.styles.scss';
import { Grid, CardContent, Typography } from'@material-ui/core';

const EventRegistration = () =>{
    return(
        <div className="event-registration">
            <center><h1>EVENT REGISTRATION IS DONE IN THIS PAGE</h1></center>
            <Grid container className="grid-container">
                <Grid item className={`common-to-card total`}>
                <CardContent>
                    <Typography color='textPrimary'>Total Tickets : 100</Typography>
                    <Typography color='textPrimary'>For RV: 75</Typography>
                    <Typography color='textPrimary'>For Non-RV: 25</Typography>
                </CardContent>
                </Grid>
                <Grid item className={`common-to-card available`}>
                <CardContent>
                    <Typography color='textPrimary'>Available Tickets : 100</Typography>
                    <Typography color='textPrimary'>For RV: 75</Typography>
                    <Typography color='textPrimary'>For Non-RV: 25</Typography>
                </CardContent>
                </Grid>
                <Grid item className={`common-to-card sold`}>
                <CardContent>
                    <Typography color='textPrimary'>Sold Tickets : 100</Typography>
                    <Typography color='textPrimary'>For RV: 75</Typography>
                    <Typography color='textPrimary'>For Non-RV: 25</Typography>
                </CardContent>
                </Grid>
                <Grid item className={`common-to-card reserved`}>
                <CardContent>
                    <Typography color='textPrimary'>Reserved Tickets : 100</Typography>
                    <Typography color='textPrimary'>For RV: 5</Typography>
                    <Typography color='textPrimary'>For Non-RV: 5</Typography>
                </CardContent>
                </Grid>
            </Grid>
            <center><h3>CHOOSE AN EVENT TO KNOW THE TICKET STATS</h3></center>
            <center><p>After user chooses an event from drop-down menu, we update the ticket stats</p></center>
            <center><h3>FURTHER REGISTRATION PROCESS</h3></center>
        </div>
    )
}

export default EventRegistration;