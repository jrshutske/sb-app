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

export default function Home() {

    return (
      <React.Fragment>
        <Grid container  spacing={2} justify="center">
        <Link href={'/demo'} underline="none">
        <Grow in>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography  variant="h3">
                Demo
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <Typography  variant="">
                demo for stealthbits
              </Typography>
          </CardActions>
        </Card>
      </Grow>
        </Link>
          </Grid>
        </React.Fragment>
    );
}
