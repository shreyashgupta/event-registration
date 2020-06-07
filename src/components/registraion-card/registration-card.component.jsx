import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import './registration-card.styles.css';
const useStyles = makeStyles({
  root: {
    width: 280,
  },
  media: {
    height: 200,
  },
});

const RegistrationCard = ({ imageUrl, name, ph, emailId,regId, numTickets, time, date,ticketIds}) => {
  const classes = useStyles();
  const tickets={ticketIds}.ticketIds;
  console.log(tickets)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="name">
            {name}
          </Typography>
          <div>

              {tickets.map((name) => (
              
              <div className="item"><p>TicketId/s: </p><h4>{name}</h4></div>
              ))}
            
            <div className="item"><p>Phone Number: </p><h4>{ph}</h4></div>
            <div className="item"><p>Email: </p><h4>{emailId}</h4></div>
            <div className="item"><p>Number of Tickets: </p><h4>{numTickets}</h4></div>
            <div className="item"><p>Time: </p><h4>{time}</h4></div>
            <div className="item"><p>Date: </p><h4>{date}</h4></div>
            
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RegistrationCard;