import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
//import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import './event-card.styles.css';
//import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 200,
  },
});

const EventCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Event xyz
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            orem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default EventCard;