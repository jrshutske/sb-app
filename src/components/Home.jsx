import '../App.css';
import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Grow from '@material-ui/core/Grow';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";
import nature from '../nature.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: 800,
  },
  media: {
    minHeight: 200,
  },
});

export default function Home() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <Grid container spacing={2} justify="center">
          <Grow in>
            <Card className={classes.card}>
              <CardActionArea>
                <Link href="/demo" underline="none">
                  <CardMedia
                    className={classes.media}
                    image={nature}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography color="textSecondary">
                      A simple react and material ui demo for STEALTHbits.
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardActions>
                <Link href="https://github.com/jrshutske" target="_blank" underline="none">
                  <Button size="small" color="primary">
                    <FontAwesomeIcon icon={faCode} />
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grow>
        </Grid>
      </React.Fragment>
    );
}
