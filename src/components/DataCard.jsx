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
import PropTypes from "prop-types";

const DataCard = (props) => {
  const { title, count, icon, onClick } = props;
  return (
    <Grid item spacing={5} xs={5} sm={3} md={2} lg={2}>
      <Grow in>
        <Card>
          <CardActionArea onClick={event => {onClick(event)}}>
            <CardContent>
              <Typography align="center" variant="h5">
                {title && title}
                <br/>
                <Icon style={{fontSize: 100}}>
                  {icon && icon}
                </Icon>
              </Typography >
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h5" >
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

DataCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

DataCard.defaultProps = {
  title: null,
  count: null,
  icon: null,
  onClick: null
};

export default DataCard;
