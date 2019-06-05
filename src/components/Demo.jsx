import '../App.css';
import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DemoTable from './DemoTable';
import DraggableDialog from './DraggableDialog';
import Icon from '@material-ui/core/Icon';
// import NumericLabel from 'react-pretty-numbers';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidFetch: null,
      computers: null,
      users: null,
      activeCard: null,
      columns: null,
      rowData: null,
      open: false,
    };
    this.loadDemoData = this.loadDemoData.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    fetch(`https://sb-backendapi.azurewebsites.net/api/Computers`)
      .then((res) => {
        if (res.status === 404) {
          this.setState({ invalidFetch: true });
          return false;
        }
        return res.json();
      })
      .then((data) => { data && this.setState({ computers: data }) })
      .catch((err) => console.error(err));

    fetch(`https://sb-backendapi.azurewebsites.net/api/Users`)
    .then((res) => {
      if (res.status === 404) {
        this.setState({ invalidFetch: true });
        return false;
      }
      return res.json();
    })
    .then((data) => { data && this.setState({ users: data }) })
    .catch((err) => console.error(err));
  }

  onComputersClick() {
    this.setState({ 
      activeCard: "Computers",
      columns: [
        { title: 'Display Name', field: 'displayname'  },
        { title: 'OS', field: 'os' },
        { title: 'OS Version', field: 'osVersion' },
      ] 
    }); 
  }

  onUsersClick() {
    this.setState({ 
      activeCard: "Users",
      columns:[
        { title: 'Display Name', field: 'displayname'  },
        { title: 'Email', field: 'email' },
        { title: 'Last Logon', field: 'lastLogon' },
      ] 
    });
  }

  loadDemoData(rowData) {
    this.setState({ 
      rowData: rowData,
      open: true,
    });
  }

  handleClose() {
    this.setState({ 
      open: false,
    });
  }

  render() {
    const { computers, users, activeCard, columns, rowData, open } = this.state;
    return (
      <React.Fragment>
        <Grid container  spacing={2} justify="center">
          <Grid item xs={5} sm={4} md={3} lg={2}>
            <Card>
              <CardActionArea onClick={event => {this.onComputersClick(event)}}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Computers
                  </Typography>
                  <Icon>computer</Icon>
                  <Typography gutterBottom variant="h5" component="h2">
                    {/* <NumericLabel params={{shortFormat:true}}> */}
                      {computers && computers.length}
                    {/* </NumericLabel> */}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={5} sm={4} md={3} lg={2}>
            <Card>
              <CardActionArea onClick={() => {this.onUsersClick()}}>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Users
                  </Typography>
                  <Icon>person</Icon>
                  <Typography gutterBottom variant="h5" component="h2">
                    {/* <NumericLabel params={{shortFormat:true}}> */}
                      {users && users.length}
                    {/* </NumericLabel> */}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <br/>
        { activeCard === "Computers" && 
          <DemoTable 
            columns={columns} 
            activeCard={activeCard} 
            data={computers}
            loadDemoData={this.loadDemoData}
          /> 
        }
        { activeCard === "Users" && 
          <DemoTable 
            columns={columns} 
            activeCard={activeCard} 
            data={users}
            loadDemoData={this.loadDemoData}
          /> 
        }
        { open && 
          <DraggableDialog 
            handleClose={this.handleClose} 
            open={open} 
            rowData={rowData}
          /> 
        }
      </React.Fragment>
    );
  }
}

export default Demo;
