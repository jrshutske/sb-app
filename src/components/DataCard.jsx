import '../App.css';
import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import NumericLabel from 'react-pretty-numbers';
import Grow from "@material-ui/core/Grow";

const DataCard = (props) => {
  const { title, count, icon, onClick } = props;
  return (
    <Grid item xs={10} sm={8} md={5} lg={4}>
      <Grow in>
        <Card>
          <CardActionArea onClick={event => {onClick(event)}}>
            <CardContent>
              <Typography  variant="h3">
                {title && title}
              </Typography>
              <Icon style={{fontSize: 100}}>{icon && icon}</Icon>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h3" component="h2" >
              {count &&
              <NumericLabel params={{shortFormat:true}}>
                {count}
              </NumericLabel>}
            </Typography>
          </CardActions>
        </Card>
      </Grow>
    </Grid>
  );
}

export default DataCard;
