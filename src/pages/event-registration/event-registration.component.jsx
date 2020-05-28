import React from 'react';
import './event-registration.styles.css';
import { Grid, CardContent, Typography } from'@material-ui/core';
import Eventcard from  '../../components/eventCard/Eventcard';

const EventRegistration = () =>{
    return(
        <div className="event-registration">
        <header>Trending Events</header>
        <div className='event-list'>
        <div><Eventcard/></div>
        <div><Eventcard/></div>
        <div><Eventcard/></div>
        <div><Eventcard/></div>
        <div><Eventcard/></div>
        <div><Eventcard/></div>
        </div>
        </div>
    )
}

export default EventRegistration;