import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import './card.css'
const useStyles = makeStyles({
  root: {
    width: 280,
  },
  media: {
    height: 200,
  },
});

const RegistrationCard = ({imageUrl,name,ph,emailId,numTickets,time,date}) => {
  const classes = useStyles();
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
          <Typography variant="body2" color="black" component="p">
          <div className="item"><p>Phone Number: </p><h4>{ph}</h4></div>
          <div className="item"><p>Email: </p><h4>{emailId}</h4></div>
          <div className="item"><p>Num Tickets: </p><h4>{numTickets}</h4></div>
          <div className="item"><p>Time: </p><h4>{time}</h4></div>
          <div className="item"><p>Date: </p><h4>{date}</h4></div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RegistrationCard;