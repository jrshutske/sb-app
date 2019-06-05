import '../App.css';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import DemoTable from './DemoTable';
import DataCard from './DataCard';
import DraggableDialog from './DraggableDialog';
import { ClipLoader } from 'react-spinners';

// import NumericLabel from 'react-pretty-numbers';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validFetch: false,
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
    let context = this;
    let getComputers = new Promise(function(resolve, reject) {
      fetch(`https://sb-backendapi.azurewebsites.net/api/Computers`)
        .then((res) => {
          if(res.status === 404 || !res) {reject('Resources do not exist')}
          resolve(res.json());
        }).catch((err) => console.error("Problem fetching computers:" + err));
    });
    
    let getUsers = new Promise(function(resolve, reject) {
      fetch(`https://sb-backendapi.azurewebsites.net/api/Users`)
        .then((res) => {
          if(res.status === 404 || !res) {reject('Resources do not exist')}
          resolve(res.json());
        }).catch((err) => console.error("Problem fetching users:" + err));
    });
    
    getComputers.then(function(computersData) {
      getUsers.then(function(usersData) {
        context.setState({
          computers: computersData,
          users: usersData,
          validFetch: true
        })
      }).catch((err) => console.error(err));
    }).catch((err) => console.error(err));
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
    const { computers, users, activeCard, columns, rowData, open, validFetch } = this.state;
    console.log('render')
    return (
      <React.Fragment>
        {validFetch 
          ? 
            <Grid container  spacing={2} justify="center">
              <DataCard
                title={"Computers"}
                icon={"computer"}
                count={computers.length}
                onClick={(e)=>this.onComputersClick(e)}
              />
              <DataCard
                title={"Users"}
                icon={"users"}
                count={users.length}
                onClick={(e)=>this.onUsersClick(e)}
              />
            </Grid>
          :
            <Grid container  spacing={2} justify="center">
              <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'white'}
                loading={!this.state.validFetch}
              />
            </Grid>
        }
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
    )
  }
}

export default Demo;
