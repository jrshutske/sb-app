import '../App.css';
import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

class DataCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {
    const { title, count, icon, onClick } = this.props;
    return (
      <Grid item xs={5} sm={4} md={3} lg={2}>
              <Card>
                <CardActionArea onClick={event => {onClick(event)}}>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {title}
                    </Typography>
                    <Icon>{icon}</Icon>
                    <Typography gutterBottom variant="h5" component="h2">
                      {/* <NumericLabel params={{shortFormat:true}}> */}
                        {count}
                      {/* </NumericLabel> */}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
    );
  }
}

export default DataCard;