import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
//import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import './event-card.styles.css';
//import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: 250,
    height:320,
  },
  media: {
    height: 200,
    width:250,
  },
});

const EventCard = ({i,name,info}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={i}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventCard;